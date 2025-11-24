import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';
import { SkillTag, DifficultyLevel } from '@/types/scenario';
import Link from 'next/link';
import {
  buildScenarioUrl,
  type ScenariosSearchParams,
} from '../lib/validation';

interface ScenarioFiltersProps {
  selectedSkills: SkillTag[];
  selectedDifficulty: DifficultyLevel[];
  showOnlyUnfinished: boolean;
  currentParams: ScenariosSearchParams;
}

const AVAILABLE_SKILLS: SkillTag[] = [
  'Architecture',
  'Leadership',
  'Product thinking',
  'System Design',
  'Code Review',
  'Team Building',
];

const DIFFICULTY_LEVELS: DifficultyLevel[] = [
  'Warm-up',
  'Senior+',
  'Staff',
  'Principal',
];

export function ScenarioFilters({
  selectedSkills,
  selectedDifficulty,
  showOnlyUnfinished,
  currentParams,
}: ScenarioFiltersProps) {
  const toggleSkill = (skill: SkillTag) => {
    const current = selectedSkills.includes(skill)
      ? selectedSkills.filter((s) => s !== skill)
      : [...selectedSkills, skill];

    return buildScenarioUrl(currentParams, {
      skills: current.length > 0 ? current.join(',') : undefined,
      details: undefined,
    });
  };

  const toggleDifficulty = (difficulty: DifficultyLevel) => {
    const current = selectedDifficulty.includes(difficulty)
      ? selectedDifficulty.filter((d) => d !== difficulty)
      : [...selectedDifficulty, difficulty];

    return buildScenarioUrl(currentParams, {
      difficulty: current.length > 0 ? current.join(',') : undefined,
      details: undefined,
    });
  };

  const toggleUnfinished = () => {
    return buildScenarioUrl(currentParams, {
      unfinished: showOnlyUnfinished ? undefined : 'true',
      details: undefined,
    });
  };

  return (
    <div className="space-y-6 pb-6 border-b">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {AVAILABLE_SKILLS.map((skill) => (
              <Link key={skill} href={toggleSkill(skill)} scroll={false}>
                <Badge
                  variant={
                    selectedSkills.includes(skill) ? 'default' : 'outline'
                  }
                  className="cursor-pointer transition-all hover:scale-105"
                >
                  {skill}
                </Badge>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">Difficulty</h2>
          <div className="flex flex-wrap gap-2">
            {DIFFICULTY_LEVELS.map((difficulty) => (
              <Link
                key={difficulty}
                href={toggleDifficulty(difficulty)}
                scroll={false}
              >
                <Badge
                  variant={
                    selectedDifficulty.includes(difficulty)
                      ? 'default'
                      : 'outline'
                  }
                  className="cursor-pointer transition-all hover:scale-105"
                >
                  {difficulty}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-2">
        <Link
          href={toggleUnfinished()}
          scroll={false}
          className="flex items-center space-x-2"
        >
          <div
            className={`w-11 h-6 rounded-full transition-colors ${
              showOnlyUnfinished ? 'bg-primary' : 'bg-input'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-background transition-transform ${
                showOnlyUnfinished ? 'translate-x-5' : 'translate-x-0.5'
              } translate-y-0.5`}
            />
          </div>
          <Label className="text-sm cursor-pointer">Show only unfinished</Label>
        </Link>
      </div>
    </div>
  );
}
