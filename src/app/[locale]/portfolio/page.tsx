import { getTranslations } from "next-intl/server";
import { CarouselPlugin } from "@/components/Carousel";

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      aria-describedby="portfolio-description"
    >
      <div className="containeranimate-appear">
        <h1
          className="title text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold leading-tight text-[var(--foreground)] mb-4"
          id="portfolio-title"
        >
          {t("portfolio.title")}
        </h1>
        <p
          className="font-light text-lg md:text-xl lg:text-2xl text-muted-foreground"
          id="portfolio-description"
        >
          {t("portfolio.subtitle")}
        </p>
        <CarouselPlugin />
      </div>
    </section>
  );
}
