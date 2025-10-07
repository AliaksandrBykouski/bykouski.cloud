import ServicesCards from "@/components/ServicesCards";
import { getTranslations } from "next-intl/server";

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const translations = {
    title: t("services.title"),
    subtitle: t("services.subtitle"),
  };

  return (
    <section className="container mx-auto max-w-10xl px-4 py-8">
      <h2 className="title text-5xl font-bold">{translations.title}</h2>
      <h3 className="mt-5 subtitle text-3xl font-semibold">{translations.subtitle}</h3>
      <div className="mt-10">
        <ServicesCards locale={locale} />
      </div>
    </section>
  );
}
