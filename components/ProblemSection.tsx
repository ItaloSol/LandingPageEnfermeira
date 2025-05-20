'use client';

import { AlertTriangle } from 'lucide-react';
import { useEffect } from 'react';

export default function ProblemSection() {
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

    document.querySelectorAll('.card-animate').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-[#FFF5F5]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <AlertTriangle className="w-12 h-12 text-[#FF4444] mr-4" />
            <h2 className="text-3xl md:text-4xl font-light">
              Feridas que Demoram a Cicatrizar e Ameaçam Sua Qualidade de Vida
            </h2>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-xl text-gray-700 leading-relaxed">
              Seja úlcera venosa, arterial ou lesão por pressão, as complicações podem levar a 
              dor crônica e risco de infecções graves em pacientes acima de 50 anos e com diabetes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div 
                className="bg-[#FFF5F5] p-6 rounded-lg card-animate opacity-0"
                data-animation="animate-slide-in-left"
              >
                <h3 className="text-lg font-medium text-[#FF4444] mb-2">Dor Crônica</h3>
                <p className="text-gray-600">Impacto direto na sua mobilidade e bem-estar diário</p>
              </div>
              
              <div 
                className="bg-[#FFF5F5] p-6 rounded-lg card-animate opacity-0"
                data-animation="animate-slide-in-right"
              >
                <h3 className="text-lg font-medium text-[#FF4444] mb-2">Risco de Infecção</h3>
                <p className="text-gray-600">Complicações sérias que podem agravar seu quadro</p>
              </div>
              
              <div 
                className="bg-[#FFF5F5] p-6 rounded-lg card-animate opacity-0"
                data-animation="animate-slide-in-left"
              >
                <h3 className="text-lg font-medium text-[#FF4444] mb-2">Cicatrização Lenta</h3>
                <p className="text-gray-600">Processo prolongado que exige cuidados especializados</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}