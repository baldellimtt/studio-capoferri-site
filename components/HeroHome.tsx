"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fontDisplay } from "@/lib/fonts";
import { ui } from "@/lib/ui";
import { heroSlides } from "@/lib/images";

export function HeroHome() {
  const reduceMotion = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const t = setInterval(() => setI((v) => (v + 1) % heroSlides.length), 4500);
    return () => clearInterval(t);
  }, [reduceMotion]);

  const s = heroSlides[i];
  const subtleEase = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="relative min-h-[96svh] overflow-hidden sm:min-h-[92vh] md:min-h-[620px]" aria-label="Introduzione">
      <div className="absolute inset-0 bg-gradient-to-br from-[#243648] via-[#314a5e] to-[#415c72]" aria-hidden />

      <div className="absolute inset-0">
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1.4s] ease-in-out ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              className="object-cover brightness-[1.1] saturate-[1.04]"
              sizes="100vw"
              priority={idx === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/36 via-black/16 to-black/22" aria-hidden />
        <motion.div
          aria-hidden
          className="absolute inset-0"
          initial={reduceMotion ? false : { opacity: 0.1 }}
          animate={reduceMotion ? undefined : { opacity: [0.08, 0.12, 0.08] }}
          transition={reduceMotion ? undefined : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(circle at 70% 35%, black 12%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(circle at 70% 35%, black 12%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[96svh] max-w-[1200px] flex-col justify-end gap-5 px-4 pb-10 pt-20 sm:min-h-[92vh] sm:gap-7 sm:px-5 sm:pb-12 sm:pt-24 md:min-h-[620px] md:flex-row md:items-end md:justify-between md:gap-10 md:px-5 md:pb-20 md:pt-28">
        <motion.div
          className="max-w-[62ch] text-right md:w-[60%]"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: subtleEase }}
        >
          <p className="eyebrow mb-2 text-white/80 sm:mb-3 md:text-sm">
            Studio tecnico · Adro (BS) · Nord Italia
          </p>
          <h1
            className={`${fontDisplay.className} section-title text-[clamp(1.75rem,5.5vw,3.75rem)] text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.5)]`}
          >
            <span className="block">{s.line1}</span>
            <span className="mt-1 block text-white/95">{s.line2}</span>
          </h1>
          <p className="copy-rhythm reading-measure-tight mt-3 ml-auto text-pretty text-right text-[0.92rem] text-white/88 sm:text-[0.98rem] md:mt-5 md:text-lg">
            Progettazione strutturale, architettura e urbanistica con approccio integrato. Un unico interlocutore dalla
            fattibilità al cantiere.
          </p>
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.2, duration: 0.55, ease: subtleEase }}
          >
            <Link href="/contatti" className={`mt-6 sm:mt-8 ${ui.btnOnDark}`}>
              Richiedi una consulenza
            </Link>
          </motion.div>
        </motion.div>

        <motion.ul
          className="flex w-full flex-col gap-2 text-right text-white sm:gap-2.5 md:max-w-sm md:gap-3 md:pb-1"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduceMotion ? 0 : 0.16, duration: 0.58, ease: subtleEase }}
        >
          <li className="rounded-xl border border-white/15 bg-white/[0.08] px-4 py-3 text-sm shadow-[0_10px_30px_rgba(0,0,0,0.12)] backdrop-blur-md sm:px-5 sm:py-3.5">
            <strong className={`${fontDisplay.className} block text-2xl tracking-[0.04em] sm:text-3xl`}>40+</strong>
            <span className="text-[0.8rem] text-white/85 sm:text-sm">anni di esperienza nel settore</span>
          </li>
          <li className="rounded-xl border border-white/15 bg-white/[0.08] px-4 py-3 text-sm backdrop-blur-md sm:px-5 sm:py-3.5">
            <strong className={`${fontDisplay.className} block text-lg tracking-[0.06em] sm:text-xl md:text-2xl`}>
              Brescia · Bergamo · Milano
            </strong>
            <span className="text-[0.8rem] text-white/85 sm:text-sm">aree di intervento prioritarie</span>
          </li>
        </motion.ul>
      </div>
    </section>
  );
}
