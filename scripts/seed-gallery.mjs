import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import nextEnv from "@next/env";
import { Binary, MongoClient } from "mongodb";

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());

const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  console.error("Set MONGODB_URI to seed gallery images.");
  process.exit(1);
}

const imageMimeTypes = {
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};
function getImageId(filename) {
  const hex = crypto.createHash("sha256").update(`static-gallery:${filename}`).digest("hex").slice(0, 32);
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

function getTitle(filename) {
  return path.parse(filename).name
    .replace(/-[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i, "")
    .replace(/^(?:dargah|urs-mubarak|architecture)-/i, "")
    .replace(/[-_]+/g, " ");
}

function getCategory(filename) {
  const normalizedFilename = filename.toLowerCase();
  if (normalizedFilename.includes("urs")) return "Urs Mubarak";
  if (normalizedFilename.includes("architecture")) return "Architecture";
  return "Dargah";
}

async function seedGallery() {
  const client = new MongoClient(mongoUri);

  try {
    await client.connect();
    const galleryImages = client.db().collection("gallery_images");
    const galleryDirectory = path.join(import.meta.dirname, "..", "public", "gallery");
    const filenames = fs.readdirSync(galleryDirectory)
      .filter((filename) => imageMimeTypes[path.extname(filename).toLowerCase()])
      .sort((first, second) => first.localeCompare(second, undefined, { numeric: true }));
    let inserted = 0;
    let alreadySeeded = 0;

    for (const filename of filenames) {
      const mimeType = imageMimeTypes[path.extname(filename).toLowerCase()];
      const imageData = fs.readFileSync(path.join(galleryDirectory, filename));
      const result = await galleryImages.updateOne(
        { _id: getImageId(filename) },
        {
          $setOnInsert: {
            title: getTitle(filename),
            category: getCategory(filename),
            mimeType,
            imageData: new Binary(imageData),
            createdAt: new Date(),
          },
        },
        { upsert: true },
      );

      if (result.upsertedCount > 0) {
        inserted += 1;
      } else {
        alreadySeeded += 1;
      }
    }

    const databaseRows = await galleryImages.countDocuments();
    console.log(`SEED_COMPLETE inserted=${inserted} alreadySeeded=${alreadySeeded} databaseRows=${databaseRows}`);
  } finally {
    await client.close();
  }
}

seedGallery().catch((error) => {
  console.error(`SEED_FAILED: ${error.code || error.name || "Unknown error"}`);
  process.exit(1);
});