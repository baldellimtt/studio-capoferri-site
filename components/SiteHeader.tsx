"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { fontDisplay } from "@/lib/fonts";
import { ReadingProgressBar } from "@/components/ReadingProgressBar";
import { layoutContentMaxClass, layoutGutterXClass, navItems } from "@/lib/site";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  const closeMenu = useCallback(() => setOpen(false), []);

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

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }
      if (e.key !== "Tab") return;

      const root = mobileNavRef.current;
      if (!root) return;

      const focusable = Array.from(
        root.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.getClientRects().length > 0);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement instanceof HTMLElement ? document.activeElement : null;

      if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && (active === first || active === menuButtonRef.current)) {
        e.preventDefault();
        last.focus();
      }
    };

    lastFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    window.addEventListener("keydown", onKey);

    const t = window.setTimeout(() => {
      mobileNavRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    }, 0);

    return () => {
      window.removeEventListener("keydown", onKey);
      window.clearTimeout(t);
      lastFocusedRef.current?.focus();
    };
  }, [open, closeMenu]);

  return (
    <>
      <header
        className={`sticky top-0 z-[1000] transition-all duration-300 ${
          scrolled
            ? "bg-white/88 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-xl"
            : "bg-white/72 backdrop-blur-2xl"
        }`}
      >
        <div className={layoutGutterXClass}>
          <div className={`flex h-[72px] items-center justify-between sm:h-[78px] md:h-[94px] ${layoutContentMaxClass}`}>
            <Link href="/" className="focus-ring flex shrink-0 items-center" title="Torna alla home">
              <Image
                src="/assets/logo-studio-ingegneria-removebg-preview.png"
                alt="Studio Capoferri — ingegneria e progettazione strutturale"
                width={220}
                height={70}
                className="h-[46px] w-auto sm:h-[52px] md:h-[70px]"
                priority
              />
            </Link>

            <nav className="hidden shrink-0 md:block" aria-label="Menu principale">
              <ul className="flex items-center gap-6 lg:gap-8">
                {navItems.map((item) => {
                  const active = isActivePath(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`focus-ring ${fontDisplay.className} text-[1.05rem] uppercase tracking-[0.12em] transition lg:text-[1.24rem] ${
                          active ? "text-[#2a3f54]" : "text-[#2a2a2a] hover:text-[#2a3f54]"
                        }`}
                        aria-current={active ? "page" : undefined}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <button
              ref={menuButtonRef}
              type="button"
              className="focus-ring flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-md border border-[#2a3f54]/15 bg-white/70 shadow-sm md:hidden"
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
        <ReadingProgressBar />
      </header>

      <div
        ref={mobileNavRef}
        id="mobile-nav"
        className={`fixed inset-0 top-[73px] z-[999] flex flex-col bg-gradient-to-br from-[#2a3f54] to-[#1f2e3d] transition sm:top-[79px] md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className={`flex flex-1 items-center justify-center overflow-y-auto ${layoutGutterXClass}`}>
          <ul className={`${layoutContentMaxClass} flex flex-col gap-3 py-8`}>
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`focus-ring ${fontDisplay.className} block min-h-[48px] py-5 text-center text-2xl uppercase tracking-[0.14em] transition sm:text-3xl ${
                      active ? "text-white" : "text-white/90 hover:text-white/80"
                    }`}
                    aria-current={active ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
