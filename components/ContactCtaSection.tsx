import Link from "next/link";
import { fontDisplay } from "@/lib/fonts";
import { linkTitles } from "@/lib/link-seo";
import { ui } from "@/lib/ui";

type Props = {
  title?: string;
  description?: string;
  className?: string;
};

export function ContactCtaSection({
  title = "Hai un progetto in mente?",
  description = "Raccontaci la tua esigenza: analizziamo fattibilità, costi e tempi e ti proponiamo la soluzione strutturale più adatta.",
  className = "mt-10",
}: Props) {
  return (
    <section className={className}>
      <div className="frost-card rounded-2xl p-5 text-center sm:p-7 md:p-8">
        <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-3`}>{title}</h2>
        <p className={`copy-rhythm mx-auto mb-6 max-w-[560px] ${ui.bodyMuted}`}>{description}</p>
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contatti#form-contatti" className={ui.btnPrimary} title={linkTitles.consulenza}>
            Richiedi una consulenza
          </Link>
          <Link href="/servizi#progettazione-strutturale" className={ui.btnOutline} title={linkTitles.servizio("Progettazione strutturale")}>
            Scopri i servizi
          </Link>
        </div>
      </div>
    </section>
  );
}
