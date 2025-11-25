'use client';

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { WorkspaceProject } from '@/types/workspace';
import { ArtifactPanel } from './artifact-panel';
import { CopilotPanel } from './copilot-panel';

interface WorkspaceEditorProps {
  project: WorkspaceProject;
}

export function WorkspaceEditor({ project }: WorkspaceEditorProps) {
  return (
    <div className="h-[calc(100vh-4rem)] w-full overflow-hidden">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={60} minSize={30}>
          <ArtifactPanel project={project} />
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={40} minSize={20}>
          <CopilotPanel />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
