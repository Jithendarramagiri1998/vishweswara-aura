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
      className="section-sacred bg-neutral-50 relative"
      style={{
        backgroundImage: `url(${sacredPattern})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'soft-light'
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in">
            <h2 className="heading-secondary mb-8">
              {t('about.title')}
            </h2>
            
            <p className="text-sacred mb-8 text-lg leading-relaxed">
              {t('about.description')}
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-4 bg-card/80 backdrop-blur-sm rounded-xl shadow-sacred hover:shadow-golden transition-all duration-300"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent-dark rounded-xl flex items-center justify-center shadow-golden">
                      <feature.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>
                  <span className="text-primary font-semibold">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative animate-fade-in">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-accent/20 to-accent-dark/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-full blur-xl"></div>
              
              {/* Main card */}
              <div className="relative bg-card/90 backdrop-blur-md rounded-2xl p-8 shadow-elevated border border-accent/10">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mx-auto mb-6 shadow-sacred">
                    <Clock className="h-10 w-10 text-primary-foreground" />
                  </div>
                  
                  <h3 className="heading-tertiary mb-4">Ramagiri Ramesh</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-center gap-2 text-accent font-semibold">
                      <Award className="h-5 w-5" />
                      <span>5+ Years Experience</span>
                    </div>
                    
                    <div className="text-neutral-600">
                      Certified Vasthu & Jyothisya Consultant
                    </div>
                    
                    <div className="text-sm text-neutral-500 bg-neutral-100 rounded-lg p-3">
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