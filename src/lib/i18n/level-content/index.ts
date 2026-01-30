import type { Locale } from '../settings';

// English content
import { LEVEL_0_CONTENT } from '@/lib/level-0-content';
import { LEVEL_1_CONTENT } from '@/lib/level-1-content';
import { LEVEL_2_CONTENT } from '@/lib/level-2-content';
import { LEVEL_3_CONTENT } from '@/lib/level-3-content';
import { LEVEL_4_CONTENT } from '@/lib/level-4-content';
import { LEVEL_5_CONTENT } from '@/lib/level-5-content';
import { LEVEL_6_CONTENT } from '@/lib/level-6-content';

// Korean content
import { LEVEL_0_CONTENT_KO } from './level-0-ko';
import { LEVEL_1_CONTENT_KO } from './level-1-ko';
import { LEVEL_2_CONTENT_KO } from './level-2-ko';
import { LEVEL_3_CONTENT_KO } from './level-3-ko';
import { LEVEL_4_CONTENT_KO } from './level-4-ko';
import { LEVEL_5_CONTENT_KO } from './level-5-ko';
import { LEVEL_6_CONTENT_KO } from './level-6-ko';

const LEVEL_CONTENTS_EN = [
  LEVEL_0_CONTENT,
  LEVEL_1_CONTENT,
  LEVEL_2_CONTENT,
  LEVEL_3_CONTENT,
  LEVEL_4_CONTENT,
  LEVEL_5_CONTENT,
  LEVEL_6_CONTENT,
];

const LEVEL_CONTENTS_KO = [
  LEVEL_0_CONTENT_KO,
  LEVEL_1_CONTENT_KO,
  LEVEL_2_CONTENT_KO,
  LEVEL_3_CONTENT_KO,
  LEVEL_4_CONTENT_KO,
  LEVEL_5_CONTENT_KO,
  LEVEL_6_CONTENT_KO,
];

export function getLevelContent(level: number, locale: Locale) {
  const contents = locale === 'ko' ? LEVEL_CONTENTS_KO : LEVEL_CONTENTS_EN;
  return contents[level] || contents[0];
}

export { LEVEL_CONTENTS_EN, LEVEL_CONTENTS_KO };
