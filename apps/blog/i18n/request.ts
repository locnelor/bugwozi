import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';
import { readFileSync } from 'fs';

const getMessage = (type: string) => {
  try {
    return JSON.parse(readFileSync(`./messages/${type}.json`, "utf-8"))
  } catch (e) {
    console.log("getMessage error", e)
    return {}
  }
}
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  return {
    locale,
    messages: getMessage(locale),
  };
});