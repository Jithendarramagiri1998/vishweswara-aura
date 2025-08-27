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
      className="flex items-center gap-2 text-primary-foreground hover:text-accent hover:bg-primary-light/20 transition-all duration-300"
      aria-label="Switch language"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {i18n.language === 'en' ? 'తె' : 'EN'}
      </span>
    </Button>
  );
};