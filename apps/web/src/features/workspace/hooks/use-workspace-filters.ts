'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useTransition, useState } from 'react';

interface UseWorkspaceFiltersProps {
  initialSearch?: string;
  initialStatus?: string;
}

export function useWorkspaceFilters({
  initialSearch = '',
  initialStatus = 'active',
}: UseWorkspaceFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [searchValue, setSearchValue] = useState(initialSearch);
  const [activeTab, setActiveTab] = useState(initialStatus || 'active');

  const updateParams = (updates: { search?: string; status?: string }) => {
    startTransition(() => {
      const params = new URLSearchParams(searchParams.toString());

      if (updates.search !== undefined) {
        if (updates.search) params.set('search', updates.search);
        else params.delete('search');
      }

      if (updates.status !== undefined) {
        if (updates.status && updates.status !== 'all')
          params.set('status', updates.status);
        else params.delete('status');
      }

      const queryString = params.toString();
      router.replace(queryString ? `/workspace?${queryString}` : '/workspace', {
        scroll: false,
      });
    });
  };

  const handleSearch = (term: string) => {
    setSearchValue(term);
    updateParams({ search: term });
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    updateParams({ status: value });
  };

  return {
    searchValue,
    activeTab,
    isPending,
    handleSearch,
    handleTabChange,
  };
}
