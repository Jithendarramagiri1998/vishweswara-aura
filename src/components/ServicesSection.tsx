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
    <section id="services" className="section-premium bg-white">
      <div className="container-premium">
        <div className="text-center mb-20">
          <h2 className="heading-secondary mb-8">
            {t('services.title')}
          </h2>
          <p className="text-lead max-w-3xl mx-auto text-neutral-600">
            Comprehensive Vasthu and Jyothisya solutions tailored to your specific needs and space requirements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-sacred interactive-card animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Premium icon container */}
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                  <service.icon className="h-10 w-10 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="heading-quaternary group-hover:text-primary transition-colors duration-300">
                  {t(service.titleKey)}
                </h3>
                
                <p className="text-body group-hover:text-neutral-700 transition-colors duration-300">
                  {t(service.descKey)}
                </p>
              </div>

              {/* Premium accent line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent to-accent-dark transition-all duration-500 group-hover:w-full rounded-b-3xl"></div>
            </div>
          ))}
        </div>

        {/* Premium CTA section */}
        <div className="text-center mt-24">
          <div className="card-floating inline-flex items-center gap-6 px-10 py-6 max-w-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-dark rounded-2xl flex items-center justify-center animate-pulse">
              <Star className="h-8 w-8 text-white" />
            </div>
            <div className="text-left">
              <div className="text-primary font-display font-semibold text-xl mb-1">
                Ready to transform your space?
              </div>
              <div className="text-neutral-600 font-medium">
                Get personalized consultation today
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};