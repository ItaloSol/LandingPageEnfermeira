'use client';

import { Facebook, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E3A8A] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="relative w-40 h-20 mb-6">
              <Image
                src="/logo.webp"
                alt="Logo Enfermeira Selma Silva"
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </div>
            <p className="text-gray-300 mb-4">
              Especialista em tratamento de feridas complexas e cuidados com pacientes diabéticos.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com/selma.maria" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="https://instagram.com/enfa_selmasilva" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>(81) 99781-4078</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <span>celmaliliane@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 mt-1" />
                <span>Atendimento em Passira, Limoeiro e região</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Horário de Atendimento</h3>
            <div className="space-y-2 text-gray-300">
              <p>Segunda a Sexta: 8h às 18h</p>
              <p>Sábado: 8h às 12h</p>
              <p>Atendimento domiciliar com horário agendado</p>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; {currentYear} Enfermeira Selma Silva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}