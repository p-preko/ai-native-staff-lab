import { notFound } from 'next/navigation';
import { getWorkspaceProjectById } from '@/features/workspace/lib/mock-data';
import { WorkspaceEditor } from '@/features/workspace/components/workspace-editor';

interface WorkspaceIdPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkspaceIdPage({
  params,
}: WorkspaceIdPageProps) {
  const { id } = await params;
  const project = await getWorkspaceProjectById(id);

  if (!project) {
    notFound();
  }

  return <WorkspaceEditor project={project} />;
}
