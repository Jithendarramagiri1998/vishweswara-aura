import { useTranslation } from 'react-i18next';
import { Shield, Heart, Wrench, Zap } from 'lucide-react';

export const WhyChooseSection = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: Shield,
      titleKey: 'whyChoose.authentic.title',
      descKey: 'whyChoose.authentic.description',
    },
    {
      icon: Heart,
      titleKey: 'whyChoose.personalized.title',
      descKey: 'whyChoose.personalized.description',
    },
    {
      icon: Wrench,
      titleKey: 'whyChoose.remedies.title', 
      descKey: 'whyChoose.remedies.description',
    },
    {
      icon: Zap,
      titleKey: 'whyChoose.flexible.title',
      descKey: 'whyChoose.flexible.description',
    }
  ];

  return (
    <section id="why-choose" className="section-premium bg-gradient-to-br from-neutral-25 via-white to-neutral-50">
      {/* Premium background elements */}
      <div className="sacred-pattern inset-0 opacity-30"></div>
      
      <div className="container-premium relative z-10">
        <div className="text-center mb-20">
          <h2 className="heading-secondary mb-8">
            {t('whyChoose.title')}
          </h2>
          <p className="text-lead max-w-4xl mx-auto text-neutral-700">
            Experience the perfect blend of traditional wisdom and modern convenience with our comprehensive approach to Vasthu and Jyothisya consulting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="card-sacred text-center interactive-card animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Premium icon container */}
              <div className="relative mb-8">
                <div className="mx-auto w-28 h-28 bg-gradient-to-br from-primary to-primary-dark rounded-3xl shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-2 flex items-center justify-center">
                  <reason.icon className="h-14 w-14 text-white" />
                </div>
                
                {/* Floating accent decoration */}
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-accent to-accent-dark rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-300 delay-200 shadow-golden"></div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h3 className="heading-quaternary group-hover:text-primary-accent transition-colors duration-300">
                  {t(reason.titleKey)}
                </h3>
                
                <p className="text-body leading-relaxed">
                  {t(reason.descKey)}
                </p>
              </div>

              {/* Premium bottom accent */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-20 h-1 bg-gradient-to-r from-transparent via-accent to-transparent transition-all duration-700 rounded-t-full"></div>
            </div>
          ))}
        </div>

        {/* Premium trust indicators */}
        <div className="mt-28">
          <div className="card-floating max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="heading-quaternary text-primary mb-4">
                Trusted by families across Telangana
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-5xl font-bold text-primary mb-3 group-hover:text-primary-accent transition-colors duration-300">5+</div>
                <div className="text-neutral-600 font-display font-medium">Years Experience</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold text-accent mb-3 group-hover:text-accent-dark transition-colors duration-300">100+</div>
                <div className="text-neutral-600 font-display font-medium">Satisfied Clients</div>
              </div>
              <div className="group">
                <div className="text-5xl font-bold text-primary mb-3 group-hover:text-primary-accent transition-colors duration-300">24/7</div>
                <div className="text-neutral-600 font-display font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};