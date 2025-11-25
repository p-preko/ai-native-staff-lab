import { Suspense } from 'react';
import {
  TodayContent,
  WorkQueueContent,
  StoryVaultContent,
  TodaySkeleton,
  WorkQueueSkeleton,
  StoryVaultSkeleton,
} from '@/features/dashboard';

export default function Home() {
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
