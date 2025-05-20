'use client';

import { Users, Clock, Award } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function StatsSection() {
  const [counts, setCounts] = useState({
    patients: 0,
    years: 0,
    satisfaction: 0
  });

  const targets = {
    patients: 1537,
    years: 15,
    satisfaction: 100
  };

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const steps = 60; // Number of steps in the animation
    const interval = duration / steps;

    const animate = () => {
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setCounts({
          patients: Math.round(progress * targets.patients),
          years: Math.round(progress * targets.years),
          satisfaction: Math.round(progress * targets.satisfaction)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts(targets); // Ensure we end up with exact target values
        }
      }, interval);

      return () => clearInterval(timer);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('stats-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-section" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center">
            <Users className="w-12 h-12 text-[#1E90FF] mr-4" />
            <div>
              <h3 className="text-3xl font-semibold">{counts.patients}+</h3>
              <p className="text-gray-600">Pacientes atendidos</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Clock className="w-12 h-12 text-[#1E90FF] mr-4" />
            <div>
              <h3 className="text-3xl font-semibold">{counts.years}+</h3>
              <p className="text-gray-600">Anos de experiência</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Award className="w-12 h-12 text-[#1E90FF] mr-4" />
            <div>
              <h3 className="text-3xl font-semibold">{counts.satisfaction}%</h3>
              <p className="text-gray-600">Satisfação dos pacientes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}