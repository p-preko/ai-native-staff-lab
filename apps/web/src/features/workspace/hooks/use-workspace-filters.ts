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
  const [isSearchPending, startSearchTransition] = useTransition();
  const [isTabPending, startTabTransition] = useTransition();

  const [searchValue, setSearchValue] = useState(initialSearch);
  const [activeTab, setActiveTab] = useState(initialStatus || 'active');

  const updateSearch = (term: string) => {
    startSearchTransition(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (term) params.set('search', term);
      else params.delete('search');

      const queryString = params.toString();
      router.replace(queryString ? `/workspace?${queryString}` : '/workspace', {
        scroll: false,
      });
    });
  };

  const updateTab = (status: string) => {
    startTabTransition(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (status && status !== 'all') params.set('status', status);
      else params.delete('status');

      const queryString = params.toString();
      router.replace(queryString ? `/workspace?${queryString}` : '/workspace', {
        scroll: false,
      });
    });
  };

  const handleSearch = (term: string) => {
    setSearchValue(term);
    updateSearch(term);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    updateTab(value);
  };

  return {
    searchValue,
    activeTab,
    isSearchPending,
    isTabPending,
    handleSearch,
    handleTabChange,
  };
}
