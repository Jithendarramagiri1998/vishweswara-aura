import { useTranslation } from 'react-i18next';
import { Shield, Heart, Wrench, Zap } from 'lucide-react';

export const WhyChooseSection = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      icon: Shield,
      titleKey: 'whyChoose.authentic.title',
      descKey: 'whyChoose.authentic.description',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Heart,
      titleKey: 'whyChoose.personalized.title',
      descKey: 'whyChoose.personalized.description',
      color: 'text-rose-600',
      bgColor: 'bg-rose-100'
    },
    {
      icon: Wrench,
      titleKey: 'whyChoose.remedies.title', 
      descKey: 'whyChoose.remedies.description',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-100'
    },
    {
      icon: Zap,
      titleKey: 'whyChoose.flexible.title',
      descKey: 'whyChoose.flexible.description',
      color: 'text-amber-600',
      bgColor: 'bg-amber-100'
    }
  ];

  return (
    <section id="why-choose" className="section-sacred bg-gradient-to-br from-neutral-50 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">
            {t('whyChoose.title')}
          </h2>
          <p className="text-sacred max-w-3xl mx-auto text-lg">
            Experience the perfect blend of traditional wisdom and modern convenience with our comprehensive approach to Vasthu and Jyothisya consulting.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="group text-center animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Icon container */}
              <div className="relative mb-8">
                <div className="mx-auto w-24 h-24 bg-card rounded-2xl shadow-sacred group-hover:shadow-golden transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 flex items-center justify-center">
                  <div className={`w-16 h-16 ${reason.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                    <reason.icon className={`h-8 w-8 ${reason.color}`} />
                  </div>
                </div>
                
                {/* Floating accent */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-200"></div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="heading-tertiary group-hover:text-accent transition-colors duration-300">
                  {t(reason.titleKey)}
                </h3>
                
                <p className="text-neutral-600 leading-relaxed px-2">
                  {t(reason.descKey)}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="mt-6 mx-auto w-0 group-hover:w-12 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20 bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-sacred border border-accent/10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-neutral-600">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">100%</div>
              <div className="text-neutral-600">Satisfied Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-neutral-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};