import {
  createGallerySessionToken,
  gallerySessionCookieHeader,
  gallerySessionDuration,
  isGalleryLoginConfigured,
  verifyGalleryAdminPassword,
} from "@/lib/gallery-auth";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (!(await isGalleryLoginConfigured())) {
    return Response.json({ error: "Admin login is not configured." }, { status: 503 });
  }

  const body = await request.json().catch(() => null);
  const username = body && typeof body.username === "string" ? body.username.trim() : "";
  const password = body && typeof body.password === "string" ? body.password : "";
  if (!(await verifyGalleryAdminPassword(username, password))) {
    return Response.json({ error: "Incorrect password." }, { status: 401 });
  }

  const token = await createGallerySessionToken();
  if (!token) return Response.json({ error: "MongoDB is not configured." }, { status: 503 });

  return Response.json(
    { authenticated: true },
    {
      headers: {
        "Cache-Control": "no-store",
        "Set-Cookie": gallerySessionCookieHeader(token, gallerySessionDuration),
      },
    },
  );
}