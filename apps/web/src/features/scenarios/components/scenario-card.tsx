import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Scenario } from '@/types/scenario';
import { Clock, CheckCircle2, PlayCircle } from 'lucide-react';
import Link from 'next/link';

interface ScenarioCardProps {
  scenario: Scenario;
}

export function ScenarioCard({ scenario }: ScenarioCardProps) {
  const duration = `${scenario.durationMin}-${scenario.durationMax} min`;
  const detailsUrl = `/scenarios/${scenario.id}`;

  return (
    <Card className="w-full transition-all hover:shadow-lg flex flex-col h-full">
      <CardHeader className="space-y-3 pb-4">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-lg font-bold line-clamp-2">
            {scenario.title}
          </CardTitle>
          {scenario.completed && (
            <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-500 shrink-0" />
          )}
          {scenario.inProgress && (
            <PlayCircle className="h-5 w-5 text-blue-600 dark:text-blue-500 shrink-0" />
          )}
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {scenario.description}
        </p>
      </CardHeader>

      <CardContent className="space-y-4 pt-0 mt-auto">
        <div className="flex flex-wrap gap-2">
          {scenario.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
          {scenario.skills.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{scenario.skills.length - 3}
            </Badge>
          )}
          <Badge variant="outline" className="text-xs">
            {scenario.difficulty}
          </Badge>
        </div>

        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>{duration}</span>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link
              href={detailsUrl}
              scroll={false}
              aria-label={`Open details for ${scenario.title}`}
            >
              Open details
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
