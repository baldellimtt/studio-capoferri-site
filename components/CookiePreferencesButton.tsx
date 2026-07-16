"use client";

import { resetCookieConsent } from "@/components/CookieBanner";
import { useLocale } from "@/components/LocaleProvider";
import { ui } from "@/lib/ui";

export function CookiePreferencesButton() {
  const locale = useLocale();

  return (
    <button type="button" onClick={resetCookieConsent} className={ui.btnGhostOnDark}>
      {locale === "en" ? "Change cookie preferences" : "Modifica preferenze cookie"}
    </button>
  );
}
