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
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: "02", 
      icon: Search,
      titleKey: 'process.step2.title',
      descKey: 'process.step2.description',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      number: "03",
      icon: Lightbulb,
      titleKey: 'process.step3.title', 
      descKey: 'process.step3.description',
      color: 'from-amber-500 to-amber-600'
    },
    {
      number: "04",
      icon: CheckCircle2,
      titleKey: 'process.step4.title',
      descKey: 'process.step4.description',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="process" className="section-sacred bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-6">
            {t('process.title')}
          </h2>
          <p className="text-sacred max-w-3xl mx-auto text-lg">
            Our structured approach ensures you receive the most effective and practical guidance for your space transformation.
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 250}ms` }}
              >
                {/* Connector dot for desktop */}
                <div className="hidden lg:block absolute top-20 left-1/2 w-4 h-4 bg-accent rounded-full -translate-x-1/2 z-10 group-hover:scale-150 transition-all duration-300 shadow-golden"></div>
                
                {/* Card */}
                <div className="relative bg-card rounded-2xl p-8 shadow-sacred hover:shadow-elevated transition-all duration-500 group-hover:scale-105 border border-neutral-200/50">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Step number */}
                  <div className="relative text-center mb-6">
                    <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl text-white font-bold text-xl shadow-golden group-hover:shadow-sacred transition-all duration-300 group-hover:scale-110`}>
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-neutral-100 rounded-xl group-hover:bg-accent/10 transition-all duration-300">
                      <step.icon className="h-6 w-6 text-neutral-600 group-hover:text-accent transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative text-center space-y-4">
                    <h3 className="heading-tertiary group-hover:text-primary transition-colors duration-300">
                      {t(step.titleKey)}
                    </h3>
                    
                    <p className="text-neutral-600 leading-relaxed group-hover:text-neutral-700 transition-colors duration-300">
                      {t(step.descKey)}
                    </p>
                  </div>

                  {/* Arrow for mobile */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8">
                      <div className="w-8 h-8 text-accent rotate-90">
                        <svg fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 backdrop-blur-sm border border-accent/20 rounded-2xl p-8">
            <div className="text-primary font-semibold text-xl mb-2">
              Ready to transform your space?
            </div>
            <p className="text-neutral-600 max-w-md">
              Start your journey to harmonious living with our expert guidance and traditional wisdom.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};