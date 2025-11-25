'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Item } from '@/components/ui/item';

interface InteractiveItemProps extends React.ComponentProps<typeof Item> {
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export function InteractiveItem({
  href,
  onClick,
  className,
  children,
  ...props
}: InteractiveItemProps) {
  const router = useRouter();
  const [isPending, startTransition] = React.useTransition();

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(e);
    }

    if (href) {
      e.preventDefault();
      startTransition(() => {
        router.push(href);
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick(e as unknown as React.MouseEvent<HTMLDivElement>);
    }
  };

  return (
    <Item
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      className={cn(
        'cursor-pointer transition-opacity duration-200 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:border-transparent',
        isPending && 'opacity-70 cursor-wait',
        className,
      )}
      {...props}
    >
      {children}
    </Item>
  );
}
