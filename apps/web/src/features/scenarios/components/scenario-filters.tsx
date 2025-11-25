'use client';

import { Badge } from '@/components/ui/badge';
import { SkillTag, DifficultyLevel } from '@/types/scenario';
import { ALL_SKILLS, ALL_DIFFICULTIES } from '../lib/constants';
import { useScenarioFilters } from '../hooks/use-scenario-filters';
import { Loader2 } from 'lucide-react';

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
    isSkillsPending,
    isDifficultyPending,
    isUnfinishedPending,
    toggleSkill,
    toggleDifficulty,
    toggleUnfinished,
  } = useScenarioFilters({
    initialSkills: selectedSkills,
    initialDifficulty: selectedDifficulty,
    initialShowUnfinished: showOnlyUnfinished,
  });

  return (
    <div className="space-y-6 pb-6 border-b">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold text-foreground">Skills</h2>
            {isSkillsPending && (
              <Loader2 className="h-3 w-3 animate-spin text-muted-foreground" />
            )}
          </div>
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
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-semibold text-foreground">
              Difficulty
            </h2>
            {isDifficultyPending && (
              <Loader2 className="h-3 w-3 animate-spin text-muted-foreground" />
            )}
          </div>
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
            className={`w-11 h-6 rounded-full transition-colors flex items-center px-0.5 ${
              showUnfinished ? 'bg-primary' : 'bg-input'
            }`}
          >
            {isUnfinishedPending ? (
              <Loader2
                className={`h-4 w-4 animate-spin ${showUnfinished ? 'text-primary-foreground translate-x-5' : 'text-muted-foreground'}`}
              />
            ) : (
              <div
                className={`w-5 h-5 rounded-full bg-background transition-transform ${
                  showUnfinished ? 'translate-x-5' : ''
                }`}
              />
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
              Show only unfinished
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
