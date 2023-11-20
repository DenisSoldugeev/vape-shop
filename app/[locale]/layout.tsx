import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { isValidLocale } from 'utils/locales';
import { openSans, phenomena } from '@/fonts';
import AuthProvider from 'components/AuthProvider/AuthProvider';
import { NextIntlClientProvider } from 'next-intl';
import { UserMenuProvider } from 'context/UserMenuContext';
import RecoidContextProvider from 'context/RecoilContext';
import 'styles/global.scss';
export const metadata: Metadata = {
  title: 'Vape Store',
  description: 'Sore for vape',
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
    <html
      lang={locale}
      className={`${openSans.variable} ${phenomena.variable}`}
    >
      <body>
        <NextIntlClientProvider locale={locale}>
          <AuthProvider>
            <RecoidContextProvider>
              <UserMenuProvider>
                <Header />
                <main>{children}</main>
                <Footer />
              </UserMenuProvider>
            </RecoidContextProvider>
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
