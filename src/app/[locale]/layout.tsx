import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: "Web Studio Bykouski Aliaksandr | Tvorba webových stránek na míru | Česká republika",
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
    title: "Web Studio Bykouski Aliaksandr | Tvorba webových stránek na míru | Česká republika",
    description: "Profesionální služby vývoje webových stránek na míru vašim potřebám.",
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

export default async function LocalLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <div className="flex min-h-screen flex-col">
          <div className="container mx-auto w-full px-4  flex-1 flex flex-col">
            <Header locale={locale} />

            <main className="grow m-4">{children}</main>

            <Footer />
          </div>
        </div>
        <Toaster />
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
