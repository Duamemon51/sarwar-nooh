import { gallerySessionCookieHeader, isGalleryAdmin, revokeGallerySession } from "@/lib/gallery-auth";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  return Response.json(
    { authenticated: await isGalleryAdmin(request) },
    { headers: { "Cache-Control": "no-store" } },
  );
}

export async function DELETE(request: Request) {
  await revokeGallerySession(request);
  return Response.json(
    { authenticated: false },
    {
      headers: {
        "Cache-Control": "no-store",
        "Set-Cookie": gallerySessionCookieHeader("", 0),
      },
    },
  );
}