import { NextIntlClientProvider } from "next-intl";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";
import { getMessages } from "next-intl/server";

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
          <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
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
