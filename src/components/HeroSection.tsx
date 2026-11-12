'use client';

import Image from 'next/image';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Clock,
  Phone,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import { siteContent } from '../data/siteContent';
import type { TrustBadge } from '../data/siteContent';
import { useQuoteModal } from './QuoteProvider';

function TrustBadgeIcon({ iconName }: { iconName: TrustBadge['iconName'] }) {
  switch (iconName) {
    case 'Award':
      return <Award className="h-4 w-4" />;
    case 'ShieldCheck':
      return <ShieldCheck className="h-4 w-4" />;
    case 'BadgeCheck':
      return <BadgeCheck className="h-4 w-4" />;
    case 'Clock':
      return <Clock className="h-4 w-4" />;
  }
}

export function HeroSection() {
  const { openQuote } = useQuoteModal();
  return (
    <section
      id="home"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-[#F7FAFE] via-[#F2F7FD] to-[#EBF3FC]"
    >
      {/* Right Half Full-Height Desktop Background Photo with Smooth Left Ice Fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[60%] overflow-hidden lg:block">
        <Image
          src={siteContent.hero.imageSrc}
          alt={siteContent.hero.imageAlt}
          width={1376}
          height={768}
          sizes="(min-width: 1024px) 60vw, 100vw"
          priority
          className="animate-hero-photo h-full w-full object-cover object-[72%_center]"
        />
        {/* Left-edge soft icy-white blend so left panel & photo merge effortlessly */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#F4F8FC] via-[#F4F8FC]/85 via-[24%] to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F4F8FC]/90 to-transparent"
        />
      </div>

      {/* Subtle Architectural Blueprint Draftsman Lines (Top-Left Background) */}
      <svg
        aria-hidden="true"
        viewBox="0 0 600 480"
        fill="none"
        className="pointer-events-none absolute -left-16 -top-10 h-[420px] w-[520px] text-[#B8D4F5]/45"
      >
        <circle cx="150" cy="140" r="130" stroke="currentColor" strokeWidth="1" />
        <circle
          cx="150"
          cy="140"
          r="195"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="6 6"
        />
        <path d="M20 80H360M80 10V320" stroke="currentColor" strokeWidth="1" />
        <path
          d="M150 140L320 40M150 140L290 290"
          stroke="currentColor"
          strokeWidth="0.9"
          strokeDasharray="4 5"
        />
        <rect
          x="210"
          y="48"
          width="96"
          height="64"
          stroke="currentColor"
          strokeWidth="0.9"
        />
      </svg>

      <div className="section-container relative z-10 pt-10 pb-10 sm:pt-14 sm:pb-12 lg:pt-16 lg:pb-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left Column: Headline, Copy, CTAs */}
          <div className="relative lg:col-span-6 xl:col-span-6">
            {/* Eyebrow Pill */}
            <div className="animate-hero-fade-up inline-flex items-center rounded-full border border-[#D4E4F7] bg-white/95 px-4 py-1.5 text-xs font-semibold tracking-wide text-navy-900 shadow-sm sm:text-[13px]">
              <span>{siteContent.hero.pillText}</span>
            </div>

            {/* Two-Tone Bold H1 */}
            <h1 className="animate-hero-fade-up animate-hero-delay-1 mt-5 font-display text-[36px] font-extrabold leading-[1.1] tracking-tight text-navy-900 sm:text-[46px] lg:text-[48px] xl:text-[52px]">
              {siteContent.hero.headlinePrefix}{' '}
              <span className="text-brand-blue-rich">
                {siteContent.hero.headlineHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="animate-hero-fade-up animate-hero-delay-2 mt-5 max-w-[500px] text-[15px] leading-relaxed text-ink-body sm:text-base">
              {siteContent.hero.subheadline}
            </p>

            {/* Primary + Secondary CTAs */}
            <div className="animate-hero-fade-up animate-hero-delay-3 mt-7 flex flex-wrap items-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={() => openQuote()}
                className="group inline-flex items-center gap-2.5 rounded-full bg-amber-cta px-7 py-3.5 font-display text-[15px] font-bold text-navy-900 shadow-cta transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-cta-hover active:bg-amber-cta-active cursor-pointer"
              >
                <span>{siteContent.hero.primaryCtaLabel}</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>

              <a
                href={siteContent.hero.secondaryCta.href}
                className="group inline-flex items-center gap-3 font-display text-[15px] font-bold text-navy-900 transition-colors hover:text-brand-blue-rich"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-blue-rich text-white shadow-[0_8px_18px_-4px_rgba(19,112,227,0.5)] transition-transform duration-300 group-hover:scale-105">
                  <Wrench className="h-4 w-4" />
                </span>
                <span>{siteContent.hero.secondaryCta.label}</span>
              </a>
            </div>

            {/* Decorative translucent ring matching mockup accent */}
            <span
              aria-hidden="true"
              className="animate-float-slow pointer-events-none absolute -right-4 top-56 hidden h-8 w-8 rounded-full border-2 border-[#7FB5F7] bg-[#E8F1FD]/80 lg:block"
            />
          </div>

          {/* Right Column: Mobile Photo + Desktop Bottom-Right Callout Anchor */}
          <div className="relative lg:col-span-6 lg:min-h-[410px]">
            {/* Mobile / Tablet Inline Photo */}
            <div className="animate-hero-photo relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border-ice shadow-card lg:hidden">
              <Image
                src={siteContent.hero.imageSrc}
                alt={siteContent.hero.imageAlt}
                width={1376}
                height={768}
                sizes="100vw"
                loading="eager"
                className="h-full w-full object-cover object-[70%_center]"
              />
            </div>

            {/* Floating Royal-Blue Callout Card (Bottom-Right) */}
            <a
              href={siteContent.hero.callout.href}
              className="animate-hero-fade-up animate-hero-delay-3 group mt-4 flex items-center gap-3.5 rounded-2xl border border-white/15 bg-gradient-to-br from-[#146FE3] to-[#0B4DA8] px-6 py-4 text-white shadow-[0_20px_40px_-10px_rgba(8,37,75,0.45)] transition-all duration-300 hover:-translate-y-1 sm:inline-flex lg:absolute lg:bottom-2 lg:right-0 lg:mt-0"
            >
              <div className="flex flex-col">
                <span className="font-display text-sm font-bold leading-snug text-white sm:text-[15px]">
                  {siteContent.hero.callout.title}
                </span>
                <div className="mt-2.5 flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-cta text-navy-900 shadow-md transition-transform group-hover:scale-105">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div className="flex flex-col">
                    <span className="font-display text-lg font-extrabold leading-tight tracking-tight text-white">
                      {siteContent.hero.callout.phoneDisplay}
                    </span>
                    <span className="mt-0.5 text-xs font-medium text-blue-100">
                      {siteContent.hero.callout.subtext}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom 4-Badge Horizontal Trust Strip */}
        <div className="animate-hero-fade-up animate-hero-delay-4 mt-8 rounded-2xl border border-border-ice/90 bg-white/85 px-4 py-4 shadow-[0_8px_24px_-10px_rgba(8,37,75,0.08)] backdrop-blur-sm sm:px-6 lg:mt-10 lg:max-w-[680px] lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:pt-6 lg:shadow-none lg:backdrop-blur-none">
          <div className="grid grid-cols-2 gap-y-4 sm:grid-cols-4 sm:divide-x sm:divide-border-ice">
            {siteContent.hero.trustBadges.map((badge, index) => (
              <div
                key={badge.label}
                className={`flex items-center gap-2.5 ${
                  index > 0 ? 'sm:pl-4' : ''
                } ${index < 3 ? 'sm:pr-3' : ''}`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#B8D4F6] bg-white text-brand-blue-rich shadow-xs">
                  <TrustBadgeIcon iconName={badge.iconName} />
                </span>
                <div className="flex flex-col">
                  <span className="font-display text-[13px] font-bold leading-tight text-navy-900">
                    {badge.label}
                  </span>
                  <span className="text-[12px] font-medium leading-tight text-ink-muted">
                    {badge.sublabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
