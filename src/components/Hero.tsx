import authorImage from "../../public/img/author.png";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function Hero({ locale }: { locale: string }) {
  const t = await getTranslations({ locale });

  return (
    <section className="flex flex-col-reverse items-center gap-8 md:gap-16 lg:gap-24 container mx-auto max-w-7xl px-4 py-12">
      <div className="mt-2 flex-1 md:mt-0 text-center">
        <h1 className="title no-underline text-3xl  ">{t("hero.hi")}</h1>
        <h2 className="mt-8 text-xl font-bold leading-tight text-foreground md:text-5xl">
          {t("hero.role")}
        </h2>
        <p className="mt-8 font-light text-xl text-muted-foreground">{t("hero.description")}</p>
        <Button asChild className="mt-10" style={{ background: "var(--ring" }}>
          <Link href="/contacts">{t("hero.contact")}</Link>
        </Button>
      </div>
      <div className="relative">
        <Image
          src={authorImage}
          alt="Aliaksandr Bykouski"
          className="flex-1 rounded-lg grayscale"
          priority
          width={200}
          height={200}
          style={{
            objectFit: "cover",
            height: "auto",
            width: "100%",
          }}
        />
      </div>
    </section>
  );
}
