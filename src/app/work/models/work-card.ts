import { WorkCard } from './work-card';
export interface WorkCard {
  startDate: string;
  endDate: string;
  company: string;
  title: string;
  description: Array<string>;
  jobInception?: Array<Inception>;
}

export interface Inception {
  title: string;
  description: Array<string>;
}
