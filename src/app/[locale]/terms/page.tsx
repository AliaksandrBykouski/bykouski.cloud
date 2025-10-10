import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">{t("title")}</h1>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.lastUpdated.title")}
          </h2>
          <p className="text-muted-foreground">
            {t("sections.lastUpdated.content")}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.introduction.title")}
          </h2>
          <p>{t("sections.introduction.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.informationWeCollect.title")}
          </h2>
          <h3 className="text-xl font-medium mb-2">
            {t("sections.informationWeCollect.personalInfo.title")}
          </h3>
          <p className="mb-4">
            {t("sections.informationWeCollect.personalInfo.content")}
          </p>

          <h3 className="text-xl font-medium mb-2">
            {t("sections.informationWeCollect.technicalInfo.title")}
          </h3>
          <p className="mb-4">
            {t("sections.informationWeCollect.technicalInfo.content")}
          </p>

          <h3 className="text-xl font-medium mb-2">
            {t("sections.informationWeCollect.contactForms.title")}
          </h3>
          <p>{t("sections.informationWeCollect.contactForms.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.howWeUseInfo.title")}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {Array.from({ length: 6 }, (_, i) => (
              <li key={i}>{t(`sections.howWeUseInfo.points.${i + 1}`)}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.informationSharing.title")}
          </h2>
          <p>{t("sections.informationSharing.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.dataSecurity.title")}
          </h2>
          <p>{t("sections.dataSecurity.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.dataRetention.title")}
          </h2>
          <p>{t("sections.dataRetention.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.yourRights.title")}
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            {Array.from({ length: 6 }, (_, i) => (
              <li key={i}>{t(`sections.yourRights.points.${i + 1}`)}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.cookies.title")}
          </h2>
          <p className="mb-4">{t("sections.cookies.content")}</p>
          <h3 className="text-xl font-medium mb-2">
            {t("sections.cookies.essential.title")}
          </h3>
          <p className="mb-4">{t("sections.cookies.essential.content")}</p>
          <h3 className="text-xl font-medium mb-2">
            {t("sections.cookies.analytics.title")}
          </h3>
          <p>{t("sections.cookies.analytics.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.thirdParty.title")}
          </h2>
          <p>{t("sections.thirdParty.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            {t("sections.contact.title")}
          </h2>
          <p>{t("sections.contact.content")}</p>
        </section>
      </div>
    </div>
  );
}
