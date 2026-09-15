import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Makhdoom Sarwar Nooh | Hala, Sindh (1506–1590)",
  description:
    "The life, lineage and legacy of Hazrat Makhdoom Sarwar Nooh — Sufi scholar of Hala, founder of the Sarwari order, and translator of the Qur'an into Persian.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Spectral:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Noto+Nastaliq+Urdu:wght@400;500;700&family=Noto+Sans+Arabic:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
