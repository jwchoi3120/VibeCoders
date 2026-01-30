import Navbar from '@/components/layout/Navbar';
import '@/app/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { locales, type Locale } from '@/lib/i18n/settings';
import { getDictionary } from '@/lib/i18n/dictionaries';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'VibeCodingLearners | Curated Coding Courses & Roadmaps',
  description: 'Aggregated and curated coding courses for developers. Find the best free and paid resources to master software engineering.',
  keywords: ['coding courses', 'programming roadmaps', 'frontend roadmap', 'backend roadmap', 'free coding resources'],
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : 'en') as Locale;
  const dict = getDictionary(validLocale);

  return (
    <html lang={validLocale}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CM7NWGR2XW"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CM7NWGR2XW');
          `}
        </Script>
      </head>
      <body className={`${inter.className} min-h-screen`} suppressHydrationWarning>
        <Navbar locale={validLocale} dict={dict} />
        <main>
          {children}
        </main>
        <footer className="bg-gray-900 border-t border-gray-800 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-500">{dict.common.footer.replace('{year}', new Date().getFullYear().toString())}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
