"use client";

import { useLocale } from "@/components/LocaleProvider";
import { linkTitles } from "@/lib/link-seo";

export function SkipLink() {
  const locale = useLocale();
  const label = locale === "en" ? "Skip to main content" : "Vai al contenuto principale";

  return (
    <a href="#main-content" className="skip-link" title={linkTitles.skipContent(locale)}>
      {label}
    </a>
  );
}
