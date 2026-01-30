import { Course } from '@/types';
import Link from 'next/link';
import { ExternalLink, BookOpen, Clock } from 'lucide-react';
import type { Locale } from '@/lib/i18n/settings';
import type { Dictionary } from '@/lib/i18n/dictionaries';

interface CourseCardProps {
  course: Course;
  locale: Locale;
  dict: Dictionary;
}

export default function CourseCard({ course, locale, dict }: CourseCardProps) {
  const difficultyLabel = {
    beginner: dict.courses.beginner,
    intermediate: dict.courses.intermediate,
    advanced: dict.courses.advanced,
  }[course.difficulty];

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden hover:shadow-lg hover:shadow-indigo-500/10 transition-shadow duration-300 flex flex-col">
      <div className="p-6 flex-1">
        <div className="flex justify-between items-start mb-4">
          <span className={`text-xs font-semibold px-2 py-1 rounded-full uppercase tracking-wider ${
            course.difficulty === 'beginner' ? 'bg-green-900 text-green-300' :
            course.difficulty === 'intermediate' ? 'bg-blue-900 text-blue-300' :
            'bg-purple-900 text-purple-300'
          }`}>
            {difficultyLabel}
          </span>
          <span className="text-xs font-medium text-gray-400 bg-gray-700 px-2 py-1 rounded">
            {course.platform}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2">
          <Link href={`/${locale}/courses/${course.slug}`} className="hover:text-indigo-400 transition">
            {course.title}
          </Link>
        </h3>
        
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {course.shortDescription}
        </p>
        
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center">
            <BookOpen className="w-4 h-4 mr-1" />
            <span>{course.category?.name}</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{course.isFree ? dict.common.free : dict.common.paid}</span>
          </div>
        </div>
      </div>
      
      <div className="px-6 py-4 bg-gray-900 border-t border-gray-700 flex justify-between items-center">
        <Link 
          href={`/${locale}/courses/${course.slug}`}
          className="text-indigo-400 font-semibold text-sm hover:underline"
        >
          {dict.common.viewDetails}
        </Link>
        <a 
          href={course.externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-indigo-400 transition"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
