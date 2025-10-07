import { getTranslations } from "next-intl/server";

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  return (
    <section className="container mx-auto max-w-10xl px-4 py-8">
      <h2 className="text-3xl font-bold">{t("services.title")}</h2>
      <p className="mt-4">We offer a wide range of services to help you achieve your goals.</p>
    </section>
  );
}
