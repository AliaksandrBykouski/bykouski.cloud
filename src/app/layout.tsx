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
      (
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
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  }
}

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://bykouskidigital.cz"),
    title:
      "Tvorba webových stránek. Web development Czech Republic | Bykouski Aliaksandr",
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
      description:
        "Profesionální služby vývoje webových stránek na míru vašim potřebám.",
      url: "https://bykouskidigital.cz",
      siteName: "Web Studio Bykouski Aliaksandr",
      type: "website",
      locale: "cs_CS",
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
      google:
        "google-site-verification=egOW5c0XOSc-XscX9vc69XvuyPwpg-XzSTsTTHLMbTc",
    },
    alternates: {
      canonical: "https://bykouskidigital.cz",
      languages: {
        cs: "https://bykouskidigital.cz",
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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <meta
          name="description"
          content="Profesionální služby vývoje webových stránek na míru vašim potřebám. Specializuji se na Next.js, React, CSS a JavaScript pro vytváření moderních a responzivních webů v České republice."
        />
        <meta name="seznam-wmt" content="QYpIJCr6TxsfvFo0FO6rbKHjOh57x28u" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col  font-sans text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
