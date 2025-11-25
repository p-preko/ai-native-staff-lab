import { getWorkspaceProjects } from '../../lib/mock-data';
import { WorkspaceProjectCard } from '../workspace-project-card';

interface WorkspaceListContentProps {
  search?: string;
  status?: string;
}

export async function WorkspaceListContent({
  search,
  status,
}: WorkspaceListContentProps) {
  const projects = await getWorkspaceProjects(search, status);

  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center border rounded-lg border-dashed bg-muted/30">
        <h3 className="text-lg font-semibold text-foreground">
          No projects found
        </h3>
        <p className="text-sm text-muted-foreground mt-1 max-w-xs">
          Try adjusting your search or filters to find what you&apos;re looking
          for.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <WorkspaceProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
