import { useTranslation } from 'react-i18next';
import { Home, Building2, Star, MapPin } from 'lucide-react';

export const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Home,
      titleKey: 'services.homeVastu.title',
      descKey: 'services.homeVastu.description',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: Building2,
      titleKey: 'services.commercialVastu.title', 
      descKey: 'services.commercialVastu.description',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Star,
      titleKey: 'services.jyothisya.title',
      descKey: 'services.jyothisya.description', 
      gradient: 'from-amber-500 to-amber-600'
    },
    {
      icon: MapPin,
      titleKey: 'services.sitePlanning.title',
      descKey: 'services.sitePlanning.description',
      gradient: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="services" className="section-sacred bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">
            {t('services.title')}
          </h2>
          <p className="text-sacred max-w-2xl mx-auto">
            Comprehensive Vasthu and Jyothisya solutions tailored to your specific needs and space requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-2xl p-8 shadow-sacred hover:shadow-elevated transition-all duration-500 hover:scale-105 animate-fade-in border border-neutral-200/50"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-neutral-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-golden group-hover:shadow-sacred transition-all duration-300 group-hover:scale-110`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="heading-tertiary mb-4 group-hover:text-primary transition-colors duration-300">
                  {t(service.titleKey)}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
                  {t(service.descKey)}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-accent/20 to-accent-dark/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-45"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-accent/10 backdrop-blur-sm border border-accent/20 rounded-2xl px-8 py-4">
            <Star className="h-6 w-6 text-accent animate-sacred-glow" />
            <span className="text-primary font-semibold text-lg">
              Get personalized consultation for your space
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};