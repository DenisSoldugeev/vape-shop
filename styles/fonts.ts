import { Open_Sans } from 'next/font/google';
import localFont from 'next/font/local';

const phenomena = localFont({
  src: '../fonts/Phenomena.woff2',
  display: 'swap',
  variable: '--font-phenomena',
});

const openSans = Open_Sans({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin', 'cyrillic', 'vietnamese'],
  variable: '--font-open-sans',
  display: 'swap',
});

export { phenomena, openSans };
