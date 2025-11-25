'use client';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Input } from '@/components/ui/input';
import { Search, Plus, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useWorkspaceFilters } from '../hooks/use-workspace-filters';

interface WorkspaceHeaderProps {
  initialSearch?: string;
  initialStatus?: string;
}

export function WorkspaceHeader({
  initialSearch,
  initialStatus,
}: WorkspaceHeaderProps) {
  const {
    searchValue,
    activeTab,
    handleSearch,
    handleTabChange,
    isSearchPending,
    isTabPending,
  } = useWorkspaceFilters({
    initialSearch,
    initialStatus,
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Workspace</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Project
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b pb-6">
        <div className="flex items-center gap-2">
          <ToggleGroup
            type="single"
            value={activeTab}
            onValueChange={(value) => {
              if (value) handleTabChange(value);
            }}
            className="bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]"
          >
            <ToggleGroupItem
              value="active"
              className="h-[calc(100%-1px)] flex-1 px-3 py-1 text-sm font-medium transition-all data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm rounded-md hover:bg-background/50"
            >
              Active
            </ToggleGroupItem>
            <ToggleGroupItem
              value="completed"
              className="h-[calc(100%-1px)] flex-1 px-3 py-1 text-sm font-medium transition-all data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm rounded-md hover:bg-background/50"
            >
              Completed
            </ToggleGroupItem>
            <ToggleGroupItem
              value="archived"
              className="h-[calc(100%-1px)] flex-1 px-3 py-1 text-sm font-medium transition-all data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm rounded-md hover:bg-background/50"
            >
              Archived
            </ToggleGroupItem>
            <ToggleGroupItem
              value="all"
              className="h-[calc(100%-1px)] flex-1 px-3 py-1 text-sm font-medium transition-all data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm rounded-md hover:bg-background/50"
            >
              All Projects
            </ToggleGroupItem>
          </ToggleGroup>
          {isTabPending && (
            <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
          )}
        </div>

        <div className="relative w-full sm:w-72">
          {isSearchPending ? (
            <Loader2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground animate-spin" />
          ) : (
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          )}
          <Input
            placeholder="Search projects..."
            className="pl-10"
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
