import { getTranslations } from "next-intl/server";
import TechCards from "@/components/TechCards";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <section className="min-h-screen bg-background text-foreground flex flex-col">
      <div className="container mx-auto  p-10">
        <h1 className="title mb-6  font-bold">{t("about.title")}</h1>
        <p className="mb-4 text-xl">
          {(() => {
            const text = t("about.description");
            const searchText = "Bykouski Digital";
            const index = text.indexOf(searchText);

            if (index !== -1) {
              return (
                <>
                  {text.substring(0, index)}
                  <span style={{ color: "var(--ring)" }}>{searchText}</span>
                  {text.substring(index + searchText.length)}
                </>
              );
            }

            return text;
          })()}
        </p>
        {/* <h2 className="title mb-4 text-3xl">{t("about.steck")}</h2> */}

        {/* Technologies Section */}
        <div className="mt-5 ">
          <h2 className="title text-3xl font-semibold mb-2">
            {t("technologies.title")}
          </h2>
          <p className="text-muted-foreground text-xl mb-5 mt-5">
            {t("technologies.subtitle")}
          </p>

          <TechCards
            technologies={[
              {
                title: t("technologies.list.1.title"),
                description: t("technologies.list.1.description"),
                iconName: t("technologies.list.1.icon"),
              },
              {
                title: t("technologies.list.2.title"),
                description: t("technologies.list.2.description"),
                iconName: t("technologies.list.2.icon"),
              },
              {
                title: t("technologies.list.3.title"),
                description: t("technologies.list.3.description"),
                iconName: t("technologies.list.3.icon"),
              },
              {
                title: t("technologies.list.4.title"),
                description: t("technologies.list.4.description"),
                iconName: t("technologies.list.4.icon"),
              },
              {
                title: t("technologies.list.5.title"),
                description: t("technologies.list.5.description"),
                iconName: t("technologies.list.5.icon"),
              },
              {
                title: t("technologies.list.6.title"),
                description: t("technologies.list.6.description"),
                iconName: t("technologies.list.6.icon"),
              },
              {
                title: t("technologies.list.7.title"),
                description: t("technologies.list.7.description"),
                iconName: t("technologies.list.7.icon"),
              },
              {
                title: t("technologies.list.8.title"),
                description: t("technologies.list.8.description"),
                iconName: t("technologies.list.8.icon"),
              },
              {
                title: t("technologies.list.9.title"),
                description: t("technologies.list.9.description"),
                iconName: t("technologies.list.9.icon"),
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
