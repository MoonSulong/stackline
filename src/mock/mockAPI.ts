import retailData from './stackline_frontend_assessment_data_2021.json'

export interface review {
  customer: string, 
  review: string, 
  score: number
}

export interface sale {
  weekEnding: string, 
  retailSales: number, 
  wholesaleSales: number, 
  unitsSold: number, 
  retailerMargin: number
}

export interface product {
  id: string, 
  title: string, 
  image: string, 
  subtitle: string, 
  brand: string, 
  reviews: review[], 
  retailer: string, 
  details: string[],
  tags: string[], 
  sales: sale[]
}

// A mock function to mimic making an async request for data
export function fetchRetailData() {
  return new Promise<product[]>((resolve) =>
    setTimeout(() => resolve(retailData), 500)
  );
}
