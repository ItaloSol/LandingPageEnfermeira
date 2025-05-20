'use client';

import Image from 'next/image';
import { Award, GraduationCap, Heart } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/sobre.webp"
                alt="Enfermeira Selma Silva"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-6">
                Conheça a Enfermeira Selma Silva
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Com mais de 15 anos de experiência dedicados ao tratamento de feridas complexas,
                Selma Silva é referência no cuidado especializado de pacientes diabéticos e
                idosos na região.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#E6F3FF] p-3 rounded-lg mr-4">
                    <GraduationCap className="w-6 h-6 text-[#1E90FF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Especialização</h3>
                    <p className="text-gray-600">
                      Graduanda em Dermatologia com ênfase em feridas e ostomizados, e Podiatra especializada em cuidados dos pés
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#E6F3FF] p-3 rounded-lg mr-4">
                    <Award className="w-6 h-6 text-[#1E90FF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Reconhecimento</h3>
                    <p className="text-gray-600">
                      Premiada por excelência no atendimento e inovação em tratamentos
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#E6F3FF] p-3 rounded-lg mr-4">
                    <Heart className="w-6 h-6 text-[#1E90FF]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">Compromisso</h3>
                    <p className="text-gray-600">
                      Dedicação integral à saúde e bem-estar dos pacientes
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}