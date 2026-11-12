'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Minus, Plus } from 'lucide-react';
import { siteContent } from '../data/siteContent';
import { useQuoteModal } from './QuoteProvider';
import { ScrollReveal } from './ScrollReveal';

export function FaqSection() {
  const { openQuote } = useQuoteModal();
  const { faq } = siteContent;
  const [openId, setOpenId] = useState<string | null>(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const visibleItems = showAllFaqs ? faq.items : faq.items.filter((item) => item.isPrimary);

  const handleToggleItem = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section id="faq" className="scroll-mt-20 bg-white py-14 md:py-20">
      <div className="section-container">
        <ScrollReveal>
          <div className="rounded-3xl border border-border-ice/80 bg-surface-ice p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 items-center gap-7 lg:grid-cols-[1fr_1.05fr_1.45fr] lg:gap-8">
              {/* Left crisp tools photo */}
              <div className="group relative h-56 overflow-hidden rounded-2xl border border-border-ice bg-white shadow-xs sm:h-64 lg:h-full lg:min-h-[265px]">
                <Image
                  src={faq.imageSrc}
                  alt={faq.imageAlt}
                  fill
                  sizes="(max-width: 1023px) 92vw, 340px"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

            {/* Middle eyebrow, bold H2, text, View All FAQs toggle + Contact Us */}
            <div className="flex flex-col items-start">
              <span className="text-xs font-bold tracking-[0.16em] text-brand-blue-rich uppercase">
                {faq.eyebrow}
              </span>

              <h2 className="mt-2 font-display text-2xl font-extrabold leading-[1.2] text-navy-900 sm:text-[28px]">
                {faq.titleLine1}
                <br />
                {faq.titleLine2}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-ink-body">{faq.subtitle}</p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => setShowAllFaqs((prev) => !prev)}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-brand-blue-rich px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-blue-hover"
                >
                  <span>{showAllFaqs ? faq.showLessLabel : faq.viewAllLabel}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={() => openQuote()}
                  className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-border-ice bg-white px-4 py-2.5 text-sm font-semibold text-navy-900 transition hover:border-brand-blue hover:text-brand-blue-rich"
                >
                  <span>{faq.contactCtaLabel}</span>
                </button>
              </div>
            </div>

            {/* Right white interactive accordion items */}
            <div className="space-y-3">
              {visibleItems.map((item) => {
                const isOpen = openId === item.id;
                const answerId = `${item.id}-panel`;
                return (
                  <div
                    key={item.id}
                    className={`rounded-xl border bg-white transition-shadow ${
                      isOpen
                        ? 'border-brand-blue/35 shadow-[0_8px_20px_-10px_rgba(13,110,253,0.18)]'
                        : 'border-border-ice/80 shadow-[0_2px_10px_-4px_rgba(8,37,75,0.06)]'
                    }`}
                  >
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => handleToggleItem(item.id)}
                      className="flex w-full cursor-pointer items-center justify-between gap-4 px-4 py-3.5 text-left sm:px-5"
                    >
                      <span className="font-display text-sm font-semibold text-navy-900 sm:text-[15px]">
                        {item.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-colors ${
                          isOpen
                            ? 'bg-brand-blue-soft text-brand-blue-rich'
                            : 'text-navy-900'
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4" strokeWidth={2.25} />
                        ) : (
                          <Plus className="h-4 w-4" strokeWidth={2.25} />
                        )}
                      </span>
                    </button>

                      <div
                        id={answerId}
                        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="border-t border-border-ice/60 px-4 pb-4 pt-3 text-sm leading-relaxed text-ink-body sm:px-5">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
