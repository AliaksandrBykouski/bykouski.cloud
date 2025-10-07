import Hero from "@/components/Hero";

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
