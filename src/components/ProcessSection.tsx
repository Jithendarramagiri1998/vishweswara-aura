import { useTranslation } from 'react-i18next';
import { MessageSquare, Search, Lightbulb, CheckCircle2 } from 'lucide-react';

export const ProcessSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      titleKey: 'process.step1.title',
      descKey: 'process.step1.description',
    },
    {
      number: "02", 
      icon: Search,
      titleKey: 'process.step2.title',
      descKey: 'process.step2.description',
    },
    {
      number: "03",
      icon: Lightbulb,
      titleKey: 'process.step3.title', 
      descKey: 'process.step3.description',
    },
    {
      number: "04",
      icon: CheckCircle2,
      titleKey: 'process.step4.title',
      descKey: 'process.step4.description',
    }
  ];

  return (
    <section id="process" className="section-premium bg-white">
      <div className="container-premium">
        <div className="text-center mb-20">
          <h2 className="heading-secondary mb-8">
            {t('process.title')}
          </h2>
          <p className="text-lead max-w-4xl mx-auto text-neutral-700">
            Our structured approach ensures you receive the most effective and practical guidance for your space transformation.
          </p>
        </div>

        <div className="relative">
          {/* Premium connection line for desktop */}
          <div className="hidden lg:block absolute top-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/40 via-accent/40 to-transparent z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Premium connector dot for desktop */}
                <div className="hidden lg:flex absolute top-32 left-1/2 w-6 h-6 bg-gradient-to-br from-accent to-accent-dark rounded-full -translate-x-1/2 z-10 items-center justify-center shadow-golden group-hover:scale-150 transition-all duration-300">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                
                {/* Premium card */}
                <div className="card-sacred interactive-card">
                  {/* Step number - Premium design */}
                  <div className="relative text-center mb-8">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary via-primary-accent to-primary-dark rounded-3xl text-white font-display font-bold text-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2">
                      {step.number}
                    </div>
                  </div>

                  {/* Premium icon container */}
                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl group-hover:bg-gradient-to-br group-hover:from-accent/10 group-hover:to-accent/20 transition-all duration-300 shadow-sm group-hover:shadow-md">
                      <step.icon className="h-8 w-8 text-neutral-600 group-hover:text-accent transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center space-y-6">
                    <h3 className="heading-quaternary group-hover:text-primary-accent transition-colors duration-300">
                      {t(step.titleKey)}
                    </h3>
                    
                    <p className="text-body leading-relaxed">
                      {t(step.descKey)}
                    </p>
                  </div>

                  {/* Premium progress indicator */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-b-3xl"></div>
                </div>

                {/* Premium arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-8 animate-bounce">
                    <div className="w-10 h-10 bg-gradient-to-br from-accent/20 to-accent/30 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-accent rotate-90" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Premium CTA */}
        <div className="text-center mt-24">
          <div className="card-floating inline-flex flex-col items-center gap-6 px-12 py-10 max-w-2xl">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center animate-pulse shadow-xl">
              <CheckCircle2 className="h-10 w-10 text-white" />
            </div>
            
            <div className="text-center space-y-4">
              <h3 className="text-primary font-display font-bold text-2xl">
                Ready to transform your space?
              </h3>
              <p className="text-body max-w-md">
                Start your journey to harmonious living with our expert guidance and traditional wisdom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};