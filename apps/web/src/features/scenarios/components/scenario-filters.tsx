'use client';

import { Badge } from '@/components/ui/badge';
import { SkillTag, DifficultyLevel } from '@/types/scenario';
import { ALL_SKILLS, ALL_DIFFICULTIES } from '../lib/constants';
import { useScenarioFilters } from '../hooks/use-scenario-filters';

interface ScenarioFiltersProps {
  selectedSkills: SkillTag[];
  selectedDifficulty: DifficultyLevel[];
  showOnlyUnfinished: boolean;
}

export function ScenarioFilters({
  selectedSkills,
  selectedDifficulty,
  showOnlyUnfinished,
}: ScenarioFiltersProps) {
  const {
    skills,
    difficulty,
    showUnfinished,
    isPending,
    toggleSkill,
    toggleDifficulty,
    toggleUnfinished,
  } = useScenarioFilters({
    initialSkills: selectedSkills,
    initialDifficulty: selectedDifficulty,
    initialShowUnfinished: showOnlyUnfinished,
  });

  return (
    <div
      className={`space-y-6 pb-6 border-b transition-opacity duration-200 ${isPending ? 'opacity-60 pointer-events-none' : ''}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {ALL_SKILLS.map((skill) => (
              <Badge
                key={skill}
                variant={skills.includes(skill) ? 'default' : 'outline'}
                className="cursor-pointer transition-all hover:scale-105"
                onClick={() => toggleSkill(skill)}
                tabIndex={0}
                role="button"
                aria-pressed={skills.includes(skill)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleSkill(skill);
                  }
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">Difficulty</h2>
          <div className="flex flex-wrap gap-2">
            {ALL_DIFFICULTIES.map((level) => (
              <Badge
                key={level}
                variant={difficulty.includes(level) ? 'default' : 'outline'}
                className="cursor-pointer transition-all hover:scale-105"
                onClick={() => toggleDifficulty(level)}
                tabIndex={0}
                role="button"
                aria-pressed={difficulty.includes(level)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleDifficulty(level);
                  }
                }}
              >
                {level}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-2">
        <div
          role="button"
          tabIndex={0}
          className="flex items-center space-x-2 group cursor-pointer"
          aria-pressed={showUnfinished}
          aria-label={
            showUnfinished
              ? 'Show all scenarios'
              : 'Show only unfinished scenarios'
          }
          onClick={toggleUnfinished}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleUnfinished();
            }
          }}
        >
          <div
            className={`w-11 h-6 rounded-full transition-colors ${
              showUnfinished ? 'bg-primary' : 'bg-input'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-background transition-transform ${
                showUnfinished ? 'translate-x-5' : 'translate-x-0.5'
              } translate-y-0.5`}
            />
          </div>
          <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
            Show only unfinished
          </span>
        </div>
      </div>
    </div>
  );
}
