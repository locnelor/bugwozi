import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '#/i18n/routing';
import './globals.css';
import MessageProvider from '#/hooks/MessageProvider';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ApolloWrapper } from '#/libs/apollo-wrapper';
import { getViewer } from '#/hooks/viewer/getViewer';
import AdminLayoutHeader from './AdminLayoutHeader';
import AdminLayoutSide from './AdminLayoutSide';
import { getPrismaClient } from '#/libs/db';
import { PropsWithChildren } from "react"
import RedirectPage from "#/app/[locale]/redirectPage";
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import { ConfigProvider } from 'antd';

const HomeLayout = ({ children, locale }: PropsWithChildren<{ locale: string }>) => {
  return (
    <html lang={locale} >
      <body>
        <ApolloWrapper>
          <NextIntlClientProvider>
            <AntdRegistry>
              <ConfigProvider locale={zhCN}>
                <MessageProvider>
                  {children}
                </MessageProvider>
              </ConfigProvider>
            </AntdRegistry>
          </NextIntlClientProvider>
        </ApolloWrapper>
      </body>
    </html>
  )
}
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
  //   {
  //     "host": "localhost:25001",
  //     "connection": "keep-alive",
  //     "cache-control": "max-age=0",
  //     "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
  //     "sec-ch-ua-mobile": "?0",
  //     "sec-ch-ua-platform": "\"macOS\"",
  //     "upgrade-insecure-requests": "1",
  //     "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
  //     "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  //     "sec-fetch-site": "same-origin",
  //     "sec-fetch-mode": "navigate",
  //     "sec-fetch-user": "?1",
  //     "sec-fetch-dest": "document",
  //     "referer": "http://localhost:25001/auth/init",
  //     "accept-encoding": "gzip, deflate, br, zstd",
  //     "accept-language": "zh-CN,zh;q=0.9",
  //     "cookie": "__next_hmr_refresh_hash__=2a65d24e5891264e4204ffd9775155407c0b69b6f95e0452; __next_hmr_refresh_hash__=cfc442c5c1bc0be796758572c0b0311b7c0b69b6f95e0452",
  //     "x-forwarded-host": "localhost:25001",
  //     "x-forwarded-port": "25001",
  //     "x-forwarded-proto": "http",
  //     "x-forwarded-for": "::1",
  //     "x-next-intl-locale": "zh",
  //     "link": "<http://localhost:25001/auth/init>; rel=\"alternate\"; hreflang=\"zh\", <http://localhost:25001/en/auth/init>; rel=\"alternate\"; hreflang=\"en\", <http://localhost:25001/auth/init>; rel=\"alternate\"; hreflang=\"x-default\""
  // }
  const { viewer } = await getViewer()
  if (!viewer) {
    return (
      <HomeLayout locale={locale}>
        <RedirectPage>{children}</RedirectPage>
      </HomeLayout>
    )
  }
  const client = getPrismaClient();
  await client.$connect()
  return (
    <HomeLayout locale={locale}>
      <div className="fixed inset-0 flex flex-col w-full">
        <div className="flex-none">
          <AdminLayoutHeader />
        </div>
        <div className="flex flex-1 overflow-hidden">
          <div className="flex-none w-64">
            <AdminLayoutSide menus={viewer?.role?.menus?.map((e: any) => e.menu) || []} />
          </div>
          <div className="flex-1 overflow-auto bg-gray-100">
            {children}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}