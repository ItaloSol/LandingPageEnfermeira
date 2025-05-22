'use client';

import {
  HeartPulse, // Vasculares
  Thermometer, // Infecciosas
  Droplet,    // Dermatológicas
  Flame,      // Traumáticas e Outras
} from 'lucide-react';
import { useEffect } from 'react';

export default function ServicesSection() {
  const woundGroups = [
    {
      name: 'Feridas Vasculares',
      icon: HeartPulse,
      wounds: [
        'Úlceras venosas',
        'Úlceras arteriais',
        'Pé diabético'
      ]
    },
    {
      name: 'Feridas Infecciosas',
      icon: Thermometer,
      wounds: [
        'Erisipela',
        'Fungos'
      ]
    },
    {
      name: 'Feridas Dermatológicas',
      icon: Droplet,
      wounds: [
        'Dermatite',
        'Psoríase'
      ]
    },
    {
      name: 'Feridas Traumáticas e Outras',
      icon: Flame,
      wounds: [
        'Lesão por Pressão',
        'Queimaduras',
        'Deiscência cirúrgica',
        'Unha encravada'
      ]
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
          Tipos de Feridas Tratadas
        </h2>
        <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Tratamento especializado para diferentes tipos de feridas agudas e crônicas
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {woundGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 service-card opacity-0"
                data-animation={index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'}
              >
                <div className="bg-[#E6F3FF] w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#1E90FF]" />
                </div>
                <h3 className="text-xl font-medium mb-2">{group.name}</h3>
                <ul className="text-gray-600 leading-relaxed list-disc list-inside">
                  {group.wounds.map((wound, i) => (
                    <li key={i}>{wound}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}