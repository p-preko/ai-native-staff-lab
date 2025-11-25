import { Badge } from '@/components/ui/badge';
import { SkillTag, DifficultyLevel } from '@/types/scenario';
import Link from 'next/link';
import { createFilterViewModel } from '../lib/view-models';

interface ScenarioFiltersProps {
  selectedSkills: SkillTag[];
  selectedDifficulty: DifficultyLevel[];
  showOnlyUnfinished: boolean;
  currentParams: Record<string, string | string[] | undefined>;
}

export function ScenarioFilters({
  selectedSkills,
  selectedDifficulty,
  showOnlyUnfinished,
  currentParams,
}: ScenarioFiltersProps) {
  const { skills, difficulty, unfinished } = createFilterViewModel(
    currentParams,
    selectedSkills,
    selectedDifficulty,
    showOnlyUnfinished,
  );

  return (
    <div className="space-y-6 pb-6 border-b">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((item) => (
              <Link key={item.value} href={item.href} scroll={false}>
                <Badge
                  variant={item.active ? 'default' : 'outline'}
                  className="cursor-pointer transition-all hover:scale-105"
                >
                  {item.label}
                </Badge>
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-foreground">Difficulty</h2>
          <div className="flex flex-wrap gap-2">
            {difficulty.map((item) => (
              <Link key={item.value} href={item.href} scroll={false}>
                <Badge
                  variant={item.active ? 'default' : 'outline'}
                  className="cursor-pointer transition-all hover:scale-105"
                >
                  {item.label}
                </Badge>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end space-x-2">
        <Link
          href={unfinished.href}
          scroll={false}
          className="flex items-center space-x-2 group"
          role="button"
          aria-pressed={unfinished.active}
          aria-label={
            unfinished.active
              ? 'Show all scenarios'
              : 'Show only unfinished scenarios'
          }
        >
          <div
            className={`w-11 h-6 rounded-full transition-colors ${
              unfinished.active ? 'bg-primary' : 'bg-input'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-background transition-transform ${
                unfinished.active ? 'translate-x-5' : 'translate-x-0.5'
              } translate-y-0.5`}
            />
          </div>
          <span className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer">
            Show only unfinished
          </span>
        </Link>
      </div>
    </div>
  );
}
