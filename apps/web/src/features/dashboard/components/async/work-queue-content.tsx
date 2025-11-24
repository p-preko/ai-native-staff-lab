import { WorkQueueSection } from '../work-queue-section';
import { getQueueProjects } from '../../lib/mock-data';

export async function WorkQueueContent() {
  const projects = await getQueueProjects();
  return <WorkQueueSection projects={projects} />;
}
