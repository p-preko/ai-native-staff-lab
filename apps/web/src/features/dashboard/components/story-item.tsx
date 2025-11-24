import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Story } from '@/types/project';
import Link from 'next/link';

interface StoryItemProps {
  story: Story;
}

export function StoryItem({ story }: StoryItemProps) {
  return (
    <div className="flex items-center justify-between gap-4 py-4 first:pt-0 hover:bg-accent/50 transition-colors rounded-lg px-2 -mx-2">
      <div className="flex-1 space-y-2">
        <div className="font-semibold text-sm">{story.title}</div>
        <div className="flex gap-2 items-center flex-wrap">
          {story.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">
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
      <Button variant="ghost" size="sm" className="shrink-0" asChild>
        <Link href={`/stories/${story.id}`}>View</Link>
      </Button>
    </div>
  );
}
