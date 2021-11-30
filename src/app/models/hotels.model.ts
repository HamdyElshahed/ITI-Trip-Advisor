export interface hotels {
  feature: string[];
  id: number;
  price: number;
  name: string;
  location?: {
    address: string;
  };
  paymentmethod: string[];
  imgage_url: string[];
  reviewCount: number;
  rate: number;
  phonenumber: number;
}
