import { adminUsernamePattern, createGalleryAdmin, isGalleryAdmin } from "@/lib/gallery-auth";
import { getMongoDb } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (!(await isGalleryAdmin(request))) {
    return Response.json({ error: "Admin login required." }, { status: 401 });
  }

  const database = await getMongoDb();
  if (!database) return Response.json({ error: "MongoDB is not configured." }, { status: 503 });

  const admins = await database.collection("admin")
    .find({}, { projection: { username: 1, createdAt: 1 } })
    .sort({ createdAt: 1 })
    .toArray();
  return Response.json({
    admins: admins.map((admin) => ({
      id: admin._id.toString(),
      username: admin.username,
      createdAt: admin.createdAt,
    })),
  }, { headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  if (!(await isGalleryAdmin(request))) {
    return Response.json({ error: "Admin login required." }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const username = body && typeof body.username === "string" ? body.username.trim() : "";
  const password = body && typeof body.password === "string" ? body.password : "";

  if (!adminUsernamePattern.test(username)) {
    return Response.json({ error: "Username must be 3 to 32 letters, numbers, dots, underscores, or hyphens." }, { status: 400 });
  }
  if (password.length < 12 || password.length > 128) {
    return Response.json({ error: "Password must be 12 to 128 characters long." }, { status: 400 });
  }

  const result = await createGalleryAdmin(username, password);
  if (result !== "created") {
    const status = result === "exists" ? 409 : 503;
    const error = result === "exists" ? "That username is already in use." : "MongoDB is not configured.";
    return Response.json({ error }, { status });
  }

  return Response.json({ created: true }, { status: 201 });
}