import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'te' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1 sm:gap-2 text-primary-foreground hover:text-accent hover:bg-primary-light/20 transition-all duration-300 px-2 sm:px-3"
      aria-label="Switch language"
    >
      <Globe className="h-3 w-3 sm:h-4 sm:w-4" />
      <span className="font-medium text-xs sm:text-sm">
        {i18n.language === 'en' ? 'తె' : 'EN'}
      </span>
    </Button>
  );
};