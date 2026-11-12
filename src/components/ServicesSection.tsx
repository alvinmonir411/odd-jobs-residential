'use client';

import Image from 'next/image';
import {
  ArrowRight,
  Droplets,
  Home,
  PaintRoller,
  Sparkles,
  Wrench,
  Zap,
} from 'lucide-react';
import { siteContent } from '../data/siteContent';
import type { ServiceItem } from '../data/siteContent';
import { useQuoteModal } from './QuoteProvider';
import { ScrollReveal } from './ScrollReveal';

function ServiceIcon({ iconName }: { iconName: ServiceItem['iconName'] }) {
  switch (iconName) {
    case 'PaintRoller':
      return <PaintRoller className="h-4.5 w-4.5" />;
    case 'Zap':
      return <Zap className="h-4.5 w-4.5" />;
    case 'Droplets':
      return <Droplets className="h-4.5 w-4.5" />;
    case 'Wrench':
      return <Wrench className="h-4.5 w-4.5" />;
    case 'Home':
      return <Home className="h-4.5 w-4.5" />;
    case 'Sparkles':
      return <Sparkles className="h-4.5 w-4.5" />;
  }
}

export function ServicesSection() {
  const { openQuote } = useQuoteModal();
  return (
    <section id="services" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
      <div className="section-container">
        {/* Centered Header */}
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue-rich">
            <span aria-hidden="true" className="h-px w-8 bg-brand-blue-rich/50" />
            <span>{siteContent.services.eyebrow}</span>
            <span aria-hidden="true" className="h-px w-8 bg-brand-blue-rich/50" />
          </div>

          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            {siteContent.services.titlePrefix}{' '}
            <span className="text-brand-blue-rich">
              {siteContent.services.titleHighlight}
            </span>
          </h2>

          <p className="mt-3 text-[15px] leading-relaxed text-ink-body sm:text-base">
            {siteContent.services.subtitle}
          </p>
        </ScrollReveal>

        {/* 3x2 Grid of Split Horizontal Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {siteContent.services.items.map((service, index) => (
            <ScrollReveal key={service.id} delayMs={index * 70} className="h-full">
              <article
                id={service.id}
                className="group scroll-mt-24 flex h-full overflow-hidden rounded-2xl border border-border-ice bg-white p-3.5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
              >
                {/* Left Text Half */}
                <div className="flex flex-1 flex-col justify-between py-1.5 pl-1.5 pr-3">
                  <div>
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-blue-rich text-white shadow-[0_6px_14px_-4px_rgba(19,112,227,0.45)] transition-transform duration-300 group-hover:scale-105">
                        <ServiceIcon iconName={service.iconName} />
                      </span>
                      <h3 className="font-display text-[15px] font-bold leading-snug text-navy-900 sm:text-base">
                        {service.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-[13px] leading-relaxed text-ink-body">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => openQuote(service.title)}
                      className="group/btn inline-flex items-center gap-1.5 text-[13px] font-bold text-navy-900 transition-colors hover:text-brand-blue-rich cursor-pointer"
                    >
                      <span>{siteContent.services.ctaLabel}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-brand-blue-rich transition-transform group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                </div>

                {/* Right Photo Half */}
                <div className="relative min-h-[168px] w-[43%] shrink-0 overflow-hidden rounded-xl bg-surface-ice sm:w-[45%]">
                  <Image
                    src={service.imageSrc}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 180px, (min-width: 768px) 260px, 45vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
