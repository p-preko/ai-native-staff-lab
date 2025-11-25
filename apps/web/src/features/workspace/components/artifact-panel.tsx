import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { WorkspaceProject } from '@/types/workspace';

interface ArtifactPanelProps {
  project: WorkspaceProject;
}

export function ArtifactPanel({ project }: ArtifactPanelProps) {
  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b">
        <h2 className="text-lg font-semibold">{project.title}</h2>
        <p className="text-sm text-muted-foreground">{project.description}</p>
      </div>
      <ScrollArea className="flex-1 p-4">
        <Card>
          <CardHeader>
            <CardTitle>Draft Document</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>
              This is where the main work happens. Imagine a Google Doc or a
              Notion page here.
            </p>
            <h3>Objectives</h3>
            <ul>
              <li>Objective 1</li>
              <li>Objective 2</li>
            </ul>
            <p>
              The AI Staff Partner will help you refine this content based on
              the chat on the right.
            </p>
          </CardContent>
        </Card>
      </ScrollArea>
    </div>
  );
}
