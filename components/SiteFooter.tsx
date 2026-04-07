import Link from "next/link";
import { fontDisplay } from "@/lib/fonts";
import { layoutContentMaxClass, layoutGutterXClass, site } from "@/lib/site";
import { ui } from "@/lib/ui";

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-[#3d5a7a]/35 bg-gradient-to-br from-[#2a3f54] via-[#24384b] to-[#1f2e3d] py-10 text-white sm:mt-16 sm:py-14">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <div className="grid gap-8 sm:gap-10 md:grid-cols-3">
        <div>
          <h3 className={`${fontDisplay.className} mb-3 text-lg tracking-[0.06em] sm:mb-4 sm:text-xl`}>Servizi</h3>
          <ul className="space-y-0.5 text-sm text-white/82">
            <li>
              <Link className={ui.footerLink} href="/servizi#progettazione-strutturale">
                Progettazione strutturale
              </Link>
            </li>
            <li>
              <Link className={ui.footerLink} href="/servizi#urbanistica-architettura">
                Urbanistica e architettura
              </Link>
            </li>
            <li>
              <Link className={ui.footerLink} href="/servizi#direzione-lavori">
                Direzione lavori
              </Link>
            </li>
            <li>
              <Link className={ui.footerLink} href="/servizi#servizi-tecnici">
                Servizi tecnici
              </Link>
            </li>
            <li>
              <Link className={ui.footerLink} href="/servizi#sicurezza-cantieri">
                Sicurezza cantieri
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={`${fontDisplay.className} mb-3 text-lg tracking-[0.06em] sm:mb-4 sm:text-xl`}>Azienda</h3>
          <ul className="space-y-0.5 text-sm text-white/82">
            <li>
              <Link className={ui.footerLink} href="/chi-siamo">
                Chi siamo
              </Link>
            </li>
            <li>
              <Link className={ui.footerLink} href="/progetti">
                Progetti
              </Link>
            </li>
            <li>
              <Link className={ui.footerLink} href="/contatti">
                Contatti
              </Link>
            </li>
            <li>
              <Link className={ui.footerLink} href="/privacy-policy">
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
              <a className={ui.footerLink} href={`tel:${site.phoneTel}`}>
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a className={ui.footerLink} href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </li>
          </ul>
        </div>
          </div>
          <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/75 sm:mt-12 sm:pt-8">
            <p>
              &copy; {new Date().getFullYear()} {site.legalName} — Tutti i diritti riservati |{" "}
              <Link className={`${ui.footerLink} underline underline-offset-2`} href="/privacy-policy">
                Privacy policy
              </Link>
            </p>
            <p className="mt-2 text-xs font-semibold tracking-wide text-white/85">
              INGEGNERIA - ARCHITETTURA - PROGETTAZIONE STRUTTURE IN ACCIAIO
            </p>
            <p className="mt-1">P.IVA {site.piva}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
