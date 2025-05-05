export enum MissionStatusType {
  all = 'all',
  planned = 'planned',
  inProgress = 'inProgress',
  completed = 'completed',
  delayed = 'delayed',
}

export interface Mission {
  id: number;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: MissionStatusType;
  target: string[];
  category: string[];
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

// Type for mission filter status that includes 'all' option
export type MissionFilterStatusType = MissionStatusType | 'all';
