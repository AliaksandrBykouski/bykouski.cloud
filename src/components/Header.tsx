"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";
import { ModeToggle } from "./ToggleTheme";

export default function Header({ locale }: { locale: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 max-w-[1400px] border-b-2 border-border border-[var(--ring)] bg-background/80 backdrop-blur">
      <div className="container mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4">
        {/* Mobile menu button - показывается только на мобильных устройствах */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-accent transition-colors text-[var(--ring)] hover:text-[var(--foreground)] cursor-pointer relative z-[60]"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <title>Webové Studio Bykouski Aliaksandr</title>
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Logo - показывается только на десктопе */}
        <Link
          href="/"
          className="hidden md:block text-xl font-bold tracking-tight transition-transform duration-300 hover:scale-105"
        >
          <span
            className="rounded-md bg-primary px-2 py-1 text-background transition-colors duration-300 hover:bg-primary/80 "
            style={{ background: "var(--ring)" }}
          >
            BD
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-4 lg:gap-6">
          <nav className="flex gap-4 lg:gap-6">
            <Link
              href="/"
              className="text-m font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 text-[var(--ring)] hover:text-[var(--foreground)]"
            >
              {locale === "ru" ? "Главная" : locale === "cs" ? "Hlavní" : "Main"}
            </Link>
            <Link
              href="/about"
              className="text-m font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 text-[var(--ring)] hover:text-[var(--foreground)]"
            >
              {locale === "ru" ? "Обо мне" : locale === "cs" ? "O mně" : "About"}
            </Link>

            <Link
              href="/services"
              className="text-m font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 text-[var(--ring)] hover:text-[var(--foreground)]"
            >
              {locale === "ru" ? "Услуги" : locale === "cs" ? "Služby" : "Services"}
            </Link>

            <Link
              href="/contacts"
              className="text-m font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 text-[var(--ring)] hover:text-[var(--foreground)]"
            >
              {locale === "ru" ? "Контакты" : locale === "cs" ? "Kontakty" : "Contacts"}
            </Link>
          </nav>

          <LanguageSwitcher />
          <ModeToggle />
        </div>

        {/* Mobile controls - показываются только на мобильных устройствах */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <ModeToggle />
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen z-50 bg-[var(--muted)] backdrop-blur-lg container overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <nav className="flex flex-col space-y-8">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 text-[var(--ring)] hover:text-[var(--foreground)]"
                >
                  {locale === "ru" ? "Главная" : locale === "cs" ? "Hlavní" : "Main"}
                </Link>
                <Link
                  href="/about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 text-[var(--ring)] hover:text-[var(--foreground)]"
                >
                  {locale === "ru" ? "Обо мне" : locale === "cs" ? "O mně" : "About"}
                </Link>

                <Link
                  href="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 text-[var(--ring)] hover:text-[var(--foreground)]"
                >
                  {locale === "ru" ? "Услуги" : locale === "cs" ? "Služby" : "Services"}
                </Link>

                <Link
                  href="/contacts"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 text-[var(--ring)] hover:text-[var(--foreground)]"
                >
                  {locale === "ru" ? "Контакты" : locale === "cs" ? "Kontakty" : "Contacts"}
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
