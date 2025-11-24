import { Suspense } from 'react';
import { TodayContent } from './async/today-content';
import { WorkQueueContent } from './async/work-queue-content';
import { StoryVaultContent } from './async/story-vault-content';
import { TodaySkeleton } from './skeletons/today-skeleton';
import { WorkQueueSkeleton } from './skeletons/work-queue-skeleton';
import { StoryVaultSkeleton } from './skeletons/story-vault-skeleton';

export function DashboardPage() {
  return (
    <div className="w-full">
      <div className="container mx-auto px-6 py-8 max-w-[1800px]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          <div className="space-y-6">
            <Suspense fallback={<TodaySkeleton />}>
              <TodayContent />
            </Suspense>
          </div>

          <div className="space-y-6">
            <Suspense fallback={<WorkQueueSkeleton />}>
              <WorkQueueContent />
            </Suspense>
          </div>

          <div className="space-y-6">
            <Suspense fallback={<StoryVaultSkeleton />}>
              <StoryVaultContent />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
