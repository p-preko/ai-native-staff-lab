import { ProjectCard } from './project-card';
import { Badge } from '@/components/ui/badge';
import { OpenWorkspaceButton } from './open-workspace-button';
import { Project } from '@/types/project';

interface TodaySectionProps {
  activeProjects: Project[];
  focusItems: string[];
}

export function TodaySection({
  activeProjects,
  focusItems,
}: TodaySectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">TODAY</h2>

      <div className="space-y-5">
        {activeProjects.map((project) => (
          <div key={project.id} className="space-y-3">
            <ProjectCard project={project} variant="active" />
            {project.status === 'in-progress' && (
              <OpenWorkspaceButton
                projectId={project.id}
                projectName={project.name}
              />
            )}
          </div>
        ))}

        <div className="pt-4 space-y-4 border-t">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Today&apos;s focus
          </h3>
          <div className="flex flex-wrap gap-2">
            {focusItems.map((item) => (
              <Badge
                key={item}
                variant="outline"
                className="text-sm py-1.5 px-3 font-medium"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
