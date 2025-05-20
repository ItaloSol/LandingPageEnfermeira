'use client';

import { Building, Home, Video } from 'lucide-react';

export default function ServiceOptionsSection() {
  const options = [
    {
      icon: Building,
      title: 'Presencial no consultório',
      description: 'Atendimento completo em ambiente especializado com todos os recursos necessários para seu tratamento'
    },
    {
      icon: Home,
      title: 'Atendimento domiciliar',
      description: 'Cuidados profissionais no conforto da sua casa, com toda a atenção que você precisa'
    },
    {
      icon: Video,
      title: 'Teleconsulta',
      description: 'Acompanhamento e orientações online para casos específicos e dúvidas sobre o tratamento'
    }
  ];

  return (
    <section className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-4">
          Como Atendemos Você
        </h2>
        <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Flexibilidade e conveniência para seu melhor cuidado
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="bg-[#E6F3FF] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-[#1E90FF]" />
                </div>
                <h3 className="text-xl font-medium mb-4 text-center">{option.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {option.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}