'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Menu,
  Phone,
  X,
} from 'lucide-react';
import { siteContent } from '../data/siteContent';
import { useQuoteModal } from './QuoteProvider';

export function Navbar() {
  const { openQuote } = useQuoteModal();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#home');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNavClick = (href: string) => {
    setActiveHref(href);
    setServicesOpen(false);
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border-ice/80 bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-6px_rgba(8,37,75,0.07)]">
      <div className="section-container flex h-[72px] items-center justify-between gap-4 lg:h-[76px]">
        {/* Brand Mark */}
        <a
          href="#home"
          onClick={() => handleNavClick('#home')}
          className="flex shrink-0 items-center gap-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-lg"
        >
          <span className="flex h-10 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-950 p-1.5 shadow-[0_6px_14px_-4px_rgba(8,27,51,0.28)] ring-1 ring-navy-900/10">
            <span className="relative block h-full w-full">
              <Image
                src="/images/logo-mark.png"
                alt="Odd Jobs logo mark"
                fill
                sizes="48px"
                className="object-contain"
              />
            </span>
          </span>
          <span className="flex flex-col">
            <span className="font-display text-[19px] font-extrabold leading-none tracking-tight text-navy-900">
              {siteContent.brand.shortName}
            </span>
            <span className="mt-0.5 text-[11px] font-medium leading-tight text-ink-muted">
              {siteContent.brand.subtitle}
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-3.5 lg:flex xl:gap-5"
        >
          {siteContent.navigation.links.map((link) => {
            const isActive = activeHref === link.href;

            if (link.hasDropdown) {
              return (
                <div
                  key={link.label}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    aria-expanded={servicesOpen}
                    aria-haspopup="menu"
                    onClick={() => setServicesOpen((prev) => !prev)}
                    className={`inline-flex items-center gap-1 whitespace-nowrap py-2 text-[13.5px] font-semibold transition-colors xl:text-[14px] cursor-pointer ${
                      isActive || servicesOpen
                        ? 'text-[#D48B08]'
                        : 'text-navy-900 hover:text-brand-blue-rich'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        servicesOpen ? 'rotate-180 text-brand-blue-rich' : ''
                      }`}
                    />
                  </button>

                  {/* Hover bridge + Dropdown menu */}
                  {servicesOpen && (
                    <div
                      role="menu"
                      aria-label="Services submenu"
                      className="absolute left-0 top-full pt-1.5"
                    >
                      <div className="w-72 rounded-2xl border border-border-ice bg-white p-2 shadow-[0_18px_40px_-12px_rgba(8,37,75,0.16)]">
                        <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-blue-rich">
                          Our 6 Core Services
                        </div>
                        <div className="mt-1 space-y-0.5">
                          {siteContent.services.items.map((service) => (
                            <a
                              key={service.id}
                              role="menuitem"
                              href={`#${service.id}`}
                              onClick={() => handleNavClick('#services')}
                              className="flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium text-navy-900 transition-colors hover:bg-surface-ice hover:text-brand-blue-rich"
                            >
                              <span>{service.title}</span>
                              <ArrowRight className="h-3.5 w-3.5 text-brand-blue-rich/70" />
                            </a>
                          ))}
                        </div>
                        <div className="mt-2 border-t border-border-ice pt-2">
                          <button
                            type="button"
                            onClick={() => {
                              setServicesOpen(false);
                              openQuote();
                            }}
                            className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-amber-cta px-3 py-2 text-xs font-bold text-navy-900 transition-colors hover:bg-amber-cta-hover cursor-pointer"
                          >
                            <span>Request Free Quote</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`whitespace-nowrap py-2 text-[13.5px] font-semibold transition-colors xl:text-[14px] ${
                  isActive
                    ? 'text-[#D48B08]'
                    : 'text-navy-900 hover:text-brand-blue-rich'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop Primary CTA & Mobile Controls */}
        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => openQuote()}
            className="hidden items-center gap-2 whitespace-nowrap rounded-full bg-amber-cta px-5 py-2.5 font-display text-[13.5px] font-bold text-navy-900 shadow-cta transition-all hover:bg-amber-cta-hover active:bg-amber-cta-active lg:inline-flex cursor-pointer"
          >
            <span>{siteContent.navigation.ctaLabel}</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          <a
            href={siteContent.brand.telHref}
            aria-label={`Call ${siteContent.brand.phone}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-ice bg-surface-ice text-brand-blue-rich transition-colors hover:bg-brand-blue-soft lg:hidden"
          >
            <Phone className="h-4 w-4" />
          </a>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border-ice bg-white text-navy-900 transition-colors hover:bg-surface-ice lg:hidden cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-border-ice bg-white lg:hidden">
          <nav
            aria-label="Mobile navigation"
            className="section-container flex flex-col gap-1 py-4"
          >
            {siteContent.navigation.links.map((link) => {
              const isActive = activeHref === link.href;

              if (link.hasDropdown) {
                return (
                  <div key={link.label} className="flex flex-col">
                    <button
                      type="button"
                      aria-expanded={mobileServicesOpen}
                      onClick={() => setMobileServicesOpen((prev) => !prev)}
                      className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm font-semibold transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-surface-ice text-[#D48B08]'
                          : 'text-navy-900 hover:bg-surface-ice'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          mobileServicesOpen ? 'rotate-180 text-brand-blue-rich' : ''
                        }`}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <div className="ml-3 mt-1 space-y-1 border-l-2 border-brand-blue-soft pl-3">
                        {siteContent.services.items.map((service) => (
                          <a
                            key={service.id}
                            href={`#${service.id}`}
                            onClick={() => handleNavClick('#services')}
                            className="block rounded-lg px-2.5 py-2 text-sm font-medium text-ink-body hover:bg-surface-ice hover:text-brand-blue-rich"
                          >
                            {service.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-surface-ice text-[#D48B08]'
                      : 'text-navy-900 hover:bg-surface-ice'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}

            <div className="mt-3 flex flex-col gap-2.5 border-t border-border-ice pt-4">
              <a
                href={siteContent.brand.telHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border-ice bg-surface-ice px-5 py-2.5 text-sm font-semibold text-navy-900"
              >
                <Phone className="h-4 w-4 text-brand-blue-rich" />
                <span>Call or Text {siteContent.brand.phone}</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  openQuote();
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-cta px-5 py-3 font-display text-sm font-bold text-navy-900 shadow-cta transition-colors hover:bg-amber-cta-hover cursor-pointer"
              >
                <span>{siteContent.navigation.ctaLabel}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
