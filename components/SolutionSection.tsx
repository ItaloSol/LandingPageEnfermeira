'use client';

import { Zap, Shield, Clock } from 'lucide-react';
import { useEffect } from 'react';

export default function SolutionSection() {
  const technologies = [
    {
      name: 'Laserterapia',
      description: 'Acelera cicatrização e reduz inflamação'
    },
    {
      name: 'Ozonioterapia',
      description: 'Combate infecções e estimula regeneração'
    },
    {
      name: 'PRP e PRF',
      description: 'Fatores de crescimento natural'
    },
    {
      name: 'TPN',
      description: 'Terapia por Pressão Negativa'
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

    document.querySelectorAll('.tech-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-[#F0F9FF]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Tecnologias Avançadas Para Cicatrização Segura
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Com Laserterapia, Ozonioterapia, PRP, PRF e Terapia por Pressão Negativa, 
              Selma acelera seu processo de cura, minimiza riscos e reduz a dor de forma efetiva.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow tech-card opacity-0"
                data-animation={index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}
              >
                <Zap className="w-8 h-8 text-[#1E90FF] mb-4" />
                <h3 className="text-xl font-medium mb-2">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center text-center">
              <div>
                <Clock className="w-12 h-12 text-[#1E90FF] mx-auto mb-4" />
                <h3 className="text-lg font-medium">Cicatrização Acelerada</h3>
              </div>
            </div>
            <div className="flex items-center justify-center text-center">
              <div>
                <Shield className="w-12 h-12 text-[#1E90FF] mx-auto mb-4" />
                <h3 className="text-lg font-medium">Risco Minimizado</h3>
              </div>
            </div>
            <div className="flex items-center justify-center text-center">
              <div>
                <Zap className="w-12 h-12 text-[#1E90FF] mx-auto mb-4" />
                <h3 className="text-lg font-medium">Redução da Dor</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}