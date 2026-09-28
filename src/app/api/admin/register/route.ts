import {
  createGallerySessionToken,
  gallerySessionCookieHeader,
  gallerySessionDuration,
  isGalleryRegistrationOpen,
  registerFirstGalleryAdmin,
  adminUsernamePattern,
} from "@/lib/gallery-auth";
import { getMongoDb } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function GET() {
  const databaseConfigured = Boolean(process.env.MONGODB_URI);
  if (!databaseConfigured) {
    return Response.json(
      { registrationOpen: false, databaseConfigured: false, databaseConnected: false, error: "Set MONGODB_URI in .env.local." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }

  try {
    const database = await getMongoDb();
    if (!database) throw new Error("MongoDB is not configured.");
    await database.command({ ping: 1 });

    return Response.json(
      { registrationOpen: await isGalleryRegistrationOpen(), databaseConfigured: true, databaseConnected: true },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return Response.json(
      { registrationOpen: false, databaseConfigured: true, databaseConnected: false, error: "MongoDB connection failed. Check MONGODB_URI and Atlas Network Access." },
      { status: 503, headers: { "Cache-Control": "no-store" } },
    );
  }
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const username = body && typeof body.username === "string" ? body.username.trim() : "";
  const password = body && typeof body.password === "string" ? body.password : "";

  if (!adminUsernamePattern.test(username)) {
    return Response.json({ error: "Username must be 3 to 32 letters, numbers, dots, underscores, or hyphens." }, { status: 400 });
  }
  if (password.length < 12 || password.length > 128) {
    return Response.json({ error: "Password must be 12 to 128 characters long." }, { status: 400 });
  }

  const result = await registerFirstGalleryAdmin(username, password);
  if (result !== "created") {
    const status = result === "closed" || result === "exists" ? 409 : 503;
    const error = result === "closed"
      ? "Admin registration is already closed. Sign in or ask an admin to add your account."
      : result === "exists"
        ? "That username is already in use."
        : "MongoDB is not configured.";
    return Response.json({ error }, { status });
  }

  const token = await createGallerySessionToken();
  if (!token) return Response.json({ error: "MongoDB is not configured." }, { status: 503 });

  return Response.json(
    { registered: true },
    {
      status: 201,
      headers: {
        "Cache-Control": "no-store",
        "Set-Cookie": gallerySessionCookieHeader(token, gallerySessionDuration),
      },
    },
  );
}