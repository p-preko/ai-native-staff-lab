'use client';

import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search, Plus } from 'lucide-react';
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
  const { searchValue, activeTab, handleSearch, handleTabChange } =
    useWorkspaceFilters({
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
        <Tabs
          value={activeTab}
          onValueChange={handleTabChange}
          className="w-full sm:w-auto"
        >
          <TabsList>
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
            <TabsTrigger value="all">All Projects</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
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
