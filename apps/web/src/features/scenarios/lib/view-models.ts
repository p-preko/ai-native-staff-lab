import { SkillTag, DifficultyLevel } from '@/types/scenario';
import { ALL_SKILLS, ALL_DIFFICULTIES } from './constants';
import { buildFilterUrl } from './url-builders';

type SearchParams = Record<string, string | string[] | undefined>;

export interface FilterItem<T> {
  value: T;
  label: string;
  active: boolean;
  href: string;
}

export interface FilterViewModel {
  skills: FilterItem<SkillTag>[];
  difficulty: FilterItem<DifficultyLevel>[];
  unfinished: {
    active: boolean;
    href: string;
  };
}

export function createFilterViewModel(
  currentParams: SearchParams,
  selectedSkills: SkillTag[],
  selectedDifficulty: DifficultyLevel[],
  showOnlyUnfinished: boolean,
): FilterViewModel {
  // Helper to generate skill items
  const skills = ALL_SKILLS.map((skill) => {
    const isSelected = selectedSkills.includes(skill);
    const newSkills = isSelected
      ? selectedSkills.filter((s) => s !== skill)
      : [...selectedSkills, skill];

    const href = buildFilterUrl(currentParams, {
      skills: newSkills.length > 0 ? newSkills.join(',') : undefined,
      difficulty:
        selectedDifficulty.length > 0
          ? selectedDifficulty.join(',')
          : undefined,
      unfinished: showOnlyUnfinished ? 'true' : undefined,
    });

    return {
      value: skill,
      label: skill, // Can map to display name if needed
      active: isSelected,
      href,
    };
  });

  // Helper to generate difficulty items
  const difficulty = ALL_DIFFICULTIES.map((diff) => {
    const isSelected = selectedDifficulty.includes(diff);
    const newDifficulty = isSelected
      ? selectedDifficulty.filter((d) => d !== diff)
      : [...selectedDifficulty, diff];

    const href = buildFilterUrl(currentParams, {
      skills: selectedSkills.length > 0 ? selectedSkills.join(',') : undefined,
      difficulty:
        newDifficulty.length > 0 ? newDifficulty.join(',') : undefined,
      unfinished: showOnlyUnfinished ? 'true' : undefined,
    });

    return {
      value: diff,
      label: diff,
      active: isSelected,
      href,
    };
  });

  // Unfinished toggle
  const unfinishedHref = buildFilterUrl(currentParams, {
    skills: selectedSkills.length > 0 ? selectedSkills.join(',') : undefined,
    difficulty:
      selectedDifficulty.length > 0 ? selectedDifficulty.join(',') : undefined,
    unfinished: showOnlyUnfinished ? undefined : 'true',
  });

  return {
    skills,
    difficulty,
    unfinished: {
      active: showOnlyUnfinished,
      href: unfinishedHref,
    },
  };
}
