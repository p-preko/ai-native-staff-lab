import { Suspense } from 'react';
import {
  scenariosSearchParamsSchema,
  parseScenarioFilters,
  ScenarioSearch,
  ScenarioFilters,
  ScenariosListContent,
  ScenariosListSkeleton,
} from '@/features/scenarios';

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Scenarios({ searchParams }: PageProps) {
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
          key={`${params.skills}-${params.difficulty}-${params.unfinished}`}
          selectedSkills={filters.skills}
          selectedDifficulty={filters.difficulty}
          showOnlyUnfinished={filters.showOnlyUnfinished}
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
