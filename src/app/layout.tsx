import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL("https://bykouskidigital.cz"),
  title:
    "Web Studio Bykouski Aliaksandr | Tvorba webových stránek na míru | Česká republika",
  description:
    "Profesionální služby vývoje webových stránek na míru vašim potřebám. Specializuji se na výrobu webů v České republice.",
  keywords:
    "web development, tvorba webových stránek, webové stránky, aplikace, Česká republika, Praha, Next.js, React, CSS, JavaScript, portfolio, služby, bykouski, bykouskidigital",
  authors: [{ name: "Aliaksandr Bykouski" }],
  creator: "Aliaksandr Bykouski",
  publisher: "Aliaksandr Bykouski",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    title:
      "Web Studio Bykouski Aliaksandr | Tvorba webových stránek na míru | Česká republika",
    description:
      "Profesionální služby vývoje webových stránek na míru vašim potřebám.",
    url: "https://bykouskidigital.cz",
    siteName: "Web Studio Bykouski Aliaksandr",
    type: "website",
    locale: "cs_CZ",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Web Studio Bykouski Aliaksandr",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bykouski",
    creator: "@bykouski",
  },
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
  verification: {
    google: "egOW5c0XOSc-XscX9vc69XvuyPwpg-XzSTsTTHLMbTc",
  },
  alternates: {
    canonical: "https://bykouskidigital.cz",
    languages: {
      cs: "https://bykouskidigital.cz",
      ru: "https://bykouskidigital.cz/ru",
    },
  },
  other: {
    "seznam-wmt": "QYpIJCr6TxsfvFo0FO6rbKHjOh57x28u",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col font-sans text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
