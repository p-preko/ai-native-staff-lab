import { Suspense } from 'react';
import { ScenarioFilters } from './scenario-filters';
import { ScenarioSearch } from './scenario-search';
import {
  scenariosSearchParamsSchema,
  parseScenarioFilters,
} from '../lib/validation';
import { ScenariosListContent } from './async/scenarios-list-content';
import { ScenariosListSkeleton } from './skeletons/scenarios-list-skeleton';

interface ScenariosPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export async function ScenariosPage({ searchParams }: ScenariosPageProps) {
  const rawParams = await searchParams;
  const params = scenariosSearchParamsSchema.parse(rawParams);
  const filters = parseScenarioFilters(params);

  return (
    <div className="container mx-auto p-6 max-w-[1800px]">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">
            Scenario Library
          </h1>
          <ScenarioSearch initialValue={filters.searchQuery} />
        </div>

        <ScenarioFilters
          selectedSkills={filters.skills}
          selectedDifficulty={filters.difficulty}
          showOnlyUnfinished={filters.showOnlyUnfinished}
          currentParams={rawParams}
        />

        <Suspense
          key={`${params.search}-${params.skills}-${params.difficulty}-${params.unfinished}`}
          fallback={<ScenariosListSkeleton />}
        >
          <ScenariosListContent
            search={params.search}
            skills={params.skills}
            difficulty={params.difficulty}
            unfinished={params.unfinished}
          />
        </Suspense>
      </div>
    </div>
  );
}
