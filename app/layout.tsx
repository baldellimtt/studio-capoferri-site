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
  alternates: { canonical: `${site.url}/` },
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
  twitter: {
    card: "summary_large_image",
    title: `Studio Capoferri – ${site.tagline}`,
    description:
      "Studio tecnico Capoferri ad Adro: 40+ anni di esperienza in progettazione strutturale, architettura e urbanistica in Franciacorta e provincia di Brescia e Bergamo.",
    images: ["/assets/superstudio-village-acciaio-pre-fabbricato.webp"],
  },
  icons: {
    apple: "/assets/apple-touch-icon.png",
  },
  robots: { index: true, follow: true },
  verification: { google: "DMhu8zo7VvJIGjVKh3LMDhcxJs174oNCUb41rzZNTCA" },
  other: { "theme-color": "#2a3f54" },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  // Deve corrispondere esattamente al nome del profilo Google Business
  name: "Studio Capoferri - Ingegneria e Architettura",
  alternateName: site.name,
  legalName: site.legalName,
  description:
    "Studio tecnico di ingegneria civile, architettura e urbanistica ad Adro (Brescia). Progettazione strutturale, strutture in acciaio, direzione lavori e sicurezza cantieri in Lombardia e Nord Italia.",
  url: site.url,
  telephone: site.phoneTel,
  email: site.email,
  vatID: `IT${site.piva}`,
  image: `${site.url}/assets/superstudio-village-acciaio-pre-fabbricato.webp`,
  logo: `${site.url}/assets/logo-studio-ingegneria-removebg-preview.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.locality,
    addressRegion: site.address.province,
    addressCountry: site.address.country,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "18:00",
    },
  ],
  areaServed: ["Brescia", "Bergamo", "Milano", "Franciacorta", "Lombardia", "Nord Italia"],
  sameAs: [site.linkedin],
  knowsAbout: [
    "Progettazione strutturale",
    "Strutture in acciaio",
    "Architettura",
    "Urbanistica",
    "Direzione lavori",
    "Sicurezza cantieri",
    "Prevenzione incendi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${fontSans.variable} ${fontDisplay.variable} ${fontSans.className} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
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
