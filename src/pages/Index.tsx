import { Suspense } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { WhyChooseSection } from '@/components/WhyChooseSection';
import { ProcessSection } from '@/components/ProcessSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-primary flex items-center justify-center">
      <div className="animate-spin w-8 h-8 border-4 border-accent border-t-transparent rounded-full"></div>
    </div>}>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <WhyChooseSection />
          <ProcessSection />
          <ContactSection />
        </main>
        <Footer />
        <WhatsAppButton variant="floating" />
      </div>
    </Suspense>
  );
};

export default Index;
