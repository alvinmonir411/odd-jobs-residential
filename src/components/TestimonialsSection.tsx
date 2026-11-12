'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { siteContent } from '../data/siteContent';
import { ScrollReveal } from './ScrollReveal';

export function TestimonialsSection() {
  const { testimonials } = siteContent;
  const items = testimonials.items;
  const total = items.length;
  const [activeIndex, setActiveIndex] = useState(0);

  const visibleCount = Math.min(3, total);
  const visibleItems = Array.from({ length: visibleCount }, (_, offset) => {
    const itemIndex = (activeIndex + offset) % total;
    return { item: items[itemIndex], slotOffset: offset };
  });

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  return (
    <section id="testimonials" className="scroll-mt-20 bg-white py-14 md:py-20">
      <div className="section-container">
        {/* Centered Header */}
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-3">
            <span aria-hidden="true" className="h-px w-8 bg-brand-blue/40" />
            <span className="text-xs font-bold tracking-[0.16em] text-brand-blue-rich uppercase">
              {testimonials.eyebrow}
            </span>
            <span aria-hidden="true" className="h-px w-8 bg-brand-blue/40" />
          </div>

          <h2 className="mt-2.5 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">
            {testimonials.titlePrefix}{' '}
            <span className="text-brand-blue-rich">{testimonials.titleHighlight}</span>{' '}
            {testimonials.titleSuffix}
          </h2>

          <p className="mt-2.5 text-sm leading-relaxed text-ink-body sm:text-base">
            {testimonials.subtitle}
          </p>
        </ScrollReveal>

        {/* 3-Card Carousel with Side Arrows */}
        <ScrollReveal delayMs={100} className="relative mt-10 flex items-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="hidden h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border-ice bg-white text-ink-body shadow-xs transition duration-200 hover:scale-105 hover:border-brand-blue hover:text-brand-blue-rich md:inline-flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div key={activeIndex} className="animate-fade-slide-in grid flex-1 grid-cols-1 gap-6 md:grid-cols-3">
            {visibleItems.map(({ item, slotOffset }) => (
              <article
                key={`${item.id}-${slotOffset}`}
                className={`flex-col justify-between rounded-2xl border border-border-ice bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover ${
                  slotOffset === 0 ? 'flex' : 'hidden md:flex'
                }`}
              >
                <p className="text-sm leading-relaxed text-ink-body">“{item.quote}”</p>

                <div className="mt-5 flex items-center gap-3.5 border-t border-border-ice/70 pt-4">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-brand-blue-soft">
                    <Image
                      src={item.avatarSrc}
                      alt={item.name}
                      fill
                      sizes="48px"
                      loading="eager"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate font-display text-sm font-bold text-navy-900">
                      {item.name}
                    </h3>
                    <p className="truncate text-xs text-ink-muted">{item.role}</p>
                    <div
                      className="mt-1 flex items-center gap-0.5"
                      aria-label={`${item.rating} out of 5 stars`}
                    >
                      {Array.from({ length: item.rating }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="h-3.5 w-3.5 fill-amber-cta text-amber-cta"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="hidden h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-border-ice bg-white text-ink-body shadow-xs transition duration-200 hover:scale-105 hover:border-brand-blue hover:text-brand-blue-rich md:inline-flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </ScrollReveal>

        {/* Mobile Nav Arrows + Pagination Dots */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border-ice bg-white text-ink-body transition hover:border-brand-blue hover:text-brand-blue-rich md:hidden"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial slides">
            {items.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Show testimonial ${index + 1} (${item.name})`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 cursor-pointer rounded-full transition-all ${
                    isActive
                      ? 'w-5 bg-brand-blue-rich'
                      : 'w-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-border-ice bg-white text-ink-body transition hover:border-brand-blue hover:text-brand-blue-rich md:hidden"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Verified Google Reviews Link */}
        <div className="mt-5 text-center">
          <a
            href={testimonials.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue-rich transition hover:text-brand-blue-hover hover:underline hover:underline-offset-4"
          >
            <span>{testimonials.googleReviewsLabel}</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
