'use client';

import { Search, Loader2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useScenarioSearch } from '../hooks/use-scenario-search';

interface ScenarioSearchProps {
  initialValue: string;
}

export function ScenarioSearch({ initialValue }: ScenarioSearchProps) {
  const { value, handleSearch, isPending } = useScenarioSearch(initialValue);

  return (
    <div className="relative w-full max-w-md">
      {isPending ? (
        <Loader2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground animate-spin" />
      ) : (
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
      )}
      <Input
        type="search"
        placeholder="Search scenarios..."
        value={value}
        onChange={(e) => handleSearch(e.target.value)}
        className="pl-10"
      />
    </div>
  );
}
