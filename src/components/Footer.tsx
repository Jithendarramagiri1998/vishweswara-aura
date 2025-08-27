import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Facebook, Linkedin } from 'lucide-react';

export const Footer = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'whyChoose', href: '#why-choose' },
    { key: 'process', href: '#process' },
    { key: 'contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      href: '#',
      color: 'hover:text-blue-600'
    },
    {
      name: 'LinkedIn', 
      icon: Linkedin,
      href: '#',
      color: 'hover:text-blue-700'
    }
  ];

  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">
              Vishweshwara Vasthu Planning & Jyothisya
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Transform your space with authentic Vasthu principles and Jyothisya guidance. 
              5+ years of experience in creating harmonious environments for homes and businesses.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium">{t('footer.followUs')}: </span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className={`p-2 bg-primary-foreground/10 rounded-lg hover:bg-accent transition-all duration-300 ${social.color}`}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {t(`navigation.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t('footer.contactInfo')}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">Phone</div>
                  <a 
                    href="tel:+919848925249" 
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {t('common.phone')}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">Email</div>
                  <a 
                    href="mailto:example@email.com" 
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                  >
                    {t('common.email')}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium">Address</div>
                  <div className="text-primary-foreground/80 text-sm leading-relaxed">
                    {t('contact.address')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              {t('footer.copyright')}
            </p>
            
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};