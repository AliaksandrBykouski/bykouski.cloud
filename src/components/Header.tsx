"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/routing";
import LanguageSwitcher from "./LanguageSwitcher";
import { ModeToggle } from "./ToggleTheme";

export default function Header({ locale }: { locale: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMobileMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMobileMenuOpen]);

  const labels = {
    home: locale === "ru" ? "Главная" : locale === "cs" ? "Hlavní" : "Main",
    about: locale === "ru" ? "Обо мне" : locale === "cs" ? "O mně" : "About",
    services: locale === "ru" ? "Услуги" : locale === "cs" ? "Služby" : "Services",
    contacts: locale === "ru" ? "Контакты" : locale === "cs" ? "Kontakty" : "Contacts",
    portfolio: locale === "ru" ? "Портфолио" : locale === "cs" ? "Portfolio" : "Portfolio",
  };

  return (
    <header className="sticky top-0 z-50 max-w-[1400px] border-b-2 border-border border-[var(--ring)] bg-background/80 backdrop-blur">
      <div className="container mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4">
        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-md hover:bg-accent transition-colors text-[var(--ring)] hover:text-[var(--foreground)] cursor-pointer relative z-[60]"
          aria-label={
            isMobileMenuOpen
              ? locale === "cs"
                ? "Zavřít navigaci"
                : locale === "ru"
                  ? "Закрыть меню"
                  : "Close navigation"
              : locale === "cs"
                ? "Otevřít navigaci"
                : locale === "ru"
                  ? "Открыть меню"
                  : "Open navigation"
          }
        >
          <svg
            aria-hidden="true"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
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

        {/* Logo */}
        <Link
          href="/"
          className="hidden md:block text-xl font-bold tracking-tight transition-transform duration-300 hover:scale-105"
          aria-label="Web Studio Bykouski Aliaksandr"
        >
          {/* <span
            className="rounded-md bg-primary px-2 py-1 text-background transition-colors duration-300 hover:bg-primary/80"
            style={{ background: "var(--ring)" }}
          >
            BD
          </span> */}
          <div className="flex items-center gap-2">
            <div
              className="rounded-lg p-2 transition-all duration-300 group-hover:scale-110"
              style={{ background: "var(--ring)" }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <title>Bykouski Digital Logo</title>
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground text-[var(--ring)]">Bykouski</span>
              <span className="text-[12px] text-muted-foreground text-[var(--ring)]">Digital</span>
            </div>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6" aria-label="Hlavní navigace">
          <Link
            href="/"
            className="text-m font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 text-[var(--ring)] hover:text-[var(--foreground)]"
          >
            {labels.home}
          </Link>
          <Link
            href="/about"
            className="text-m font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 text-[var(--ring)] hover:text-[var(--foreground)]"
          >
            {labels.about}
          </Link>
          <Link
            href="/services"
            className="text-m font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 text-[var(--ring)] hover:text-[var(--foreground)]"
          >
            {labels.services}
          </Link>
          <Link
            href="/contacts"
            className="text-m font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 text-[var(--ring)] hover:text-[var(--foreground)]"
          >
            {labels.contacts}
          </Link>
          <Link
            href="/portfolio"
            className="text-m font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 text-[var(--ring)] hover:text-[var(--foreground)]"
          >
            {labels.portfolio}
          </Link>

          <LanguageSwitcher />
          <ModeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <ModeToggle />
        </div>
      </div>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen z-50 bg-[var(--muted)] backdrop-blur-lg container overflow-hidden">
          <div className="w-full h-full flex items-center justify-center">
            <nav className="flex flex-col space-y-8 text-center" aria-label="Mobilní navigace">
              {Object.entries(labels).map(([key, value]) => (
                <Link
                  key={key}
                  href={key === "home" ? "/" : `/${key}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 text-[var(--ring)] hover:text-[var(--foreground)]"
                >
                  {value}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
