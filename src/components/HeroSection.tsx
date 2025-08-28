import { useTranslation } from 'react-i18next';
import { Phone, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsAppButton } from './WhatsAppButton';
import heroImage from '@/assets/hero-bg.jpg';
import { useState, useEffect } from 'react';

export const HeroSection = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-accent"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed'
      }}
    >
      {/* Premium layered overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary/90 to-primary-accent/85"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      
      {/* Sacred geometry patterns */}
      <div className="absolute inset-0 opacity-10 pattern-dots pattern-blue-500 pattern-size-4 pattern-opacity-20"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center w-full px-4 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">

          {/* Hero headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold mb-6 md:mb-8 text-white animate-fade-in" style={{ animationDelay: '200ms' }}>
            {t('hero.title')}
          </h1>

          {/* Premium subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 md:mb-16 max-w-3xl mx-auto px-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
            {t('hero.subtitle')}
          </p>

          {/* Premium CTA section */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-16 md:mb-20 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <WhatsAppButton 
              text={t('hero.ctaWhatsapp')} 
              className="text-base md:text-lg px-6 md:px-10 py-3 md:py-5 shadow-xl hover:shadow-2xl transition-all duration-300 bg-accent hover:bg-accent-dark text-white font-semibold rounded-lg"
            />
            <Button
              asChild
              className="border-2 border-white/30 text-white bg-white/10 backdrop-blur-xl hover:bg-white hover:text-primary px-6 md:px-10 py-3 md:py-5 text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 font-semibold rounded-lg"
            >
              <a href="tel:+919848925249" className="flex items-center gap-2 md:gap-3">
                <Phone className="h-4 w-4 md:h-5 md:w-5" />
                {t('hero.ctaCall')}
              </a>
            </Button>
          </div>
        </div>

        {/* Premium scroll indicator */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="flex flex-col items-center gap-1 md:gap-2 text-white/60 hover:text-accent transition-colors duration-300"
            aria-label={t('hero.scrollLabel')}
          >
            <ArrowDown className="h-4 w-4 md:h-5 md:w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};