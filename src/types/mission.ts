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
  images: string[];
  priority?: string; // Add priority property as optional
  gallery?: string[]; // Optional array of additional mission images
}

export const MissionViewType = {
  timeline: 'timeline',
  list: 'list',
  card: 'card',
};
