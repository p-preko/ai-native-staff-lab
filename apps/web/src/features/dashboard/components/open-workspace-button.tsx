import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface OpenWorkspaceButtonProps {
  projectId: string;
  projectName: string;
}

export function OpenWorkspaceButton({
  projectId,
  projectName,
}: OpenWorkspaceButtonProps) {
  const linkText = `Open workspace - ${projectName}`;

  return (
    <Button className="w-full" size="lg" asChild>
      <Link href={`/workspace/${projectId}`} aria-label={linkText}>
        {linkText}
      </Link>
    </Button>
  );
}
