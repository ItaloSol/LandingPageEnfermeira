'use client';

import { PhoneCall, ChevronRight, Award, Heart, Clock } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#E0F7FA] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#E0F7FA]/50 to-[#E0F7FA]/95 z-10" />
      
      <div className="absolute inset-0">
        <Image
          src="/fundo.webp"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      <div className="container mx-auto px-4 z-20 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-8 mb-8">
              <div className="relative w-48 h-24">
                <Image
                  src="/logo.webp"
                  alt="Logo Enfermeira Selma Silva"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-gray-900 mb-6">
              Cuidado Especializado para Feridas Complexas e Podologia
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8">
              Tratamento personalizado com tecnologia avançada e anos de experiência
            </p>
            
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-[#1E90FF]" />
                <span className="text-gray-700">15+ anos de experiência</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-6 h-6 text-[#1E90FF]" />
                <span className="text-gray-700">+1500 pacientes atendidos</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-[#1E90FF]" />
                <span className="text-gray-700">Atendimento humanizado</span>
              </div>
            </div>

            <a
              href={`https://wa.me/5581997814078?text=${encodeURIComponent(
                'Olá, gostaria de agendar uma consulta.'
              )}`}
              className="inline-flex items-center px-8 py-4 bg-[#1E90FF] text-white rounded-full hover:bg-blue-600 transition-colors shadow-lg"
            >
              <PhoneCall className="w-5 h-5 mr-2" />
              Agende sua consulta
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
          </div>

          <div className="relative">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/hero.webp"
                alt="Enfermeira Selma Silva"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl max-w-xs">
              <h2 className="text-xl font-medium text-gray-900 mb-2">
                Enfermeira Selma Silva
              </h2>
              <p className="text-gray-600">
                Podiatra e Especialista em tratamento de feridas complexas
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24">
        <div 
          className="absolute bottom-0 left-0 w-full h-full bg-white" 
          style={{
            clipPath: "ellipse(70% 100% at 50% 100%)"
          }}
        />
      </div>
    </section>
  );
}