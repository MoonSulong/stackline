import retailData from './stackline_frontend_assessment_data_2021.json'

export interface ReviewType {
  customer: string, 
  review: string, 
  score: number
}

export interface SaleType {
  weekEnding: string, 
  retailSales: number, 
  wholesaleSales: number, 
  unitsSold: number, 
  retailerMargin: number
}

export interface ProductType {
  id: string, 
  title: string, 
  image: string, 
  subtitle: string, 
  brand: string, 
  reviews: ReviewType[], 
  retailer: string, 
  details: string[],
  tags: string[], 
  sales: SaleType[]
}

// A mock function to mimic making an async request for data
export function fetchRetailData() {
  return new Promise<ProductType[]>((resolve) =>
    setTimeout(() => resolve(retailData), 500)
  );
}
