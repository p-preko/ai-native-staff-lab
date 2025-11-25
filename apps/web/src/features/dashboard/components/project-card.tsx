'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Project } from '@/types/project';
import { InteractiveItem } from '@/components/ui/interactive-item';

interface ProjectCardProps {
  project: Project;
  variant?: 'active' | 'queue';
}

export function ProjectCard({ project, variant = 'queue' }: ProjectCardProps) {
  const isActive = variant === 'active';

  return (
    <InteractiveItem
      href={`/workspace/${project.id}`}
      className="block w-full p-0 border-0 rounded-xl"
    >
      <Card className="w-full h-full transition-all hover:shadow-lg hover:border-primary/50">
        <CardHeader className="space-y-3 pb-4">
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
              {project.name}
            </CardTitle>
            {project.seniorityLevel && (
              <Badge
                variant="secondary"
                className="ml-2 shrink-0 pointer-events-none"
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
            <div className="text-sm font-semibold text-foreground">
              {project.difficulty}
            </div>
          )}

          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs pointer-events-none"
                  tabIndex={-1}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardHeader>

        <CardContent className="space-y-5 pt-0">
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-muted-foreground">Status:</span>
              <span className="font-semibold">
                {project.status === 'in-progress'
                  ? 'In progress'
                  : project.status === 'not-started'
                    ? 'Not started'
                    : 'Completed'}
              </span>
            </div>
            <div className="text-muted-foreground">✓ AI mentor ready</div>
            {project.allMentorsReady && (
              <div className="text-muted-foreground">✓ All mentor ready</div>
            )}
          </div>

          {isActive && project.progress !== undefined && (
            <div className="space-y-3 pt-2">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Progress</span>
                  <span className="font-medium">{project.progress}%</span>
                </div>
                <Progress
                  value={project.progress}
                  className="h-3"
                  aria-label={`${project.name} progress: ${project.progress}%`}
                />
              </div>
              {project.nextTask && (
                <div className="pt-2 border-t">
                  <p className="text-xs text-muted-foreground font-medium">
                    Next task:
                  </p>
                  <p className="text-sm mt-1">{project.nextTask}</p>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </InteractiveItem>
  );
}
