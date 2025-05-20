'use client';

import { PhoneCall } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="absolute -top-16 right-0 bg-white p-4 rounded-lg shadow-lg mb-4 w-64 text-sm text-gray-700 hidden group-hover:block">
        Não deixe suas feridas limitarem sua vida. Agende agora sua avaliação especializada!
      </div>
      <a
        href={`https://wa.me/5581997814078?text=${encodeURIComponent(
          'Olá Selma, sou paciente 50+ com diabetes e quero agendar uma avaliação.'
        )}`}
        className="group flex items-center gap-2 bg-[#1E90FF] text-white px-6 py-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
      >
        <PhoneCall className="w-6 h-6" />
        <span className="font-medium">Falar no WhatsApp</span>
      </a>
    </div>
  );
}