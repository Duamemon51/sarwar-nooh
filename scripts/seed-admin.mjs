import crypto from "node:crypto";
import { promisify } from "node:util";
import nextEnv from "@next/env";
import { MongoClient } from "mongodb";

const { loadEnvConfig } = nextEnv;
loadEnvConfig(process.cwd());

const scrypt = promisify(crypto.scrypt);
const username = process.env.SEED_ADMIN_USERNAME;
const password = process.env.SEED_ADMIN_PASSWORD;

if (!process.env.MONGODB_URI || !username || !password) {
  console.error("Set MONGODB_URI, SEED_ADMIN_USERNAME, and SEED_ADMIN_PASSWORD.");
  process.exit(1);
}

async function seedAdmin() {
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    const admins = client.db().collection("admin");
    await admins.createIndex({ username: 1 }, { unique: true });
    await admins.createIndex(
      { isPrimary: 1 },
      { unique: true, partialFilterExpression: { isPrimary: true } },
    );

    if (await admins.findOne({ username }, { projection: { _id: 1 } })) {
      console.log("SEED_EXISTS");
      return;
    }

    const salt = crypto.randomBytes(16);
    const passwordHash = (await scrypt(password, salt, 64)).toString("base64url");
    const isPrimary = (await admins.countDocuments({}, { limit: 1 })) === 0;
    await admins.insertOne({
      username,
      salt: salt.toString("base64url"),
      passwordHash,
      isPrimary,
      createdAt: new Date(),
    });
    console.log("SEED_CREATED");
  } finally {
    await client.close();
  }
}

seedAdmin().catch((error) => {
  console.error(`SEED_FAILED: ${error.code || error.name || "Unknown error"}`);
  process.exit(1);
});