"use client";

import { useState, useCallback } from 'react';
import { Button, Input, Dropdown } from 'antd';
import {
  SearchOutlined,
  MenuOutlined,
  GlobalOutlined
} from '@ant-design/icons';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '#/i18n/navigation';
import UserButton from '#/components/UserButton';
import { usePathname } from 'next/navigation';
import BlogLink from '#/components/BlogLink';

const BlogHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const getLocalePath = useCallback((targetLocale: string) => {
    if (locale === 'zh') {
      return targetLocale === 'zh' ? pathname : pathname;
    }

    const pathWithoutLocale = pathname.replace(/^\/en/, '');
    return pathWithoutLocale || '/';
  }, [pathname, locale]);

  const languageItems = [
    {
      key: 'zh',
      label: <Link href={getLocalePath('zh')} locale="zh">中文</Link>,
    },
    {
      key: 'en',
      label: <Link href={getLocalePath('en')} locale="en">English</Link>,
    },
  ];

  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              {t('Page.logo')}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <BlogLink href="/" className="text-gray-700 hover:text-blue-600">
              {t('Page.article')}
            </BlogLink>
            {/* <Link href="/archives" className="text-gray-700 hover:text-blue-600">
              {t('Page.archives')}
            </Link> */}
            <BlogLink href="/categories" className="text-gray-700 hover:text-blue-600">
              {t('Page.categories')}
            </BlogLink>
            <BlogLink href="/tags" className="text-gray-700 hover:text-blue-600">
              {t('Page.tags')}
            </BlogLink>
            <BlogLink href="/links" className="text-gray-700 hover:text-blue-600">
              {t('Page.links')}
            </BlogLink>
            <BlogLink href="/about" className="text-gray-700 hover:text-blue-600">
              {t('Page.about')}
            </BlogLink>
          </nav>

          <div className="flex items-center space-x-4">

            <Dropdown menu={{ items: languageItems }} placement="bottomRight">
              <Button type="text" icon={<GlobalOutlined />}>
                {locale === 'zh' ? '中文' : 'English'}
              </Button>
            </Dropdown>

            <UserButton />
            <div className='md:hidden'>
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={toggleMenu}
              />
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <div className="mb-4">
              <Input
                placeholder={t('Page.searchPlaceholder')}
                prefix={<SearchOutlined />}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <Link href="/" className="p-2 hover:bg-gray-100 rounded">
                {t('Page.article')}
              </Link>
              <Link href="/archives" className="p-2 hover:bg-gray-100 rounded">
                {t('Page.archives')}
              </Link>
              <Link href="/categories" className="p-2 hover:bg-gray-100 rounded">
                {t('Page.categories')}
              </Link>
              <Link href="/tags" className="p-2 hover:bg-gray-100 rounded">
                {t('Page.tags')}
              </Link>
              <Link href="/links" className="p-2 hover:bg-gray-100 rounded">
                {t('Page.links')}
              </Link>
              <Link href="/about" className="p-2 hover:bg-gray-100 rounded">
                {t('Page.about')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default BlogHeader;