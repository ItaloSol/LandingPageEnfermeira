'use client';

import { Users, Heart } from 'lucide-react';

export default function TargetAudienceSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Users className="w-12 h-12 text-[#1E90FF] mr-4" />
            <h2 className="text-3xl md:text-4xl font-light">
              Especializada em Pacientes 50+ e Portadores de Diabetes
            </h2>
          </div>
          
          <div className="bg-[#F8F9FA] p-8 rounded-lg">
            <div className="flex items-start">
              <Heart className="w-8 h-8 text-[#1E90FF] mr-4 mt-1 flex-shrink-0" />
              <p className="text-xl text-gray-700 leading-relaxed">
                Tratamentos focados em úlceras venosas, arteriais, lesões por pressão e pé diabético, 
                pensados especialmente para quem convive com diabetes mellitus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}