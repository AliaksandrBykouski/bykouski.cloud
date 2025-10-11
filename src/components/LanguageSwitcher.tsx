"use client";

import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, usePathname } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const locale = useLocale();
  const [currentLocale, setCurrentLocale] = useState(locale);

  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);

  const getHref = (newLocale: string) => {
    if (!pathname) return "/";
    return pathname.replace(`/${locale}`, `/${newLocale}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full text-[var(--ring)] hover:text-[var(--foreground)] cursor-pointer"
        >
          {currentLocale.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent style={{ backgroundColor: "var(--ring)" }}>
        <DropdownMenuItem asChild>
          <Link href={getHref("ru")} locale="ru">
            RU
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={getHref("cz")} locale="cz">
            CZ
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
