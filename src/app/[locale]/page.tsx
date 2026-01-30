import Link from 'next/link';
import { COURSES } from '@/lib/mock-data';
import CourseCard from '@/components/courses/CourseCard';
import { ArrowRight, Sparkles, BookOpen, GraduationCap } from 'lucide-react';
import { locales, type Locale } from '@/lib/i18n/settings';
import { getDictionary } from '@/lib/i18n/dictionaries';

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Home({ params }: HomeProps) {
  const { locale } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : 'en') as Locale;
  const dict = getDictionary(validLocale);
  const featuredCourses = COURSES.slice(0, 3);

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              {dict.home.heroTitle} <span className="text-indigo-400">{dict.home.heroHighlight}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              {dict.home.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                href={`/${locale}/courses`}
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-900/50 flex items-center justify-center"
              >
                {dict.home.browseCourses} <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                href={`/${locale}/roadmaps`}
                className="bg-gray-800 text-white border-2 border-gray-700 px-8 py-4 rounded-xl font-bold text-lg hover:border-indigo-500 hover:text-indigo-400 transition flex items-center justify-center"
              >
                {dict.home.learningPaths}
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center">
              <Sparkles className="mr-2 text-yellow-500" /> {dict.home.featuredCourses}
            </h2>
            <p className="text-gray-400">{dict.home.featuredCoursesDesc}</p>
          </div>
          <Link href={`/${locale}/courses`} className="text-indigo-400 font-semibold hover:underline flex items-center">
            {dict.common.viewAll} <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map(course => (
            <CourseCard key={course.id} course={course} locale={validLocale} dict={dict} />
          ))}
        </div>
      </section>

      {/* Featured Roadmap - Vibe Coding */}
      <section className="bg-indigo-950 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">{dict.home.stopGuessing}</h2>
              <p className="text-indigo-200 text-lg mb-8 leading-relaxed">
                {dict.home.stopGuessingDesc}
              </p>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-indigo-900 p-2 rounded-lg mr-4">
                    <BookOpen className="w-6 h-6 text-indigo-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">{dict.home.noSyntaxRequired}</h4>
                    <p className="text-indigo-200">{dict.home.noSyntaxDesc}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-indigo-900 p-2 rounded-lg mr-4">
                    <GraduationCap className="w-6 h-6 text-indigo-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">{dict.home.sevenLevels}</h4>
                    <p className="text-indigo-200">{dict.home.sevenLevelsDesc}</p>
                  </div>
                </div>
              </div>

              <Link 
                href={`/${locale}/roadmaps/vibe-coding`}
                className="inline-flex items-center bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition"
              >
                {dict.home.startRoadmap}
              </Link>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20">
              <h3 className="text-2xl font-bold mb-6">{dict.home.roadmapPreview}</h3>
              <div className="space-y-4">
                {[
                  { level: 0, title: locale === 'ko' ? '마인드셋 리셋' : 'Mindset Reset', desc: locale === 'ko' ? 'Vibe Coding이란' : 'What vibe coding is' },
                  { level: 1, title: locale === 'ko' ? '문제 정의하기' : 'Defining Problems', desc: locale === 'ko' ? '언어로 생각하기' : 'Think in words' },
                  { level: 2, title: locale === 'ko' ? 'AI 지시하기' : 'Directing AI', desc: locale === 'ko' ? '효과적인 프롬프팅' : 'Prompting that works' },
                  { level: 3, title: locale === 'ko' ? '코드 읽기' : 'Reading Code', desc: locale === 'ko' ? '작성 없이 판단하기' : 'Judge without writing' },
                ].map((item) => (
                  <div key={item.level} className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center mr-4 font-bold">
                      {item.level}
                    </div>
                    <div>
                      <div className="font-semibold">{item.title}</div>
                      <div className="text-sm text-indigo-300">{item.desc}</div>
                    </div>
                  </div>
                ))}
                <div className="flex items-center p-4 bg-white/5 rounded-xl border border-white/10 opacity-60">
                  <div className="w-8 h-8 bg-indigo-400 rounded-full flex items-center justify-center mr-4 font-bold text-white">
                    +3
                  </div>
                  <div>
                    <div className="font-semibold text-white/70">{dict.home.moreLevels}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
