import { useTranslation } from 'react-i18next';
import { MapPin, Clock, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WhatsAppButton } from './WhatsAppButton';

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="section-sacred bg-gradient-to-br from-primary/5 to-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-accent font-medium text-lg mb-4">
            {t('contact.note')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in">
            {/* Consultant Info */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-sacred border border-accent/10">
              <h3 className="heading-tertiary mb-6 text-center">
                {t('contact.consultant')}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-neutral-50 rounded-xl">
                  <Clock className="h-6 w-6 text-accent flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-primary">Availability</div>
                    <div className="text-neutral-600">{t('contact.availability')}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-neutral-50 rounded-xl">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-primary">Address</div>
                    <div className="text-neutral-600 leading-relaxed">
                      {t('contact.address')}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Actions */}
            <div className="space-y-4">
              <WhatsAppButton 
                text={`${t('common.whatsapp')} - Quick Response`}
                className="w-full text-lg py-4"
              />
              
              <Button
                asChild
                className="btn-outline-sacred w-full text-lg py-4"
              >
                <a href="tel:+919848925249" className="flex items-center justify-center gap-3">
                  <Phone className="h-5 w-5" />
                  {t('common.call')} - {t('common.phone')}
                </a>
              </Button>
            </div>

            {/* Map Placeholder */}
            <div className="bg-card rounded-2xl p-6 shadow-sacred border border-accent/10">
              <div className="aspect-video bg-neutral-100 rounded-xl flex items-center justify-center">
                <div className="text-center text-neutral-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">Nizamabad, Telangana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};