import { readdir, unlink } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import path from "node:path";
import { isGalleryAdmin } from "@/lib/gallery-auth";
import { getMongoDb } from "@/lib/mongodb";
import { Binary } from "mongodb";

export const dynamic = "force-dynamic";

const imageExtensions = new Set([".avif", ".gif", ".jpeg", ".jpg", ".png", ".webp"]);
const uploadTypes: Record<string, string> = {
  "image/avif": ".avif",
  "image/gif": ".gif",
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
};
const galleryCategories = new Set(["Dargah", "Urs Mubarak", "Architecture"]);
const maxUploadCount = 10;
const maxUploadSize = 10 * 1024 * 1024;
const maxBatchUploadSize = 50 * 1024 * 1024;

type GalleryImageDocument = {
  _id: string;
  title: string;
  category: string;
  featured?: boolean;
  mimeType: string;
  imageData: Binary;
  createdAt: Date;
};

function getCategory(filename: string) {
  const normalizedFilename = filename.toLowerCase();

  if (normalizedFilename.includes("urs")) return "Urs Mubarak";
  if (normalizedFilename.includes("architecture")) return "Architecture";
  return "Dargah";
}

function hasValidImageSignature(file: File, imageBuffer: Buffer) {
  return (
    (file.type === "image/jpeg" && imageBuffer.subarray(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff]))) ||
    (file.type === "image/png" && imageBuffer.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) ||
    (file.type === "image/webp" && imageBuffer.toString("ascii", 0, 4) === "RIFF" && imageBuffer.toString("ascii", 8, 12) === "WEBP") ||
    (file.type === "image/gif" && /^GIF8[79]a$/.test(imageBuffer.toString("ascii", 0, 6))) ||
    (file.type === "image/avif" && imageBuffer.toString("ascii", 4, 8) === "ftyp" && /^(?:avif|avis)$/.test(imageBuffer.toString("ascii", 8, 12)))
  );
}

export async function GET() {
  try {
    const database = await getMongoDb();
    if (database) {
      const uploadedImages = await database.collection<GalleryImageDocument>("gallery_images")
        .find({}, { projection: { title: 1, category: 1, featured: 1, createdAt: 1 } })
        .sort({ createdAt: -1 })
        .toArray();
      return Response.json({ images: uploadedImages.map((image) => ({
        src: `/api/gallery/image/${image._id}`,
        alt: image.title,
        category: image.category,
        featured: image.featured === true,
      })) });
    }

    const galleryDirectory = path.join(process.cwd(), "public", "gallery");
    const files = await readdir(galleryDirectory, { withFileTypes: true });
    const images = files
      .filter((file) => file.isFile() && imageExtensions.has(path.extname(file.name).toLowerCase()))
      .sort((first, second) => first.name.localeCompare(second.name, undefined, { numeric: true }))
      .map((file) => {
        const name = path.parse(file.name).name
          .replace(/-[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, "")
          .replace(/^(?:dargah|urs-mubarak|architecture)-/i, "");
        const title = name.replace(/[-_]+/g, " ");

        return {
          src: `/gallery/${encodeURIComponent(file.name)}`,
          alt: title,
          category: getCategory(file.name),
          featured: false,
        };
      });

    return Response.json({ images });
  } catch {
    return Response.json({ error: "Unable to load gallery images." }, { status: 500 });
  }
}

export async function POST(request: Request) {
  if (!(await isGalleryAdmin(request))) {
    return Response.json({ error: "Admin login required." }, { status: 401 });
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > maxBatchUploadSize + 1024 * 1024) {
    return Response.json({ error: "Keep the total upload under 50 MB." }, { status: 413 });
  }

  const formData = await request.formData();
  const entries = formData.getAll("files");
  const captions = formData.getAll("captions");
  const category = formData.get("category");

  if (entries.length === 0 || entries.length > maxUploadCount || !entries.every((entry) => entry instanceof File)) {
    return Response.json({ error: "Choose between 1 and 10 images." }, { status: 400 });
  }
  if (
    captions.length !== entries.length ||
    !captions.every((caption) => typeof caption === "string" && Boolean(caption.trim()) && caption.trim().length <= 80)
  ) {
    return Response.json({ error: "Add a caption under 80 characters for each image." }, { status: 400 });
  }
  if (typeof category !== "string" || !galleryCategories.has(category)) {
    return Response.json({ error: "Choose a valid gallery category." }, { status: 400 });
  }

  const files = entries as File[];
  if (files.some((file) => !uploadTypes[file.type] || file.size === 0 || file.size > maxUploadSize)) {
    return Response.json({ error: "Use supported images under 10 MB each." }, { status: 400 });
  }

  if (files.reduce((total, file) => total + file.size, 0) > maxBatchUploadSize) {
    return Response.json({ error: "Keep the total upload under 50 MB." }, { status: 413 });
  }

  const imageBuffers = await Promise.all(files.map(async (file) => Buffer.from(await file.arrayBuffer())));
  if (files.some((file, index) => !hasValidImageSignature(file, imageBuffers[index]))) {
    return Response.json({ error: "The uploaded file is not a valid image." }, { status: 400 });
  }

  const database = await getMongoDb();
  if (!database) {
    return Response.json({ error: "Set MONGODB_URI to enable gallery uploads." }, { status: 503 });
  }

  try {
    const images = files.map((file, index): GalleryImageDocument => ({
      _id: randomUUID(),
      title: (captions[index] as string).trim(),
      category,
      featured: false,
      mimeType: file.type,
      imageData: new Binary(imageBuffers[index]),
      createdAt: new Date(),
    }));
    await database.collection<GalleryImageDocument>("gallery_images").insertMany(images);

    return Response.json({
      images: images.map((image) => ({
        src: `/api/gallery/image/${image._id}`,
        alt: image.title,
        category: image.category,
      })),
    }, { status: 201 });
  } catch {
    return Response.json({ error: "Unable to save the uploaded image." }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  if (!(await isGalleryAdmin(request))) {
    return Response.json({ error: "Admin login required." }, { status: 401 });
  }

  const body: unknown = await request.json().catch(() => null);
  if (!body || typeof body !== "object" || !("src" in body) || typeof body.src !== "string") {
    return Response.json({ error: "Choose a valid gallery image." }, { status: 400 });
  }

  const imagePrefix = "/gallery/";
  if (!body.src.startsWith(imagePrefix)) {
    return Response.json({ error: "Choose a valid gallery image." }, { status: 400 });
  }

  let filename: string;
  try {
    filename = decodeURIComponent(body.src.slice(imagePrefix.length));
  } catch {
    return Response.json({ error: "Choose a valid gallery image." }, { status: 400 });
  }

  if (
    !filename ||
    filename !== path.basename(filename) ||
    body.src !== `${imagePrefix}${encodeURIComponent(filename)}` ||
    !imageExtensions.has(path.extname(filename).toLowerCase())
  ) {
    return Response.json({ error: "Choose a valid gallery image." }, { status: 400 });
  }

  try {
    await unlink(path.join(process.cwd(), "public", "gallery", filename));
    return Response.json({ deleted: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return Response.json({ error: "Image not found." }, { status: 404 });
    }
    return Response.json({ error: "Unable to delete gallery image." }, { status: 500 });
  }
}