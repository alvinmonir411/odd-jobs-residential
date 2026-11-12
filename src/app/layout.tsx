import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Odd Jobs Residential | Trusted Home Repair & Handyman Services',
  description:
    'Fast, reliable, and professional residential handyman, drywall, electrical, plumbing, gutter cleaning, and home maintenance services in St. Charles, Geneva & Fox Valley, IL.',
  openGraph: {
    title: 'Odd Jobs Residential | Trusted Home Repair & Handyman Services',
    description:
      'Husband-and-wife residential handyman team with 30+ years of experience serving St. Charles, Geneva & Fox Valley, IL. Request a free quote today.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Odd Jobs Your Residential Handyman Service',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${plusJakartaSans.variable} ${inter.variable}`}
    >
      <body className="bg-white text-ink-body antialiased">{children}</body>
    </html>
  );
}
