import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale, isValidLocale, type Locale } from '@/lib/i18n/settings';

function getLocaleFromHeaders(request: NextRequest): Locale {
  const acceptLanguage = request.headers.get('accept-language');
  if (!acceptLanguage) return defaultLocale;

  // Parse accept-language header and find the best match
  const languages = acceptLanguage
    .split(',')
    .map((lang) => {
      const [code, q = 'q=1'] = lang.trim().split(';');
      return {
        code: code.split('-')[0].toLowerCase(),
        quality: parseFloat(q.replace('q=', '')) || 1,
      };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { code } of languages) {
    if (isValidLocale(code)) {
      return code;
    }
  }

  return defaultLocale;
}

function getLocaleFromCookie(request: NextRequest): Locale | null {
  const localeCookie = request.cookies.get('NEXT_LOCALE');
  if (localeCookie && isValidLocale(localeCookie.value)) {
    return localeCookie.value;
  }
  return null;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // Determine locale: cookie > browser preference > default
  const cookieLocale = getLocaleFromCookie(request);
  const locale = cookieLocale || getLocaleFromHeaders(request);

  // Redirect to the locale-prefixed path
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;

  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Skip internal paths and static files
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
