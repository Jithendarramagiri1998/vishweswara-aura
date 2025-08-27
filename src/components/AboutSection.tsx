import { useTranslation } from 'react-i18next';
import { CheckCircle, Award, Users, Clock } from 'lucide-react';
import sacredPattern from '@/assets/sacred-pattern.jpg';

export const AboutSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Award,
      text: t('about.experience')
    },
    {
      icon: Users,
      text: t('about.consultation')
    },
    {
      icon: CheckCircle,
      text: t('about.pricing')
    }
  ];

  return (
    <section 
      id="about" 
      className="section-premium bg-gradient-subtle relative overflow-hidden"
      style={{
        backgroundImage: `url(${sacredPattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'soft-light'
      }}
    >
      {/* Premium background elements */}
      <div className="sacred-pattern inset-0"></div>
      
      <div className="container-premium relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Premium content */}
          <div className="animate-slide-in order-2 lg:order-1">
            <h2 className="heading-secondary mb-10">
              {t('about.title')}
            </h2>
            
            <p className="text-lead mb-12 text-neutral-700">
              {t('about.description')}
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="card-premium group animate-fade-in hover:border-accent/30"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent-dark rounded-2xl flex items-center justify-center shadow-golden group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                        <feature.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="text-primary font-display font-semibold text-lg group-hover:text-primary-accent transition-colors duration-300">
                        {feature.text}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium visual element */}
          <div className="relative animate-fade-in order-1 lg:order-2">
            {/* Floating background elements */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-accent/20 to-accent-dark/20 rounded-full blur-2xl floating-element"></div>
            <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-full blur-2xl floating-element" style={{ animationDelay: '1s' }}></div>
            
            {/* Premium consultant card */}
            <div className="card-floating relative group">
              <div className="text-center">
                {/* Premium avatar */}
                <div className="w-28 h-28 bg-gradient-to-br from-primary via-primary-accent to-primary-dark rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110">
                  <Clock className="h-14 w-14 text-white" />
                </div>
                
                <h3 className="heading-tertiary mb-6 group-hover:text-primary-accent transition-colors duration-300">
                  Ramagiri Ramesh
                </h3>
                
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-3 bg-accent/10 rounded-2xl px-6 py-3">
                    <Award className="h-6 w-6 text-accent" />
                    <span className="text-accent-gradient font-display font-semibold text-lg">
                      5+ Years Experience
                    </span>
                  </div>
                  
                  <div className="text-neutral-600 font-medium text-lg">
                    Certified Vasthu & Jyothisya Consultant
                  </div>
                  
                  <div className="card-premium text-center bg-gradient-to-r from-neutral-25 to-neutral-50 border-l-4 border-accent">
                    <div className="text-primary font-serif font-semibold italic text-lg">
                      "Traditional wisdom meets modern practicality"
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};