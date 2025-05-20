import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Enfermeira Selma Silva | Podiatra Especialista em Feridas',
  description: 'Tratamento especializado de feridas complexas e podologia com tecnologia avançada. Atendimento humanizado para pacientes diabéticos e idosos em Passira, Limoeiro e região.',
  keywords: 'enfermeira, podiatra, feridas complexas, diabetes, tratamento de feridas, podologia, unha encravada, laserterapia, ozonioterapia, PRP, PRF, TPN, Passira, Limoeiro',
  authors: [{ name: 'Selma Silva' }],
  creator: 'Selma Silva',
  publisher: 'Selma Silva',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/ico.ico',
    shortcut: '/ico.ico',
    apple: '/ico.ico',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1E90FF',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
  openGraph: {
    title: 'Enfermeira Selma Silva | Podiatra Especialista em Feridas',
    description: 'Tratamento especializado de feridas complexas e podologia com tecnologia avançada. Atendimento humanizado para pacientes diabéticos e idosos.',
    url: 'https://enfermeiraselmasilva.web.app/',
    siteName: 'Enfermeira Selma Silva',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Enfermeira Selma Silva',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}