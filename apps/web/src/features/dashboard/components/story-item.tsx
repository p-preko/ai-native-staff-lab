'use client';

import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import { Story } from '@/types/project';
import { cn } from '@/lib/utils';
import { InteractiveItem } from '@/components/ui/interactive-item';

interface StoryItemProps {
  story: Story;
}

export function StoryItem({ story }: StoryItemProps) {
  return (
    <InteractiveItem
      href={`/stories/${story.id}`}
      className="flex items-center justify-between gap-4 py-4 first:pt-0 hover:bg-accent/50 transition-all rounded-lg px-2 -mx-2 cursor-pointer group outline-none"
      asChild={false}
    >
      <div className="flex-1 space-y-2">
        <div className="font-semibold text-sm group-hover:text-primary transition-colors">
          {story.title}
        </div>
        <div className="flex gap-2 items-center flex-wrap">
          {story.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-xs pointer-events-none"
              tabIndex={-1}
            >
              {tag}
            </Badge>
          ))}
          {story.completed && (
            <div className="flex items-center gap-1 text-green-600 dark:text-green-500">
              <Check className="h-3.5 w-3.5" />
              <span className="text-xs font-medium">Complete</span>
            </div>
          )}
        </div>
      </div>
      <div
        className={cn(
          buttonVariants({ variant: 'ghost', size: 'sm' }),
          'shrink-0 pointer-events-none',
        )}
      >
        View
        <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
      </div>
    </InteractiveItem>
  );
}
