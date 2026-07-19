/**
 * Copia sitemap.xml → sitemap-pages.xml dopo l'export statico.
 * Serve un secondo URL “pulito” per Google Search Console quando
 * /sitemap.xml resta bloccato su “Impossibile recuperare” (caso noto con GitHub Pages).
 */
const fs = require("fs");
const path = require("path");

const out = path.join(__dirname, "..", "out");
const src = path.join(out, "sitemap.xml");
const dest = path.join(out, "sitemap-pages.xml");

if (!fs.existsSync(src)) {
  console.warn("[duplicate-sitemap] out/sitemap.xml assente — skip");
  process.exit(0);
}

fs.copyFileSync(src, dest);
console.log("[duplicate-sitemap] out/sitemap.xml → out/sitemap-pages.xml");
