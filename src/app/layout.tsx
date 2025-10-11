import { Geist, Geist_Mono } from "next/font/google";
import { ImageResponse } from "next/og";

export async function generateImageMetadata() {
  return [
    {
      contentType: "image/png",
      size: { width: 1200, height: 630 },
      id: "og-image",
    },
  ];
}

export async function generateImage({ id }: { id: string }) {
  if (id === "og-image") {
    return new ImageResponse(
      <div
        style={{
          fontSize: 48,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Web Studio Bykouski Aliaksandr
      </div>,
      {
        width: 1200,
        height: 630,
      },
    );
  }
}

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://bykouskidigital.cz"),
    title: "Tvorba webových stránek. Web development Czech Republic | Bykouski Aliaksandr",
    description:
      "Profesionální služby vývoje webových stránek na míru vašim potřebám. Specializuji se na Next.js, React, CSS a JavaScript pro vytváření moderních a responzivních webů v České republice.",
    keywords:
      "web development, tvorba webových stránek, webové stránky, aplikace, Next.js, React, CSS, JavaScript, portfolio, Česká republika, Praha",
    authors: [{ name: "Aliaksandr Bykouski" }],
    creator: "Aliaksandr Bykouski",
    publisher: "Aliaksandr Bykouski",
    formatDetection: {
      telephone: false,
    },
    openGraph: {
      title: "Web Studio Bykouski Aliaksandr",
      description: "Profesionální služby vývoje webových stránek na míru vašim potřebám.",
      url: "https://bykouskidigital.cz",
      siteName: "Web Studio Bykouski Aliaksandr",
      type: "website",
      locale: "cz_CZ",
      alternateLocale: ["ru_RU"],
      images: [
        {
          url: "/og-image",
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
      google: "google-site-verification=egOW5c0XOSc-XscX9vc69XvuyPwpg-XzSTsTTHLMbTc",
    },
    alternates: {
      canonical: "https://bykouskidigital.cz",
      languages: {
        cz: "https://bykouskidigital.cz",
        ru: "https://bykouskidigital.cz/ru",
      },
    },
  };
}

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="preload"
          href="/_next/static/chunks/src_app_%5Blocale%5D_globals_baf8e7fe.css"
          as="style"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col  font-sans text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
