"use client";

import { ReactNode } from 'react';
import { Layout } from 'antd';
import { useTranslations } from 'next-intl';

const { Content, Footer } = Layout;

interface BlogContentProps {
  children: ReactNode;
}

const BlogContent = ({ children }: BlogContentProps) => {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();

  return (
    <Layout>
      <Content className="min-h-screen pt-8 pb-16">
        {children}
      </Content>
      <Footer className="text-center bg-gray-100">
        <div className="mb-2">
          &copy; {currentYear} {t('Page.author')}. {t('Page.copyright')}
        </div>
        <div className="text-xs text-gray-500">
          Powered by Next.js · Ant Design · {t('Page.license')}: MIT
        </div>
      </Footer>
    </Layout>
  );
};

export default BlogContent;