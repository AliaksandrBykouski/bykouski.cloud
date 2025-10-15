import { getTranslations } from "next-intl/server";
import ServicesCards from "@/components/ServicesCards";

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const translations = {
    title: t("services.title"),
    subtitle: t("services.subtitle"),
  };

  return (
    <section
      className="container mx-auto max-w-10xl px-4 py-8"
      id="services"
      aria-labelledby="services-title"
      aria-describedby="services-description"
    >
      <h1
        className="title text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-tight text-[var(--foreground)] mb-4 lg:mb-5 xl:mb-6"
        id="services-title"
      >
        {translations.title}
      </h1>
      <h2
        className=" mt-4 md:mt-6 lg:mt-8 text-2xl lg:text-3xl font-bold leading-tight text-[var(--foreground)]"
        id="services-description"
      >
        {translations.subtitle}
      </h2>
      <div className="mt-10">
        <ServicesCards locale={locale} />
      </div>
    </section>
  );
}
