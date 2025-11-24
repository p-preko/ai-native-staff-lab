import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface OpenWorkspaceButtonProps {
  projectId: string;
}

export function OpenWorkspaceButton({ projectId }: OpenWorkspaceButtonProps) {
  return (
    <Button className="w-full" size="lg" asChild>
      <Link href={`/workspace/${projectId}`}>Open workspace</Link>
    </Button>
  );
}
