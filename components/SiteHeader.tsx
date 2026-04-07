"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fontDisplay } from "@/lib/fonts";
import { layoutContentMaxClass, layoutGutterXClass, navItems } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", open);
    return () => document.body.classList.remove("overflow-hidden");
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-[1000] border-b border-[#2a3f54]/10 transition-all duration-300 ${
        scrolled
          ? "bg-white/88 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl"
          : "bg-white/72 backdrop-blur-2xl"
      }`}
    >
      <div className={layoutGutterXClass}>
        <div className={`flex h-[64px] items-center justify-between sm:h-[72px] md:h-[94px] ${layoutContentMaxClass}`}>
          <Link href="/" className="flex shrink-0 items-center" title="Torna alla home">
            <Image
              src="/assets/logo-studio-ingegneria-removebg-preview.png"
              alt="Studio Capoferri — ingegneria e progettazione strutturale"
              width={220}
              height={70}
              className="h-[42px] w-auto sm:h-[50px] md:h-[70px]"
              priority
            />
          </Link>

          <nav className="hidden shrink-0 md:block" aria-label="Menu principale">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${fontDisplay.className} text-[1.05rem] uppercase tracking-[0.12em] text-[#2a2a2a] transition hover:text-[#2a3f54] lg:text-[1.24rem]`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-md border border-[#2a3f54]/15 bg-white/70 shadow-sm md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-0.5 w-7 rounded bg-[#2a3f54] transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`block h-0.5 w-7 rounded bg-[#2a3f54] transition ${open ? "opacity-0" : ""}`} />
            <span
              className={`block h-0.5 w-7 rounded bg-[#2a3f54] transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        className={`fixed inset-0 top-[64px] z-[999] flex flex-col bg-gradient-to-br from-[#2a3f54] to-[#1f2e3d] transition sm:top-[72px] md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className={`flex-1 overflow-y-auto ${layoutGutterXClass}`}>
          <ul className={`${layoutContentMaxClass} flex flex-col gap-1 py-6 sm:py-8`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${fontDisplay.className} block min-h-[48px] py-4 text-center text-xl uppercase tracking-[0.12em] text-white transition hover:text-white/85 sm:text-2xl`}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
