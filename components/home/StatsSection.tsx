"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { fontDisplay } from "@/lib/fonts";
import { stats } from "@/lib/content";

function Counter({
  target,
  suffix,
  reduced,
  active,
}: {
  target: number;
  suffix: string;
  reduced: boolean;
  active: boolean;
}) {
  const [v, setV] = useState(reduced ? target : 0);

  useEffect(() => {
    if (reduced) {
      setV(target);
      return;
    }
    if (!active) return;
    const duration = 1800;
    const t0 = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const ease = 1 - (1 - p) ** 3;
      setV(Math.floor(target * ease));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, reduced]);

  return (
    <span className={`${fontDisplay.className} text-3xl text-white sm:text-4xl md:text-5xl`}>
      {v}
      {suffix}
    </span>
  );
}

export function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = !!useReducedMotion();

  return (
    <section
      ref={ref}
      className="lazy-section bg-gradient-to-br from-[#2a3f54] to-[#1f2e3d] px-4 py-14 text-white sm:px-5 sm:py-20 md:px-10"
      aria-labelledby="stats-heading"
    >
      <div className="mx-auto max-w-[1140px]">
        <div className="home-section-head mb-8 sm:mb-12">
          <h2
            id="stats-heading"
            className={`${fontDisplay.className} section-title home-section-title home-section-title--inverted reveal-title`}
          >
            Statistiche
          </h2>
          <div className="home-section-accent home-section-accent--light" aria-hidden />
        </div>
        <div className="grid grid-cols-3 gap-3 sm:gap-8">
          {stats.map((s) => (
            <div
              key={s.label}
              className="reveal-block rounded-xl border border-white/15 bg-white/[0.07] px-3 py-5 text-center shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:px-6 sm:py-8"
            >
              <Counter target={s.value} suffix={s.suffix} reduced={reduced} active={inView} />
              <p className="mt-2 text-[0.65rem] font-medium uppercase tracking-[0.08em] text-white/85 sm:mt-3 sm:text-sm sm:tracking-[0.12em]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
