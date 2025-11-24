import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export function StatsCardSkeleton() {
  return (
    <Card className="transition-all">
      <CardContent className="pt-8 pb-6">
        <div className="text-center space-y-3">
          <Skeleton className="h-10 w-16 mx-auto" />
          <Skeleton className="h-3 w-24 mx-auto" />
        </div>
      </CardContent>
    </Card>
  );
}

export function StatsSkeleton() {
  return (
    <div className="grid grid-cols-3 gap-3">
      <StatsCardSkeleton />
      <StatsCardSkeleton />
      <StatsCardSkeleton />
    </div>
  );
}
