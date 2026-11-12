export interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

export interface TrustBadge {
  label: string;
  sublabel: string;
  iconName: 'Award' | 'ShieldCheck' | 'BadgeCheck' | 'Clock';
}

export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  iconName: 'PaintRoller' | 'Zap' | 'Droplets' | 'Wrench' | 'Home' | 'Sparkles';
  imageSrc: string;
  imageAlt: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  iconName: 'Users' | 'Star' | 'BadgeCheck' | 'Clock';
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  iconName: 'PhoneCall' | 'CalendarCheck' | 'Wrench' | 'ShieldCheck';
}

export interface WhyChooseUsPillar {
  title: string;
  iconName: 'Award' | 'ShieldCheck' | 'Users' | 'Receipt' | 'CheckCircle2';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  isPrimary: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatarSrc: string;
  isVerifiedGoogle?: boolean;
}

export interface FooterLinkItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface BrandInfo {
  name: string;
  shortName: string;
  subtitle: string;
  footerSubtitle: string;
  owners: string;
  phone: string;
  phoneRaw: string;
  telHref: string;
  smsHref: string;
  email: string;
  mailtoHref: string;
  addressLine1: string;
  addressLine2: string;
  fullAddress: string;
  serviceArea: string;
  hoursOpen: string;
  hoursClosed: string;
  hoursShort: string;
  googleReviewsUrl: string;
}

export interface SiteContent {
  brand: BrandInfo;
  navigation: {
    links: NavLink[];
    ctaLabel: string;
  };
  hero: {
    pillText: string;
    headlinePrefix: string;
    headlineHighlight: string;
    subheadline: string;
    primaryCtaLabel: string;
    secondaryCta: { label: string; href: string };
    trustBadges: TrustBadge[];
    callout: {
      title: string;
      phoneDisplay: string;
      subtext: string;
      href: string;
    };
    imageSrc: string;
    imageAlt: string;
  };
  services: {
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    subtitle: string;
    ctaLabel: string;
    items: ServiceItem[];
  };
  about: {
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    highlights: string[];
    ctaLabel: string;
    imageSrc: string;
    imageAlt: string;
    stats: StatItem[];
  };
  process: {
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    steps: ProcessStep[];
  };
  whyChooseUs: {
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    subtitle: string;
    pillars: WhyChooseUsPillar[];
    imageSrc: string;
    imageAlt: string;
    calloutText: string;
  };
  faq: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    viewAllLabel: string;
    showLessLabel: string;
    contactCtaLabel: string;
    imageSrc: string;
    imageAlt: string;
    items: FaqItem[];
  };
  testimonials: {
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    titleSuffix: string;
    subtitle: string;
    googleReviewsLabel: string;
    googleReviewsUrl: string;
    items: TestimonialItem[];
  };
  bottomCta: {
    title: string;
    subtitle: string;
    ctaLabel: string;
    callLabel: string;
    phoneDisplay: string;
  };
  footer: {
    description: string;
    quickLinks: FooterLinkItem[];
    serviceLinks: FooterLinkItem[];
    hoursInfoLinks: FooterLinkItem[];
    copyright: string;
  };
}

export const siteContent: SiteContent = {
  brand: {
    name: 'Odd Jobs Your Residential Handyman Service',
    shortName: 'Odd Jobs',
    subtitle: 'Residential Handyman Service',
    footerSubtitle: 'Your Residential Handyman Service',
    owners: 'Butch and Joy Roberts',
    phone: '(630) 940-6935',
    phoneRaw: '6309406935',
    telHref: 'tel:6309406935',
    smsHref: 'sms:6309406935',
    email: 'oddjobs.jb@gmail.com',
    mailtoHref: 'mailto:oddjobs.jb@gmail.com',
    addressLine1: '136 Lakeside Dr Unit 722',
    addressLine2: 'Saint Charles, IL 60174-7915',
    fullAddress: '136 Lakeside Dr Unit 722, Saint Charles, IL 60174-7915',
    serviceArea: 'St. Charles, Geneva & Fox Valley, IL',
    hoursOpen: 'Monday–Saturday: Open for Quotes',
    hoursClosed: 'Sunday: Closed',
    hoursShort: 'Mon–Sat • Closed Sundays',
    googleReviewsUrl: 'https://goo.gl/maps/yhUcmrWBnSf1aPVUA',
  },
  navigation: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About Us', href: '#about' },
      { label: 'Services', href: '#services', hasDropdown: true },
      { label: 'Process', href: '#process' },
      { label: 'Why Choose Us', href: '#why-choose-us' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Testimonials', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
    ctaLabel: 'Get a Free Quote',
  },
  hero: {
    pillText: 'Husband & Wife Team • 30+ Years • Fully Insured',
    headlinePrefix: 'Trusted Handyman Help for All Your Small',
    headlineHighlight: 'Odd Jobs',
    subheadline:
      'Our goal is to provide you the help you need to get all your small odd jobs completed throughout your home — from everyday fixes bigger companies pass on to pre-listing prep.',
    primaryCtaLabel: 'Request a Free Quote',
    secondaryCta: {
      label: 'View Our Services',
      href: '#services',
    },
    trustBadges: [
      { label: '30+ Years', sublabel: 'Experience', iconName: 'Award' },
      { label: 'Fully', sublabel: 'Insured', iconName: 'ShieldCheck' },
      { label: 'Free', sublabel: 'Estimates', iconName: 'BadgeCheck' },
      { label: 'Mon–Sat', sublabel: 'Scheduling', iconName: 'Clock' },
    ],
    callout: {
      title: 'Need Help With Odd Jobs?',
      phoneDisplay: '(630) 940-6935',
      subtext: 'Call or Text Mon–Sat',
      href: 'tel:6309406935',
    },
    imageSrc: '/images/hero-craftsman.jpg',
    imageAlt: 'Residential handyman carefully fixing kitchen hardware and plumbing fixtures in a bright home',
  },
  services: {
    eyebrow: 'OUR SERVICES',
    titlePrefix: 'We Handle Complete',
    titleHighlight: 'Small Home Repairs',
    subtitle:
      'Helping homeowners in St. Charles & the Fox Valley check off nagging repairs — and get homes ready to list for sale.',
    ctaLabel: 'Learn More',
    items: [
      {
        id: 'drywall-painting',
        title: 'Drywall & Painting',
        shortTitle: 'Drywall & Painting',
        description:
          'Clean drywall patching, hole repairs, and crisp interior painting.',
        iconName: 'PaintRoller',
        imageSrc: '/images/service-1.jpg',
        imageAlt: 'Handyman painting and patching interior drywall in a bright home',
        href: '#contact',
      },
      {
        id: 'small-electrical-repairs',
        title: 'Small Electrical Repairs',
        shortTitle: 'Small Electrical Repairs',
        description:
          'Safe replacement of light fixtures, switches, outlets, and ballasts.',
        iconName: 'Zap',
        imageSrc: '/images/service-2.jpg',
        imageAlt: 'Installing and repairing a residential electrical outlet and wall switch',
        href: '#contact',
      },
      {
        id: 'small-plumbing-repairs',
        title: 'Small Plumbing Repairs',
        shortTitle: 'Small Plumbing Repairs',
        description:
          'Dependable faucet replacements, minor sink leaks, and valve fixes.',
        iconName: 'Droplets',
        imageSrc: '/images/service-3.jpg',
        imageAlt: 'Handyman tightening residential sink plumbing and faucet connections',
        href: '#contact',
      },
      {
        id: 'small-repair-jobs',
        title: 'Small Repair Jobs',
        shortTitle: 'Small Repair Jobs',
        description:
          'Door latches, cabinet hinges, trim, yard tasks, and pre-listing prep.',
        iconName: 'Wrench',
        imageSrc: '/images/service-4.jpg',
        imageAlt: 'Craftsman adjusting residential cabinet hardware and home trim',
        href: '#contact',
      },
      {
        id: 'gutter-cleaning',
        title: 'Gutter Cleaning',
        shortTitle: 'Gutter Cleaning',
        description:
          'Thorough clearing of leaves and buildup from residential gutters.',
        iconName: 'Home',
        imageSrc: '/images/service-5.jpg',
        imageAlt: 'Clearing leaves and debris from clean residential roofline gutters',
        href: '#contact',
      },
      {
        id: 'indoor-cleaning',
        title: 'Indoor Cleaning',
        shortTitle: 'Indoor Cleaning',
        description:
          'Detailed interior cleaning to refresh homes or prepare for listing.',
        iconName: 'Sparkles',
        imageSrc: '/images/service-6.jpg',
        imageAlt: 'Spotless modern residential kitchen counter and clean bright interior',
        href: '#contact',
      },
    ],
  },
  about: {
    eyebrow: 'About Us',
    titlePrefix: 'Your Local Handyman Team',
    titleHighlight: 'You Can Trust',
    description:
      "We are Butch and Joy Roberts, a husband and wife team with over 30 years of experience doing home repairs, yard work, and other home-related jobs. We focus on the small jobs bigger companies don't want to quote — helping you finish your to-do list or get your home ready to list for sale.",
    highlights: [
      'Fully Insured',
      '30+ Years Experience',
      'Husband & Wife Team',
      'No Job Too Small',
    ],
    ctaLabel: 'Schedule Free Quote',
    imageSrc: '/images/owners-butch-joy.jpg',
    imageAlt: 'Butch and Joy Roberts, owners of Odd Jobs Your Residential Handyman Service',
    stats: [
      { value: '30+', label: 'Years of Experience', iconName: 'Users' },
      { value: '5.0 ★', label: 'Google Review Rating', iconName: 'Star' },
      { value: '100%', label: 'Free Quotes & Estimates', iconName: 'BadgeCheck' },
      { value: 'Mon–Sat', label: 'Closed Sundays', iconName: 'Clock' },
    ],
  },
  process: {
    eyebrow: 'HOW IT WORKS',
    titlePrefix: 'Our Simple',
    titleHighlight: '4 Step Process',
    steps: [
      {
        stepNumber: '01',
        title: 'Call, Text, or Email',
        description: 'Reach out to (630) 940-6935 or oddjobs.jb@gmail.com with your list of odd jobs.',
        iconName: 'PhoneCall',
      },
      {
        stepNumber: '02',
        title: 'Free Quote Appointment',
        description: 'Schedule a convenient Mon–Sat visit to review your small repairs and receive a free estimate.',
        iconName: 'CalendarCheck',
      },
      {
        stepNumber: '03',
        title: 'Reliable Craftsmanship',
        description: 'Butch & Joy show up when promised and complete every task with 30+ years of care.',
        iconName: 'Wrench',
      },
      {
        stepNumber: '04',
        title: 'Enjoy a Finished Home',
        description: 'Cross those nagging odd jobs off your list — whether staying put or listing for sale.',
        iconName: 'ShieldCheck',
      },
    ],
  },
  whyChooseUs: {
    eyebrow: 'WHY CHOOSE US',
    titlePrefix: 'The',
    titleHighlight: 'Odd Jobs',
    titleSuffix: 'Difference',
    subtitle:
      'Bigger contractors ignore small lists — we welcome them with reliable follow-through and personal care.',
    pillars: [
      { title: '30+ Years Experience', iconName: 'Award' },
      { title: 'Fully Insured', iconName: 'ShieldCheck' },
      { title: 'Husband & Wife Team', iconName: 'Users' },
      { title: 'Free Estimates', iconName: 'Receipt' },
      { title: 'Small Jobs Welcome', iconName: 'CheckCircle2' },
    ],
    imageSrc: '/images/owners-butch-joy.jpg',
    imageAlt: 'Owners Butch and Joy Roberts in their Odd Jobs Residential Handyman Service shirts',
    calloutText: 'Your Husband & Wife Handyman Team!',
  },
  faq: {
    eyebrow: 'FAQ',
    titleLine1: 'Got Questions?',
    titleLine2: "We've Got Answers!",
    subtitle:
      'Find quick answers to common questions about our small home repairs, free estimates, and Mon–Sat availability.',
    viewAllLabel: 'View All FAQs',
    showLessLabel: 'Show Fewer FAQs',
    contactCtaLabel: 'Contact Us',
    imageSrc: '/images/faq-tools.jpg',
    imageAlt: 'Handyman wrenches, tape measure, and screwdriver arranged on residential house blueprints',
    items: [
      {
        id: 'faq-services',
        question: 'What kinds of small jobs do you handle?',
        answer:
          'We handle drywall patching and painting, small electrical repairs (fixtures, outlets, switches, ballasts), small plumbing repairs, everyday carpentry and repair jobs, gutter cleaning, indoor cleaning, yard work, and pre-listing home prep.',
        isPrimary: true,
      },
      {
        id: 'faq-estimates',
        question: 'Do you offer free quotes and estimates?',
        answer:
          'Yes! Every quote is completely free. Simply call or text (630) 940-6935 or email oddjobs.jb@gmail.com to schedule an appointment Monday through Saturday.',
        isPrimary: true,
      },
      {
        id: 'faq-small-jobs',
        question: 'Why hire Odd Jobs instead of a large contractor?',
        answer:
          'We specifically welcome the small odd jobs that larger contractors are not interested in quoting due to job size. With over 30 years of hands-on experience as a husband-and-wife team, you get dependable, personal follow-through.',
        isPrimary: true,
      },
      {
        id: 'faq-area-hours',
        question: 'What areas do you serve and what are your hours?',
        answer:
          'We are based at 136 Lakeside Dr Unit 722 in Saint Charles, IL 60174-7915 and serve homeowners across St. Charles, Geneva, and the surrounding Fox Valley area. We are open Monday through Saturday and closed on Sundays.',
        isPrimary: true,
      },
      {
        id: 'faq-pre-listing',
        question: 'Can you help get our home ready to list for sale?',
        answer:
          'Absolutely! Helping homeowners prepare their homes to list for sale is one of our favorite focus areas — from patching drywall and touch-up painting to swapping worn fixtures, adjusting doors, and thorough indoor cleaning.',
        isPrimary: false,
      },
      {
        id: 'faq-insured',
        question: 'Are you insured and how should we contact you?',
        answer:
          'Yes, Odd Jobs Your Residential Handyman Service is fully insured. Call or send a text anytime Monday–Saturday to (630) 940-6935, or email oddjobs.jb@gmail.com to book your free quote.',
        isPrimary: false,
      },
    ],
  },
  testimonials: {
    eyebrow: 'TESTIMONIALS',
    titlePrefix: 'What Our',
    titleHighlight: 'Customers',
    titleSuffix: 'Say',
    subtitle:
      'Real feedback from local homeowners and workplaces. Your satisfaction means everything to us.',
    googleReviewsLabel: 'See more reviews on Google',
    googleReviewsUrl: 'https://goo.gl/maps/yhUcmrWBnSf1aPVUA',
    items: [
      {
        id: 'review-shane',
        name: 'Shane Herman',
        role: 'Verified Google Review',
        quote:
          'I started using Odd Jobs for in-home projects about one year ago and the quality of their work far exceeded anyone we used previously. Now Odd Jobs is also my go-to for service at my workplace. They have replaced/fixed ballasts, replaced outlets and renovated office spaces, etc. Most importantly, they always follow through and show up when they say. Extremely reliable and highly recommended!',
        rating: 5,
        avatarSrc: '/images/avatar-2.jpg',
        isVerifiedGoogle: true,
      },
      {
        id: 'review-karen',
        name: 'Karen Miller',
        role: 'Homeowner, St. Charles, IL',
        quote:
          "Butch and Joy tackled our entire pre-listing punch list — drywall patches, touch-up painting, and loose cabinet hinges. Bigger companies wouldn't even return our call for small jobs, and they were prompt and thorough.",
        rating: 5,
        avatarSrc: '/images/avatar-1.jpg',
      },
      {
        id: 'review-david',
        name: 'David Kowalski',
        role: 'Homeowner, Geneva, IL',
        quote:
          'Great experience from first text to finished repair. They swapped out two light fixtures, fixed a dripping bathroom faucet, and cleaned our gutters right on schedule. Honest pricing and super dependable.',
        rating: 5,
        avatarSrc: '/images/avatar-3.jpg',
      },
      {
        id: 'review-lisa',
        name: 'Lisa Bennett',
        role: 'Homeowner, Batavia, IL',
        quote:
          'Having a reliable husband-and-wife team for small household fixes is priceless. Joy and Butch handled our indoor cleaning prep and several small carpentry repairs with care and zero hassle.',
        rating: 5,
        avatarSrc: '/images/avatar-1.jpg',
      },
    ],
  },
  bottomCta: {
    title: 'Ready to Tackle Your Odd Jobs?',
    subtitle:
      'We look forward to helping you complete all your odd jobs! Call, text, or email Mon–Sat for your free quote.',
    ctaLabel: 'Get Your Free Quote',
    callLabel: 'Call or Text Mon–Sat',
    phoneDisplay: '(630) 940-6935',
  },
  footer: {
    description:
      'Husband-and-wife handyman team in St. Charles, IL with 30+ years experience. Fully insured and ready to help with all your small odd jobs.',
    quickLinks: [
      { label: 'Home', href: '#home' },
      { label: 'About Us', href: '#about' },
      { label: 'Process', href: '#process' },
      { label: 'Why Choose Us', href: '#why-choose-us' },
      { label: 'Reviews', href: '#testimonials' },
      { label: 'Contact', href: '#contact' },
    ],
    serviceLinks: [
      { label: 'Drywall & Painting', href: '#services' },
      { label: 'Small Electrical Repairs', href: '#services' },
      { label: 'Small Plumbing Repairs', href: '#services' },
      { label: 'Small Repair Jobs', href: '#services' },
      { label: 'Gutter Cleaning', href: '#services' },
      { label: 'Indoor Cleaning', href: '#services' },
    ],
    hoursInfoLinks: [
      { label: 'FAQ', href: '#faq' },
      { label: 'Mon–Sat: Open for Quotes', href: '#contact' },
      { label: 'Sunday: Closed', href: '#contact' },
      { label: 'Pre-Listing Home Prep', href: '#services' },
      {
        label: 'Google Reviews',
        href: 'https://goo.gl/maps/yhUcmrWBnSf1aPVUA',
        isExternal: true,
      },
    ],
    copyright: '© 2020–2026 Odd Jobs Your Residential Handyman Service. All rights reserved.',
  },
};
