import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { WhatsAppButton } from './WhatsAppButton';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '', 
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Please fill required fields",
        description: "Name, phone, and message are required.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
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

          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 shadow-elevated border border-accent/10">
              <h3 className="heading-tertiary mb-6 text-center">
                Send us a message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      {t('contact.form.name')} *
                    </label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="border-neutral-300 focus:border-accent focus:ring-accent/20"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      {t('contact.form.phone')} *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+91 98489 25249"
                      className="border-neutral-300 focus:border-accent focus:ring-accent/20"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    {t('contact.form.email')}
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="your@email.com"
                    className="border-neutral-300 focus:border-accent focus:ring-accent/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    {t('contact.form.message')} *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us about your space and requirements..."
                    rows={5}
                    className="border-neutral-300 focus:border-accent focus:ring-accent/20"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="btn-sacred w-full text-lg py-4 flex items-center justify-center gap-3"
                >
                  <Send className="h-5 w-5" />
                  {t('contact.form.submit')}
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="flex items-center justify-center gap-2 text-sm text-neutral-500">
                  <Mail className="h-4 w-4" />
                  <span>{t('common.email')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};