import type { Locale } from '../settings';
import { en, type Dictionary } from './en';
import { ko } from './ko';

const dictionaries: Record<Locale, Dictionary> = {
  en,
  ko,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries.en;
}

export type { Dictionary };
