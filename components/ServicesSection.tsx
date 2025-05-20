'use client';

import { Zap, Shield, Activity, Droplet, Wind, Layers } from 'lucide-react';
import { useEffect } from 'react';

export default function ServicesSection() {
  const services = [
    {
      name: 'Laserterapia',
      description: 'Tecnologia avançada que estimula a regeneração celular e acelera o processo de cicatrização através de luz concentrada.',
      icon: Zap
    },
    {
      name: 'Ozonioterapia',
      description: 'Tratamento que utiliza ozônio medicinal para combater infecções, melhorar a oxigenação dos tecidos e estimular o sistema imunológico.',
      icon: Wind
    },
    {
      name: 'PRP',
      description: 'Plasma Rico em Plaquetas: utiliza seu próprio sangue para criar um concentrado de fatores de crescimento que aceleram a cicatrização.',
      icon: Droplet
    },
    {
      name: 'PRF',
      description: 'Plasma Rico em Fibrina: evolução do PRP, criando uma matriz de fibrina que libera fatores de crescimento por mais tempo.',
      icon: Activity
    },
    {
      name: 'TPN',
      description: 'Terapia por Pressão Negativa: sistema avançado que promove a cicatrização através do controle preciso da pressão na ferida.',
      icon: Shield
    },
    {
      name: 'Coberturas especiais',
      description: 'Materiais tecnológicos específicos para cada tipo de lesão, garantindo o ambiente ideal para a cicatrização.',
      icon: Layers
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

    document.querySelectorAll('.service-card').forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-4">
          Nossas Ferramentas de Alta Performance
        </h2>
        <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Combinamos tecnologias avançadas para oferecer o tratamento mais eficaz e personalizado para cada caso
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 service-card opacity-0"
                data-animation={index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}
              >
                <div className="bg-[#E6F3FF] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#1E90FF]" />
                </div>
                <h3 className="text-xl font-medium mb-4">{service.name}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}