'use client';

import Image from 'next/image';
import { ArrowRight, Mail, MapPin, MessageSquare, Phone, Star } from 'lucide-react';
import { siteContent } from '../data/siteContent';
import { useQuoteModal } from './QuoteProvider';

export function Footer() {
  const { openQuote } = useQuoteModal();
  const { brand, footer } = siteContent;

  return (
    <footer id="contact" className="scroll-mt-20 bg-navy-950 text-ink-footer">
      <div className="section-container py-12 md:py-14">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-7">
          {/* Column 1: Brand + concise bio + clickable direct contact/review circles */}
          <div className="sm:col-span-2 lg:col-span-3">
            <a
              href="#home"
              className="inline-block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue-rich"
            >
              <span className="relative block h-[106px] w-[124px]">
                <Image
                  src="/images/logo-full.png"
                  alt="Odd Jobs Handyman Service"
                  fill
                  sizes="130px"
                  className="object-contain object-left"
                />
              </span>
            </a>

            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-footer">
              {footer.description}
            </p>

            {/* Clickable Phone / Text / Email / Google Reviews circular icon buttons */}
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href={brand.telHref}
                aria-label={`Call ${brand.phone}`}
                title={`Call ${brand.phone}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-blue-rich"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href={brand.smsHref}
                aria-label={`Text ${brand.phone}`}
                title={`Text ${brand.phone}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-blue-rich"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
              <a
                href={brand.mailtoHref}
                aria-label={`Email ${brand.email}`}
                title={`Email ${brand.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-blue-rich"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={brand.googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Reviews"
                title="View Google Reviews"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-blue-rich"
              >
                <Star className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footer.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-ink-footer transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold text-white">Our Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footer.serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-ink-footer transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Hours & Info */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold text-white">Hours &amp; Info</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footer.hoursInfoLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.isExternal ? '_blank' : undefined}
                    rel={link.isExternal ? 'noopener noreferrer' : undefined}
                    className="text-ink-footer transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#38BDF8]" />
                <span className="leading-snug text-ink-footer">
                  {brand.addressLine1}
                  <br />
                  {brand.addressLine2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#38BDF8]" />
                <a
                  href={brand.telHref}
                  className="text-ink-footer transition hover:text-white"
                >
                  {brand.phone} <span className="text-xs text-ink-footer/75">(Call or Text)</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#38BDF8]" />
                <a
                  href={brand.mailtoHref}
                  className="break-all text-ink-footer transition hover:text-white"
                >
                  {brand.email}
                </a>
              </li>
            </ul>

            <button
              type="button"
              onClick={() => openQuote()}
              className="mt-5 inline-flex cursor-pointer items-center gap-1.5 rounded-full border border-white/20 bg-white/8 px-4 py-2 text-xs font-semibold text-white transition hover:border-amber-cta hover:bg-amber-cta hover:text-navy-950"
            >
              <span>Request a Free Quote</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Subtle bottom divider & copyright */}
      <div className="border-t border-white/10">
        <div className="section-container flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-ink-footer/80 sm:flex-row sm:text-left">
          <p>{footer.copyright}</p>
          <p>
            Serving {brand.serviceArea} • {brand.hoursShort}
          </p>
        </div>
      </div>
    </footer>
  );
}
