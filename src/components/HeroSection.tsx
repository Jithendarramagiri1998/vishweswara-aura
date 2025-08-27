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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-primary-light/70"></div>
      
      {/* Sacred geometry decoration */}
      <div className="absolute inset-0 sacred-decoration"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-full px-6 py-2 mb-8">
            <div className="w-2 h-2 bg-accent rounded-full animate-sacred-glow"></div>
            <span className="text-accent font-medium text-sm md:text-base">
              {t('hero.eyebrow')}
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="heading-primary text-5xl md:text-7xl lg:text-8xl mb-6 text-primary-foreground">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <WhatsAppButton 
              text={t('hero.ctaWhatsapp')} 
              className="w-full sm:w-auto text-lg px-8 py-4"
            />
            <Button
              asChild
              className="btn-outline-sacred w-full sm:w-auto text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <a href="tel:+919848925249" className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                {t('hero.ctaCall')}
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};