import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://www.dargahsarwarnuoh.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d2a28",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dargah Makhdoom Sarwar Nooh | Hala, Sindh",
    template: "%s | Dargah Makhdoom Sarwar Nooh",
  },
  description:
    "Learn about Hazrat Makhdoom Sarwar Nooh, the Sufi saint of Hala, Sindh, his Sarwari order, shrine, Urs celebrations, and the living heritage of the dargah.",
  applicationName: "Dargah Makhdoom Sarwar Nooh",
  keywords: [
    "Dargah Makhdoom Sarwar Nooh",
    "Makhdoom Sarwar Nooh",
    "Makhdoom Nooh Hala",
    "Sarwari order",
    "Hala shrine Sindh",
    "Urs Mubarak Hala",
    "Sufi saint of Sindh",
    "Hazrat Makhdoom Sarwar Nooh",
    "Dargah Hala",
  ],
  authors: [{ name: "Dargah Makhdoom Sarwar Nooh" }],
  creator: "Dargah Makhdoom Sarwar Nooh",
  publisher: "Dargah Makhdoom Sarwar Nooh",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dargah Makhdoom Sarwar Nooh | Hala, Sindh",
    description:
      "The life, shrine, legacy, and Urs traditions of Hazrat Makhdoom Sarwar Nooh in Hala, Sindh.",
    url: siteUrl,
    siteName: "Dargah Makhdoom Sarwar Nooh",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero-bg.webp",
        width: 1600,
        height: 900,
        alt: "Dargah Makhdoom Sarwar Nooh, Hala Sindh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dargah Makhdoom Sarwar Nooh | Hala, Sindh",
    description:
      "Explore the legacy, shrine, and spiritual heritage of Hazrat Makhdoom Sarwar Nooh in Hala, Sindh.",
    images: ["/hero-bg.webp"],
  },
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
