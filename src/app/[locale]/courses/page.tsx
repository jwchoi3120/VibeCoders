import { COURSES, CATEGORIES } from '@/lib/mock-data';
import CourseCard from '@/components/courses/CourseCard';
import { Search } from 'lucide-react';
import { locales, type Locale } from '@/lib/i18n/settings';
import { getDictionary } from '@/lib/i18n/dictionaries';

interface CoursesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function CoursesPage({ params }: CoursesPageProps) {
  const { locale } = await params;
  const validLocale = (locales.includes(locale as Locale) ? locale : 'en') as Locale;
  const dict = getDictionary(validLocale);
  const courses = COURSES;
  const categories = CATEGORIES;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-4">{dict.courses.allCourses}</h1>
        <p className="text-xl text-gray-400">{dict.courses.allCoursesDesc}</p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input 
            type="text" 
            placeholder={dict.courses.searchPlaceholder}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-700 bg-gray-800 text-white placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
          />
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <select className="appearance-none min-w-[160px] pl-4 pr-10 py-3 rounded-xl border border-gray-700 bg-gray-800 text-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer">
              <option value="">{dict.courses.allCategories}</option>
              {categories.map(cat => (
                <option key={cat.id} value={cat.slug}>{cat.name}</option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <select className="appearance-none min-w-[140px] pl-4 pr-10 py-3 rounded-xl border border-gray-700 bg-gray-800 text-gray-300 outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer">
              <option value="">{dict.courses.difficulty}</option>
              <option value="beginner">{dict.courses.beginner}</option>
              <option value="intermediate">{dict.courses.intermediate}</option>
              <option value="advanced">{dict.courses.advanced}</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} locale={validLocale} dict={dict} />
        ))}
      </div>

      {courses.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-500 text-xl">{dict.courses.noCourses}</p>
        </div>
      )}
    </div>
  );
}
