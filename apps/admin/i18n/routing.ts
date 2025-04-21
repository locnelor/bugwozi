import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // locales: ['zh'],
  // defaultLocale: 'zh'
  locales: ['zh', 'en'],
  localePrefix: 'as-needed',
  defaultLocale: 'zh',
  localeDetection: false,
});