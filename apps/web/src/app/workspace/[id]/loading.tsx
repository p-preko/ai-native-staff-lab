import { Skeleton } from '@/components/ui/skeleton';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';

export default function Loading() {
  return (
    <div className="h-[calc(100vh-4rem)] w-full overflow-hidden">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel defaultSize={60} minSize={30}>
          <div className="h-full flex flex-col">
            <div className="p-4 border-b space-y-2">
              <Skeleton className="h-6 w-1/3" />
              <Skeleton className="h-4 w-2/3" />
            </div>
            <div className="flex-1 p-4 space-y-4">
              <Skeleton className="h-[200px] w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        <ResizablePanel defaultSize={40} minSize={20}>
          <div className="h-full flex flex-col border-l bg-muted/10">
            <div className="p-4 border-b bg-background">
              <Skeleton className="h-6 w-32" />
            </div>
            <div className="flex-1 p-4">
              <Skeleton className="h-20 w-3/4 rounded-lg" />
            </div>
            <div className="p-4 border-t bg-background">
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
