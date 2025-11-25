'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useRouter } from 'next/navigation';
import { ReactNode, useState } from 'react';

interface ScenarioDetailsModalProps {
  children: ReactNode;
}

const RADIX_SLIDE_DURATION = 300;

export function ScenarioDetailsModal({ children }: ScenarioDetailsModalProps) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      setTimeout(() => {
        router.back();
      }, RADIX_SLIDE_DURATION);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetContent className="w-full sm:max-w-2xl p-0 flex flex-col">
        <SheetHeader className="sr-only">
          <SheetTitle>Scenario Details</SheetTitle>
          <SheetDescription>
            View scenario details and information
          </SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
}
