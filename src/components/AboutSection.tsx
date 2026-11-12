'use client';

import Image from 'next/image';
import {
  ArrowRight,
  BadgeCheck,
  Check,
  Clock,
  Star,
  Users,
} from 'lucide-react';
import { siteContent } from '../data/siteContent';
import type { StatItem } from '../data/siteContent';
import { useQuoteModal } from './QuoteProvider';
import { ScrollReveal } from './ScrollReveal';

function StatIcon({ iconName }: { iconName: StatItem['iconName'] }) {
  switch (iconName) {
    case 'Users':
      return <Users className="h-5 w-5" />;
    case 'Star':
      return <Star className="h-5 w-5" />;
    case 'BadgeCheck':
      return <BadgeCheck className="h-5 w-5" />;
    case 'Clock':
      return <Clock className="h-5 w-5" />;
  }
}

export function AboutSection() {
  const { openQuote } = useQuoteModal();
  return (
    <section
      id="about"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-[#F5F9FE] via-[#F2F7FD] to-white py-16 sm:py-20 lg:py-24"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Royal-Blue Circular Backdrop + Cleanly Framed Owners Portrait */}
          <ScrollReveal direction="zoom" className="flex justify-center lg:col-span-4">
            <div className="group relative flex h-[316px] w-[316px] items-center justify-center sm:h-[364px] sm:w-[364px]">
              {/* Subtle diagonal hatched lines accent (lower-left) */}
              <svg
                aria-hidden="true"
                viewBox="0 0 120 120"
                fill="none"
                className="pointer-events-none absolute -bottom-2 -left-2 h-28 w-28 text-brand-blue-rich/25"
              >
                <path
                  d="M10 110L110 10M28 110L110 28M46 110L110 46M64 110L110 64M10 92L92 10M10 74L74 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              {/* Main Royal-Blue Circular Backdrop */}
              <div
                aria-hidden="true"
                className="absolute inset-3 rounded-full bg-gradient-to-br from-[#1B7FF5] to-[#1370E3] shadow-[0_22px_48px_-14px_rgba(19,112,227,0.45)] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />

              {/* Offset Secondary Glow Ring */}
              <div
                aria-hidden="true"
                className="animate-float-slow absolute -inset-1 rounded-full border border-brand-blue-rich/15"
              />

              {/* Decorative Floating Blue Bubbles (upper-right) */}
              <span
                aria-hidden="true"
                className="animate-float-slow absolute right-2 top-6 h-10 w-10 rounded-full bg-[#3895FF]/85 shadow-sm"
              />
              <span
                aria-hidden="true"
                className="animate-float-medium absolute right-12 top-1 h-4 w-4 rounded-full bg-[#77B9FF]"
              />
              <span
                aria-hidden="true"
                className="animate-float-slow absolute -right-2 top-20 h-6 w-6 rounded-full bg-[#1370E3]/80"
              />

              {/* Clean Circular Portrait Frame showing Butch & Joy Roberts */}
              <div className="relative z-10 h-[268px] w-[268px] overflow-hidden rounded-full border-4 border-white bg-[#EAE6DC] shadow-[0_14px_34px_-10px_rgba(8,37,75,0.3)] sm:h-[312px] sm:w-[312px]">
                <Image
                  src={siteContent.about.imageSrc}
                  alt={siteContent.about.imageAlt}
                  fill
                  loading="eager"
                  quality={95}
                  sizes="(min-width: 640px) 312px, 268px"
                  className="object-cover object-[50%_10%] transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              {/* Clean Owner Name Badge at Base of Portrait */}
              <div className="pointer-events-none absolute -bottom-1 z-20 rounded-full border border-white/90 bg-navy-900/95 px-4 py-1 text-[11px] font-bold tracking-wide text-white shadow-md transition-transform duration-300 group-hover:-translate-y-0.5 sm:bottom-0">
                Butch &amp; Joy Roberts • Owners
              </div>
            </div>
          </ScrollReveal>

          {/* Center Column: About Copy, 2x2 Checkmarks, Gold CTA */}
          <ScrollReveal delayMs={60} className="lg:col-span-5">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.14em] text-brand-blue-rich">
              {siteContent.about.eyebrow}
            </span>

            <h2 className="mt-2 font-display text-3xl font-extrabold leading-[1.18] tracking-tight text-navy-900 sm:text-[34px]">
              {siteContent.about.titlePrefix}{' '}
              <span className="text-brand-blue-rich">
                {siteContent.about.titleHighlight}
              </span>
            </h2>

            <p className="mt-4 text-[15px] leading-relaxed text-ink-body">
              {siteContent.about.description}
            </p>

            {/* 2x2 Highlights Grid */}
            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {siteContent.about.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-center gap-2.5 text-sm font-semibold text-navy-900"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue-rich text-white">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <button
                type="button"
                onClick={() => openQuote()}
                className="group inline-flex items-center gap-2.5 rounded-full bg-amber-cta px-7 py-3.5 font-display text-[15px] font-bold text-navy-900 shadow-cta transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-cta-hover active:bg-amber-cta-active cursor-pointer"
              >
                <span>{siteContent.about.ctaLabel}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>
            </div>
          </ScrollReveal>

          {/* Right Column: Vertical Rounded Stats Card */}
          <ScrollReveal direction="right" delayMs={120} className="lg:col-span-3">
            <div className="rounded-2xl border border-border-ice bg-white px-6 py-2 shadow-card transition-shadow duration-300 hover:shadow-card-hover">
              <div className="divide-y divide-border-ice">
                {siteContent.about.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="-mx-2 flex items-center gap-4 rounded-xl px-2 py-4 transition-colors duration-200 hover:bg-surface-ice/75"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-blue-soft text-brand-blue-rich">
                      <StatIcon iconName={stat.iconName} />
                    </span>
                    <div>
                      <div className="font-display text-xl font-extrabold leading-none text-navy-900 sm:text-[22px]">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-xs font-medium text-ink-muted sm:text-[13px]">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
