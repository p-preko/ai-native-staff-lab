import { z } from 'zod';
import { SkillTag, DifficultyLevel, ScenarioFilters } from '@/types/scenario';
import { ALL_SKILLS, ALL_DIFFICULTIES } from './constants';

export const scenariosSearchParamsSchema = z.object({
  search: z.string().optional(),
  skills: z.string().optional(),
  difficulty: z.string().optional(),
  unfinished: z.enum(['true', 'false']).optional(),
});

export type ScenariosSearchParams = z.infer<typeof scenariosSearchParamsSchema>;

export function parseScenarioFilters(
  params: ScenariosSearchParams,
): ScenarioFilters {
  const skills =
    params.skills
      ?.split(',')
      .filter(Boolean)
      .filter((s): s is SkillTag => ALL_SKILLS.includes(s as SkillTag)) ?? [];

  const difficulty =
    params.difficulty
      ?.split(',')
      .filter(Boolean)
      .filter((d): d is DifficultyLevel =>
        ALL_DIFFICULTIES.includes(d as DifficultyLevel),
      ) ?? [];

  return {
    searchQuery: params.search?.trim() || '',
    skills,
    difficulty,
    showOnlyUnfinished: params.unfinished === 'true',
  };
}
