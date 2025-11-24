import { z } from 'zod';
import { SkillTag, DifficultyLevel } from '@/types/scenario';

export const scenariosSearchParamsSchema = z.object({
  search: z.string().optional(),
  skills: z.string().optional(),
  difficulty: z.string().optional(),
  unfinished: z.enum(['true', 'false']).optional(),
  details: z.string().optional(),
});

export type ScenariosSearchParams = z.infer<typeof scenariosSearchParamsSchema>;

export function parseScenarioFilters(params: ScenariosSearchParams) {
  return {
    searchQuery: params.search?.trim() || '',
    skills: params.skills
      ? (params.skills.split(',').filter(Boolean) as SkillTag[])
      : [],
    difficulty: params.difficulty
      ? (params.difficulty.split(',').filter(Boolean) as DifficultyLevel[])
      : [],
    showOnlyUnfinished: params.unfinished === 'true',
  };
}

export function buildScenarioUrl(
  currentParams: ScenariosSearchParams,
  updates: Partial<ScenariosSearchParams>,
): string {
  const params = new URLSearchParams();

  const merged = { ...currentParams, ...updates };

  if (merged.search?.trim()) params.set('search', merged.search.trim());
  if (merged.skills?.trim()) params.set('skills', merged.skills.trim());
  if (merged.difficulty?.trim())
    params.set('difficulty', merged.difficulty.trim());
  if (merged.unfinished === 'true') params.set('unfinished', 'true');
  if (merged.details) params.set('details', merged.details);

  const queryString = params.toString();
  return `/scenarios${queryString ? `?${queryString}` : ''}`;
}
