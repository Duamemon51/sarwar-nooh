"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Eye, EyeOff, LoaderCircle, ShieldCheck } from "lucide-react";

type FormMode = "login" | "register";

type AuthResponse = {
  authenticated?: boolean;
  registrationOpen?: boolean;
  databaseConfigured?: boolean;
  databaseConnected?: boolean;
  error?: string;
};

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<FormMode>("login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [registrationOpen, setRegistrationOpen] = useState(false);
  const [databaseConfigured, setDatabaseConfigured] = useState(false);
  const [databaseConnected, setDatabaseConnected] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function checkAdminAccess() {
      try {
        const [sessionResponse, registrationResponse] = await Promise.all([
          fetch("/api/admin/session", { cache: "no-store", signal: controller.signal }),
          fetch("/api/admin/register", { cache: "no-store", signal: controller.signal }),
        ]);
        const [session, registration] = await Promise.all([
          sessionResponse.json() as Promise<AuthResponse>,
          registrationResponse.json() as Promise<AuthResponse>,
        ]);

        if (session.authenticated) {
          router.replace("/admin/gallery");
          return;
        }

        setRegistrationOpen(Boolean(registration.registrationOpen));
        setDatabaseConfigured(Boolean(registration.databaseConfigured));
        setDatabaseConnected(Boolean(registration.databaseConnected));
        if (registration.error) {
          setMessage(registration.error);
          setIsError(true);
        }
      } catch {
        if (!controller.signal.aborted) {
          setMessage("Could not connect to the admin service.");
          setIsError(true);
        }
      } finally {
        if (!controller.signal.aborted) setIsChecking(false);
      }
    }

    void checkAdminAccess();
    return () => controller.abort();
  }, [router]);

  async function submitCredentials(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    setIsError(false);

    if (mode === "register" && password !== confirmPassword) {
      setMessage("Passwords do not match.");
      setIsError(true);
      return;
    }

    setIsSubmitting(true);
    try {
      const endpoint = mode === "login" ? "/api/admin/login" : "/api/admin/register";
      const payload = { username, password };
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as AuthResponse;
      if (!response.ok) throw new Error(result.error ?? "Authentication failed.");

      router.replace("/admin/gallery");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Authentication failed.");
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f3ead9] px-4 py-10 text-[#211a14]">
      <div className="paper-grain pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <section className="relative w-full max-w-md overflow-hidden border border-[#1f5c57]/20 bg-[#fffdf8] shadow-[0_24px_70px_rgba(19,29,51,0.12)]">
        <div className="ajrak-band h-2" />
        <div className="px-6 py-8 sm:px-10 sm:py-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#1f5c57] hover:text-[#7c2a34]">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to site
          </Link>

          <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#c08a28]/40 bg-[#f3ead9] text-[#1f5c57]">
            <ShieldCheck className="h-6 w-6" aria-hidden="true" />
          </div>
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.14em] text-[#9b7837]">Gallery administration</p>
          <h1 className="mt-2 text-3xl font-semibold text-[#131d33]">
            {mode === "login" ? "Admin sign in" : "Create admin account"}
          </h1>
          <p className="mt-2 text-sm leading-6 text-[#211a14]/65">
            {mode === "login" ? "Sign in to manage shrine gallery photos." : "Set up the first administrator account."}
          </p>

          <div className="mt-6 grid grid-cols-2 border-b border-[#1f5c57]/15" role="tablist" aria-label="Admin access mode">
            {(["login", "register"] as const).map((item) => (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={mode === item}
                onClick={() => {
                  setMode(item);
                  setMessage("");
                  setIsError(false);
                }}
                className={`h-11 border-b-2 text-sm font-medium capitalize transition ${mode === item ? "border-[#1f5c57] text-[#1f5c57]" : "border-transparent text-[#211a14]/55 hover:text-[#211a14]"}`}
              >
                {item === "login" ? "Sign in" : "Register"}
              </button>
            ))}
          </div>

          {isChecking ? (
            <p className="mt-7 text-sm text-[#211a14]/60" role="status">Checking access...</p>
          ) : (
            <form onSubmit={submitCredentials} className="mt-7 grid gap-4">
              <label className="grid gap-2 text-sm font-medium">
                Admin username
                <input
                  type="text"
                  autoComplete="username"
                  minLength={3}
                  maxLength={32}
                  pattern="[A-Za-z0-9_.-]{3,32}"
                  required
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                  className="h-12 w-full rounded border border-[#1f5c57]/20 bg-white px-3 font-normal outline-none transition focus:border-[#c08a28] focus:ring-2 focus:ring-[#c08a28]/20"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium">
                Admin password
                <span className="relative block">
                  <input
                    type={showPassword ? "text" : "password"}
                    autoComplete={mode === "login" ? "current-password" : "new-password"}
                    minLength={mode === "register" ? 12 : undefined}
                    maxLength={128}
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="h-12 w-full rounded border border-[#1f5c57]/20 bg-white px-3 pr-12 font-normal outline-none transition focus:border-[#c08a28] focus:ring-2 focus:ring-[#c08a28]/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((visible) => !visible)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-[#211a14]/50 hover:text-[#1f5c57]"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </span>
              </label>

              {mode === "register" && (
                <label className="grid gap-2 text-sm font-medium">
                  Confirm password
                  <input
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    minLength={12}
                    maxLength={128}
                    required
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    className="h-12 w-full rounded border border-[#1f5c57]/20 bg-white px-3 font-normal outline-none transition focus:border-[#c08a28] focus:ring-2 focus:ring-[#c08a28]/20"
                  />
                </label>
              )}

              <button
                type="submit"
                disabled={isSubmitting || isChecking || (mode === "register" && !registrationOpen)}
                className="mt-2 inline-flex h-12 items-center justify-center gap-2 rounded bg-[#1f5c57] px-5 text-sm font-semibold text-white transition hover:bg-[#174943] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#c08a28] disabled:cursor-wait disabled:opacity-60"
              >
                {isSubmitting && <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />}
                {isSubmitting ? "Please wait..." : mode === "login" ? "Sign in" : "Create admin account"}
              </button>

              {mode === "register" && !registrationOpen && (
                <p role="status" className="border-l-2 border-[#c08a28] bg-[#c08a28]/10 px-3 py-2 text-sm text-[#6f531f]">
                  {!databaseConfigured
                    ? "Set MONGODB_URI in .env.local to connect MongoDB."
                    : !databaseConnected
                      ? "MongoDB is unreachable. Check MONGODB_URI and Atlas Network Access."
                      : "An admin account already exists. Sign in instead."}
                </p>
              )}

              {message && (
                <p role={isError ? "alert" : "status"} className={`border-l-2 px-3 py-2 text-sm ${isError ? "border-[#7c2a34] bg-[#7c2a34]/5 text-[#7c2a34]" : "border-[#1f5c57] bg-[#1f5c57]/5 text-[#1f5c57]"}`}>
                  {message}
                </p>
              )}
            </form>
          )}
        </div>
      </section>
    </main>
  );
}