import { Suspense } from 'react';
import { ScenarioDetailsContentWrapper } from '@/features/scenarios/components/async/scenario-details-content';
import { ScenarioDetailsSkeleton } from '@/features/scenarios/components/skeletons/scenario-details-skeleton';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ScenarioDetailPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Suspense fallback={<ScenarioDetailsSkeleton />}>
        <ScenarioDetailsContentWrapper scenarioId={id} />
      </Suspense>
    </div>
  );
}
