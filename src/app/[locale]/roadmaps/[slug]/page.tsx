import { ROADMAPS } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, BookOpen, ChevronRight, ExternalLink } from 'lucide-react';
import { locales, type Locale } from '@/lib/i18n/settings';
import { getDictionary } from '@/lib/i18n/dictionaries';

interface RoadmapPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const params = [];
  for (const locale of locales) {
    for (const roadmap of ROADMAPS) {
      // Skip vibe-coding as it has its own route
      if (roadmap.slug !== 'vibe-coding') {
        params.push({ locale, slug: roadmap.slug });
      }
    }
  }
  return params;
}

export default async function RoadmapDetailPage({ params }: RoadmapPageProps) {
  const { locale, slug } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : 'en') as Locale;
  const dict = getDictionary(validLocale);
  
  // Redirect vibe-coding to its dedicated page
  if (slug === 'vibe-coding') {
    notFound();
  }

  const roadmap = ROADMAPS.find(r => r.slug === slug);

  if (!roadmap) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href={`/${locale}/roadmaps`} className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" /> {dict.roadmaps.backToRoadmaps}
      </Link>

      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">{roadmap.title}</h1>
        <p className="text-xl text-gray-300 leading-relaxed">
          {roadmap.description}
        </p>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-700 -z-10 hidden md:block"></div>

        <div className="space-y-12">
          {roadmap.items.sort((a, b) => a.order - b.order).map((item, idx) => (
            <div key={item.id} className="relative flex flex-col md:flex-row gap-8">
              {/* Step Number */}
              <div className="hidden md:flex flex-shrink-0 w-12 h-12 bg-indigo-600 text-white rounded-full items-center justify-center font-bold text-xl shadow-lg shadow-indigo-900/50 z-10">
                {idx + 1}
              </div>

              <div className="flex-1">
                <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:shadow-md hover:shadow-indigo-500/10 transition-shadow">
                  <div className="md:hidden flex items-center gap-2 mb-4">
                    <span className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">Step {idx + 1}</span>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{item.course.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 gap-4">
                        <span className="flex items-center"><BookOpen className="w-4 h-4 mr-1" /> {item.course.platform}</span>
                        <span className={`px-2 py-0.5 rounded text-xs font-bold uppercase ${
                          item.course.difficulty === 'beginner' ? 'bg-green-900 text-green-300' : 'bg-blue-900 text-blue-300'
                        }`}>
                          {item.course.difficulty}
                        </span>
                      </div>
                    </div>
                    <Link 
                      href={`/${locale}/courses/${item.course.slug}`}
                      className="inline-flex items-center text-indigo-400 font-bold hover:underline"
                    >
                      {dict.common.courseDetails} <ChevronRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>

                  {item.explanation && (
                    <div className="bg-gray-900 border-l-4 border-indigo-500 p-4 mb-6 italic text-gray-300">
                      "{item.explanation}"
                    </div>
                  )}

                  <div className="flex justify-end">
                    <a 
                      href={item.course.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-indigo-600 text-white px-6 py-2.5 rounded-lg font-bold hover:bg-indigo-700 transition text-sm"
                    >
                      {dict.common.startLearning} <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20 p-12 bg-indigo-950 rounded-3xl text-center text-white border border-indigo-900">
        <h2 className="text-3xl font-bold mb-4">{dict.roadmaps.readyForNext}</h2>
        <p className="text-indigo-200 mb-8 max-w-lg mx-auto">
          {dict.roadmaps.readyForNextDesc}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input 
            type="email" 
            placeholder={dict.common.enterEmail}
            className="flex-1 px-6 py-4 rounded-xl text-white bg-gray-800 border border-gray-700 outline-none placeholder-gray-500"
          />
          <button className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition">
            {dict.common.joinWaitlist}
          </button>
        </div>
      </div>
    </div>
  );
}
