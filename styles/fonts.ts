import { Signika, Roboto } from 'next/font/google';

const signika = Signika({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-signika',
  display: 'swap',
});

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'cyrillic', 'vietnamese'],
  variable: '--font-roboto',
  display: 'swap',
});

export { signika, roboto };
