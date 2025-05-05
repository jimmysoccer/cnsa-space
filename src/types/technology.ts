
// Define technology type
export interface Technology {
  id: string;
  name: string;
  description: string;
  history: string;
  currentProgress: string;
  currentApplications: string[];
  futureImprovements: string[];
  pros: string[];
  cons: string[];
  image?: string;
  category: string;
}
