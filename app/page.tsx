'use client';

import HeroSection from '@/components/HeroSection';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import ProblemSection from '@/components/ProblemSection';
import SolutionSection from '@/components/SolutionSection';
import StatsSection from '@/components/StatsSection';
import ServicesSection from '@/components/ServicesSection';
import BenefitsSection from '@/components/BenefitsSection';
import ServiceOptionsSection from '@/components/ServiceOptionsSection';
import LocationsSection from '@/components/LocationsSection';
import FAQSection from '@/components/FAQSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PhotoGallery from '@/components/PhotoGallery';
import WhatsAppButton from '@/components/WhatsAppButton';
import AboutSection from '@/components/AboutSection';
import { Calendar } from 'lucide-react';
import { useEffect } from 'react';

const ConsultButton = () => (
  <div className="py-12 bg-white">
    <div className="container mx-auto px-4 text-center">
      <a
        href={`https://wa.me/5581997814078?text=${encodeURIComponent(
          'Olá, gostaria de agendar uma consulta especializada para tratamento.'
        )}`}
        className="inline-flex items-center px-8 py-4 bg-[#1E90FF] text-white rounded-full hover:bg-[#1873CC] hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        <Calendar className="w-5 h-5 mr-2" />
        Agende sua avaliação especializada
      </a>
      <p className="mt-4 text-gray-600 text-sm">
        Atendimento personalizado e humanizado para seu caso
      </p>
    </div>
  </div>
);

export default function Home() {
  const sections = [
    { Component: HeroSection, bg: 'bg-[#E0F7FA]' },
    { Component: AboutSection, bg: 'bg-white' },
    { Component: ConsultButton, bg: 'bg-white' },
    { Component: TargetAudienceSection, bg: 'bg-[#F8F9FA]' },
    { Component: ProblemSection, bg: 'bg-[#FFF5F5]' },
    { Component: ConsultButton, bg: 'bg-white' },
    { Component: SolutionSection, bg: 'bg-[#F0F9FF]' },
    { Component: StatsSection, bg: 'bg-white' },
    { Component: ConsultButton, bg: 'bg-white' },
    { Component: ServicesSection, bg: 'bg-[#F8F9FA]' },
    { Component: BenefitsSection, bg: 'bg-white' },
    { Component: ConsultButton, bg: 'bg-white' },
    { Component: ServiceOptionsSection, bg: 'bg-[#F8F9FA]' },
    { Component: LocationsSection, bg: 'bg-white' },
    { Component: ConsultButton, bg: 'bg-white' },
    { Component: FAQSection, bg: 'bg-[#F8F9FA]' },
    { Component: TestimonialsSection, bg: 'bg-white' },
    { Component: PhotoGallery, bg: 'bg-[#F8F9FA]' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up', 'opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((section) => {
      section.classList.add('opacity-0');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {sections.map(({ Component, bg }, index) => (
        <div key={index} className="relative">
          <div className={`${bg} relative`}>
            {index > 0 && (
              <div className="absolute top-0 left-0 right-0 h-32 transform -translate-y-full overflow-hidden">
                <div className={`wave ${bg}`} />
              </div>
            )}
            <div className="animate-on-scroll">
              <Component />
            </div>
          </div>
        </div>
      ))}
      <WhatsAppButton />
    </main>
  );
}