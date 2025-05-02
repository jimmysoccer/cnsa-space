
export interface Mission {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'planned' | 'in-progress' | 'completed' | 'delayed';
  target: string[];
  category: string;
  assignee: string;
  progress: number;
  technology: string[];
  achievements: string[];
  image: string;
  gallery?: string[]; // Optional array of additional mission images
}

export type ViewType = 'timeline' | 'list' | 'card';
