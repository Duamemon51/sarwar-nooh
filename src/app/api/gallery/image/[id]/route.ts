import { isGalleryAdmin } from "@/lib/gallery-auth";
import { getMongoDb } from "@/lib/mongodb";
import { Binary } from "mongodb";

export const dynamic = "force-dynamic";

type GalleryImageDocument = {
  _id: string;
  mimeType: string;
  imageData: Binary;
};

export async function GET(_request: Request, context: RouteContext<"/api/gallery/image/[id]">) {
  const { id } = await context.params;
  if (!/^[0-9a-f-]{36}$/i.test(id)) {
    return Response.json({ error: "Image not found." }, { status: 404 });
  }

  const database = await getMongoDb();
  if (!database) return Response.json({ error: "MongoDB is not configured." }, { status: 503 });

  try {
    const image = await database.collection<GalleryImageDocument>("gallery_images").findOne(
      { _id: id },
      { projection: { mimeType: 1, imageData: 1 } },
    );
    if (!image) return Response.json({ error: "Image not found." }, { status: 404 });

    return new Response(new Uint8Array(image.imageData.value()), {
      headers: {
        "Content-Type": image.mimeType,
        "Cache-Control": "public, max-age=31536000, immutable",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch {
    return Response.json({ error: "Unable to load gallery image." }, { status: 503 });
  }
}

export async function PATCH(request: Request, context: RouteContext<"/api/gallery/image/[id]">) {
  if (!(await isGalleryAdmin(request))) {
    return Response.json({ error: "Admin login required." }, { status: 401 });
  }

  const { id } = await context.params;
  if (!/^[0-9a-f-]{36}$/i.test(id)) {
    return Response.json({ error: "Image not found." }, { status: 404 });
  }

  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return Response.json({ error: "Choose valid image details to update." }, { status: 400 });
  }

  const updates: { title?: string; featured?: boolean } = {};
  if ("caption" in body) {
    const caption = typeof body.caption === "string" ? body.caption.trim() : "";
    if (!caption || caption.length > 80) {
      return Response.json({ error: "Caption must be between 1 and 80 characters." }, { status: 400 });
    }
    updates.title = caption;
  }
  if ("featured" in body) {
    if (typeof body.featured !== "boolean") {
      return Response.json({ error: "Featured status must be true or false." }, { status: 400 });
    }
    updates.featured = body.featured;
  }
  if (Object.keys(updates).length === 0) {
    return Response.json({ error: "Caption must be between 1 and 80 characters." }, { status: 400 });
  }

  const database = await getMongoDb();
  if (!database) return Response.json({ error: "MongoDB is not configured." }, { status: 503 });

  try {
    const result = await database.collection<GalleryImageDocument>("gallery_images").updateOne(
      { _id: id },
      { $set: updates },
    );
    if (result.matchedCount === 0) return Response.json({ error: "Image not found." }, { status: 404 });

    return Response.json({ caption: updates.title, featured: updates.featured });
  } catch {
    return Response.json({ error: "Unable to update image details." }, { status: 503 });
  }
}

export async function DELETE(request: Request, context: RouteContext<"/api/gallery/image/[id]">) {
  if (!(await isGalleryAdmin(request))) {
    return Response.json({ error: "Admin login required." }, { status: 401 });
  }

  const { id } = await context.params;
  if (!/^[0-9a-f-]{36}$/i.test(id)) {
    return Response.json({ error: "Image not found." }, { status: 404 });
  }

  const database = await getMongoDb();
  if (!database) return Response.json({ error: "MongoDB is not configured." }, { status: 503 });

  try {
    const result = await database.collection<GalleryImageDocument>("gallery_images").deleteOne({ _id: id });
    if (result.deletedCount === 0) return Response.json({ error: "Image not found." }, { status: 404 });

    return Response.json({ deleted: true });
  } catch {
    return Response.json({ error: "Unable to delete gallery image." }, { status: 503 });
  }
}