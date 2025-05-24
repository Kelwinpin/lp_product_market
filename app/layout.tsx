import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ABC Goiânia',
  description: 'Encontre as melhores frutas, legumes e verduras frescos direto do produtor. Qualidade garantida e preços justos no Sacolão Sabor Natural.',
  keywords: 'sacolão, frutas frescas, verduras, legumes, hortifruti, produtos orgânicos, feira, produtos frescos',
  openGraph: {
    title: 'ABC Goiânia',
    description: 'Encontre as melhores frutas, legumes e verduras frescos direto do produtor. Qualidade garantida e preços justos.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Variedade de frutas e verduras frescas',
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}