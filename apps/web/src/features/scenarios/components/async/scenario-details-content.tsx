import { getScenarioById } from '../../lib/mock-data';
import { ScenarioDetailsContent } from '../scenario-details-content';

interface ScenarioDetailsContentWrapperProps {
  scenarioId: string;
}

export async function ScenarioDetailsContentWrapper({
  scenarioId,
}: ScenarioDetailsContentWrapperProps) {
  const scenario = await getScenarioById(scenarioId);

  if (!scenario) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 text-center">
        <p className="text-lg font-semibold text-foreground mb-2">
          Scenario not found
        </p>
        <p className="text-sm text-muted-foreground">
          The scenario you&apos;re looking for doesn&apos;t exist or has been
          removed.
        </p>
      </div>
    );
  }

  return <ScenarioDetailsContent scenario={scenario} />;
}
