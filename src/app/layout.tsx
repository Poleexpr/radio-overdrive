import '../styles/globals.scss';

import type { Metadata } from 'next';

import { cocomat, micraDi } from '@/fonts';

import Header from '../components/header/Header';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'радио Овердрайв',
  description:
    'Семь ведущих из разных городов Земли ставят музыку высокого стиля прямо с космической станции. И помни — мы вещаем до последнего.',
  keywords: ['интернет-радио', 'новая музыка', 'топовые треки', 'рок', 'инди-музыка', 'андеграунд'],
  openGraph: {
    images: '/og-image.png',
  },
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html lang='en'>
    <body className={`${cocomat.variable} ${micraDi.variable}`}>
      <Header />
      {children}
    </body>
  </html>
);

export default RootLayout;
