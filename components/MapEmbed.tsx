"use client";

import { useEffect, useState } from "react";
import { CookieChoice } from "./CookieBanner";

const STORAGE_KEY = "cookie_consent_studio_capoferri";

function readConsent(): CookieChoice | null {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    if (v === "accepted" || v === "rejected") return v;
  } catch {
    /* ignore */
  }
  return null;
}

export function MapEmbed() {
  const [consent, setConsent] = useState<CookieChoice | null>(null);

  useEffect(() => {
    setConsent(readConsent());
    const onCustom = (e: Event) => {
      const ce = e as CustomEvent<CookieChoice>;
      setConsent(ce.detail);
    };
    window.addEventListener("cookie-consent", onCustom as EventListener);
    return () => window.removeEventListener("cookie-consent", onCustom as EventListener);
  }, []);

  const src =
    "https://maps.google.com/maps?q=Via%20Piave%2035,%20Adro%20BS&t=&z=13&ie=UTF8&iwloc=&output=embed";

  if (consent !== "accepted") {
    return (
      <div
        className="flex min-h-[220px] items-center justify-center rounded-xl border border-[#2a3f54]/10 bg-gradient-to-br from-[#f4f7fa] to-[#eef3f8] px-4 text-center text-[0.82rem] text-[#4b5a69] sm:min-h-[300px] sm:px-5 sm:text-sm md:min-h-[400px]"
        role="region"
        aria-label="Mappa disattivata fino al consenso cookie"
      >
        <p>
          La mappa Google Maps viene caricata solo se accetti i cookie non strettamente necessari dal banner in basso,
          oppure da privacy policy.
        </p>
      </div>
    );
  }

  return (
    <iframe
      className="h-[220px] w-full rounded-xl border-0 shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:h-[300px] md:h-[420px]"
      loading="lazy"
      allowFullScreen
      referrerPolicy="no-referrer-when-downgrade"
      title="Sede Studio Capoferri — Via Piave 35, Adro (BS)"
      src={src}
    />
  );
}
