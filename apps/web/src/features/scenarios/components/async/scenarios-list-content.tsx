import { getScenariosByFilters } from '../../lib/mock-data';
import { parseScenarioFilters } from '../../lib/validation';
import { ScenarioCard } from '../scenario-card';
import { FadeIn } from '@/components/ui/fade-in';

interface ScenariosListContentProps {
  search?: string;
  skills?: string;
  difficulty?: string;
  unfinished?: 'true' | 'false';
}

export async function ScenariosListContent({
  search,
  skills,
  difficulty,
  unfinished,
}: ScenariosListContentProps) {
  const filters = parseScenarioFilters({
    search,
    skills,
    difficulty,
    unfinished,
  });

  const scenarios = await getScenariosByFilters(filters);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Scenario List ({scenarios.length})
      </h2>
      {scenarios.length === 0 ? (
        <div className="text-center py-12 text-muted-foreground">
          <p className="text-lg">No scenarios match your filters.</p>
          <p className="text-sm mt-2">Try adjusting your search criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((scenario, index) => (
            <FadeIn key={scenario.id} delay={index * 50}>
              <ScenarioCard scenario={scenario} />
            </FadeIn>
          ))}
        </div>
      )}
    </div>
  );
}
