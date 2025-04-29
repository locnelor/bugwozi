import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '#/i18n/routing';
import './globals.css';
import BlogHeader from '../../layout/BlogHeader';
import BlogContent from '../../layout/BlogContent';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider>
          <BlogHeader />
          <BlogContent>
            {children}
          </BlogContent>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}