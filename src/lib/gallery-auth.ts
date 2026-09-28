import { createHash, randomBytes, scrypt, timingSafeEqual } from "node:crypto";
import { getMongoDb } from "@/lib/mongodb";

export const gallerySessionCookie = "gallery_admin_session";
export const gallerySessionDuration = 60 * 60 * 8;

type AdminAccount = {
  username: string;
  salt: string;
  passwordHash: string;
  createdAt?: Date;
  isPrimary?: boolean;
};

type RegistrationResult = "created" | "exists" | "closed" | "not-configured";

export const adminUsernamePattern = /^[a-zA-Z0-9_.-]{3,32}$/;

export function constantTimeEquals(value: string, expected: string) {
  const valueBuffer = Buffer.from(value);
  const expectedBuffer = Buffer.from(expected);

  return valueBuffer.length === expectedBuffer.length && timingSafeEqual(valueBuffer, expectedBuffer);
}

function derivePasswordHash(password: string, salt: Buffer) {
  return new Promise<Buffer>((resolve, reject) => {
    scrypt(password, salt, 64, (error, derivedKey) => {
      if (error) reject(error);
      else resolve(Buffer.from(derivedKey));
    });
  });
}

async function readAdminAccount(username: string) {
  const database = await getMongoDb();
  if (!database) return null;

  return database.collection<AdminAccount>("admin").findOne(
    { username },
    { projection: { _id: 0, username: 1, salt: 1, passwordHash: 1 } },
  );
}

async function hasAdminAccount() {
  const database = await getMongoDb();
  if (!database) return false;

  return (await database.collection("admin").countDocuments({}, { limit: 1 })) > 0;
}

export async function isGalleryLoginConfigured() {
  if (!await getMongoDb()) return false;
  return hasAdminAccount();
}

export async function verifyGalleryAdminPassword(username: string, password: string) {
  const account = await readAdminAccount(username);
  if (!account) return false;

  const actualHash = await derivePasswordHash(password, Buffer.from(account.salt, "base64url"));
  return constantTimeEquals(actualHash.toString("base64url"), account.passwordHash);
}

export async function isGalleryRegistrationOpen() {
  if (!await getMongoDb()) return false;
  return !(await hasAdminAccount());
}

export async function registerFirstGalleryAdmin(username: string, password: string): Promise<RegistrationResult> {
  const database = await getMongoDb();
  if (!database) return "not-configured";

  const salt = randomBytes(16);
  const passwordHash = (await derivePasswordHash(password, salt)).toString("base64url");
  const admins = database.collection<AdminAccount>("admin");
  if (await admins.countDocuments({}, { limit: 1 })) return "closed";

  try {
    await admins.insertOne({
      username,
      salt: salt.toString("base64url"),
      passwordHash,
      isPrimary: true,
      createdAt: new Date(),
    });
    return "created";
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === 11000) {
      return await admins.findOne({ username }) ? "exists" : "closed";
    }
    throw error;
  }
}

export async function createGalleryAdmin(username: string, password: string): Promise<RegistrationResult> {
  const database = await getMongoDb();
  if (!database) return "not-configured";

  const salt = randomBytes(16);
  const passwordHash = (await derivePasswordHash(password, salt)).toString("base64url");
  try {
    await database.collection("admin").insertOne({
      username,
      salt: salt.toString("base64url"),
      passwordHash,
      createdAt: new Date(),
    });
    return "created";
  } catch (error) {
    if (error && typeof error === "object" && "code" in error && error.code === 11000) return "exists";
    throw error;
  }
}

export async function createGallerySessionToken() {
  const database = await getMongoDb();
  if (!database) return null;

  const token = randomBytes(32).toString("base64url");
  const tokenHash = createHash("sha256").update(token).digest("hex");
  const expiresAt = new Date(Date.now() + gallerySessionDuration * 1000);
  await database.collection("gallery_sessions").insertOne({ tokenHash, expiresAt, createdAt: new Date() });
  return token;
}

function getSessionToken(request: Request) {
  const cookieHeader = request.headers.get("cookie") ?? "";
  return cookieHeader
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${gallerySessionCookie}=`))
    ?.slice(gallerySessionCookie.length + 1);
}

export async function isGalleryAdmin(request: Request) {
  const token = getSessionToken(request);
  const database = await getMongoDb();
  if (!token || !database) return false;

  const tokenHash = createHash("sha256").update(token).digest("hex");
  const session = await database.collection("gallery_sessions").findOne({
    tokenHash,
    expiresAt: { $gt: new Date() },
  });
  return session !== null;
}

export async function revokeGallerySession(request: Request) {
  const token = getSessionToken(request);
  const database = await getMongoDb();
  if (!token || !database) return;

  const tokenHash = createHash("sha256").update(token).digest("hex");
  await database.collection("gallery_sessions").deleteOne({ tokenHash });
}

export function gallerySessionCookieHeader(value: string, maxAge: number) {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  return `${gallerySessionCookie}=${value}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${maxAge}${secure}`;
}