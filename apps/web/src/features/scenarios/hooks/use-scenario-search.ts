'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useTransition, useEffect } from 'react';

export function useScenarioSearch(initialValue: string) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  function handleSearch(term: string) {
    setValue(term);

    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (term) {
        params.set('search', term);
      } else {
        params.delete('search');
      }

      router.replace(`/scenarios?${params.toString()}`, { scroll: false });
    });
  }

  return {
    value,
    handleSearch,
    isPending,
  };
}
