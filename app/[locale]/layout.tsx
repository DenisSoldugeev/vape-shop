import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { isValidLocale } from 'utils/locales';
import { roboto, phenomena } from '@/fonts';
import 'styles/global.scss';
import AuthProvider from 'components/AuthProvider/AuthProvider';
import { NextIntlClientProvider } from 'next-intl';
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const locales: Locales = ['en', 'ru', 'hy'];

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  if (!isValidLocale(locales, locale)) notFound();

  return (
    <html lang={locale} className={`${roboto.variable} ${phenomena.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale}>
          <AuthProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
