import { getTranslations } from "next-intl/server";
import TechCards from "@/components/TechCards";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <section className="min-h-screen bg-background text-foreground flex flex-col mx-auto p-5">
      <div className="container animate-appear">
        <h1 className="title text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-tight text-[var(--foreground)] mb-4 lg:mb-5 xl:mb-6">
          {t("about.title")}
        </h1>
        <p className="mt-4 md:mt-6 lg:mt-8 font-light text-lg md:text-xl lg:text-2xl text-muted-foreground">
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
          <h2 className="title mt-4 md:mt-6 lg:mt-8 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl text-[var(--foreground)]">
            {t("technologies.title")}
          </h2>
          <p className="mt-4 md:mt-6 lg:mt-8 font-light text-lg md:text-xl lg:text-2xl text-muted-foreground">
            {t("technologies.subtitle")}
          </p>

          <TechCards
            technologies={[
              {
                id: "1",
                title: t("technologies.list.1.title"),
                description: t("technologies.list.1.description"),
                iconName: t("technologies.list.1.icon"),
              },
              {
                id: "2",
                title: t("technologies.list.2.title"),
                description: t("technologies.list.2.description"),
                iconName: t("technologies.list.2.icon"),
              },
              {
                id: "3",
                title: t("technologies.list.3.title"),
                description: t("technologies.list.3.description"),
                iconName: t("technologies.list.3.icon"),
              },
              {
                id: "4",
                title: t("technologies.list.4.title"),
                description: t("technologies.list.4.description"),
                iconName: t("technologies.list.4.icon"),
              },
              {
                id: "5",
                title: t("technologies.list.5.title"),
                description: t("technologies.list.5.description"),
                iconName: t("technologies.list.5.icon"),
              },
              {
                id: "6",
                title: t("technologies.list.6.title"),
                description: t("technologies.list.6.description"),
                iconName: t("technologies.list.6.icon"),
              },
              {
                id: "7",
                title: t("technologies.list.7.title"),
                description: t("technologies.list.7.description"),
                iconName: t("technologies.list.7.icon"),
              },
              {
                id: "8",
                title: t("technologies.list.8.title"),
                description: t("technologies.list.8.description"),
                iconName: t("technologies.list.8.icon"),
              },
              {
                id: "9",
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
