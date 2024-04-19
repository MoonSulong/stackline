import {FC, useState, useEffect} from 'react'

import { useAppSelector } from '../../redux/hooks';
import { selectProduct, selectLoading } from '../../features/retail/retailSlice';

import { SaleType } from '../../mock/mockAPI';

import './RetailTable.scss'

const RetailTable : FC = () => {
  
  const product = useAppSelector(selectProduct);
  const loading = useAppSelector(selectLoading);
  
  // dynamic column name for sales category 
  const [saleKeys, setSaleKeys] = useState<(keyof SaleType)[]>([]);
  
  // sort data state
  const [sortedData, setSortedData] = useState<SaleType[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  
  useEffect(() => {
    // Update local state with Redux state
    setSortedData(product?.sales ??[]);
    setSaleKeys(Object.keys(product?.sales[0] ?? {}) as (keyof SaleType)[])
  }, [product])

  // Function to handle sorting
  const handleSort = (key: keyof SaleType) => {
    const sorted = [...product?.sales ?? []].sort((a, b) => {
      if (a[key] < b[key]) return sortOrder === 'asc' ? -1 : 1;
      if (a[key] > b[key]) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
    setSortedData(sorted);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <div className='table-container'>
      {!loading &&
      <table>
        <thead>
          <tr>
            {saleKeys.map( saleKey => <th key={saleKey} onClick={() => handleSort(saleKey)}>{saleKey}</th>)
            }
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
                <tr key={index}>
                {saleKeys.map((saleKey, idx) => (
                  <td key={idx}>{item[saleKey]}</td>
                ))}
              </tr>
              ))
            }
        </tbody>
      </table>
      }
    </div>
  );
}

export default RetailTable