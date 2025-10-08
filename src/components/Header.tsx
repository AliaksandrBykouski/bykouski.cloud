import Link from "next/link";
import { ModeToggle } from "./ToggleTheme";
import LanguageSwitcher from "./LanguageSwitcher";
import { getTranslations } from "next-intl/server";

export default async function Header({ locale }: { locale: string }) {
  const t = await getTranslations({ locale });
  return (
    <header className="sticky top-0 z-50 max-w-[1400px] border-b-2 border-border border-[var(--ring)] bg-background/80 backdrop-blur">
      <div className="container mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight transition-transform duration-300 hover:scale-105"
        >
          <span
            className="rounded-md bg-primary px-2 py-1 text-background transition-colors duration-300 hover:bg-primary/80 "
            style={{ background: "var(--ring)" }}
          >
            AB
          </span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="flex gap-4 sm:gap-6">
            <Link
              href="/about"
              className="text-m font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 text-[var(--ring)] hover:text-[var(--foreground)]"
            >
              {t("header.about")}
            </Link>

            <Link
              href="/services"
              className="text-m font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 text-[var(--ring)] hover:text-[var(--foreground)]"
            >
              {t("header.services")}
            </Link>

            <Link
              href="/contacts"
              className="text-m font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 text-[var(--ring)] hover:text-[var(--foreground)]"
            >
              {t("header.contacts")}
            </Link>
          </nav>

          <LanguageSwitcher />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
