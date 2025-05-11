import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '#/i18n/routing';
import './globals.css';
import { ApolloWrapper } from '#/libs/apollo-wrapper';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import 'dayjs/locale/zh-cn';
import MessageProvider from '#/hooks/MessageProvider';
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
        <ApolloWrapper>
          <AntdRegistry>
            <ConfigProvider locale={zhCN}>
              <NextIntlClientProvider>
                <MessageProvider>
                  {children}
                </MessageProvider>
              </NextIntlClientProvider>
            </ConfigProvider>
          </AntdRegistry>
        </ApolloWrapper>
      </body>
    </html>
  );
}