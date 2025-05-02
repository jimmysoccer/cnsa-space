export interface Mission {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'planned' | 'in-progress' | 'completed' | 'delayed';
  priority: 'low' | 'medium' | 'high';
  target: string[];
  category: string;
  assignee: string;
  progress: number;
  technology: string[];
  achievements: string[];
  image: string;
}

export type ViewType = 'timeline' | 'list' | 'card';
