import { VIBE_CODING_ROADMAP } from '@/lib/roadmap-content';
import { VIBE_CODING_ROADMAP_KO } from '@/lib/i18n/roadmap-content-ko';
import { CheckCircle, XCircle, Target, Lightbulb, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { locales, type Locale } from '@/lib/i18n/settings';
import { getDictionary } from '@/lib/i18n/dictionaries';

export const metadata: Metadata = {
  title: 'Vibe Coding Roadmap | Build Without Learning to Code | VibeCoders',
  description: 'A practical roadmap for AI-assisted development. Learn to build real software without traditional programming.',
};

interface VibeCodingPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function VibeCodingRoadmapPage({ params }: VibeCodingPageProps) {
  const { locale } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : 'en') as Locale;
  const dict = getDictionary(validLocale);

  // Use Korean or English content based on locale
  const roadmapContent = validLocale === 'ko' ? VIBE_CODING_ROADMAP_KO : VIBE_CODING_ROADMAP;
  const headline = dict.vibeRoadmap.headline;
  const subheadline = dict.vibeRoadmap.subheadline;
  const description = dict.vibeRoadmap.description;
  const forWho = dict.vibeRoadmap.forWho;
  const notForReasons = dict.vibeRoadmap.notForReasons;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero Section */}
      <header className="mb-20">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          {headline}
        </h1>
        <p className="text-xl text-indigo-400 font-medium mb-8">
          {subheadline}
        </p>
        <div className="text-gray-300 text-lg leading-relaxed whitespace-pre-line mb-12">
          {description}
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">{dict.vibeRoadmap.forYouIf}</h2>
          <ul className="space-y-4">
            {forWho.map((item, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Roadmap Levels */}
      <div className="space-y-16">
        {roadmapContent.map((level) => (
          <section key={level.level} id={`level-${level.level}`} className="scroll-mt-24">
            {/* Level Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-indigo-600 rounded-2xl flex items-center justify-center font-bold text-2xl text-white shadow-lg shadow-indigo-900/50">
                {level.level}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {validLocale === 'ko' ? `레벨 ${level.level}: ` : `Level ${level.level}: `}{level.title}
                </h2>
              </div>
            </div>

            {/* Philosophy */}
            <blockquote className="border-l-4 border-indigo-500 pl-6 py-2 mb-8">
              <p className="text-xl text-indigo-300 font-medium italic">
                "{level.philosophy}"
              </p>
            </blockquote>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* What you'll learn */}
              <div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
                <h3 className="font-bold text-white mb-4 flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  {dict.vibeRoadmap.whatYouWillLearn}
                </h3>
                <ul className="space-y-3">
                  {level.willLearn.map((item, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-start">
                      <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What you won't learn */}
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <h3 className="font-bold text-gray-400 mb-4 flex items-center">
                  <XCircle className="w-5 h-5 text-gray-500 mr-2" />
                  {dict.vibeRoadmap.whatYouWillNotLearn}
                </h3>
                <ul className="space-y-3">
                  {level.willNotLearn.map((item, i) => (
                    <li key={i} className="text-gray-500 text-sm flex items-start">
                      <span className="w-1.5 h-1.5 bg-gray-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Outcome */}
            <div className="bg-indigo-950 border border-indigo-900 rounded-xl p-6 mb-8">
              <h3 className="font-bold text-indigo-300 mb-2 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                {dict.vibeRoadmap.afterThisLevel}
              </h3>
              <p className="text-indigo-100">
                {level.outcome}
              </p>
            </div>

            {/* Example */}
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-yellow-400 mb-3 flex items-center text-sm uppercase tracking-wider">
                <Lightbulb className="w-4 h-4 mr-2" />
                {level.example.scenario}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {level.example.description}
              </p>
            </div>

            {/* Link to detailed level page */}
            <Link 
              href={`/${locale}/roadmaps/vibe-coding/level-${level.level}`}
              className="inline-flex items-center text-indigo-400 font-semibold hover:text-indigo-300 transition"
            >
              {dict.common.readFullContent.replace('{level}', level.level.toString())} <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </section>
        ))}
      </div>

      {/* Not For Section */}
      <section className="mt-24 pt-16 border-t border-gray-800">
        <h2 className="text-3xl font-bold text-white mb-4">
          {dict.vibeRoadmap.notForHeadline}
        </h2>
        <p className="text-gray-400 mb-8">
          {dict.vibeRoadmap.notForDesc}
        </p>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <ul className="space-y-6">
            {notForReasons.map((reason, i) => (
              <li key={i} className="flex items-start">
                <XCircle className="w-5 h-5 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 text-center">
        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-3xl p-12 border border-indigo-800">
          <h2 className="text-3xl font-bold text-white mb-4">
            {dict.vibeRoadmap.readyToStart}
          </h2>
          <p className="text-indigo-200 mb-8 max-w-xl mx-auto">
            {dict.vibeRoadmap.readyToStartDesc}
          </p>
          <Link 
            href={`/${locale}/roadmaps/vibe-coding/level-0`}
            className="inline-block bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-50 transition"
          >
            {dict.vibeRoadmap.beginLevel0}
          </Link>
        </div>
      </section>
    </div>
  );
}
