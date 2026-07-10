import type { Metadata } from "next";
import { CookiePreferencesButton } from "@/components/CookiePreferencesButton";
import { fontDisplay } from "@/lib/fonts";
import { layoutContentMaxClass, layoutGutterXClass, site } from "@/lib/site";
import { ui } from "@/lib/ui";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Informativa sul trattamento dei dati personali e cookie — Studio Capoferri SRL STP.",
  alternates: { canonical: `${site.url}/privacy-policy/` },
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className="section-shell bg-[#fafbfc]">
      <div className={layoutGutterXClass}>
        <div className={layoutContentMaxClass}>
          <article className="max-w-[860px]">
        <h1 className={`${fontDisplay.className} ${ui.pageTitle} mb-7 sm:mb-10`}>Privacy policy</h1>
        <p className="mb-7 text-[0.95rem] leading-relaxed text-[#333] sm:mb-10 sm:text-[1.05rem]">
          <strong>Titolare del trattamento:</strong> Studio Capoferri SRL STP – Via Piave 35, Adro (BS) – P.IVA 04732710985 - CF 04732710985 – Email:{" "}
          <a href={`mailto:${site.email}`} className="text-[#2a3f54] underline">
            {site.email}
          </a>
        </p>

        <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-4 mt-12`}>Finalità del trattamento</h2>
        <p className="text-[1.05rem] leading-relaxed text-[#333]">
          I dati personali raccolti tramite il modulo di contatto (nome, email e messaggio) vengono utilizzati esclusivamente per rispondere alle
          richieste inviate dagli utenti.
        </p>

        <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-4 mt-12`}>Base giuridica</h2>
        <p className="text-[1.05rem] leading-relaxed text-[#333]">Il trattamento è basato sul consenso esplicito dell&apos;interessato.</p>

        <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-4 mt-12`}>Modalità di trattamento</h2>
        <p className="text-[1.05rem] leading-relaxed text-[#333]">
          I dati inseriti nel modulo di contatto vengono trasmessi tramite il servizio Formspree (vedi sezione &quot;Trasferimenti e fornitori terzi&quot;) e
          recapitati alla nostra casella email. Non vengono salvati su database dello Studio né condivisi con altre terze parti.
        </p>

        <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-4 mt-12`}>Conservazione dei dati</h2>
        <p className="text-[1.05rem] leading-relaxed text-[#333]">I dati saranno conservati solo per il tempo necessario a evadere la richiesta.</p>

        <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-4 mt-12`}>Diritti dell&apos;interessato</h2>
        <p className="text-[1.05rem] leading-relaxed text-[#333]">
          L&apos;utente può in qualsiasi momento richiedere l&apos;accesso, la rettifica o la cancellazione dei propri dati scrivendo a{" "}
          <strong>
            <a href={`mailto:${site.email}`} className="text-[#2a3f54]">
              {site.email}
            </a>
          </strong>
          .
        </p>
        <p className="mt-3 text-[1.05rem] leading-relaxed text-[#333]">
          Hai inoltre il diritto di proporre reclamo all&apos;Autorità Garante per la protezione dei dati personali (Italia) se ritieni che il trattamento
          violi la normativa applicabile.
        </p>

        <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-4 mt-12`}>Trasferimenti e fornitori terzi</h2>
        <p className="text-[1.05rem] leading-relaxed text-[#333]">
          Alcuni fornitori tecnici (es. Google Maps, Formspree) possono trattare dati anche al di fuori dello Spazio Economico Europeo. In tali casi il
          trattamento avviene secondo le garanzie previste dal GDPR (es. clausole contrattuali standard e misure supplementari ove applicabili), come
          indicate nelle policy dei rispettivi fornitori.
        </p>

        <h2 id="cookie" className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-4 mt-14 scroll-mt-[120px]`}>
          Cookie
        </h2>
        <p className="mb-10 text-[1.05rem] leading-relaxed text-[#333]">
          Questo sito utilizza cookie per garantire il corretto funzionamento e migliorare l&apos;esperienza di navigazione. Di seguito trovi tutte le
          informazioni sulle tipologie di cookie utilizzate e su come gestirle, in conformità con il Regolamento Generale sulla Protezione dei Dati
          (GDPR) e la normativa italiana in materia.
        </p>

        <div className="space-y-5 sm:space-y-8">
          <div className="rounded-xl border border-[#2a3f54]/10 bg-white p-4 shadow-sm sm:p-6">
            <h3 className="mb-3 font-semibold text-[#2a3f54]">Cookie tecnici (necessari)</h3>
            <p className="mb-3 text-[1.05rem] leading-relaxed text-[#333]">
              Cookie strettamente necessari per il funzionamento del sito. Questi cookie non richiedono il consenso dell&apos;utente secondo la normativa
              vigente (art. 122 del D.Lgs. 196/2003) e non possono essere disabilitati:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-[#333]">
              <li>
                <strong>Cookie di sessione</strong>: utilizzati per mantenere la sessione durante la navigazione. Durata: sessione (eliminati alla
                chiusura del browser)
              </li>
              <li>
                <strong>Cookie di preferenze</strong>: utilizzati per ricordare le preferenze dell&apos;utente (es. consenso cookie). Nome:{" "}
                <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-sm">cookie_consent_studio_capoferri</code>. Durata: 365 giorni
              </li>
            </ul>
            <p className="mt-3 text-[1.05rem] text-[#333]">
              <strong>Base giuridica:</strong> Interesse legittimo del titolare (art. 6, comma 1, lett. f GDPR)
            </p>
          </div>

          <div className="rounded-xl border border-[#2a3f54]/10 bg-white p-4 shadow-sm sm:p-6">
            <h3 className="mb-3 font-semibold text-[#2a3f54]">Cookie di terze parti</h3>
            <p className="mb-3 text-[1.05rem] leading-relaxed text-[#333]">
              In alcune pagine del sito (pagina Contatti) viene utilizzato <strong>Google Maps</strong> per visualizzare la mappa della nostra sede.
              Google Maps può impostare cookie di terze parti per il funzionamento del servizio, tra cui:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-[#333]">
              <li>Cookie di funzionalità per la visualizzazione della mappa</li>
              <li>Cookie di preferenze per personalizzare la visualizzazione</li>
              <li>Cookie analitici per statistiche di utilizzo (se abilitati da Google)</li>
            </ul>
            <p className="mt-3 text-[1.05rem] leading-relaxed text-[#333]">
              Questi cookie vengono caricati <strong>solo dopo aver accettato</strong> l&apos;informativa sui cookie tramite il banner di consenso. La
              durata dei cookie di Google Maps varia in base al tipo (da sessione a 2 anni).
            </p>
            <p className="mt-3 text-[1.05rem] leading-relaxed text-[#333]">
              Per maggiori informazioni consulta la{" "}
              <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#2a3f54] underline">
                Privacy Policy di Google
              </a>{" "}
              e la{" "}
              <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-[#2a3f54] underline">
                Cookie Policy di Google
              </a>
              .
            </p>
            <p className="mt-3 text-[1.05rem] text-[#333]">
              <strong>Base giuridica:</strong> Consenso dell&apos;interessato (art. 6, comma 1, lett. a GDPR)
            </p>
          </div>

          <div className="rounded-xl border border-[#2a3f54]/10 bg-white p-4 shadow-sm sm:p-6">
            <h3 className="mb-3 font-semibold text-[#2a3f54]">Form di contatto</h3>
            <p className="mb-3 text-[1.05rem] leading-relaxed text-[#333]">
              Il form di contatto utilizza il servizio <strong>Formspree</strong> per l&apos;invio delle email. Formspree utilizza esclusivamente cookie
              tecnici necessari per il corretto funzionamento del servizio di invio form. Questi cookie non vengono utilizzati per finalità di
              profilazione o marketing.
            </p>
            <p className="text-[1.05rem] leading-relaxed text-[#333]">
              I dati inviati tramite il form vengono processati da Formspree in conformità con la loro privacy policy. Per maggiori informazioni consulta
              la{" "}
              <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[#2a3f54] underline">
                Privacy Policy di Formspree
              </a>
              .
            </p>
            <p className="mt-3 text-[1.05rem] text-[#333]">
              <strong>Base giuridica:</strong> Esecuzione di un contratto o misure precontrattuali (art. 6, comma 1, lett. b GDPR)
            </p>
          </div>

          <div className="rounded-xl bg-gradient-to-br from-[#2a3f54] to-[#1f2e3d] p-4 text-white sm:p-6">
            <h3 className="mb-3 font-semibold">Gestione dei cookie</h3>
            <p className="mb-3 text-[1.05rem] leading-relaxed text-white/95">
              È possibile gestire le preferenze sui cookie attraverso il banner che appare al primo accesso al sito. I cookie tecnici non possono essere
              disabilitati in quanto necessari al funzionamento del sito.
            </p>
            <p className="mb-3 text-[1.05rem] leading-relaxed text-white/95">
              Per modificare le preferenze sui cookie, è possibile cancellare i cookie del browser e ricaricare la pagina. In alternativa, è possibile
              gestire i cookie direttamente dalle impostazioni del browser utilizzato. Per maggiori informazioni sui cookie e su come gestirli, è
              possibile consultare il sito{" "}
              <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="underline">
                www.allaboutcookies.org
              </a>
              .
            </p>
            <p className="text-[1.05rem] text-white/95">
              <strong>Nota:</strong> La disabilitazione dei cookie tecnici potrebbe compromettere alcune funzionalità del sito.
            </p>
            <div className="mt-5">
              <CookiePreferencesButton />
            </div>
          </div>
        </div>

        <h2 className={`${fontDisplay.className} ${ui.sectionHeadingAccent} mb-4 mt-12`}>Aggiornamenti dell&apos;informativa</h2>
        <p className="text-[1.05rem] leading-relaxed text-[#333]">
          Questa informativa può essere aggiornata per allineamento normativo o evoluzione tecnica del sito. Data ultimo aggiornamento:{" "}
          <strong>06/04/2026</strong>.
        </p>
          </article>
        </div>
      </div>
    </main>
  );
}
