'use client';

import { ArrowRight, Phone } from 'lucide-react';
import { siteContent } from '../data/siteContent';
import { useQuoteModal } from './QuoteProvider';
import { ScrollReveal } from './ScrollReveal';

export function CtaBannerSection() {
  const { openQuote } = useQuoteModal();
  const { bottomCta, brand } = siteContent;

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0B63D6] via-[#1370E3] to-[#1778EE] py-10 text-white md:py-12">
      {/* Subtle decorative architectural & splash SVG accents on far left */}
      <svg
        aria-hidden="true"
        viewBox="0 0 360 180"
        fill="none"
        className="pointer-events-none absolute inset-y-0 left-0 h-full w-72 text-white/15 sm:w-96"
        preserveAspectRatio="xMinYMid slice"
      >
        <path
          d="M-10 150C40 120 75 65 145 58C190 54 225 90 275 84C305 80 328 60 350 40"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M-20 115C30 90 70 28 135 24C188 21 215 62 260 56"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          strokeLinecap="round"
        />
        <circle cx="88" cy="128" r="48" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="88" cy="128" r="24" fill="currentColor" fillOpacity="0.25" />
        <path
          d="M28 52L76 24L124 52V104H28V52Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="176" cy="112" r="5" fill="currentColor" />
        <circle cx="204" cy="40" r="3.5" fill="currentColor" />
        <circle cx="148" cy="144" r="4" fill="currentColor" />
      </svg>

      {/* Subtle right glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-white/10 blur-2xl"
      />

      <ScrollReveal className="section-container relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            {bottomCta.title}
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-blue-50/90 sm:text-base">
            {bottomCta.subtitle}
          </p>
        </div>

        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center lg:gap-7">
          <button
            type="button"
            onClick={() => openQuote()}
            className="group inline-flex cursor-pointer items-center gap-2 rounded-full bg-amber-cta px-6 py-3.5 text-sm font-bold text-navy-950 shadow-cta transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-cta-hover active:bg-amber-cta-active"
          >
            <span>{bottomCta.ctaLabel}</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </button>

          <span aria-hidden="true" className="hidden h-11 w-px bg-white/25 sm:block" />

          <a
            href={brand.telHref}
            className="group flex items-center gap-3.5 text-white transition"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/15 transition-all duration-300 group-hover:scale-105 group-hover:bg-white/25">
              <Phone className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-medium text-blue-100">{bottomCta.callLabel}</p>
              <p className="font-display text-xl font-extrabold tracking-tight text-white">
                {bottomCta.phoneDisplay}
              </p>
            </div>
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
