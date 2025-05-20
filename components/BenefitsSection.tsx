'use client';

import { Clock, ThumbsUp, DollarSign, Shield } from 'lucide-react';
import { useEffect } from 'react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: 'Menor tempo de cicatrização',
      description: 'Tecnologias avançadas que aceleram o processo de recuperação'
    },
    {
      icon: ThumbsUp,
      title: 'Diminuição significativa da dor',
      description: 'Tratamentos focados no seu conforto e bem-estar'
    },
    {
      icon: DollarSign,
      title: 'Melhor custo-benefício',
      description: 'Resultados efetivos com planejamento personalizado'
    },
    {
      icon: Shield,
      title: 'Compromisso e responsabilidade',
      description: 'Acompanhamento dedicado em todas as etapas do tratamento'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.classList.add('opacity-100');
            target.classList.add(target.dataset.animation as string);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    document.querySelectorAll('.benefit-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-4">
          Por Que Escolher Este Tratamento?
        </h2>
        <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Compromisso com sua recuperação e qualidade de vida
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-[#F8F9FA] p-8 rounded-lg text-center hover:shadow-md transition-shadow benefit-card opacity-0"
                data-animation={index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}
              >
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <Icon className="w-8 h-8 text-[#1E90FF]" />
                </div>
                <h3 className="text-xl font-medium mb-4">{benefit.title}</h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}