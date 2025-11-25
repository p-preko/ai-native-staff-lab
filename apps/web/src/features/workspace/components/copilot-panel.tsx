import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send } from 'lucide-react';

export function CopilotPanel() {
  return (
    <div className="h-full flex flex-col border-l bg-muted/10">
      <div className="p-4 border-b bg-background">
        <h2 className="text-lg font-semibold flex items-center gap-2">
          AI Staff Partner
        </h2>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          <div className="flex gap-3">
            <div className="bg-primary/10 p-3 rounded-lg text-sm max-w-[85%]">
              Hello! I'm your Staff Partner. I can help you draft this document,
              critique your strategy, or brainstorm ideas. How can I help with
              this project?
            </div>
          </div>
        </div>
      </ScrollArea>

      <div className="p-4 border-t bg-background">
        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
          <Input placeholder="Ask a question or give instructions..." />
          <Button type="submit" size="icon">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </form>
      </div>
    </div>
  );
}
