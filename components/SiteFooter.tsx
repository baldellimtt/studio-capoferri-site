import Link from "next/link";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { fontDisplay } from "@/lib/fonts";
import { linkTitles } from "@/lib/link-seo";
import { layoutContentMaxClass, layoutGutterXClass, site, steelLandingPages } from "@/lib/site";
import { ui } from "@/lib/ui";

const footerServices = [
  { href: "/servizi#progettazione-strutturale", label: "Progettazione strutturale" },
  { href: "/servizi#urbanistica-architettura", label: "Urbanistica e architettura" },
  { href: "/servizi#direzione-lavori", label: "Direzione lavori" },
  { href: "/servizi#servizi-tecnici", label: "Servizi tecnici" },
  { href: "/servizi#sicurezza-cantieri", label: "Sicurezza cantieri" },
  { href: "/servizi#assistenza-immobiliare", label: "Assistenza immobiliare" },
] as const;

export function SiteFooter() {
  return (
    <footer className={`mt-12 border-t border-[#3d5a7a]/35 ${ui.brandGradient} py-10 text-white sm:mt-16 sm:py-14`}>
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
        <div>
          <h3 className={`${fontDisplay.className} mb-3 text-lg tracking-[0.06em] sm:mb-4 sm:text-xl`}>Servizi</h3>
          <ul className="space-y-0.5 text-sm text-white/82">
            {footerServices.map((item) => (
              <li key={item.href}>
                <Link className={ui.footerLink} href={item.href} title={linkTitles.servizio(item.label)}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/65">Progettazione acciaio</li>
            {steelLandingPages.map((page) => (
              <li key={page.href}>
                <Link
                  className={ui.footerLink}
                  href={page.href}
                  title={linkTitles.acciaio(page.label.replace("Progettazione acciaio — ", ""))}
                >
                  {page.label.replace("Progettazione acciaio — ", "")}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className={`${fontDisplay.className} mb-3 text-lg tracking-[0.06em] sm:mb-4 sm:text-xl`}>Azienda</h3>
          <ul className="space-y-0.5 text-sm text-white/82">
            <li>
              <Link className={ui.footerLink} href="/chi-siamo" title={linkTitles.pagina("Chi siamo")}>
                Chi siamo
              </Link>
            </li>
            <li>
              <Link className={ui.footerLink} href="/progetti" title={linkTitles.pagina("Progetti")}>
                Progetti
              </Link>
            </li>
            <li>
              <Link className={ui.footerLink} href="/contatti" title={linkTitles.pagina("Contatti")}>
                Contatti
              </Link>
            </li>
            <li>
              <Link className={ui.footerLink} href="/privacy-policy" title={linkTitles.privacy}>
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={`${fontDisplay.className} mb-3 text-lg tracking-[0.06em] sm:mb-4 sm:text-xl`}>Contatti</h3>
          <ul className="space-y-0.5 text-sm text-white/82">
            <li className="py-1.5">{site.addressLine}</li>
            <li>
              <a className={ui.footerLink} href={`tel:${site.phoneTel}`} title={linkTitles.telefono(site.phoneDisplay)}>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a className={ui.footerLink} href={`mailto:${site.email}`} title={linkTitles.email(site.email)}>
                {site.email}
              </a>
            </li>
          </ul>
        </div>
          </div>
          <div className="mt-8 flex justify-center sm:mt-10">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title={linkTitles.linkedin}
              aria-label="Seguici su LinkedIn — Studio Capoferri"
              className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white transition hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
            >
              <LinkedInIcon />
            </a>
          </div>
          <div className="mt-6 border-t border-white/10 pt-6 text-center text-xs text-white/75 sm:mt-8 sm:pt-8">
            <p>
              &copy; {new Date().getFullYear()} {site.legalName} — Tutti i diritti riservati |{" "}
              <Link className={`${ui.footerLink} underline underline-offset-2`} href="/privacy-policy" title={linkTitles.privacy}>
                Privacy policy
              </Link>
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/85">
              {site.tagline}
            </p>
            <p className="mt-1">P.IVA {site.piva}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
