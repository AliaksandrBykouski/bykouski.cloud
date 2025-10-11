"use client";

import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const [currentLocale, setCurrentLocale] = useState(locale);

  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);

  const getHref = (_newLocale: string) => {
    // Заменяем текущий locale в пути на новый
    const pathWithoutLocale = pathname.replace(`/${locale}`, "");
    return pathWithoutLocale || "/";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full text-[var(--ring)] hover:text-[var(--foreground)] cursor-pointer"
        >
          {currentLocale === "cs" ? "CZ" : "RU"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent style={{ backgroundColor: "var(--ring)" }}>
        <DropdownMenuItem asChild>
          <Link href={getHref("ru")} locale="ru">
            RU
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={getHref("cs")} locale="cs">
            CZ
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
