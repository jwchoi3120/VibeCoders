import { ROADMAPS } from '@/lib/mock-data';
import Link from 'next/link';
import { Map, ArrowRight, Sparkles } from 'lucide-react';
import { locales, type Locale } from '@/lib/i18n/settings';
import { getDictionary } from '@/lib/i18n/dictionaries';

interface RoadmapsPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RoadmapsPage({ params }: RoadmapsPageProps) {
  const { locale } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : 'en') as Locale;
  const dict = getDictionary(validLocale);
  const roadmaps = ROADMAPS;
  const vibeCodingRoadmap = roadmaps.find(r => r.slug === 'vibe-coding');
  const otherRoadmaps = roadmaps.filter(r => r.slug !== 'vibe-coding');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center">
          <Map className="mr-3 text-indigo-400" /> {dict.roadmaps.title}
        </h1>
        <p className="text-xl text-gray-400">{dict.roadmaps.description}</p>
      </div>

      {/* Featured: Vibe Coding Roadmap */}
      {vibeCodingRoadmap && (
        <div className="mb-12">
          <div className="bg-gradient-to-r from-indigo-900 to-purple-900 border border-indigo-700 rounded-2xl p-8 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider">{dict.roadmaps.featuredRoadmap}</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              {validLocale === 'ko' ? 'Vibe Coding 로드맵' : vibeCodingRoadmap.title}
            </h2>
            <p className="text-indigo-200 mb-8 text-lg leading-relaxed max-w-2xl">
              {validLocale === 'ko' 
                ? '프로그래머가 되지 않고 소프트웨어를 만드는 실용적인 경로. 명확하게 생각하고, AI를 효과적으로 지시하고, 작동하는 소프트웨어를 출시하는 방법을 배우세요.'
                : vibeCodingRoadmap.description}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {dict.roadmaps.tags.map(tag => (
                <span key={tag} className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
            <Link 
              href={`/${locale}/roadmaps/vibe-coding`}
              className="inline-flex items-center bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition"
            >
              {dict.roadmaps.startTheRoadmap} <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      )}

      {/* Other Roadmaps */}
      {otherRoadmaps.length > 0 && (
        <>
          <h2 className="text-2xl font-bold text-white mb-6">{dict.roadmaps.moreRoadmaps}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherRoadmaps.map(roadmap => (
              <div key={roadmap.id} className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:shadow-xl hover:shadow-indigo-500/10 transition-shadow duration-300 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-4">{roadmap.title}</h3>
                <p className="text-gray-400 mb-8 flex-1 leading-relaxed">
                  {roadmap.description}
                </p>
                
                <div className="space-y-4 mb-8">
                  {roadmap.items.slice(0, 3).map((item, idx) => (
                    <div key={item.id} className="flex items-center text-sm text-gray-400">
                      <div className="w-6 h-6 bg-indigo-900 text-indigo-400 rounded-full flex items-center justify-center mr-3 font-bold text-xs">
                        {idx + 1}
                      </div>
                      <span className="truncate">{item.course.title}</span>
                    </div>
                  ))}
                  {roadmap.items.length > 3 && (
                    <div className="text-sm text-gray-500 pl-9">
                      + {roadmap.items.length - 3} more courses
                    </div>
                  )}
                </div>

                <Link 
                  href={`/${locale}/roadmaps/${roadmap.slug}`}
                  className="w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold hover:bg-indigo-700 transition flex items-center justify-center"
                >
                  {dict.roadmaps.viewFullRoadmap} <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
