
/**
 * This function formats the date given and returns a string.
 * @param date 'YYYY-DD-MM' <string>
 * @returns date 'MM-DD-YYYY' <string>
 */
export const formatDate = (date: string) : string => {
  const [year, month, day] = date.split('-')
  return `${month}-${day}-${year}`;
}

/**
 * Insert , for each 3 digits
 * 
 * @param num 1000 <number>
 * @returns '1,000' <string>
 */
export const formatComma = (num: number) : string => {
  return  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Add $ in front of fommated number
 * @param num 1000 <number>
 * @returns '$1,000' <string>
 */
export const formatDollar = (num: number) : string => {
  return "$" + formatComma(num);
}

export const formatHeader = {
  weekEnding: "WEEK ENDING", 
  retailSales: "RETAIL SALES", 
  wholesaleSales: "WHOLE SALES", 
  unitsSold: "UNITS SOLD", 
  retailerMargin: "RETAILER MARGIN"
}