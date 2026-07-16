"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "@/components/LocaleProvider";
import { isLocale, localeStorageKey, stripLocalePrefix, switchLocalePath, type Locale } from "@/lib/i18n";

/** Honours stored language preference only on the home page (`/` or `/en`). */
export function LocalePreferenceRedirect() {
  const pathname = usePathname() || "/";
  const locale = useLocale();
  const router = useRouter();

  useEffect(() => {
    const bare = stripLocalePrefix(pathname);
    if (bare !== "/") return;

    try {
      const stored = localStorage.getItem(localeStorageKey);
      if (!stored || !isLocale(stored)) return;
      const preferred = stored as Locale;
      if (preferred === locale) return;
      router.replace(switchLocalePath(pathname, preferred));
    } catch {
      /* ignore */
    }
  }, [pathname, locale, router]);

  return null;
}
