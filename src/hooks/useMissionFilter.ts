
import { useMemo, useState } from 'react';
import { Mission, MissionStatusType } from '@/types/mission';

// Define the filter state type for reuse
export interface MissionFilterState {
  status: MissionStatusType | 'all';
  category: string | 'all';
  sortOrder: 'asc' | 'desc';
}

export const useMissionFilter = (missions: Mission[]) => {
  // Initialize filter state
  const [filters, setFilters] = useState<MissionFilterState>({
    status: 'all',
    category: 'all',
    sortOrder: 'asc',
  });

  // Get unique categories for filter options - computed once when missions change
  const availableCategories = useMemo(() => {
    const categories = new Set<string>();
    missions.forEach(mission => categories.add(mission.category));
    return Array.from(categories);
  }, [missions]);
  
  // Apply filters to missions
  const filteredMissions = useMemo(() => {
    return missions.filter(mission => {
      // Filter by status (skip if 'all')
      if (filters.status !== 'all' && mission.status !== filters.status) {
        return false;
      }
      
      // Filter by category (skip if 'all')
      if (filters.category !== 'all' && mission.category !== filters.category) {
        return false;
      }
      
      return true;
    });
  }, [missions, filters]);

  // Sort filtered missions
  const sortedAndFilteredMissions = useMemo(() => {
    return [...filteredMissions].sort((a, b) => {
      const dateA = new Date(a.endDate).getTime();
      const dateB = new Date(b.endDate).getTime();
      return filters.sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }, [filteredMissions, filters.sortOrder]);

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      status: 'all',
      category: 'all',
      sortOrder: 'asc',
    });
  };

  return {
    filters,
    setFilters,
    availableCategories,
    filteredMissions,
    sortedAndFilteredMissions,
    clearFilters,
  };
};
