import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from '@/types/project';
import Link from 'next/link';

interface ProjectQueueCardProps {
  project: Project;
}

export function ProjectQueueCard({ project }: ProjectQueueCardProps) {
  const actionLabel = project.status === 'in-progress' ? 'Resume' : 'Start';

  return (
    <Card className="w-full transition-all hover:shadow-lg">
      <CardHeader className="space-y-3 pb-4">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-xl font-bold">{project.name}</CardTitle>
          {project.seniorityLevel && (
            <Badge variant="secondary" className="shrink-0">
              {project.seniorityLevel}
            </Badge>
          )}
        </div>

        <div className="text-sm text-muted-foreground">
          <span className="font-medium">Scenario Type:</span>{' '}
          {project.scenarioType}
        </div>

        {project.difficulty && (
          <div className="text-sm font-semibold">{project.difficulty}</div>
        )}
      </CardHeader>

      <CardContent className="space-y-5 pt-0">
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Status:</span>
            <span className="font-semibold">
              {project.status === 'in-progress' ? 'In progress' : 'Not started'}
            </span>
          </div>
          <div className="text-muted-foreground">✓ AI mentor ready</div>
          {project.allMentorsReady && (
            <div className="text-muted-foreground">✓ All mentors ready</div>
          )}
        </div>

        <Button className="w-full" size="lg" asChild>
          <Link href={`/workspace/${project.id}`}>{actionLabel}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
