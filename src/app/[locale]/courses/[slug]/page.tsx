import { COURSES } from '@/lib/mock-data';
import { notFound } from 'next/navigation';
import { ExternalLink, CheckCircle, ArrowLeft, Globe, ShieldCheck, Zap } from 'lucide-react';
import Link from 'next/link';
import { locales, type Locale } from '@/lib/i18n/settings';
import { getDictionary } from '@/lib/i18n/dictionaries';

interface CoursePageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateStaticParams() {
  const params = [];
  for (const locale of locales) {
    for (const course of COURSES) {
      params.push({ locale, slug: course.slug });
    }
  }
  return params;
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { locale, slug } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : 'en') as Locale;
  const dict = getDictionary(validLocale);
  const course = COURSES.find(c => c.slug === slug);

  if (!course) {
    notFound();
  }

  const difficultyLabel = {
    beginner: dict.courses.beginner,
    intermediate: dict.courses.intermediate,
    advanced: dict.courses.advanced,
  }[course.difficulty];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link href={`/${locale}/courses`} className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-medium mb-8">
        <ArrowLeft className="w-4 h-4 mr-2" /> {dict.courses.backToCourses}
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-indigo-900 text-indigo-300 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                {course.category?.name}
              </span>
              <span className="bg-gray-700 text-gray-300 text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                {difficultyLabel}
              </span>
            </div>
            <h1 className="text-4xl font-extrabold text-white mb-6">{course.title}</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {course.description || course.shortDescription}
            </p>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <ShieldCheck className="mr-2 text-green-400" /> {dict.courses.whyGood}
              </h2>
              <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
                <ul className="space-y-4">
                  {dict.courses.whyGoodPoints.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Zap className="mr-2 text-yellow-400" /> {dict.courses.whatYouLearn}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {dict.courses.whatYouLearnPoints.map((item, i) => (
                  <div key={i} className="bg-gray-800 border border-gray-700 p-4 rounded-xl flex items-center">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                    <span className="text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-lg">
              <div className="text-3xl font-bold text-white mb-6">
                {course.isFree ? dict.common.free : dict.common.paidContent}
              </div>
              
              <a 
                href={course.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition flex items-center justify-center mb-6"
              >
                {dict.common.goToCourse} <ExternalLink className="ml-2 w-5 h-5" />
              </a>

              <div className="space-y-4 border-t border-gray-700 pt-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 flex items-center"><Globe className="w-4 h-4 mr-2" /> {dict.courses.platform}</span>
                  <span className="font-semibold text-white">{course.platform}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 flex items-center"><CheckCircle className="w-4 h-4 mr-2" /> {dict.courses.language}</span>
                  <span className="font-semibold text-white">{course.language}</span>
                </div>
              </div>
            </div>

            <div className="bg-indigo-950 border border-indigo-900 rounded-2xl p-6">
              <h3 className="font-bold text-indigo-300 mb-2">{dict.courses.recommendedFor}</h3>
              <p className="text-indigo-200 text-sm leading-relaxed">
                {course.recommendedFor || dict.courses.recommendedForDefault}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
