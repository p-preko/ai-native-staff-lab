import { getScenariosByFilters, getScenarioById } from '../lib/mock-data';
import { ScenarioCard } from './scenario-card';
import { ScenarioFilters } from './scenario-filters';
import { ScenarioSearch } from './scenario-search';
import { ScenarioDetailsSheet } from './scenario-details-sheet';
import { ScenarioDetailsContent } from './scenario-details-content';
import {
  scenariosSearchParamsSchema,
  parseScenarioFilters,
  buildScenarioUrl,
  type ScenariosSearchParams,
} from '../lib/validation';

interface ScenariosPageProps {
  searchParams: Promise<ScenariosSearchParams>;
}

export async function ScenariosPage({ searchParams }: ScenariosPageProps) {
  const rawParams = await searchParams;
  const params = scenariosSearchParamsSchema.parse(rawParams);
  const filters = parseScenarioFilters(params);

  const [scenarios, detailsScenario] = await Promise.all([
    getScenariosByFilters(filters),
    params.details ? getScenarioById(params.details) : null,
  ]);

  const closeUrl = buildScenarioUrl(params, { details: undefined });

  return (
    <div className="container mx-auto p-6 max-w-[1800px]">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">
            Scenario Library
          </h1>
          <ScenarioSearch
            initialValue={filters.searchQuery}
            currentParams={params}
          />
        </div>

        <ScenarioFilters
          selectedSkills={filters.skills}
          selectedDifficulty={filters.difficulty}
          showOnlyUnfinished={filters.showOnlyUnfinished}
          currentParams={params}
        />

        <div>
          <h2 className="text-xl font-semibold mb-4">
            Scenario List ({scenarios.length})
          </h2>
          {scenarios.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-lg">No scenarios match your filters.</p>
              <p className="text-sm mt-2">
                Try adjusting your search criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scenarios.map((scenario) => (
                <ScenarioCard
                  key={scenario.id}
                  scenario={scenario}
                  currentParams={params}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {detailsScenario && (
        <ScenarioDetailsSheet open={!!params.details} closeUrl={closeUrl}>
          <ScenarioDetailsContent scenario={detailsScenario} />
        </ScenarioDetailsSheet>
      )}
    </div>
  );
}
