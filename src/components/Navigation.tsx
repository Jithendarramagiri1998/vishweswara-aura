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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Responsive Logo */}
          <div className="flex-shrink-0 min-w-0 max-w-[40%] sm:max-w-[50%] lg:max-w-none">
            <a href="#home" className={`font-serif font-bold transition-colors duration-300 leading-tight ${
              isScrolled ? 'text-primary' : 'text-white'
            }`}>
              <span className="text-xs block sm:hidden">Vishweshwara</span>
              <span className="text-sm hidden sm:block md:hidden">Vishweshwara Vasthu</span>
              <span className="text-sm md:text-base hidden md:block lg:hidden">Vishweshwara Vasthu Planner</span>
              <span className="text-base xl:text-lg hidden lg:block">Vishweshwara Vasthu Planner & Jyothisya</span>
            </a>
          </div>

          {/* Desktop Navigation - Improved Spacing */}
          <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-6 xl:space-x-8 2xl:space-x-10">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className={`font-display font-medium text-sm xl:text-base tracking-wide transition-all duration-300 relative group whitespace-nowrap px-2 py-1 ${
                    isScrolled ? 'text-neutral-700 hover:text-primary' : 'text-white/90 hover:text-accent'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {t(`navigation.${item.key}`)}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Actions - Better Spacing */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 flex-shrink-0">
            <LanguageSwitcher />
            <Button
              asChild
              size="sm"
              className={`btn-ghost text-xs xl:text-sm px-3 ${isScrolled ? 'text-neutral-700 hover:text-primary' : 'text-white hover:text-accent'}`}
            >
              <a href="tel:+919848925249" className="flex items-center gap-1 xl:gap-2">
                <Phone className="h-3 w-3 xl:h-4 xl:w-4" />
                <span className="hidden xl:inline">{t('common.call')}</span>
                <span className="xl:hidden">Call</span>
              </a>
            </Button>
            <WhatsAppButton text={t('common.whatsapp')} className="btn-primary text-xs xl:text-sm px-3" />
          </div>

          {/* Mobile Menu Button - Improved */}
          <div className="lg:hidden flex items-center space-x-2 flex-shrink-0">
            <div className="scale-90 sm:scale-100">
              <LanguageSwitcher />
            </div>
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

        {/* Mobile Navigation - Better Layout */}
        {isOpen && (
          <div className="lg:hidden animate-fade-in pb-4">
            <div className="mx-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-neutral-200/50 overflow-hidden">
              <div className="py-2">
                {navItems.map((item, index) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="block px-6 py-4 text-neutral-700 hover:text-primary hover:bg-neutral-50/80 transition-all duration-200 font-medium text-base border-b border-neutral-100 last:border-b-0"
                    onClick={() => setIsOpen(false)}
                  >
                    {t(`navigation.${item.key}`)}
                  </a>
                ))}
              </div>
              
              <div className="bg-neutral-50/80 px-6 py-4 space-y-3">
                <Button
                  asChild
                  size="sm"
                  className="btn-ghost w-full justify-center py-3"
                >
                  <a href="tel:+919848925249" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span className="font-medium">{t('common.call')}</span>
                  </a>
                </Button>
                <WhatsAppButton text={t('common.whatsapp')} className="btn-primary w-full py-3 font-medium" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};