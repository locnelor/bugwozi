import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '#/i18n/routing';
import './globals.css';
import MessageProvider from '#/hooks/MessageProvider';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ApolloWrapper } from '#/libs/apollo-wrapper';
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
    <html lang={locale} >
      <body>
        <ApolloWrapper>
          <NextIntlClientProvider>
            <AntdRegistry>
              <MessageProvider>
                {children}
              </MessageProvider>
            </AntdRegistry>
          </NextIntlClientProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}