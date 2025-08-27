import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import { WhatsAppButton } from './WhatsAppButton';

export const Navigation = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'whyChoose', href: '#why-choose' },
    { key: 'process', href: '#process' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-primary/95 backdrop-blur-md shadow-sacred' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl md:text-2xl font-serif font-bold text-primary-foreground">
              Vishweshwara
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-primary-foreground hover:text-accent transition-colors duration-300 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {t(`navigation.${item.key}`)}
              </a>
            ))}
          </div>

          {/* Desktop CTA & Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Button
              asChild
              variant="outline"
              size="sm"
              className="btn-outline-sacred border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <a href="tel:+919848925249" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                {t('common.call')}
              </a>
            </Button>
            <WhatsAppButton text={t('common.whatsapp')} />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-foreground hover:text-accent"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-primary/95 backdrop-blur-md rounded-lg mt-2 shadow-sacred">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="block px-3 py-2 text-primary-foreground hover:text-accent hover:bg-primary-light/20 rounded-md transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {t(`navigation.${item.key}`)}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-primary-light/20">
                <Button
                  asChild
                  variant="outline"
                  className="btn-outline-sacred w-full"
                >
                  <a href="tel:+919848925249" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    {t('common.call')}
                  </a>
                </Button>
                <WhatsAppButton text={t('common.whatsapp')} className="w-full" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};