'use client';

import { WorkspaceProject } from '@/types/workspace';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { FileText, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';
import { InteractiveItem } from '@/components/ui/interactive-item';

interface WorkspaceProjectCardProps {
  project: WorkspaceProject;
}

export function WorkspaceProjectCard({ project }: WorkspaceProjectCardProps) {
  const priorityColor = {
    high: 'destructive',
    medium: 'default',
    low: 'secondary',
  } as const;

  const formattedDate = new Date(project.lastUpdated).toLocaleDateString(
    'en-US',
    {
      month: 'short',
      day: 'numeric',
    },
  );

  return (
    <InteractiveItem
      href={`/workspace/${project.id}`}
      className="block h-full p-0 border-0 group rounded-xl"
    >
      <Card className="h-full transition-all hover:shadow-md hover:border-primary/50 flex flex-col">
        <CardHeader className="pb-3 space-y-3">
          <div className="flex justify-between items-start gap-4">
            <CardTitle className="text-lg font-semibold leading-tight group-hover:text-primary transition-colors line-clamp-2">
              {project.title}
            </CardTitle>
            <Badge
              variant={priorityColor[project.priority] || 'secondary'}
              className="shrink-0 capitalize pointer-events-none"
              tabIndex={-1}
            >
              {project.priority}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {project.description}
          </p>
        </CardHeader>

        <CardContent className="mt-auto pt-0">
          <div className="space-y-4">
            {/* Progress Section */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Progress</span>
                <span>{project.progress}%</span>
              </div>
              <Progress value={project.progress} className="h-1.5" />
            </div>

            {/* Footer Info */}
            <div className="flex items-center justify-between pt-3 border-t">
              <div className="flex -space-x-2 overflow-hidden">
                {project.collaborators.map((collab, i) => (
                  <Avatar
                    key={i}
                    className="inline-block h-6 w-6 border-2 border-background ring-2 ring-background"
                  >
                    <AvatarFallback className="text-[9px] bg-muted">
                      {collab[0]}
                    </AvatarFallback>
                  </Avatar>
                ))}
              </div>

              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  <span>{project.documentsCount}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{formattedDate}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </InteractiveItem>
  );
}
