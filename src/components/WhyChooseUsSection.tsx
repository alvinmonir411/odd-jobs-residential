import Image from 'next/image';
import type { LucideIcon } from 'lucide-react';
import { Award, CheckCircle2, Receipt, ShieldCheck, Users } from 'lucide-react';
import { siteContent } from '../data/siteContent';
import type { WhyChooseUsPillar } from '../data/siteContent';
import { ScrollReveal } from './ScrollReveal';

const PILLAR_ICONS: Record<WhyChooseUsPillar['iconName'], LucideIcon> = {
  Award,
  ShieldCheck,
  Users,
  Receipt,
  CheckCircle2,
};

export function WhyChooseUsSection() {
  const { whyChooseUs } = siteContent;

  return (
    <section
      id="why-choose-us"
      className="relative scroll-mt-20 overflow-hidden bg-navy-900 text-white"
    >
      {/* Subtle deep-blue radial background glows matching mockup */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-brand-blue-rich/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-brand-blue/25 blur-3xl"
      />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-6">
          {/* Left ~62%: Eyebrow, two-tone headline, subtitle, 5-pillar icon row */}
          <div className="py-12 md:py-14 lg:col-span-7 lg:py-16">
            <ScrollReveal>
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold tracking-[0.16em] text-blue-200 uppercase">
                  {whyChooseUs.eyebrow}
                </span>
                <span aria-hidden="true" className="h-px w-10 bg-blue-300/60" />
              </div>

              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {whyChooseUs.titlePrefix}{' '}
                <span className="text-[#38BDF8]">{whyChooseUs.titleHighlight}</span>{' '}
                {whyChooseUs.titleSuffix}
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-relaxed text-blue-100/85 sm:text-base">
                {whyChooseUs.subtitle}
              </p>
            </ScrollReveal>

            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 md:grid-cols-5">
              {whyChooseUs.pillars.map((pillar, index) => {
                const Icon = PILLAR_ICONS[pillar.iconName];
                return (
                  <ScrollReveal key={pillar.title} delayMs={index * 65}>
                    <div className="group flex flex-col items-start text-left">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/8 text-white shadow-sm backdrop-blur-xs transition-all duration-300 group-hover:scale-105 group-hover:border-amber-cta/70 group-hover:bg-white/15">
                        <Icon className="h-5 w-5" strokeWidth={1.85} />
                      </div>
                      <span className="mt-3 max-w-[120px] text-xs font-semibold leading-snug text-white/95 sm:text-[13px]">
                        {pillar.title}
                      </span>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>

          {/* Right ~38%: Crisp Studio-Framed Owners Portrait + Callout in open navy space */}
          <ScrollReveal
            direction="right"
            delayMs={120}
            className="relative flex items-center justify-center py-4 pb-10 lg:col-span-5 lg:py-8"
          >
            <div className="relative w-full max-w-[490px]">
              {/* Subtle circular blue decorative accent behind portrait */}
              <div
                aria-hidden="true"
                className="animate-float-slow pointer-events-none absolute top-1/2 left-[35%] h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-blue-rich/30 ring-1 ring-blue-300/20 sm:h-72 sm:w-72"
              />

              {/* Framed High-Resolution Owners Portrait keeping open right space for callout */}
              <div className="group relative z-10 mr-auto w-[66%] max-w-[265px] overflow-hidden rounded-3xl border-2 border-white/25 bg-navy-950 p-1.5 shadow-[0_24px_55px_-12px_rgba(0,0,0,0.65)] transition-transform duration-500 ease-out hover:-translate-y-1 sm:w-[64%] sm:max-w-[285px]">
                <div className="relative aspect-[1400/1607] w-full overflow-hidden rounded-[18px] bg-[#EAE6DC]">
                  <Image
                    src={whyChooseUs.imageSrc}
                    alt={whyChooseUs.imageAlt}
                    fill
                    quality={95}
                    sizes="(max-width: 640px) 66vw, 285px"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  {/* Soft navy bottom vignette to ground overlay badge */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent"
                  />
                  <div className="pointer-events-none absolute right-2.5 bottom-2.5 left-2.5 flex items-center justify-between gap-2 text-[11px] font-semibold text-white">
                    <span>Butch &amp; Joy Roberts</span>
                    <span className="rounded-full bg-amber-cta px-2 py-0.5 text-[10px] font-extrabold text-navy-950">
                      30+ Yrs
                    </span>
                  </div>
                </div>
              </div>

              {/* Handwritten-style callout + curved warm gold arrow in open right navy space */}
              <div className="animate-float-medium pointer-events-none absolute right-0 top-2 z-20 max-w-[130px] text-center sm:right-1 sm:top-5 sm:max-w-[168px]">
                <p className="-rotate-6 font-serif text-sm font-semibold italic leading-snug text-white drop-shadow-sm sm:text-lg">
                  {whyChooseUs.calloutText}
                </p>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 84 64"
                  fill="none"
                  className="mr-auto ml-1 mt-1 h-10 w-12 text-amber-cta drop-shadow-xs sm:h-12 sm:w-16"
                >
                  <path
                    d="M66 4C64 26 48 44 16 50"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M24 40L13 50.5L26 57"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
