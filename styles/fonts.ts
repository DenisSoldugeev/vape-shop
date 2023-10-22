import { Roboto } from 'next/font/google';
import localFont from 'next/font/local';

const phenomena = localFont({
  src: '../fonts/Phenomena.woff2',
  display: 'swap',
  variable: '--font-phenomena',
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'cyrillic', 'vietnamese'],
  variable: '--font-roboto',
  display: 'swap',
});

export { phenomena, roboto };
