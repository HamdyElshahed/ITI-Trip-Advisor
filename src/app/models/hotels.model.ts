import { Location } from './restaurant.model';
export interface hotels {
  features: string[];
  id: number;
  price: number;
  name: string;
  location?: {
    address: string;
  };
  payment_method?: string[];
  imgage_url: string[];
  reviewCount: number;
  rate: number;
  phone_number: number;
}
