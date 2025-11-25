import { Suspense } from 'react';
import { ScenarioDetailsModal } from '@/features/scenarios/components/scenario-details-modal';
import { ScenarioDetailsContentWrapper } from '@/features/scenarios/components/async/scenario-details-content';
import { ScenarioDetailsSkeleton } from '@/features/scenarios/components/skeletons/scenario-details-skeleton';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ScenarioModalPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <ScenarioDetailsModal>
      <Suspense fallback={<ScenarioDetailsSkeleton />}>
        <ScenarioDetailsContentWrapper scenarioId={id} />
      </Suspense>
    </ScenarioDetailsModal>
  );
}
