import { Search } from 'lucide-react';
import { type ScenariosSearchParams } from '../lib/validation';

interface ScenarioSearchProps {
  initialValue: string;
  currentParams: ScenariosSearchParams;
}

export function ScenarioSearch({
  initialValue,
  currentParams,
}: ScenarioSearchProps) {
  return (
    <form action="/scenarios" method="get" className="relative w-full max-w-md">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
      <input
        type="search"
        name="search"
        placeholder="Search scenarios..."
        defaultValue={initialValue}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      />
      {currentParams.skills && (
        <input type="hidden" name="skills" value={currentParams.skills} />
      )}
      {currentParams.difficulty && (
        <input
          type="hidden"
          name="difficulty"
          value={currentParams.difficulty}
        />
      )}
      {currentParams.unfinished === 'true' && (
        <input type="hidden" name="unfinished" value="true" />
      )}
    </form>
  );
}
