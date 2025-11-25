'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition, useState } from 'react';
import { SkillTag, DifficultyLevel } from '@/types/scenario';

interface UseScenarioFiltersProps {
  initialSkills?: SkillTag[];
  initialDifficulty?: DifficultyLevel[];
  initialShowUnfinished?: boolean;
}

export function useScenarioFilters({
  initialSkills = [],
  initialDifficulty = [],
  initialShowUnfinished = false,
}: UseScenarioFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Separate transitions for each filter type
  const [isSkillsPending, startSkillsTransition] = useTransition();
  const [isDifficultyPending, startDifficultyTransition] = useTransition();
  const [isUnfinishedPending, startUnfinishedTransition] = useTransition();

  // Local state for immediate UI updates
  const [skills, setSkills] = useState<SkillTag[]>(initialSkills);
  const [difficulty, setDifficulty] =
    useState<DifficultyLevel[]>(initialDifficulty);
  const [showUnfinished, setShowUnfinished] = useState(initialShowUnfinished);

  const applyUpdate = (
    updates: {
      skills?: SkillTag[];
      difficulty?: DifficultyLevel[];
      unfinished?: boolean;
    },
    startTransition: React.TransitionStartFunction,
  ) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());

      // Handle Skills
      const nextSkills = updates.skills ?? skills;
      if (nextSkills.length > 0) {
        params.set('skills', nextSkills.join(','));
      } else {
        params.delete('skills');
      }

      // Handle Difficulty
      const nextDifficulty = updates.difficulty ?? difficulty;
      if (nextDifficulty.length > 0) {
        params.set('difficulty', nextDifficulty.join(','));
      } else {
        params.delete('difficulty');
      }

      // Handle Unfinished
      const nextUnfinished = updates.unfinished ?? showUnfinished;
      if (nextUnfinished) {
        params.set('unfinished', 'true');
      } else {
        params.delete('unfinished');
      }

      const queryString = params.toString();
      router.replace(queryString ? `/scenarios?${queryString}` : '/scenarios', {
        scroll: false,
      });
    });
  };

  const toggleSkill = (skill: SkillTag) => {
    const nextSkills = skills.includes(skill)
      ? skills.filter((s) => s !== skill)
      : [...skills, skill];
    setSkills(nextSkills);
    applyUpdate({ skills: nextSkills }, startSkillsTransition);
  };

  const toggleDifficulty = (level: DifficultyLevel) => {
    const nextDifficulty = difficulty.includes(level)
      ? difficulty.filter((d) => d !== level)
      : [...difficulty, level];
    setDifficulty(nextDifficulty);
    applyUpdate({ difficulty: nextDifficulty }, startDifficultyTransition);
  };

  const toggleUnfinished = () => {
    const next = !showUnfinished;
    setShowUnfinished(next);
    applyUpdate({ unfinished: next }, startUnfinishedTransition);
  };

  return {
    skills,
    difficulty,
    showUnfinished,
    isSkillsPending,
    isDifficultyPending,
    isUnfinishedPending,
    toggleSkill,
    toggleDifficulty,
    toggleUnfinished,
  };
}
