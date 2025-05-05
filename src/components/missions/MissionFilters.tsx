
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MissionStatusType } from '@/types/mission';
import { getStatusText } from '@/utils/mission-status';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface MissionFiltersProps {
  onFilterChange: (filters: {
    status: MissionStatusType | 'all';
    category: string | 'all';
    sortOrder: 'asc' | 'desc';
  }) => void;
  availableCategories: string[];
  activeFilters: {
    status: MissionStatusType | 'all';
    category: string | 'all';
    sortOrder: 'asc' | 'desc';
  };
  clearFilters: () => void;
}

const MissionFilters: React.FC<MissionFiltersProps> = ({
  onFilterChange,
  availableCategories,
  activeFilters,
  clearFilters,
}) => {
  // Count active filters
  const activeFilterCount = 
    (activeFilters.status && activeFilters.status !== 'all' ? 1 : 0) + 
    (activeFilters.category && activeFilters.category !== 'all' ? 1 : 0);

  return (
    <div className="mb-6 bg-space-dark/30 p-4 rounded-lg border border-space-accent/20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Status Filter */}
        <div className="space-y-2">
          <h4 className="font-medium text-space-light">状态</h4>
          <Select
            value={activeFilters.status}
            onValueChange={(value) => 
              onFilterChange({ 
                ...activeFilters, 
                status: value as MissionStatusType | 'all'
              })
            }
          >
            <SelectTrigger className="w-full bg-space-dark/70 border-space-accent/20 text-space-light">
              <SelectValue placeholder="选择任务状态" />
            </SelectTrigger>
            <SelectContent className="bg-space-dark border-space-accent/30">
              <SelectItem value="all">全部</SelectItem>
              {Object.values(MissionStatusType).map((status) => (
                <SelectItem key={status} value={status}>
                  {getStatusText(status)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        {/* Category Filter */}
        <div className="space-y-2">
          <h4 className="font-medium text-space-light">分类</h4>
          <Select
            value={activeFilters.category}
            onValueChange={(value) => 
              onFilterChange({ 
                ...activeFilters, 
                category: value
              })
            }
          >
            <SelectTrigger className="w-full bg-space-dark/70 border-space-accent/20 text-space-light">
              <SelectValue placeholder="选择任务分类" />
            </SelectTrigger>
            <SelectContent className="bg-space-dark border-space-accent/30">
              <SelectItem value="all">全部</SelectItem>
              {availableCategories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Sort Order */}
        <div className="space-y-2">
          <h4 className="font-medium text-space-light">日期排序</h4>
          <Select
            value={activeFilters.sortOrder}
            onValueChange={(value) => 
              onFilterChange({ 
                ...activeFilters, 
                sortOrder: value as 'asc' | 'desc'
              })
            }
          >
            <SelectTrigger className="w-full bg-space-dark/70 border-space-accent/20 text-space-light">
              <SelectValue placeholder="排序方式" />
            </SelectTrigger>
            <SelectContent className="bg-space-dark border-space-accent/30">
              <SelectItem value="asc">日期升序 (旧→新)</SelectItem>
              <SelectItem value="desc">日期降序 (新→旧)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="flex flex-wrap items-center justify-between">
        {/* Active Filter badges */}
        <div className="flex flex-wrap gap-2">
          {activeFilters.status && activeFilters.status !== 'all' && (
            <Badge 
              variant="outline" 
              className="bg-space-dark/50 border-space-accent/30 text-space-light"
            >
              状态: {getStatusText(activeFilters.status)}
              <X 
                className="ml-1 h-3 w-3 cursor-pointer" 
                onClick={() => onFilterChange({...activeFilters, status: 'all'})}
              />
            </Badge>
          )}
          {activeFilters.category && activeFilters.category !== 'all' && (
            <Badge 
              variant="outline"
              className="bg-space-dark/50 border-space-accent/30 text-space-light"
            >
              分类: {activeFilters.category}
              <X 
                className="ml-1 h-3 w-3 cursor-pointer" 
                onClick={() => onFilterChange({...activeFilters, category: 'all'})}
              />
            </Badge>
          )}
        </div>
        
        {activeFilterCount > 0 && (
          <Button 
            variant="outline" 
            onClick={clearFilters}
            className="bg-space-dark/70 border-space-accent/20 text-space-light text-sm"
            size="sm"
          >
            <X className="mr-1 h-3 w-3" />
            清除筛选
          </Button>
        )}
      </div>
    </div>
  );
};

export default MissionFilters;
