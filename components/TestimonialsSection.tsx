'use client';

import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "A Enfermeira Selma mudou minha vida. Depois de anos lutando com feridas diabéticas, finalmente encontrei um tratamento que funciona.",
      author: "Maria S., 65 anos"
    },
    {
      text: "Profissional extremamente dedicada e atenciosa. O tratamento foi personalizado para minhas necessidades específicas.",
      author: "José R., 58 anos"
    },
    {
      text: "Graças aos cuidados da Enfermeira Selma, recuperei a mobilidade e qualidade de vida que havia perdido.",
      author: "Ana P., 72 anos"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12">
          O que dizem nossos pacientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#F8F9FA] p-8 rounded-lg relative">
              <Quote className="w-8 h-8 text-[#1E90FF] mb-4" />
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <p className="text-[#1E90FF] font-medium">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}