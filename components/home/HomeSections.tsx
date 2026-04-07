"use client";

import Image from "next/image";
import Link from "next/link";
import { fontDisplay } from "@/lib/fonts";
import {
  certifications,
  certificationsIntro,
  contattiIntro,
  homeChiSiamo,
  homeProgettiIntro,
  homeServiziIntro,
  homeServiceCards,
  zoneContent,
  zoneDescription,
  zoneFooter,
} from "@/lib/content";
import { homeChiSiamoImages, projectPreview } from "@/lib/images";
import { site } from "@/lib/site";
import { ui } from "@/lib/ui";
import { ServiceIcon } from "./ServiceIcons";
import { StatsSection } from "./StatsSection";

const titleCls = `${fontDisplay.className} section-title home-section-title reveal-title`;

export function HomeSections() {
  return (
    <>
      {/* ── Chi siamo ── */}
      <section id="chi-siamo" className="lazy-section section-shell scroll-mt-[100px] bg-[#fafbfc] px-4 sm:px-5 md:px-10">
        <div className="mx-auto max-w-[1140px]">
          <div className="home-section-head">
            <h2 className={titleCls}>{homeChiSiamo.title}</h2>
            <div className="home-section-accent" aria-hidden />
          </div>
          <div className="space-y-12 sm:space-y-16 md:space-y-20">
            {homeChiSiamo.blocks.map((block, idx) => {
              const img = block.image === "team" ? homeChiSiamoImages.team : homeChiSiamoImages.cantiere;
              const reverse = idx % 2 === 1;
              const textEl = (
                <div className="flex min-h-0 md:h-full md:items-center">
                  <div className="home-section-body copy-rhythm reading-measure text-[0.98rem] sm:text-[1.05rem]">{block.text}</div>
                </div>
              );
              const imgEl = (
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-[#2a3f54]/10 shadow-[0_10px_30px_rgba(0,0,0,0.08)] md:aspect-auto md:min-h-[300px] md:h-full">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(min-width:768px) 50vw, 100vw" />
                  <div className="image-unify-overlay" aria-hidden />
                </div>
              );
              return (
                <div key={idx} className="reveal-block grid gap-6 sm:gap-10 md:grid-cols-2 md:items-stretch">
                  {reverse ? (
                    <>
                      {imgEl}
                      {textEl}
                    </>
                  ) : (
                    <>
                      {textEl}
                      {imgEl}
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Servizi ── */}
      <section id="servizi" className="lazy-section section-shell scroll-mt-[100px] bg-white px-4 sm:px-5 md:px-10">
        <div className="mx-auto max-w-[1140px]">
          <div className="home-split-header reveal-block">
            <div className="home-split-header__left">
              <h2 className={titleCls}>Servizi</h2>
              <div className="home-section-accent" aria-hidden />
            </div>
            <p className="home-split-header__right">{homeServiziIntro}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
            {homeServiceCards.map((card, idx) => (
              <article
                key={card.title}
                className="reveal-block frost-card group flex flex-col rounded-2xl p-6 transition hover:-translate-y-1 hover:border-[#2a3f54]/25 hover:shadow-[0_12px_32px_rgba(42,63,84,0.12)] sm:p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#2a3f54] to-[#3d5a7a] text-white sm:mb-5 sm:h-14 sm:w-14">
                  <ServiceIcon index={idx} className="h-7 w-7 sm:h-9 sm:w-9" />
                </div>
                <h3 className={`${fontDisplay.className} mb-2 text-lg tracking-[0.04em] text-[#2a3f54] sm:mb-3 sm:text-xl`}>{card.title}</h3>
                <p className="copy-rhythm mb-5 flex-1 text-sm text-[#555] sm:mb-6">{card.description}</p>
                <Link
                  href={card.href}
                  className="touch-target mt-auto inline-block min-h-[44px] py-2 text-sm font-semibold text-[#2a3f54] underline-offset-4 transition group-hover:underline"
                >
                  Scopri di più
                </Link>
              </article>
            ))}
          </div>
          <p className="mt-8 sm:mt-12">
            <Link href="/servizi" className={`${ui.btnOutline} inline-flex w-full sm:w-auto`}>
              Scopri tutti i nostri servizi
            </Link>
          </p>
        </div>
      </section>

      {/* ── Progetti ── */}
      <section id="progetti" className="lazy-section section-shell scroll-mt-[100px] bg-[#fafbfc] px-4 sm:px-5 md:px-10">
        <div className="mx-auto max-w-[1140px]">
          <div className="home-split-header reveal-block">
            <div className="home-split-header__left">
              <h2 className={titleCls}>Progetti</h2>
              <div className="home-section-accent" aria-hidden />
            </div>
            <p className="home-split-header__right">{homeProgettiIntro}</p>
          </div>
          <div className="grid gap-5 sm:gap-6 md:grid-cols-3">
            {projectPreview.map((p) => (
              <div key={p.href} className="reveal-block">
                <Link href={p.href} className="group block overflow-hidden rounded-2xl border border-[#2a3f54]/10 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition hover:shadow-[0_14px_36px_rgba(42,63,84,0.14)]">
                  <div className="relative aspect-[4/3]">
                    <Image src={p.image} alt={p.alt} fill className="object-cover transition duration-500 group-hover:scale-[1.03]" sizes="(min-width:1024px) 33vw, 100vw" />
                    <div className="image-unify-overlay" aria-hidden />
                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "28px 28px",
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1f2e3d]/95 to-transparent px-4 py-3 sm:py-4">
                      <span className={`${fontDisplay.className} text-base tracking-[0.04em] text-white sm:text-lg`}>{p.caption}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 sm:mt-12">
            <Link href="/progetti" className={`${ui.btnOutline} inline-flex w-full sm:w-auto`}>
              Esplora tutti i progetti realizzati
            </Link>
          </p>
        </div>
      </section>

      {/* ── Abilitazioni professionali ── */}
      <section id="certificazioni" className="lazy-section section-shell scroll-mt-[100px] bg-white px-4 sm:px-5 md:px-10">
        <div className="mx-auto max-w-[1140px]">
          <div className="home-split-header reveal-block">
            <div className="home-split-header__left">
              <h2 className={titleCls}>Abilitazioni professionali</h2>
              <div className="home-section-accent" aria-hidden />
            </div>
            <p className="home-split-header__right">{certificationsIntro}</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4">
            {certifications.map((c) => (
              <article key={c.title} className="reveal-block frost-card rounded-xl p-4 text-left sm:rounded-2xl sm:p-6">
                <h3 className={`${fontDisplay.className} mb-2 text-base uppercase tracking-[0.06em] text-[#2a3f54] sm:mb-3 sm:text-lg md:text-xl`}>
                  {c.title}
                </h3>
                <p className="text-[0.88rem] leading-relaxed text-[#555] sm:text-[0.95rem] md:text-base">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dove operiamo ── */}
      <section id="zone-servite" className="lazy-section section-shell scroll-mt-[100px] bg-[#fafbfc] px-4 sm:px-5 md:px-10">
        <div className="mx-auto max-w-[1140px]">
          <div className="home-split-header reveal-block">
            <div className="home-split-header__left">
              <h2 className={titleCls}>{zoneContent.title}</h2>
              <div className="home-section-accent" aria-hidden />
            </div>
            <div className="home-split-header__right">{zoneDescription}</div>
          </div>
          <div className="reveal-block frost-card flex items-start gap-5 rounded-2xl p-6 sm:gap-6 sm:p-8">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#2a3f54] to-[#3d5a7a] text-white sm:h-14 sm:w-14">
              <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div className="min-w-0">
              <h3 className={`${fontDisplay.className} text-lg tracking-[0.04em] text-[#2a3f54] sm:text-xl`}>
                {zoneContent.heading}
              </h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-[#555] sm:text-[0.95rem]">
                {zoneFooter}
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* ── Contatti ── */}
      <section id="contatti" className="lazy-section section-shell scroll-mt-[100px] bg-white px-4 sm:px-5 md:px-10">
        <div className="mx-auto max-w-[1140px]">
          <div className="home-split-header reveal-block">
            <div className="home-split-header__left">
              <h2 className={titleCls}>Contatti</h2>
              <div className="home-section-accent" aria-hidden />
            </div>
            <p className="home-split-header__right">{contattiIntro}</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">
            <article className="reveal-block frost-card rounded-2xl p-5 sm:p-6">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#2a3f54] to-[#3d5a7a] text-white sm:mb-4 sm:h-12 sm:w-12">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2 7l10 6 10-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className={`${fontDisplay.className} mb-1.5 text-base tracking-[0.04em] text-[#2a3f54] sm:text-lg`}>Email</h3>
              <a href={`mailto:${site.email}`} className="text-[0.88rem] text-[#555] underline-offset-2 transition hover:text-[#2a3f54] hover:underline sm:text-[0.95rem]">
                {site.email}
              </a>
            </article>
            <article className="reveal-block frost-card rounded-2xl p-5 sm:p-6">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#2a3f54] to-[#3d5a7a] text-white sm:mb-4 sm:h-12 sm:w-12">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className={`${fontDisplay.className} mb-1.5 text-base tracking-[0.04em] text-[#2a3f54] sm:text-lg`}>Telefono</h3>
              <a href={`tel:${site.phoneTel}`} className="text-[0.88rem] text-[#555] underline-offset-2 transition hover:text-[#2a3f54] hover:underline sm:text-[0.95rem]">
                {site.phoneDisplay}
              </a>
            </article>
            <article className="reveal-block frost-card rounded-2xl p-5 sm:p-6">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#2a3f54] to-[#3d5a7a] text-white sm:mb-4 sm:h-12 sm:w-12">
                <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </div>
              <h3 className={`${fontDisplay.className} mb-1.5 text-base tracking-[0.04em] text-[#2a3f54] sm:text-lg`}>Sede</h3>
              <p className="text-[0.88rem] leading-relaxed text-[#555] sm:text-[0.95rem]">{site.addressLine}</p>
            </article>
          </div>
          <p className="mt-8 sm:mt-12">
            <Link href="/contatti#form-contatti" className={`${ui.btnOutline} inline-flex w-full sm:w-auto`}>
              Scrivici direttamente
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
