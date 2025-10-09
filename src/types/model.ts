export interface Model {
  id: string;
  name: string;
  description: string;
  type: string;
  industries: string[];
  rating: number;
  pricePerCall: number;
  lastUpdated: string;
  provider: string;
}