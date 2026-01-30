import { Course, Category, Roadmap } from '@/types';

export const CATEGORIES: Category[] = [
  { id: 'cat-1', name: 'Frontend', slug: 'frontend' },
  { id: 'cat-2', name: 'Backend', slug: 'backend' },
  { id: 'cat-3', name: 'Fullstack', slug: 'fullstack' },
  { id: 'cat-4', name: 'AWS & Cloud', slug: 'aws-cloud' },
];

export const COURSES: Course[] = [
  {
    id: 'course-1',
    title: 'React for Beginners',
    slug: 'react-for-beginners',
    shortDescription: 'Master the basics of React.js with hands-on projects.',
    description: 'This course covers everything from JSX to Hooks and State Management. Perfect for those starting their frontend journey.',
    difficulty: 'beginner',
    language: 'English',
    platform: 'YouTube',
    isFree: true,
    externalUrl: 'https://youtube.com',
    recommendedFor: 'Aspiring frontend developers',
    categoryId: 'cat-1',
    category: CATEGORIES[0],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'course-2',
    title: 'Advanced Node.js Patterns',
    slug: 'advanced-node-patterns',
    shortDescription: 'Deep dive into Node.js architecture and design patterns.',
    description: 'Learn how to build scalable backend systems using Node.js. Topics include Streams, Clusters, and Microservices.',
    difficulty: 'advanced',
    language: 'English',
    platform: 'Udemy',
    isFree: false,
    externalUrl: 'https://udemy.com',
    recommendedFor: 'Backend engineers looking to level up',
    categoryId: 'cat-2',
    category: CATEGORIES[1],
    createdAt: new Date().toISOString(),
  },
  {
    id: 'course-3',
    title: 'Next.js 15 Full Course',
    slug: 'nextjs-15-full-course',
    shortDescription: 'The ultimate guide to Next.js App Router and Server Components.',
    description: 'Build a production-ready application with the latest Next.js features.',
    difficulty: 'intermediate',
    language: 'English',
    platform: 'YouTube',
    isFree: true,
    externalUrl: 'https://youtube.com',
    recommendedFor: 'Developers familiar with React',
    categoryId: 'cat-3',
    category: CATEGORIES[2],
    createdAt: new Date().toISOString(),
  },
];

export const ROADMAPS: Roadmap[] = [
  {
    id: 'roadmap-vibe',
    title: 'Vibe Coding Roadmap',
    slug: 'vibe-coding',
    description: 'A practical path to building software without becoming a programmer. Learn to think clearly, direct AI effectively, and ship working software.',
    items: [],
  },
  {
    id: 'roadmap-1',
    title: 'Frontend Developer Roadmap',
    slug: 'frontend-roadmap',
    description: 'A step-by-step guide to becoming a modern frontend developer.',
    items: [
      {
        id: 'ri-1',
        order: 1,
        explanation: 'Start with the basics of React to understand component-based architecture.',
        courseId: 'course-1',
        course: COURSES[0],
      },
      {
        id: 'ri-2',
        order: 2,
        explanation: 'Level up by learning how to build fullstack apps with Next.js.',
        courseId: 'course-3',
        course: COURSES[2],
      },
    ],
  },
];
