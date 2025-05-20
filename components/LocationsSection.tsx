'use client';

import { MapPin } from 'lucide-react';

export default function LocationsSection() {
  const locations = [
    {
      name: 'Empresarial Manoel Severino',
      city: 'Passira-PE',
      region: null
    },
    {
      name: 'Clínica NES',
      city: 'Limoeiro-PE',
      region: null
    },
    {
      name: 'Clínica Dr. Josiclecia Moura',
      city: 'Riacho-PE',
      region: null
    },
    {
      name: 'Clínica D+ Saúde',
      city: 'Carpina-PE',
      region: null
    },
    {
      name: null,
      city: null,
      region: 'Cumaru, Salgadinho, Riacho das Almas e região'
    },
    {
      name: null,
      city: null,
      region: 'Limoeiro e arredores'
    },
    {
      name: null,
      city: null,
      region: 'João Alfredo e região'
    },
    {
      name: null,
      city: null,
      region: 'Lagoa do Carro, Paudalho, Nazaré da Mata, Tracunhaém, Lagoa de Taenga'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-4">
          Atendemos Nas Seguintes Regiões
        </h2>
        <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Presente em diversas cidades para estar mais perto de você
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-6">
            {locations.slice(0, 4).map((location, index) => (
              <div
                key={index}
                className="bg-[#F8F9FA] p-6 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#1E90FF] mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-medium">{location.name}</h3>
                    <p className="text-gray-600">{location.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {locations.slice(4).map((location, index) => (
              <div
                key={index}
                className="bg-[#F8F9FA] p-6 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-[#1E90FF] mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <p className="text-gray-600">{location.region}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}