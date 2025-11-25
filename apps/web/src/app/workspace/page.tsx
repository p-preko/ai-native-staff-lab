import { Suspense } from 'react';
import { workspaceSearchParamsSchema } from '../../features/workspace/lib/validation';
import { WorkspaceListContent } from '../../features/workspace/components/async/workspace-list-content';
import { WorkspaceListSkeleton } from '../../features/workspace/components/skeletons/workspace-list-skeleton';
import { WorkspaceHeader } from '../../features/workspace/components/workspace-header';

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function WorkspacePage({ searchParams }: PageProps) {
  const rawParams = await searchParams;
  const params = workspaceSearchParamsSchema.parse(rawParams);

  return (
    <div className="container mx-auto p-6 max-w-[1800px]">
      <div className="space-y-6">
        <WorkspaceHeader
          initialSearch={params.search}
          initialStatus={params.status}
        />

        <Suspense
          key={`${params.search}-${params.status}`}
          fallback={<WorkspaceListSkeleton />}
        >
          <WorkspaceListContent search={params.search} status={params.status} />
        </Suspense>
      </div>
    </div>
  );
}
