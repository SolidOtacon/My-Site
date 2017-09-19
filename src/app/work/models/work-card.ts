import { WorkCard } from './work-card';
export interface WorkCard {
  startDate: string;
  endDate: string;
  company: string;
  title: string;
  description: string;
  jobInception?: Array<Inception>;
  bullets?: Array<string>;
}

export interface Inception {
  title: string;
  description: string;
  bullets?: Array<string>;
}
