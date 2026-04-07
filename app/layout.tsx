import type { Metadata } from "next";
import { AppProviders } from "@/components/AppProviders";
import { CookieBanner } from "@/components/CookieBanner";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { fontDisplay, fontSans } from "@/lib/fonts";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Studio Capoferri - Ingegneria Brescia, Bergamo, Milano",
    template: `%s — ${site.name}`,
  },
  description:
    "Studio Capoferri: ingegneria civile, architettura e urbanistica a Brescia, Bergamo, Milano. 40+ anni di esperienza. Progettazione strutturale, strutture in acciaio.",
  keywords: [
    "ingegneria civile Brescia",
    "ingegneria civile Bergamo",
    "ingegneria civile Milano",
    "progettazione strutturale Brescia",
    "progettazione strutturale Bergamo",
    "strutture acciaio",
    "studio ingegneria Adro",
    "Franciacorta",
    "ingegneria Nord Italia",
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: site.url,
    siteName: site.name,
    title: `Studio Capoferri – ${site.tagline}`,
    description:
      "Studio tecnico Capoferri ad Adro: 40+ anni di esperienza in progettazione strutturale, architettura e urbanistica in Franciacorta e provincia di Brescia e Bergamo.",
    images: [{ url: "/assets/superstudio-village-acciaio-pre-fabbricato.webp", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
  verification: { google: "DMhu8zo7VvJIGjVKh3LMDhcxJs174oNCUb41rzZNTCA" },
  other: { "theme-color": "#2a3f54" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${fontSans.variable} ${fontDisplay.variable} ${fontSans.className} antialiased`}>
        <AppProviders>
          <a href="#main-content" className="skip-link">
            Vai al contenuto principale
          </a>
          <SiteHeader />
          <CookieBanner />
          {children}
          <SiteFooter />
        </AppProviders>
      </body>
    </html>
  );
}
