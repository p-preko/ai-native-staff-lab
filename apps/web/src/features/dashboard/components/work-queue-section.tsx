import { ProjectQueueCard } from './project-queue-card';
import { Project } from '@/types/project';
import { FadeIn } from '@/components/ui/fade-in';

interface WorkQueueSectionProps {
  projects: Project[];
}

export function WorkQueueSection({ projects }: WorkQueueSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">WORK QUEUE</h2>
      <div className="space-y-5">
        {projects.map((project, index) => (
          <FadeIn key={project.id} delay={100 + index * 100}>
            <ProjectQueueCard project={project} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
