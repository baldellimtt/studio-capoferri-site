import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isStaticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
};

if (isStaticExport) {
  nextConfig.output = "export";
  nextConfig.images = { unoptimized: true };
  nextConfig.trailingSlash = true;
  const raw = process.env.NEXT_PUBLIC_BASE_PATH?.trim() ?? "";
  if (raw && raw !== "/") {
    nextConfig.basePath = raw.startsWith("/") ? raw : `/${raw}`;
  }
} else {
  nextConfig.headers = async () => [
    {
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        {
          key: "Permissions-Policy",
          value:
            "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=(), interest-cohort=()",
        },
        { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
        { key: "Cross-Origin-Resource-Policy", value: "same-site" },
        {
          key: "Content-Security-Policy",
          value: [
            "default-src 'self'",
            "base-uri 'self'",
            "frame-ancestors 'self'",
            "form-action 'self' https://formspree.io",
            "img-src 'self' data: https://www.studiocapoferri.eu https://*.googleapis.com https://*.gstatic.com",
            "font-src 'self' data: https://fonts.gstatic.com",
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
            "script-src 'self' 'unsafe-inline'",
            "connect-src 'self' https://formspree.io",
            "frame-src 'self' https://maps.google.com https://www.google.com https://*.google.com",
            "upgrade-insecure-requests",
          ].join("; "),
        },
      ],
    },
    {
      source: "/:path*",
      headers: [{ key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" }],
    },
  ];

  nextConfig.redirects = async () => [
    { source: "/index.html", destination: "/", permanent: true },
    { source: "/chi-siamo.html", destination: "/chi-siamo", permanent: true },
    { source: "/servizi-studio-progettazione.html", destination: "/servizi", permanent: true },
    {
      source: "/progettazione-strutture-brescia-contatti.html",
      destination: "/contatti",
      permanent: true,
    },
    { source: "/privacy-policy.html", destination: "/privacy-policy", permanent: true },
    {
      source: "/progetti-studio-ingegneria-capoferri.html",
      destination: "/progetti",
      permanent: true,
    },
    {
      source: "/progetti-residenziali-studio-ingegneria-capoferri.html",
      destination: "/progetti/residenziali",
      permanent: true,
    },
    {
      source: "/progetti-industriali-studio-ingegneria-capoferri.html",
      destination: "/progetti/industriali",
      permanent: true,
    },
    {
      source: "/progetti-ricettivi-studio-ingegneria-capoferri.html",
      destination: "/progetti/ricettivi",
      permanent: true,
    },
    { source: "/villa-acciaio-veneto.html", destination: "/progetti/residenziali/villa-acciaio-veneto", permanent: true },
    { source: "/capannone-erbusco.html", destination: "/progetti/industriali/capannone-erbusco", permanent: true },
    { source: "/superstudio-village.html", destination: "/progetti/ricettivi/superstudio-village", permanent: true },
    { source: "/superstudio-maxi.html", destination: "/progetti/ricettivi/superstudio-maxi", permanent: true },
  ];
}

export default nextConfig;
