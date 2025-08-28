import { useTranslation } from 'react-i18next';
import { Phone, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsAppButton } from './WhatsAppButton';
import heroImage from '@/assets/hero-bg.jpg';

export const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section 
      id="home" 
      className="section-hero bg-gradient-to-br from-primary-dark via-primary to-primary-accent"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Premium layered overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 via-primary/90 to-primary-accent/85"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
      
      {/* Sacred geometry patterns */}
      <div className="sacred-pattern inset-0"></div>
      <div className="geometric-grid inset-0"></div>
      
      {/* Content */}
      <div className="container-premium relative z-10 text-center">
        <div className="max-w-5xl mx-auto">

          {/* Hero headline */}
          <h1 className="heading-display mb-8 text-white animate-fade-in" style={{ animationDelay: '200ms' }}>
            {t('hero.title')}
          </h1>

          {/* Premium subtitle */}
          <p className="text-lead text-white/90 mb-16 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '400ms' }}>
            {t('hero.subtitle')}
          </p>

          {/* Premium CTA section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-fade-in" style={{ animationDelay: '600ms' }}>
            <WhatsAppButton 
              text={t('hero.ctaWhatsapp')} 
              className="btn-sacred text-lg px-10 py-5 shadow-xl hover:shadow-2xl"
            />
            <Button
              asChild
              className="btn-outline-sacred border-white/30 text-white bg-white/10 backdrop-blur-xl hover:bg-white hover:text-primary px-10 py-5 text-lg shadow-lg hover:shadow-xl"
            >
              <a href="tel:+919848925249" className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                {t('hero.ctaCall')}
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-80 animate-fade-in" style={{ animationDelay: '800ms' }}>
            <div className="text-center text-white/80">
              <div className="text-2xl font-bold text-accent">5+</div>
              <div className="text-sm font-medium">Years Experience</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center text-white/80">
              <div className="text-2xl font-bold text-accent">100+</div>
              <div className="text-sm font-medium">Happy Clients</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div className="text-center text-white/80">
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-sm font-medium">Support</div>
            </div>
          </div>
        </div>

        {/* Premium scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="flex flex-col items-center gap-2 text-white/60 hover:text-accent transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <div className="text-sm font-medium tracking-wide">Scroll to explore</div>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};