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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-neutral-200/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-premium">
        <div className="flex items-center justify-between h-20">
          {/* Premium Logo */}
          <div className="flex-shrink-0 max-w-[200px] sm:max-w-[280px] md:max-w-none">
            <a href="#home" className={`text-sm sm:text-base md:text-lg lg:text-xl font-serif font-bold transition-colors duration-300 leading-tight ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              <span className="block sm:hidden">Vishweshwara Vasthu</span>
              <span className="hidden sm:block md:hidden">Vishweshwara Vasthu Planner</span>
              <span className="hidden md:block">Vishweshwara Vasthu Planner & Jyothisya</span>
            </a>
          </div>

          {/* Premium Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-8 2xl:space-x-10">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`font-display font-medium text-sm xl:text-base tracking-wide transition-all duration-300 relative group whitespace-nowrap ${
                  isScrolled ? 'text-neutral-700 hover:text-primary' : 'text-white/90 hover:text-accent'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {t(`navigation.${item.key}`)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Premium Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <LanguageSwitcher />
            <Button
              asChild
              size="sm"
              className={`btn-ghost text-xs xl:text-sm ${isScrolled ? 'text-neutral-700 hover:text-primary' : 'text-white hover:text-accent'}`}
            >
              <a href="tel:+919848925249" className="flex items-center gap-1 xl:gap-2">
                <Phone className="h-3 w-3 xl:h-4 xl:w-4" />
                <span className="hidden xl:inline">{t('common.call')}</span>
                <span className="xl:hidden">Call</span>
              </a>
            </Button>
            <WhatsAppButton text={t('common.whatsapp')} className="btn-primary text-xs xl:text-sm" />
          </div>

          {/* Premium Mobile Menu */}
          <div className="lg:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-colors duration-300 p-2 ${
                isScrolled ? 'text-primary hover:text-accent' : 'text-white hover:text-accent'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Premium Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden animate-fade-in">
            <div className="card-premium mt-4 mb-6">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="block px-4 py-3 text-neutral-700 hover:text-primary hover:bg-neutral-50 rounded-xl transition-all duration-200 font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {t(`navigation.${item.key}`)}
                  </a>
                ))}
              </div>
              
              <div className="border-t border-neutral-200 pt-6 mt-6 space-y-3">
                <Button
                  asChild
                  className="btn-ghost w-full"
                >
                  <a href="tel:+919848925249" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    {t('common.call')}
                  </a>
                </Button>
                <WhatsAppButton text={t('common.whatsapp')} className="btn-primary w-full" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};