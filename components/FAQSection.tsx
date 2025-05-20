'use client';

import { HelpCircle } from 'lucide-react';

export default function FAQSection() {
  const faqs = [
    {
      question: 'O tratamento dói?',
      answer: 'A grande maioria das sessões é indolor; aplicamos anestesia tópica quando necessário.'
    },
    {
      question: 'Quantas sessões preciso?',
      answer: 'Em geral, de 4 a 6 sessões, mas o plano é personalizado conforme cada caso.'
    },
    {
      question: 'Eu, como diabético, corro mais riscos?',
      answer: 'Temos protocolos especiais para diabetes, reduzindo complicações e acelerando a cicatrização.'
    },
    {
      question: 'Como agendo e qual valor?',
      answer: (
        <span>
          Agendamento via WhatsApp:{' '}
          <a
            href="https://wa.me/5581997814078"
            className="text-[#1E90FF] hover:underline"
          >
            +55 81 9781-4078
          </a>
          . Consulte nossos pacotes e formas de pagamento.
        </span>
      )
    }
  ];

  return (
    <section className="relative py-16 bg-[#F8F9FA] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-center mb-12">
          <HelpCircle className="w-10 h-10 text-[#1E90FF] mr-4" />
          <h2 className="text-3xl md:text-4xl font-light">Dúvidas Frequentes</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-medium mb-3 text-gray-900">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(248,249,250,0) 0%, rgba(248,249,250,1) 100%)',
          clipPath: 'ellipse(70% 100% at 50% 100%)'
        }}
      />
    </section>
  );
}