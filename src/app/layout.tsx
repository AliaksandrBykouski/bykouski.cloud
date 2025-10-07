import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";

export async function generateMetadata() {
  return {
    metadataBase: new URL("https://bykouski.cloud"),
    title:
      "Tvorba webových stránek. Web development Czech Republic | Bykouski Aliaksandr",
    description:
      "Profesionální služby vývoje webových stránek na míru vašim potřebám. Specializuji se na Next.js, React, CSS a JavaScript pro vytváření moderních a responzivních webů.",
    keywords:
      "Web Development, webové stránky, applicace, Next.js, React, CSS, JavaScript, Portfolio",
    authors: [{ name: "Aliaksandr Bykouski" }],
    creator: "Aliaksandr Bykouski",
    publisher: "Aliaksandr Bykouski",
    openGraph: {
      title: "Web Studio Bykouski Aliaksandr",
      description:
        "Profesionální služby vývoje webových stránek na míru vašim potřebám.",
      url: "https://bykouski.cloud",
      siteName: "Web Studio Bykouski Aliaksandr",
      type: "website",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Web Studio Bykouski Aliaksandr",
        },
      ],
    },

    robots: {
      index: true,
      follow: true,
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
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cz" suppressHydrationWarning>
      <Head>
        {/* Основные метатеги для чешского рынка */}
        <meta
          name="keywords"
          content="web development, tvorba webových stránek, webové stránky, aplikace, Next.js, React, CSS, JavaScript, portfolio, Česká republika, Praha"
        />
        <meta
          name="description"
          content="Profesionální služby vývoje webových stránek na míru vašim potřebám. Specializuji se na Next.js, React, CSS a JavaScript pro vytváření moderních a responzivních webů v České republice."
        />
        <meta name="author" content="Aliaksandr Bykouski" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="language" content="cs-CZ" />
        <meta name="geo.region" content="CZ" />
        <meta name="geo.placename" content="Česká republika" />
        <meta name="geo.position" content="50.0755;14.4378" />
        <meta name="ICBM" content="50.0755, 14.4378" />

        {/* Метатеги для локальных поисковых систем */}
        <meta
          name="seznam"
          content="web development, tvorba webových stránek"
        />

        {/* Социальные сети и мессенджеры популярные в Чехии */}
        <meta property="og:locale" content="cs_CZ" />
        <meta property="og:locale:alternate" content="ru_RU" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bykouski" />
        <meta name="twitter:creator" content="@bykouski" />

        {/* Технические метатеги */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Web Studio Bykouski" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        {/* Дополнительные метатеги для бизнеса */}
        <meta
          name="business:contact_data:street_address"
          content="Česká republika"
        />
        <meta name="business:contact_data:locality" content="Prague" />
        <meta
          name="business:contact_data:country_name"
          content="Czech Republic"
        />
        <meta name="format-detection" content="telephone=yes" />

        {/* Метатеги для ускорения загрузки */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="dns-prefetch" href="//bykouski.cloud" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen flex-col  font-sans text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
