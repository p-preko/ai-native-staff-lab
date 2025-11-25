import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function ScenarioCardSkeleton() {
  return (
    <Card className="w-full flex flex-col h-full rounded-xl">
      <CardHeader className="space-y-3 pb-4">
        <div className="flex items-start justify-between gap-2">
          <Skeleton className="h-7 w-48" />
          <Skeleton className="h-5 w-5 shrink-0" />
        </div>
        <Skeleton className="h-4 w-64" />
        <Skeleton className="h-4 w-56" />
      </CardHeader>
      <CardContent className="space-y-4 pt-0 mt-auto">
        <div className="flex flex-wrap gap-2">
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-24" />
          <Skeleton className="h-5 w-16" />
        </div>
        <div className="flex items-center justify-between pt-2 border-t">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-8 w-28" />
        </div>
      </CardContent>
    </Card>
  );
}

export function ScenariosListSkeleton() {
  return (
    <div>
      <Skeleton className="h-7 w-48 mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ScenarioCardSkeleton />
        <ScenarioCardSkeleton />
        <ScenarioCardSkeleton />
      </div>
    </div>
  );
}
