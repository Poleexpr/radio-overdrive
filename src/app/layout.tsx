import '../styles/globals.scss';

import classnames from 'classnames';
import type { Metadata } from 'next';

import { Header } from '@/components';
import { cocomat, micraDi } from '@/fonts';

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
    <body className={classnames(cocomat.variable, micraDi.variable)}>
      <Header />
      {children}
    </body>
  </html>
);

export default RootLayout;
