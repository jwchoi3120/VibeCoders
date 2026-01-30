export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description?: string;
  difficulty: Difficulty;
  language: string;
  platform: string;
  isFree: boolean;
  externalUrl: string;
  recommendedFor?: string;
  categoryId: string;
  category?: Category;
  createdAt: string;
}

export interface RoadmapItem {
  id: string;
  order: number;
  explanation?: string;
  courseId: string;
  course: Course;
}

export interface Roadmap {
  id: string;
  title: string;
  slug: string;
  description: string;
  items: RoadmapItem[];
}
