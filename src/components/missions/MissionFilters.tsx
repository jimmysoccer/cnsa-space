
import React, { useState } from 'react';
import { Filter, Calendar, Check, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { MissionStatusType } from '@/types/mission';
import { getStatusText } from '@/utils/mission-status';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface MissionFiltersProps {
  onFilterChange: (filters: {
    endDate: Date | null;
    status: MissionStatusType | '';
    category: string | '';
  }) => void;
  availableCategories: string[];
  activeFilters: {
    endDate: Date | null;
    status: MissionStatusType | '';
    category: string | '';
  };
  clearFilters: () => void;
}

const MissionFilters: React.FC<MissionFiltersProps> = ({
  onFilterChange,
  availableCategories,
  activeFilters,
  clearFilters,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempFilters, setTempFilters] = useState(activeFilters);

  const handleApplyFilters = () => {
    onFilterChange(tempFilters);
    setIsOpen(false);
  };

  const handleClearFilters = () => {
    clearFilters();
    setTempFilters({ endDate: null, status: '', category: '' });
    setIsOpen(false);
  };

  // Count active filters
  const activeFilterCount = 
    (activeFilters.endDate ? 1 : 0) + 
    (activeFilters.status ? 1 : 0) + 
    (activeFilters.category ? 1 : 0);

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between">
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button 
              variant="outline" 
              className="bg-space-dark/50 border-space-accent/20 hover:border-space-accent/50 text-space-light"
            >
              <Filter className="mr-2 h-4 w-4" />
              筛选任务
              {activeFilterCount > 0 && (
                <Badge variant="secondary" className="ml-2 bg-space-accent/20 text-space-accent">
                  {activeFilterCount}
                </Badge>
              )}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-space-dark border-space-accent/30">
            <DialogHeader>
              <DialogTitle className="text-space-light">筛选任务</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {/* End Date Filter */}
              <div className="space-y-2">
                <h4 className="font-medium text-space-light">截止日期</h4>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-space-dark/70 border-space-accent/20",
                        !tempFilters.endDate && "text-muted-foreground"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {tempFilters.endDate ? (
                        format(tempFilters.endDate, "yyyy年MM月dd日")
                      ) : (
                        <span>选择日期</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-space-dark border-space-accent/30" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={tempFilters.endDate || undefined}
                      onSelect={(date) => setTempFilters({ ...tempFilters, endDate: date })}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              {/* Status Filter */}
              <div className="space-y-2">
                <h4 className="font-medium text-space-light">状态</h4>
                <Select
                  value={tempFilters.status}
                  onValueChange={(value) => 
                    setTempFilters({ 
                      ...tempFilters, 
                      status: value as MissionStatusType | '' 
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
                  value={tempFilters.category}
                  onValueChange={(value) => 
                    setTempFilters({ ...tempFilters, category: value })
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
            </div>
            <div className="flex justify-between">
              <Button 
                variant="outline" 
                onClick={handleClearFilters}
                className="bg-space-dark/70 border-space-accent/20 text-space-light"
              >
                <X className="mr-2 h-4 w-4" />
                清除筛选
              </Button>
              <Button onClick={handleApplyFilters} className="bg-space-accent text-space-light hover:bg-space-accent/80">
                <Check className="mr-2 h-4 w-4" />
                应用筛选
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        
        {/* Active Filter badges */}
        <div className="flex flex-wrap gap-2">
          {activeFilters.endDate && (
            <Badge 
              variant="outline" 
              className="bg-space-dark/50 border-space-accent/30 text-space-light"
            >
              截止日期: {format(activeFilters.endDate, "yyyy年MM月dd日")}
              <X 
                className="ml-1 h-3 w-3 cursor-pointer" 
                onClick={() => onFilterChange({...activeFilters, endDate: null})}
              />
            </Badge>
          )}
          {activeFilters.status && (
            <Badge 
              variant="outline" 
              className="bg-space-dark/50 border-space-accent/30 text-space-light"
            >
              状态: {getStatusText(activeFilters.status)}
              <X 
                className="ml-1 h-3 w-3 cursor-pointer" 
                onClick={() => onFilterChange({...activeFilters, status: ''})}
              />
            </Badge>
          )}
          {activeFilters.category && (
            <Badge 
              variant="outline"
              className="bg-space-dark/50 border-space-accent/30 text-space-light"
            >
              分类: {activeFilters.category}
              <X 
                className="ml-1 h-3 w-3 cursor-pointer" 
                onClick={() => onFilterChange({...activeFilters, category: ''})}
              />
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default MissionFilters;
