/**
 * Sincronizza contenuti statici per Next.js:
 * - assets/ → public/assets/
 * - llms.txt / CNAME se presenti (robots è generato da app/robots.ts)
 */
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");

const assetsSrc = path.join(root, "assets");
const assetsDest = path.join(root, "public", "assets");
if (fs.existsSync(assetsSrc)) {
  fs.mkdirSync(path.dirname(assetsDest), { recursive: true });
  if (fs.existsSync(assetsDest)) {
    fs.rmSync(assetsDest, { recursive: true, force: true });
  }
  fs.cpSync(assetsSrc, assetsDest, { recursive: true });
  console.log("[sync-static] assets/ → public/assets/");
} else {
  console.warn("[sync-static] Cartella assets/ assente.");
}

// Evita che un robots.txt statico sovrascriva quello generato da app/robots.ts
const publicRobots = path.join(root, "public", "robots.txt");
if (fs.existsSync(publicRobots)) {
  fs.unlinkSync(publicRobots);
  console.log("[sync-static] rimosso public/robots.txt (usa app/robots.ts)");
}

for (const extra of ["favicon.ico", "llms.txt", "CNAME"]) {
  const p = path.join(root, extra);
  if (fs.existsSync(p)) {
    fs.copyFileSync(p, path.join(root, "public", extra));
    console.log(`[sync-static] ${extra} → public/${extra}`);
  }
}

// Redirect dei vecchi URL .html: su GitHub Pages (export statico) i redirects()
// di next.config.ts non funzionano, quindi generiamo pagine-ponte statiche.
const SITE_URL = "https://www.studiocapoferri.eu";
const legacyRedirects = {
  "chi-siamo.html": "/chi-siamo/",
  "servizi-studio-progettazione.html": "/servizi/",
  "progettazione-strutture-brescia-contatti.html": "/contatti/",
  "privacy-policy.html": "/privacy-policy/",
  "progetti-studio-ingegneria-capoferri.html": "/progetti/",
  "progetti-residenziali-studio-ingegneria-capoferri.html": "/progetti/residenziali/",
  "progetti-industriali-studio-ingegneria-capoferri.html": "/progetti/industriali/",
  "progetti-ricettivi-studio-ingegneria-capoferri.html": "/progetti/ricettivi/",
  "villa-acciaio-veneto.html": "/progetti/residenziali/villa-acciaio-veneto/",
  "capannone-erbusco.html": "/progetti/industriali/capannone-erbusco/",
  "superstudio-village.html": "/progetti/ricettivi/superstudio-village/",
  "superstudio-maxi.html": "/progetti/ricettivi/superstudio-maxi/",
};
for (const [from, to] of Object.entries(legacyRedirects)) {
  const target = `${SITE_URL}${to}`;
  const html = `<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="utf-8">
<title>Pagina spostata — Studio Capoferri</title>
<meta http-equiv="refresh" content="0; url=${target}">
<link rel="canonical" href="${target}">
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<p>Questa pagina è stata spostata. <a href="${target}" title="Vai alla nuova pagina — Studio Capoferri">Vai alla nuova pagina</a>.</p>
</body>
</html>
`;
  fs.writeFileSync(path.join(root, "public", from), html);
}
console.log(`[sync-static] ${Object.keys(legacyRedirects).length} redirect legacy .html → public/`);

console.log("[sync-static] Completato.");
