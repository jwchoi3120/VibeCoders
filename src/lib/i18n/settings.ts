export const locales = ['en', 'ko'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ko: '한국어',
};

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}
