'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Globe, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { locales, localeNames, type Locale } from '@/lib/i18n/settings';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface NavbarProps {
  locale: Locale;
  dict: Dictionary;
}

export default function Navbar({ locale, dict }: NavbarProps) {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Get path without locale prefix for language switching
  const getLocalizedPath = (newLocale: Locale) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    return `/${newLocale}${pathWithoutLocale}`;
  };

  // Set cookie and navigate when changing locale
  const handleLocaleChange = (newLocale: Locale) => {
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    setIsLangOpen(false);
  };

  return (
    <nav className="border-b border-gray-700 bg-gray-900/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href={`/${locale}`} className="text-2xl font-bold text-indigo-400">
              {dict.common.siteName}
            </Link>
          </div>
          <div className="hidden sm:flex items-center space-x-8">
            <Link href={`/${locale}/courses`} className="text-gray-300 hover:text-indigo-400 transition">
              {dict.common.courses}
            </Link>
            <Link href={`/${locale}/roadmaps`} className="text-gray-300 hover:text-indigo-400 transition">
              {dict.common.roadmaps}
            </Link>
          </div>
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition"
              >
                <Globe className="w-5 h-5" />
                <span className="text-sm font-medium">{localeNames[locale]}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-800 border border-gray-700 rounded-xl shadow-xl overflow-hidden">
                  {locales.map((loc) => (
                    <Link
                      key={loc}
                      href={getLocalizedPath(loc)}
                      onClick={() => handleLocaleChange(loc)}
                      className={`block px-4 py-3 text-sm transition ${
                        loc === locale 
                          ? 'bg-indigo-600 text-white' 
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      {localeNames[loc]}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href={`/${locale}/roadmaps/vibe-coding`}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              {dict.common.getStarted}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
