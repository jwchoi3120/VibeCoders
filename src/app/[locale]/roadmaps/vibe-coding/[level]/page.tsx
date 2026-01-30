import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import type { Metadata } from 'next';
import { locales, type Locale } from '@/lib/i18n/settings';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getLevelContent } from '@/lib/i18n/level-content';

interface LevelPageProps {
  params: Promise<{ locale: string; level: string }>;
}

export async function generateStaticParams() {
  const params = [];
  for (const locale of locales) {
    for (let i = 0; i <= 6; i++) {
      params.push({ locale, level: `level-${i}` });
    }
  }
  return params;
}

export async function generateMetadata({ params }: LevelPageProps): Promise<Metadata> {
  const { locale, level } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : 'en') as Locale;
  const levelNum = parseInt(level.replace('level-', ''));
  const content = getLevelContent(levelNum, validLocale);
  
  if (!content) {
    return { title: 'Not Found' };
  }

  return {
    title: `${content.title} | Vibe Coding Roadmap | VibeCoders`,
    description: content.subtitle,
  };
}

export default async function LevelPage({ params }: LevelPageProps) {
  const { locale, level } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : 'en') as Locale;
  const dict = getDictionary(validLocale);
  
  // Parse level number
  const levelNum = parseInt(level.replace('level-', ''));
  
  if (isNaN(levelNum) || levelNum < 0 || levelNum > 6) {
    notFound();
  }

  const content = getLevelContent(levelNum, validLocale);
  const prevLevel = levelNum > 0 ? levelNum - 1 : null;
  const nextLevel = levelNum < 6 ? levelNum + 1 : null;

  // Helper function to render section content
  const renderContent = (text: string) => {
    if (!text) return null;
    return text.split('\n\n').map((paragraph, i) => (
      <p key={i} className="mb-4 last:mb-0">
        {paragraph.split('**').map((part, j) => 
          j % 2 === 1 ? <strong key={j} className="text-white font-semibold">{part}</strong> : part
        )}
      </p>
    ));
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Breadcrumb */}
      <Link 
        href={`/${locale}/roadmaps/vibe-coding`}
        className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium mb-12"
      >
        <ArrowLeft className="w-4 h-4 mr-2" /> 
        {validLocale === 'ko' ? '로드맵으로 돌아가기' : 'Back to Roadmap'}
      </Link>

      {/* Header */}
      <header className="mb-16">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center font-bold text-3xl text-white shadow-lg shadow-indigo-900/50">
            {levelNum}
          </div>
          <div>
            <p className="text-indigo-400 font-medium text-sm uppercase tracking-wider">
              {validLocale === 'ko' ? 'Vibe Coding 로드맵' : 'Vibe Coding Roadmap'}
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">{content.title}</h1>
          </div>
        </div>
        
        <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 mb-8">
          <p className="text-xl text-indigo-300 font-medium italic">
            "{content.subtitle}"
          </p>
        </blockquote>

        <div className="text-gray-300 text-lg leading-relaxed">
          {renderContent(content.intro)}
        </div>
      </header>

      {/* Main Content */}
      <div className="space-y-16">
        {Object.entries(content.sections).map(([key, section]: [string, any]) => {
          if (!section || !section.title) return null;
          
          return (
            <section key={key} className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
              
              {section.content && (
                <div className="text-gray-300 leading-relaxed">
                  {renderContent(section.content)}
                </div>
              )}

              {/* Handle array items like fears, responsibilities, etc. */}
              {section.fears && (
                <div className="space-y-6 mt-6">
                  {section.fears.map((item: any, i: number) => (
                    <div key={i} className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                      <p className="text-red-400 font-medium mb-3">"{item.fear}"</p>
                      <p className="text-gray-300">{item.response}</p>
                    </div>
                  ))}
                </div>
              )}

              {section.yourResponsibilities && (
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-green-950 border border-green-900 rounded-xl p-6">
                    <h3 className="text-green-300 font-bold mb-4">
                      {validLocale === 'ko' ? '당신의 역할' : 'Your Responsibilities'}
                    </h3>
                    <ul className="space-y-2">
                      {section.yourResponsibilities.map((item: string, i: number) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-950 border border-blue-900 rounded-xl p-6">
                    <h3 className="text-blue-300 font-bold mb-4">
                      {validLocale === 'ko' ? 'AI의 역할' : "AI's Responsibilities"}
                    </h3>
                    <ul className="space-y-2">
                      {section.aiResponsibilities?.map((item: string, i: number) => (
                        <li key={i} className="text-gray-300 flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {section.summary && (
                <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 mt-6">
                  <p className="text-gray-300">{renderContent(section.summary)}</p>
                </div>
              )}

              {section.items && Array.isArray(section.items) && (
                <ul className="space-y-3 mt-6">
                  {section.items.map((item: string, i: number) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <span className="w-6 h-6 bg-indigo-900 text-indigo-400 rounded-full flex items-center justify-center mr-3 font-bold text-xs flex-shrink-0">
                        {i + 1}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}

        {/* Closing */}
        {content.closing && (
          <section className="border-t border-gray-800 pt-12">
            <div className="text-gray-300 leading-relaxed">
              {renderContent(content.closing)}
            </div>
          </section>
        )}

        {/* Completion Badge for Level 6 */}
        {levelNum === 6 && (
          <section className="text-center py-12">
            <div className="inline-flex flex-col items-center">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-indigo-900/50">
                <Sparkles className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {validLocale === 'ko' ? '로드맵 완료' : 'Roadmap Complete'}
              </h3>
              <p className="text-gray-400 max-w-md">
                {validLocale === 'ko' 
                  ? 'Vibe Coding 로드맵을 완료했습니다. 이제 무언가를 만들어 보세요.'
                  : "You've completed the Vibe Coding Roadmap. Now go build something."}
              </p>
            </div>
          </section>
        )}
      </div>

      {/* Navigation */}
      <nav className="mt-16 pt-8 border-t border-gray-800">
        <div className="flex justify-between items-center">
          {prevLevel !== null ? (
            <Link 
              href={`/${locale}/roadmaps/vibe-coding/level-${prevLevel}`}
              className="text-gray-400 hover:text-white transition flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> 
              {validLocale === 'ko' ? `레벨 ${prevLevel}` : `Level ${prevLevel}`}
            </Link>
          ) : (
            <Link 
              href={`/${locale}/roadmaps/vibe-coding`}
              className="text-gray-400 hover:text-white transition flex items-center"
            >
              <ArrowLeft className="w-4 h-4 mr-2" /> 
              {validLocale === 'ko' ? '로드맵 개요' : 'Roadmap Overview'}
            </Link>
          )}
          
          {nextLevel !== null ? (
            <Link 
              href={`/${locale}/roadmaps/vibe-coding/level-${nextLevel}`}
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition flex items-center"
            >
              {dict.common.continueToLevel} {nextLevel} <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          ) : (
            <Link 
              href={`/${locale}/roadmaps/vibe-coding`}
              className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-700 transition flex items-center"
            >
              {validLocale === 'ko' ? '로드맵으로 돌아가기' : 'Back to Roadmap'}
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
