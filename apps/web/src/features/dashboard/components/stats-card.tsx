import { Card, CardContent } from '@/components/ui/card';

interface StatsCardProps {
  label: string;
  value: number | string;
}

export function StatsCard({ label, value }: StatsCardProps) {
  return (
    <Card className="transition-all hover:shadow-lg">
      <CardContent className="pt-8 pb-6">
        <div className="text-center space-y-3">
          <div className="text-4xl font-bold bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            {value}
          </div>
          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            {label}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
