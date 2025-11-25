'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface FadeInProps extends React.ComponentProps<'div'> {
  delay?: number; // ms
  duration?: number; // ms
}

export function FadeIn({
  className,
  delay = 0,
  duration = 500,
  style,
  ...props
}: FadeInProps) {
  return (
    <div
      className={cn(className)}
      style={{
        animation: `fadeInUp ${duration}ms ease-out backwards`,
        animationDelay: `${delay}ms`,
        ...style,
      }}
      {...props}
    />
  );
}
