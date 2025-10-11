import Hero from "@/components/Hero";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return {
    title: locale === "cs" ? "Tvorba webových stránek" : "Создание веб-сайтов",
    description:
      locale === "cs"
        ? "Profesionální služby vývoje webových stránek"
        : "Профессиональные услуги веб-разработки",
  };
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <section>
      <div className="container ">
        <Hero locale={locale} />
      </div>
    </section>
  );
}
