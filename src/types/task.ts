
export interface Task {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'planned' | 'in-progress' | 'completed' | 'delayed';
  priority: 'low' | 'medium' | 'high';
  target: string;
  category: string;
  assignee: string;
  progress: number;
}

export type ViewType = 'timeline' | 'grid' | 'list';
