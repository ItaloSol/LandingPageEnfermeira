'use client';

import Image from 'next/image';
import { useState } from 'react';
import { Instagram, ArrowRight } from 'lucide-react';

export default function PhotoGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const photos = [
    {
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80",
      alt: "Caso de sucesso - Acidente automobilístico",
      description: "Acidente automobilístico: paciente jovem com apenas 10 sessões chegamos a esse resultado"
    },
    {
      url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80",
      alt: "Caso de sucesso - Erisipela",
      description: "Erisipela: em apenas 4 sessões e menos de 22 dias chegamos a esse resultado. Paciente hipertenso, diabético e obeso"
    },
    {
      url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80",
      alt: "Caso de sucesso - Úlcera Arterial",
      description: "Paciente 77 anos: Hipertensa, diabética, cardíaca, com úlcera Arterial. Foi orientada pelo médico vascular a retirar o tendão mas o filho decidiu não fazer a cirurgia a pedido da mãe (PCT). Continuamos o tratamento e chegamos a este resultado incrível sem precisar da cirurgia"
    }
  ];

  return (
    <section className="py-8 sm:py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center mb-8 sm:mb-12">
          Nossos resultados de antes e depois
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div 
                className="relative aspect-[4/3] overflow-hidden rounded-t-xl"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={photo.url}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={`object-cover transition-transform duration-300 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                  priority={index === 0}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-4 sm:p-6">
                <p className="text-sm sm:text-base text-gray-800 leading-relaxed">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-md">
            <h3 className="text-xl sm:text-2xl font-medium mb-4 text-center">
              Quer ver mais casos de sucesso?
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-6 text-center">
              Entre em contato agora mesmo para uma avaliação personalizada ou visite nosso Instagram para ver mais histórias inspiradoras de recuperação.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/5581997814078?text=${encodeURIComponent(
                  'Olá, gostaria de ver alguns casos de antes e depois e agendar uma avaliação.'
                )}`}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-[#1E90FF] text-white rounded-full hover:bg-[#1873CC] transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                Ver casos de sucesso
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
              </a>
              <a
                href="https://instagram.com/enfa_selmasilva"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-[#E1306C] text-white rounded-full hover:bg-[#C13584] transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                Siga no Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}