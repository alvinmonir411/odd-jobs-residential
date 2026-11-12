import { AboutSection } from '@/components/AboutSection';
import { CtaBannerSection } from '@/components/CtaBannerSection';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { Navbar } from '@/components/Navbar';
import { ProcessSection } from '@/components/ProcessSection';
import { QuoteProvider } from '@/components/QuoteProvider';
import { ServicesSection } from '@/components/ServicesSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';

export default function HomePage() {
  return (
    <QuoteProvider>
      <div className="min-h-screen bg-white text-ink-body">
        <Navbar />

        <main>
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <ProcessSection />
          <WhyChooseUsSection />
          <FaqSection />
          <TestimonialsSection />
          <CtaBannerSection />
        </main>

        <Footer />
      </div>
    </QuoteProvider>
  );
}
