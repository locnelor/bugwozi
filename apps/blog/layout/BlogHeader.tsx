"use client";

import { useState, useCallback } from 'react';
import { Button, Input, Menu, Dropdown } from 'antd';
import { 
  SearchOutlined, 
  MenuOutlined, 
  GlobalOutlined 
} from '@ant-design/icons';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '#/i18n/navigation';

const BlogHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const languageItems = [
    {
      key: 'zh',
      label: <Link href="/" locale="zh">中文</Link>,
    },
    {
      key: 'en',
      label: <Link href="/" locale="en">English</Link>,
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
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              {t('Page.article')}
            </Link>
            <Link href="/archives" className="text-gray-700 hover:text-blue-600">
              {t('Page.archives')}
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-blue-600">
              {t('Page.categories')}
            </Link>
            <Link href="/tags" className="text-gray-700 hover:text-blue-600">
              {t('Page.tags')}
            </Link>
            <Link href="/links" className="text-gray-700 hover:text-blue-600">
              {t('Page.links')}
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              {t('Page.about')}
            </Link>
          </nav>

          {/* Search and Menu Buttons */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:block">
              <Input
                placeholder={t('Page.searchPlaceholder')}
                prefix={<SearchOutlined />}
                className="rounded-full"
              />
            </div>
            
            <Dropdown menu={{ items: languageItems }} placement="bottomRight">
              <Button type="text" icon={<GlobalOutlined />}>
                {locale === 'zh' ? '中文' : 'English'}
              </Button>
            </Dropdown>

            <Button
              type="text"
              className="md:hidden"
              icon={<MenuOutlined />}
              onClick={toggleMenu}
            />
          </div>
        </div>

        {/* Mobile Menu */}
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