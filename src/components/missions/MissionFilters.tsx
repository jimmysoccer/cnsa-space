/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MissionStatusType } from '@/types/mission';
import { getStatusBadge, getStatusText } from '@/utils/mission-status';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { MISSIONS } from '@/constants/missionConstants';
import { useAtom, useSetAtom } from 'jotai';
import { missionsAtom, missionsFilterAtom } from '@/atoms/atoms';

// Define the filter state type for reuse
export interface MissionFilterState {
  status: MissionStatusType;
  category: string | MissionStatusType.all;
  sortOrder: 'asc' | 'desc';
}

const MissionFilters = () => {
  // Initialize filter state
  const [filters, setFilters] = useAtom(missionsFilterAtom);
  const setMissions = useSetAtom(missionsAtom);
  // Count active filters
  const activeFilterCount =
    (filters.status && filters.status !== MissionStatusType.all ? 1 : 0) +
    (filters.category && filters.category !== MissionStatusType.all ? 1 : 0);

  useEffect(() => {
    // Apply filters to missions
    const filteredMissions = MISSIONS.filter((mission) => {
      // Filter by status (skip if MissionStatusType.all)
      if (
        filters.status !== MissionStatusType.all &&
        mission.status !== filters.status
      ) {
        return false;
      }

      // Filter by category (skip if MissionStatusType.all)
      if (
        filters.category !== MissionStatusType.all &&
        !mission.category.includes(filters.category)
      ) {
        return false;
      }

      return true;
    });

    // Sort filtered missions
    const sortedAndFilteredMissions = [...filteredMissions].sort((a, b) => {
      const dateA = new Date(a.endDate).getTime();
      const dateB = new Date(b.endDate).getTime();
      return filters.sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    setMissions(sortedAndFilteredMissions);
  }, [filters]);

  // Get unique categories for filter options - computed once when missions change
  const availableCategories = useMemo(() => {
    const categories = new Set<string>();
    MISSIONS.forEach((mission) => {
      mission.category.forEach((cat) => categories.add(cat));
    });
    return Array.from(categories);
  }, []);

  const onFilterChange = (newFilters: MissionFilterState) => {
    setFilters(newFilters);
  };

  const clearFilters = () => {
    setFilters({
      status: MissionStatusType.all,
      category: MissionStatusType.all,
      sortOrder: 'asc',
    });
  };

  return (
    <div className='mb-6 bg-space-dark/30 p-4 rounded-lg border border-space-accent/20'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-4'>
        {/* Status Filter */}
        <div className='space-y-2'>
          <h4 className='font-medium text-space-light'>状态</h4>
          <Select
            value={filters.status}
            onValueChange={(value) =>
              onFilterChange({
                ...filters,
                status: value as MissionStatusType,
              })
            }
          >
            <SelectTrigger className='w-full bg-space-dark/70 border-space-accent/20 text-space-light'>
              <SelectValue placeholder='选择任务状态' />
            </SelectTrigger>
            <SelectContent className='bg-space-dark border-space-accent/30'>
              {Object.values(MissionStatusType).map((status) => (
                <SelectItem key={status} value={status}>
                  {getStatusBadge(status)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Category Filter */}
        <div className='space-y-2'>
          <h4 className='font-medium text-space-light'>分类</h4>
          <Select
            value={filters.category}
            onValueChange={(value) =>
              onFilterChange({
                ...filters,
                category: value,
              })
            }
          >
            <SelectTrigger className='w-full bg-space-dark/70 border-space-accent/20 text-space-light'>
              <SelectValue placeholder='选择任务分类' />
            </SelectTrigger>
            <SelectContent className='bg-space-dark border-space-accent/30'>
              <SelectItem value={MissionStatusType.all}>全部</SelectItem>
              {availableCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Sort Order */}
        <div className='space-y-2'>
          <h4 className='font-medium text-space-light'>日期排序</h4>
          <Select
            value={filters.sortOrder}
            onValueChange={(value) =>
              onFilterChange({
                ...filters,
                sortOrder: value as 'asc' | 'desc',
              })
            }
          >
            <SelectTrigger className='w-full bg-space-dark/70 border-space-accent/20 text-space-light'>
              <SelectValue placeholder='排序方式' />
            </SelectTrigger>
            <SelectContent className='bg-space-dark border-space-accent/30'>
              <SelectItem value='asc'>日期升序 (旧→新)</SelectItem>
              <SelectItem value='desc'>日期降序 (新→旧)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className='flex flex-wrap items-center justify-between'>
        {/* Active Filter badges */}
        <div className='flex flex-wrap gap-2'>
          {filters.status && filters.status !== MissionStatusType.all && (
            <Badge
              variant='outline'
              className='bg-space-dark/50 border-space-accent/30 text-space-light'
            >
              状态: {getStatusText(filters.status)}
              <X
                className='ml-1 h-3 w-3 cursor-pointer'
                onClick={() =>
                  onFilterChange({ ...filters, status: MissionStatusType.all })
                }
              />
            </Badge>
          )}
          {filters.category && filters.category !== MissionStatusType.all && (
            <Badge
              variant='outline'
              className='bg-space-dark/50 border-space-accent/30 text-space-light'
            >
              分类: {filters.category}
              <X
                className='ml-1 h-3 w-3 cursor-pointer'
                onClick={() =>
                  onFilterChange({
                    ...filters,
                    category: MissionStatusType.all,
                  })
                }
              />
            </Badge>
          )}
        </div>

        {activeFilterCount > 0 && (
          <Button
            variant='outline'
            onClick={clearFilters}
            className='bg-space-dark/70 border-space-accent/20 text-space-light text-sm'
            size='sm'
          >
            <X className='mr-1 h-3 w-3' />
            清除筛选
          </Button>
        )}
      </div>
    </div>
  );
};

export default MissionFilters;
