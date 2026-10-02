"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ImagePlus, LogOut, Save, Trash2, Upload } from "lucide-react";

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
  featured?: boolean;
};

type PendingUpload = {
  file: File;
  caption: string;
};

type ApiResult = {
  error?: string;
  authenticated?: boolean;
  images?: GalleryImage[];
};

const categories = ["Dargah", "Urs Mubarak", "Architecture"];

export default function GalleryAdminPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [category, setCategory] = useState(categories[0]);
  const [uploads, setUploads] = useState<PendingUpload[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [deletingImageSrc, setDeletingImageSrc] = useState<string | null>(null);
  const [captionDrafts, setCaptionDrafts] = useState<Record<string, string>>({});
  const [savingCaptionSrc, setSavingCaptionSrc] = useState<string | null>(null);
  const [savingFeaturedSrc, setSavingFeaturedSrc] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  async function refreshImages() {
    const response = await fetch("/api/gallery", { cache: "no-store" });
    if (!response.ok) throw new Error("Could not load gallery images.");
    const data = (await response.json()) as ApiResult;
    setImages(data.images ?? []);
  }

  useEffect(() => {
    const controller = new AbortController();

    async function checkSession() {
      try {
        const response = await fetch("/api/admin/session", {
          signal: controller.signal,
          cache: "no-store",
        });
        const session = (await response.json()) as ApiResult;
        if (!session.authenticated) return;

        setIsAuthenticated(true);
        await refreshImages();
      } catch {
        if (!controller.signal.aborted) {
          setIsError(true);
          setMessage("Could not connect to the gallery service.");
        }
      } finally {
        if (!controller.signal.aborted) setIsCheckingSession(false);
      }
    }

    void checkSession();
    return () => controller.abort();
  }, []);

  async function logout() {
    await fetch("/api/admin/session", { method: "DELETE" });
    setIsAuthenticated(false);
    setImages([]);
    setMessage("");
  }

  async function uploadImage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (uploads.length === 0) {
      setIsError(true);
      setMessage("Choose images to upload.");
      return;
    }

    setIsUploading(true);
    setMessage("");
    const formData = new FormData();
    uploads.forEach(({ file, caption }) => {
      formData.append("files", file);
      formData.append("captions", caption);
    });
    formData.set("category", category);

    try {
      const response = await fetch("/api/gallery", { method: "POST", body: formData });
      const result = (await response.json()) as ApiResult;
      if (response.status === 401) setIsAuthenticated(false);
      if (!response.ok) throw new Error(result.error ?? "Upload failed.");

      await refreshImages();
      const uploadedCount = result.images?.length ?? uploads.length;
      setUploads([]);
      form.reset();
      setIsError(false);
      setMessage(`${uploadedCount} image${uploadedCount === 1 ? "" : "s"} added to the gallery.`);
    } catch (error) {
      setIsError(true);
      setMessage(error instanceof Error ? error.message : "Upload failed.");
    } finally {
      setIsUploading(false);
    }
  }

  async function deleteImage(image: GalleryImage) {
    if (!window.confirm(`Delete "${image.alt}" from the gallery?`)) return;

    setDeletingImageSrc(image.src);
    setMessage("");
    try {
      const isDatabaseImage = image.src.startsWith("/api/gallery/image/");
      const response = await fetch(isDatabaseImage ? image.src : "/api/gallery", {
        method: "DELETE",
        ...(isDatabaseImage ? {} : {
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ src: image.src }),
        }),
      });
      const result = (await response.json()) as ApiResult;
      if (response.status === 401) setIsAuthenticated(false);
      if (!response.ok) throw new Error(result.error ?? "Could not delete image.");

      setImages((currentImages) => currentImages.filter((item) => item.src !== image.src));
      setIsError(false);
      setMessage("Image deleted from the gallery.");
    } catch (error) {
      setIsError(true);
      setMessage(error instanceof Error ? error.message : "Could not delete image.");
    } finally {
      setDeletingImageSrc(null);
    }
  }

  async function saveCaption(image: GalleryImage) {
    const caption = (captionDrafts[image.src] ?? image.alt).trim();
    if (!caption || caption.length > 80) {
      setIsError(true);
      setMessage("Caption must be between 1 and 80 characters.");
      return;
    }

    setSavingCaptionSrc(image.src);
    setMessage("");
    try {
      const response = await fetch(image.src, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ caption }),
      });
      const result = (await response.json()) as ApiResult;
      if (response.status === 401) setIsAuthenticated(false);
      if (!response.ok) throw new Error(result.error ?? "Could not update caption.");

      setImages((currentImages) => currentImages.map((item) => (
        item.src === image.src ? { ...item, alt: caption } : item
      )));
      setCaptionDrafts((current) => {
        const next = { ...current };
        delete next[image.src];
        return next;
      });
      setIsError(false);
      setMessage("Caption updated.");
    } catch (error) {
      setIsError(true);
      setMessage(error instanceof Error ? error.message : "Could not update caption.");
    } finally {
      setSavingCaptionSrc(null);
    }
  }

  async function saveFeatured(image: GalleryImage, featured: boolean) {
    setSavingFeaturedSrc(image.src);
    setMessage("");
    try {
      const response = await fetch(image.src, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ featured }),
      });
      const result = (await response.json()) as ApiResult;
      if (response.status === 401) setIsAuthenticated(false);
      if (!response.ok) throw new Error(result.error ?? "Could not update homepage feature.");

      setImages((currentImages) => currentImages.map((item) => (
        item.src === image.src ? { ...item, featured } : item
      )));
      setIsError(false);
      setMessage(featured ? "Photo added to the homepage gallery." : "Photo removed from the homepage gallery.");
    } catch (error) {
      setIsError(true);
      setMessage(error instanceof Error ? error.message : "Could not update homepage feature.");
    } finally {
      setSavingFeaturedSrc(null);
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f5ef] text-[#1c2b28]">
      <header className="border-b border-[#0d2a28]/15 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9b7837]">Sarwar-e-Nooh</p>
            <h1 className="mt-1 text-xl font-semibold">Gallery administration</h1>
          </div>
          <div className="flex items-center gap-4">
            {isAuthenticated && (
              <button type="button" onClick={logout} aria-label="Sign out" title="Sign out" className="inline-flex h-9 w-9 items-center justify-center border border-[#0d2a28]/15 hover:border-[#9b7837]">
                <LogOut className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
            <Link href="/gallery" className="inline-flex items-center gap-2 text-sm text-[#1c2b28]/70 hover:text-[#0d2a28]">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              View gallery
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-8 sm:px-8 sm:py-10">
        {isCheckingSession ? (
          <p className="py-14 text-center text-sm text-[#1c2b28]/60" role="status">Checking admin session...</p>
        ) : !isAuthenticated ? (
          <section className="mx-auto max-w-md py-8 text-center">
            <p className="text-sm text-[#9b7837]">ADMIN ACCESS</p>
            <h2 className="mt-2 text-2xl font-semibold">Sign in to manage photos</h2>
            <Link href="/login" className="mt-5 inline-flex h-10 items-center rounded bg-[#0d2a28] px-5 text-sm font-medium text-white transition hover:bg-[#16413c]">
              Open admin login
            </Link>
          </section>
        ) : (
          <>
            <section aria-labelledby="upload-heading" className="border-b border-[#0d2a28]/15 pb-8">
              <h2 id="upload-heading" className="flex items-center gap-2 text-lg font-semibold">
                <ImagePlus className="h-5 w-5 text-[#9b7837]" aria-hidden="true" />
                Add a photo
              </h2>

              <form onSubmit={uploadImage} className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <label className="grid gap-1.5 text-sm font-medium">
                  Category
                  <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className="h-11 rounded border border-[#0d2a28]/20 bg-white px-3 font-normal outline-none focus:border-[#9b7837]"
                  >
                    {categories.map((item) => <option key={item}>{item}</option>)}
                  </select>
                </label>

                <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">
                  Image files
                  <input
                    type="file"
                    accept="image/avif,image/gif,image/jpeg,image/png,image/webp"
                    multiple
                    required
                    onChange={(event) => setUploads(Array.from(event.target.files ?? [], (file) => ({
                      file,
                      caption: file.name.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " "),
                    })))}
                    className="h-11 w-full rounded border border-[#0d2a28]/20 bg-white text-sm file:mr-3 file:h-full file:border-0 file:border-r file:border-[#0d2a28]/15 file:bg-[#0d2a28]/5 file:px-3 file:text-[#1c2b28]"
                  />
                  <span className="text-xs font-normal text-[#1c2b28]/60" aria-live="polite">
                    {uploads.length === 0 ? "No images selected" : `${uploads.length} image${uploads.length === 1 ? "" : "s"} selected`}
                  </span>
                </label>

                {uploads.length > 0 && (
                  <div className="grid gap-3 sm:col-span-2 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
                    {uploads.map((upload, index) => (
                      <label key={`${upload.file.name}-${upload.file.lastModified}-${index}`} className="grid min-w-0 gap-1.5 text-xs font-medium">
                        <span className="truncate" title={upload.file.name}>{upload.file.name}</span>
                        <input
                          type="text"
                          required
                          maxLength={80}
                          aria-label={`Caption for ${upload.file.name}`}
                          value={upload.caption}
                          onChange={(event) => setUploads((current) => current.map((item, itemIndex) => (
                            itemIndex === index ? { ...item, caption: event.target.value } : item
                          )))}
                          className="h-10 rounded border border-[#0d2a28]/20 bg-white px-3 text-sm font-normal outline-none focus:border-[#9b7837]"
                        />
                      </label>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap items-center gap-4 sm:col-span-2 lg:col-span-4">
                  <button
                    type="submit"
                    disabled={isUploading}
                    className="inline-flex h-10 items-center gap-2 rounded bg-[#0d2a28] px-4 text-sm font-medium text-white transition hover:bg-[#16413c] disabled:cursor-wait disabled:opacity-60"
                  >
                    <Upload className="h-4 w-4" aria-hidden="true" />
                    {isUploading ? "Uploading..." : "Upload photo"}
                  </button>
                  <p className="text-xs text-[#1c2b28]/60">Up to 10 images; 10 MB each, 50 MB total. Titles use filenames.</p>
                  {message && <p role={isError ? "alert" : "status"} className={`text-sm ${isError ? "text-red-700" : "text-[#246047]"}`}>{message}</p>}
                </div>
              </form>
            </section>

            <section aria-labelledby="images-heading" className="pt-7">
              <div className="flex items-baseline justify-between gap-4">
                <h2 id="images-heading" className="text-lg font-semibold">Gallery photos</h2>
                <p className="text-sm text-[#1c2b28]/60">{images.length} photos</p>
              </div>
              {images.length === 0 ? (
                <p className="py-12 text-center text-sm text-[#1c2b28]/60">No gallery photos found.</p>
              ) : (
                <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {images.map((image) => (
                    <li key={image.src} className="min-w-0 border border-[#0d2a28]/10 bg-white">
                      <div className="relative aspect-square bg-[#0d2a28]/5">
                        <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw" />
                      </div>
                      <div className="p-2.5">
                        <form
                          onSubmit={(event) => {
                            event.preventDefault();
                            void saveCaption(image);
                          }}
                          className="flex min-w-0 gap-1.5"
                        >
                          <input
                            type="text"
                            required
                            maxLength={80}
                            aria-label={`Caption for ${image.alt}`}
                            value={captionDrafts[image.src] ?? image.alt}
                            onChange={(event) => setCaptionDrafts((current) => ({
                              ...current,
                              [image.src]: event.target.value,
                            }))}
                            className="h-8 min-w-0 flex-1 border border-[#0d2a28]/15 bg-white px-2 text-sm font-medium outline-none focus:border-[#9b7837]"
                          />
                          <button
                            type="submit"
                            disabled={savingCaptionSrc !== null || (captionDrafts[image.src] ?? image.alt).trim() === image.alt}
                            aria-label={`Save caption for ${image.alt}`}
                            title="Save caption"
                            className="inline-flex h-8 w-8 shrink-0 items-center justify-center border border-[#0d2a28]/15 text-[#1c2b28] hover:border-[#9b7837] disabled:cursor-not-allowed disabled:opacity-40"
                          >
                            <Save className="h-4 w-4" aria-hidden="true" />
                          </button>
                        </form>
                        <p className="mt-1 text-xs text-[#1c2b28]/60">{image.category}</p>
                        <label className="mt-2 flex cursor-pointer items-center gap-2 text-xs text-[#1c2b28]/75">
                          <input
                            type="checkbox"
                            checked={image.featured === true}
                            disabled={savingFeaturedSrc !== null}
                            onChange={(event) => void saveFeatured(image, event.target.checked)}
                            className="h-4 w-4 accent-[#0d2a28]"
                          />
                          Show on homepage
                        </label>
                        <button
                          type="button"
                          onClick={() => void deleteImage(image)}
                          disabled={deletingImageSrc === image.src}
                          aria-label={`Delete ${image.alt}`}
                          title="Delete image"
                          className="mt-2 inline-flex h-8 w-8 items-center justify-center border border-red-700/20 text-red-700 transition hover:bg-red-50 disabled:cursor-wait disabled:opacity-50"
                        >
                          <Trash2 className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          </>
        )}
      </div>
    </main>
  );
}