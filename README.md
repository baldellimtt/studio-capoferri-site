# Sito Web di Studio Capoferri – Progettazione Strutture in Acciaio

Benvenuti nel repository del sito web dello **Studio Capoferri**, specializzato nella progettazione strutturale in acciaio per edilizia civile e industriale.

Il sito fornisce informazioni sui servizi offerti, i progetti realizzati, i contatti e l'approccio tecnico-professionale dello studio.

Dominio ufficiale: [www.studiocapoferri.eu](https://www.studiocapoferri.eu)

## Struttura del progetto (Next.js)

- **`app/`** — App Router: pagine, layout, metadata e route.
- **`components/`** — Componenti React riutilizzabili (header, footer, form, ecc.).
- **`lib/`** — Dati e utilità condivisi.
- **`assets/`** — Immagini e media sorgente (unica cartella da versionare).
- **`public/`** — File serviti staticamente; `public/assets/` è generata da `sync-static.cjs` e non va committata.
- **`scripts/sync-static.cjs`** — Copia `assets/` in `public/assets/` e file di root in `public/` prima di dev/build (vedi `package.json`).

Stili globali e Tailwind sono configurati nel progetto Next (vedi `app/globals.css` e `postcss.config.mjs`).

## Sviluppo locale

```bash
npm install
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000).

## Build produzione

```bash
npm run build
npm start
```

Per export statico (hosting senza Node): `npm run build:static` (variabile `STATIC_EXPORT=1`).
