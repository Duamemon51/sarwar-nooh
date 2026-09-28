import { MongoClient, type Db } from "mongodb";

type MongoGlobal = typeof globalThis & {
  galleryMongoClientPromise?: Promise<MongoClient>;
  galleryMongoDbPromise?: Promise<Db>;
};

const globalForMongo = globalThis as MongoGlobal;

export async function getMongoClient() {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;
  if (globalForMongo.galleryMongoClientPromise) return globalForMongo.galleryMongoClientPromise;

  const client = new MongoClient(uri);
  const clientPromise = client.connect().catch((error: unknown) => {
    if (globalForMongo.galleryMongoClientPromise === clientPromise) {
      globalForMongo.galleryMongoClientPromise = undefined;
    }
    throw error;
  });
  globalForMongo.galleryMongoClientPromise = clientPromise;
  return clientPromise;
}

export async function getMongoDb() {
  if (!process.env.MONGODB_URI) return null;
  if (globalForMongo.galleryMongoDbPromise) return globalForMongo.galleryMongoDbPromise;

  const databasePromise = (async () => {
    const client = await getMongoClient();
    if (!client) return null;

    const database = client.db();
    await Promise.all([
      database.collection("admin").createIndex({ username: 1 }, { unique: true }),
      database.collection("admin").createIndex(
        { isPrimary: 1 },
        { unique: true, partialFilterExpression: { isPrimary: true } },
      ),
      database.collection("gallery_sessions").createIndex({ tokenHash: 1 }, { unique: true }),
      database.collection("gallery_sessions").createIndex({ expiresAt: 1 }, { expireAfterSeconds: 0 }),
    ]);
    return database;
  })();

  const cachedPromise = databasePromise.catch((error: unknown) => {
    if (globalForMongo.galleryMongoDbPromise === cachedPromise) {
      globalForMongo.galleryMongoDbPromise = undefined;
    }
    throw error;
  });
  globalForMongo.galleryMongoDbPromise = cachedPromise;
  return cachedPromise;
}