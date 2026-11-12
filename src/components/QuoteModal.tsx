'use client';

import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';
import {
  CheckCircle2,
  Mail,
  MessageSquare,
  Phone,
  ShieldCheck,
  X,
} from 'lucide-react';
import { siteContent } from '../data/siteContent';

type ContactPreference = 'Call' | 'Text' | 'Email';

interface QuoteFormState {
  name: string;
  contactInfo: string;
  service: string;
  preference: ContactPreference;
  details: string;
}

const DEFAULT_SERVICE = 'Drywall & Painting';

function QuoteModalContent({
  initialService,
  onClose,
}: {
  initialService?: string;
  onClose: () => void;
}) {
  const resolvedInitialService = initialService || DEFAULT_SERVICE;

  const [formState, setFormState] = useState<QuoteFormState>({
    name: '',
    contactInfo: '',
    service: resolvedInitialService,
    preference: 'Text',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const serviceOptions = [
    ...siteContent.services.items.map((item) => item.title),
    'Pre-Listing Home Prep',
    'Yard Work / Other Small Odd Jobs',
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormState({
      name: '',
      contactInfo: '',
      service: resolvedInitialService,
      preference: 'Text',
      details: '',
    });
  };

  const mailtoSubject = encodeURIComponent(
    `Free Quote Request: ${formState.service}`,
  );
  const mailtoBody = encodeURIComponent(
    `Name: ${formState.name}\nContact: ${formState.contactInfo}\nPreferred Reply: ${formState.preference}\nService Needed: ${formState.service}\n\nDetails:\n${formState.details}`,
  );

  return (
    <div
      className="animate-modal-backdrop fixed inset-0 z-50 flex items-center justify-center bg-navy-950/65 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      onClick={onClose}
    >
      <div
        className="animate-modal-panel relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-3xl border border-border-ice bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Top Navy Header */}
        <div className="relative bg-navy-900 px-6 py-5 text-white sm:px-8">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close quote modal"
            className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue/25 px-3 py-1 text-xs font-semibold text-blue-100">
            <ShieldCheck className="h-3.5 w-3.5 text-amber-cta" />
            <span>Free Estimates • Fully Insured • Mon–Sat</span>
          </div>
          <h2
            id="quote-modal-title"
            className="mt-2.5 font-display text-2xl font-bold text-white"
          >
            Request Your Free Quote
          </h2>
          <p className="mt-1 text-sm text-blue-100/90">
            Tell {siteContent.brand.owners} about your odd jobs — no small job is too small.
          </p>
        </div>

        <div className="p-6 sm:p-8">
          {/* Quick Direct Contact Buttons */}
          <div className="mb-6 rounded-2xl border border-border-ice bg-surface-ice p-3.5">
            <p className="mb-2.5 text-xs font-semibold tracking-wide text-ink-muted uppercase">
              Reach Us Directly at {siteContent.brand.phone} ({siteContent.brand.hoursShort})
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <a
                href={siteContent.brand.telHref}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-border-ice bg-white px-3 py-2 text-xs font-semibold text-navy-900 transition hover:border-brand-blue hover:text-brand-blue"
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-brand-blue" />
                <span>Call Now</span>
              </a>
              <a
                href={siteContent.brand.smsHref}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-border-ice bg-white px-3 py-2 text-xs font-semibold text-navy-900 transition hover:border-brand-blue hover:text-brand-blue"
              >
                <MessageSquare className="h-3.5 w-3.5 shrink-0 text-brand-blue" />
                <span>Text Now</span>
              </a>
              <a
                href={siteContent.brand.mailtoHref}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-border-ice bg-white px-3 py-2 text-xs font-semibold text-navy-900 transition hover:border-brand-blue hover:text-brand-blue"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-brand-blue" />
                <span>Email Us</span>
              </a>
            </div>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-blue-100 bg-surface-ice p-6 text-center">
              <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-navy-900">
                Quote Request Prepared!
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-body">
                Thank you, <span className="font-semibold text-navy-900">{formState.name}</span>.
                We noted your request for{' '}
                <span className="font-semibold text-brand-blue">{formState.service}</span> and
                your preferred contact via{' '}
                <span className="font-semibold text-navy-900">{formState.preference}</span> (
                {formState.contactInfo}).
              </p>
              <p className="mt-2 text-xs text-ink-muted">
                For fastest Mon–Sat scheduling, send your details directly via email or text{' '}
                {siteContent.brand.phone}.
              </p>

              <div className="mt-5 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href={`mailto:${siteContent.brand.email}?subject=${mailtoSubject}&body=${mailtoBody}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-cta px-6 py-2.5 text-sm font-bold text-navy-950 shadow-cta transition hover:bg-amber-cta-hover"
                >
                  <Mail className="h-4 w-4" />
                  <span>Open in Email App</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center justify-center rounded-full border border-border-ice bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 transition hover:bg-slate-50"
                >
                  New Request
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex items-center justify-center rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-blue-hover"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="quote-name"
                    className="mb-1.5 block text-sm font-semibold text-navy-900"
                  >
                    Your Name
                  </label>
                  <input
                    id="quote-name"
                    type="text"
                    required
                    value={formState.name}
                    onChange={(event) =>
                      setFormState((prev) => ({ ...prev, name: event.target.value }))
                    }
                    placeholder="e.g., Sarah Miller"
                    className="w-full rounded-xl border border-border-ice bg-white px-3.5 py-2.5 text-sm text-navy-900 outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
                  />
                </div>
                <div>
                  <label
                    htmlFor="quote-contact"
                    className="mb-1.5 block text-sm font-semibold text-navy-900"
                  >
                    Phone or Email
                  </label>
                  <input
                    id="quote-contact"
                    type="text"
                    required
                    value={formState.contactInfo}
                    onChange={(event) =>
                      setFormState((prev) => ({ ...prev, contactInfo: event.target.value }))
                    }
                    placeholder="(630) 555-0123 or email"
                    className="w-full rounded-xl border border-border-ice bg-white px-3.5 py-2.5 text-sm text-navy-900 outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="quote-service"
                  className="mb-1.5 block text-sm font-semibold text-navy-900"
                >
                  Service Needed
                </label>
                <select
                  id="quote-service"
                  value={formState.service}
                  onChange={(event) =>
                    setFormState((prev) => ({ ...prev, service: event.target.value }))
                  }
                  className="w-full rounded-xl border border-border-ice bg-white px-3.5 py-2.5 text-sm text-navy-900 outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
                >
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <span className="mb-1.5 block text-sm font-semibold text-navy-900">
                  Preferred Reply Method
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {(['Call', 'Text', 'Email'] as const).map((method) => {
                    const active = formState.preference === method;
                    return (
                      <button
                        key={method}
                        type="button"
                        onClick={() =>
                          setFormState((prev) => ({ ...prev, preference: method }))
                        }
                        className={`rounded-xl border px-3 py-2 text-sm font-semibold transition ${
                          active
                            ? 'border-brand-blue bg-brand-blue-soft text-brand-blue'
                            : 'border-border-ice bg-white text-ink-body hover:border-slate-300'
                        }`}
                      >
                        {method}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label
                  htmlFor="quote-details"
                  className="mb-1.5 block text-sm font-semibold text-navy-900"
                >
                  Describe Your Odd Jobs
                </label>
                <textarea
                  id="quote-details"
                  rows={3}
                  required
                  value={formState.details}
                  onChange={(event) =>
                    setFormState((prev) => ({ ...prev, details: event.target.value }))
                  }
                  placeholder="Share the small repairs, room prep, or home list you would like quoted..."
                  className="w-full rounded-xl border border-border-ice bg-white px-3.5 py-2.5 text-sm text-navy-900 outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
                />
              </div>

              <div className="flex items-center justify-between gap-3 pt-2">
                <span className="text-xs text-ink-muted">
                  Serving {siteContent.brand.serviceArea}
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-cta px-6 py-3 text-sm font-bold text-navy-950 shadow-cta transition hover:bg-amber-cta-hover"
                >
                  <span>Request Free Quote →</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export function QuoteModal({
  isOpen,
  initialService,
  onClose,
}: {
  isOpen: boolean;
  initialService?: string;
  onClose: () => void;
}) {
  if (!isOpen) return null;
  return (
    <QuoteModalContent
      key={initialService ?? 'default'}
      initialService={initialService}
      onClose={onClose}
    />
  );
}
