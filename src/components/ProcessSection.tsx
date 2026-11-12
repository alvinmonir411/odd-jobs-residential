import {
  ArrowRight,
  CalendarCheck,
  PhoneCall,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import { siteContent } from '../data/siteContent';
import type { ProcessStep } from '../data/siteContent';
import { ScrollReveal } from './ScrollReveal';

function ProcessStepIcon({ iconName }: { iconName: ProcessStep['iconName'] }) {
  switch (iconName) {
    case 'PhoneCall':
      return <PhoneCall className="h-6 w-6" />;
    case 'CalendarCheck':
      return <CalendarCheck className="h-6 w-6" />;
    case 'Wrench':
      return <Wrench className="h-6 w-6" />;
    case 'ShieldCheck':
      return <ShieldCheck className="h-6 w-6" />;
  }
}

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
      <div className="section-container">
        {/* Centered Header */}
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-blue-rich">
            <span aria-hidden="true" className="h-px w-8 bg-brand-blue-rich/50" />
            <span>{siteContent.process.eyebrow}</span>
            <span aria-hidden="true" className="h-px w-8 bg-brand-blue-rich/50" />
          </div>

          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            {siteContent.process.titlePrefix}{' '}
            <span className="text-brand-blue-rich">
              {siteContent.process.titleHighlight}
            </span>
          </h2>
        </ScrollReveal>

        {/* 4 Horizontal Steps */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          {siteContent.process.steps.map((step, index) => (
            <ScrollReveal key={step.stepNumber} delayMs={index * 90}>
              <div className="group relative flex items-start gap-4">
                {/* Circular Blue Icon Badge */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1C7DF3] to-[#0B5ED7] text-white shadow-[0_10px_22px_-6px_rgba(13,110,253,0.45)] ring-4 ring-brand-blue-soft transition-transform duration-300 group-hover:scale-105">
                  <ProcessStepIcon iconName={step.iconName} />
                </div>

                {/* Step Number, Title & Description */}
                <div className="pr-2 lg:pr-4">
                  <span className="block font-display text-sm font-extrabold tracking-wide text-navy-900">
                    {step.stepNumber}
                  </span>
                  <h3 className="mt-0.5 font-display text-base font-bold leading-snug text-navy-900">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-ink-body">
                    {step.description}
                  </p>
                </div>

                {/* Directional Arrow Between Desktop Columns */}
                {index < siteContent.process.steps.length - 1 && (
                  <ArrowRight
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-4.5 top-5 hidden h-4 w-4 text-ink-muted/45 transition-transform duration-300 group-hover:translate-x-1 lg:block"
                  />
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
