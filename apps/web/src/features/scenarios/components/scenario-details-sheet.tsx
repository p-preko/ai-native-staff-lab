'use client';

import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';

interface ScenarioDetailsSheetProps {
  open: boolean;
  closeUrl: string;
  children: ReactNode;
}

const RADIX_SLIDE_DURATION = 300;

export function ScenarioDetailsSheet({
  open,
  closeUrl,
  children,
}: ScenarioDetailsSheetProps) {
  const router = useRouter();

  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setTimeout(() => {
        router.push(closeUrl, { scroll: false });
      }, RADIX_SLIDE_DURATION);
    }
  };

  return (
    <Sheet defaultOpen={open} onOpenChange={handleOpenChange}>
      <SheetContent className="w-full sm:max-w-2xl p-0 flex flex-col">
        {children}
      </SheetContent>
    </Sheet>
  );
}
