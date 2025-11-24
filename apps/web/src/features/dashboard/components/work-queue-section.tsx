import { ProjectQueueCard } from './project-queue-card';
import { Project } from '@/types/project';

interface WorkQueueSectionProps {
  projects: Project[];
}

export function WorkQueueSection({ projects }: WorkQueueSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">WORK QUEUE</h2>
      <div className="space-y-5">
        {projects.map((project) => (
          <ProjectQueueCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
