'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Project } from '@/types/project';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { InteractiveItem } from '@/components/ui/interactive-item';

interface ProjectQueueCardProps {
  project: Project;
}

export function ProjectQueueCard({ project }: ProjectQueueCardProps) {
  const actionLabel = project.status === 'in-progress' ? 'Resume' : 'Start';

  return (
    <InteractiveItem
      href={`/workspace/${project.id}`}
      className="block w-full p-0 border-0 group rounded-xl"
    >
      <Card className="w-full transition-all hover:shadow-lg hover:border-primary/50">
        <CardHeader className="space-y-3 pb-4">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
              {project.name}
            </CardTitle>
            {project.seniorityLevel && (
              <Badge
                variant="secondary"
                className="shrink-0 pointer-events-none"
                tabIndex={-1}
              >
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
                {project.status === 'in-progress'
                  ? 'In progress'
                  : 'Not started'}
              </span>
            </div>
            <div className="text-muted-foreground">✓ AI mentor ready</div>
            {project.allMentorsReady && (
              <div className="text-muted-foreground">✓ All mentors ready</div>
            )}
          </div>

          <div
            className={cn(
              buttonVariants({ size: 'lg', variant: 'default' }),
              'w-full pointer-events-none',
            )}
          >
            {actionLabel} Project
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Card>
    </InteractiveItem>
  );
}
