"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { fontDisplay } from "@/lib/fonts";
import { ui } from "@/lib/ui";

type Img = { src: string; alt: string };

type Props = {
  images: Img[];
  className?: string;
};

export function ProjectImageLightbox({ images, className = "" }: Props) {
  const [open, setOpen] = useState<number | null>(null);
  const lightboxTouchX = useRef<number | null>(null);

  const close = useCallback(() => setOpen(null), []);

  const go = useCallback(
    (delta: number) => {
      setOpen((i) => {
        if (i === null) return null;
        const n = images.length;
        return (i + delta + n) % n;
      });
    },
    [images.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, go]);

  const onLightboxTouchStart = (e: React.TouchEvent) => {
    lightboxTouchX.current = e.touches[0]?.clientX ?? null;
  };

  const onLightboxTouchEnd = (e: React.TouchEvent) => {
    if (lightboxTouchX.current === null || images.length < 2) return;
    const dx = e.changedTouches[0].clientX - lightboxTouchX.current;
    lightboxTouchX.current = null;
    if (Math.abs(dx) < 56) return;
    go(dx < 0 ? 1 : -1);
  };

  if (images.length === 0) return null;

  return (
    <section className={className} aria-label="Galleria fotografica">
      <div className="fine-divider mb-5" />
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <h2 className={`${fontDisplay.className} ${ui.gallerySectionTitle}`}>Galleria</h2>
        <p className="text-xs text-[#666] sm:text-sm">Scorri · clic per ingrandire</p>
      </div>

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-10 bg-gradient-to-r from-[#fafbfc] to-transparent sm:w-14"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-10 bg-gradient-to-l from-[#fafbfc] to-transparent sm:w-14"
          aria-hidden
        />

        <div
          className="-mx-1 flex gap-3 overflow-x-auto overscroll-x-contain px-1 pb-2 pt-1 [scrollbar-width:thin] [scrollbar-color:rgba(42,63,84,0.35)_transparent] snap-x snap-mandatory sm:gap-4"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {images.map((img, i) => (
            <button
              key={`${img.src}-${i}`}
              type="button"
              onClick={() => setOpen(i)}
              className="group relative h-[220px] w-[min(82vw,380px)] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#2a3f54]/12 bg-white text-left shadow-[0_8px_28px_rgba(42,63,84,0.08)] ring-[#2a3f54]/0 ring-offset-2 transition hover:-translate-y-0.5 hover:border-[#2a3f54]/22 hover:shadow-[0_14px_36px_rgba(42,63,84,0.12)] hover:ring-2 hover:ring-[#2a3f54]/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2a3f54] sm:h-[260px] sm:w-[min(42vw,400px)] md:h-[280px] md:w-[min(36vw,440px)]"
              aria-label={`Ingrandisci immagine ${i + 1} di ${images.length}: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                sizes="(min-width:1024px) 440px, (min-width:640px) 42vw, 82vw"
              />
              <div className="image-unify-overlay pointer-events-none opacity-80" aria-hidden />
              <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1f2e3d]/90 to-transparent px-3 py-2.5 text-[0.7rem] font-medium tracking-wide text-white/95 sm:text-xs">
                {i + 1} / {images.length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {open !== null ? (
        <div
          className="fixed inset-0 z-[10050] flex items-center justify-center bg-[#0b0f14]/92 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`Immagine ${open + 1} di ${images.length}`}
          onClick={close}
          onTouchStart={onLightboxTouchStart}
          onTouchEnd={onLightboxTouchEnd}
        >
          <button
            type="button"
            className="absolute right-3 top-3 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl leading-none text-white backdrop-blur transition hover:bg-white/20 sm:right-5 sm:top-5"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Chiudi galleria"
          >
            ×
          </button>
          {images.length > 1 ? (
            <>
              <button
                type="button"
                className="absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur transition hover:bg-white/20 sm:left-5"
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
                aria-label="Immagine precedente"
              >
                ‹
              </button>
              <button
                type="button"
                className="absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur transition hover:bg-white/20 sm:right-5"
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
                aria-label="Immagine successiva"
              >
                ›
              </button>
            </>
          ) : null}

          <div
            className="relative mx-4 flex h-[min(88vh,920px)] w-full max-w-[min(96vw,1280px)] items-center justify-center sm:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[open].src}
              alt={images[open].alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          <p className="pointer-events-none absolute bottom-4 left-0 right-0 z-10 text-center text-xs text-white/75 sm:bottom-6 sm:text-sm">
            {open + 1} / {images.length}
          </p>
        </div>
      ) : null}
    </section>
  );
}
