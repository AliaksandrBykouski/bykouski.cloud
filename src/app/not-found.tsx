import { ArrowLeftIcon } from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import LocalLayout from "./[locale]/layout";

export default async function NotFound() {
  const headersList = await headers();
  const cookie = headersList.get("cookie") || "";
  const locale = cookie.includes("NEXT_LOCALE=cs") ? "cs" : "ru";
  const t = await getTranslations({ locale, namespace: "NotFound" });

  return (
    <LocalLayout params={Promise.resolve({ locale } as { locale: string })}>
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-6xl font-bold tracking-tight text-muted-foreground">
            404 - Not Found
          </p>
          <div className="mt-4">
            <h1 className="text-7xl font-bold tracking-tight text-foreground">
              {t("title")}
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              {t("description")}
            </p>
            <div className="mt-6">
              <Link
                href={`/`}
                className="text-lg font-medium text-primary hover:text-primary/80"
              >
                <ArrowLeftIcon className="inline h-6 w-6 stroke-2" />
                {t("backHome")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </LocalLayout>
  );
}
