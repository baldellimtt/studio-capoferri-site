"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "@/components/LocaleProvider";
import { chromeCopy, localeStorageKey, switchLocalePath, type Locale } from "@/lib/i18n";

type Props = {
  className?: string;
  onNavigate?: () => void;
};

const options: { locale: Locale; shortLabel: string }[] = [
  { locale: "it", shortLabel: "IT" },
  { locale: "en", shortLabel: "EN" },
];

export function LanguageSwitcher({ className = "", onNavigate }: Props) {
  const pathname = usePathname() || "/";
  const locale = useLocale();
  const copy = chromeCopy[locale].header;
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(window.location.hash || "");
  }, [pathname]);

  const persistPreference = (nextLocale: Locale) => {
    try {
      localStorage.setItem(localeStorageKey, nextLocale);
    } catch {
      /* ignore */
    }
  };

  return (
    <nav
      aria-label={copy.languageSwitcher}
      className={`inline-flex rounded-full border border-[#2a3f54]/15 bg-white/75 p-1 shadow-[0_8px_24px_rgba(42,63,84,0.08)] backdrop-blur-xl ${className}`}
    >
      {options.map((item) => {
        const active = item.locale === locale;
        const href = switchLocalePath(pathname, item.locale, hash);

        return (
          <Link
            key={item.locale}
            href={href}
            prefetch={false}
            onClick={() => {
              persistPreference(item.locale);
              onNavigate?.();
            }}
            aria-current={active ? "page" : undefined}
            aria-label={item.locale === "it" ? copy.languageItalian : copy.languageEnglish}
            className={`focus-ring relative min-w-[56px] rounded-full px-3 py-2 text-center text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-all duration-300 ${
              active
                ? "bg-[#2a3f54] text-white shadow-[0_10px_24px_rgba(42,63,84,0.24)]"
                : "text-[#2a3f54] hover:bg-[#2a3f54]/8 hover:text-[#1f2e3d]"
            }`}
          >
            {item.shortLabel}
          </Link>
        );
      })}
    </nav>
  );
}
