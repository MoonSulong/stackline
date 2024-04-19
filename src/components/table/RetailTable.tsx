import {FC, useState, useEffect} from 'react'

import { useAppSelector } from '../../redux/hooks';
import { selectProduct, selectLoading } from '../../features/retail/retailSlice';

import { SaleType } from '../../mock/mockAPI';

import { formatDate, formatComma, formatDollar, formatHeader } from '../../utils/format';

import ascIcon from '../../assets/up.svg';
import descIcon from '../../assets/down.svg';

import './RetailTable.scss'

interface TableHeaderProps {
  column: keyof SaleType;
  sortBy: string | null;
  sortOrder: 'asc' | 'desc';
  onClick: (column: string) => void;
}

const TableHeader  : FC<TableHeaderProps> = ({column, sortBy, sortOrder, onClick}) => {
  
  const align = column === "weekEnding" ? ' left-align' : ' right-align'; 
  
  return (
    <th className={"th-cell" + align} onClick={() => onClick(column)}>
      <span>{formatHeader[column]} </span>
      {column === sortBy && sortOrder ==='asc' ? 
          <img src={ascIcon} alt="Ascending" /> : <img src={descIcon} alt="Descending" />
      }
    </th>
  )
}

const RetailTable : FC = () => {
  
  const product = useAppSelector(selectProduct);
  const loading = useAppSelector(selectLoading);
  const [sortedData, setSortedData] = useState<SaleType[]>([]);
  const [saleKeys, setSaleKeys] = useState<(keyof SaleType)[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortBy, setSortBy] = useState<string | null>(null);
  
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
    setSortBy(key);
  };

  return (
    <div className='table-container'>
      {!loading &&
      <table>
        <thead>
          <tr>
            {saleKeys.map(
                saleKey => ( 
                  <TableHeader 
                    key={saleKey}
                    column ={saleKey} 
                    sortBy={sortBy}
                    sortOrder={sortOrder}
                    onClick={() => handleSort(saleKey)}
                  />
                )
              )
            }
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => (
                <tr key={index}>
                  <td className='left-align'>{formatDate(item.weekEnding)}</td>
                  <td className='right-align'>{formatDollar(item.retailSales)}</td>
                  <td className='right-align'>{formatDollar(item.wholesaleSales)}</td>
                  <td className='right-align'>{formatComma(item.unitsSold)}</td>
                  <td className='right-align'>{formatDollar(item.retailerMargin)}</td>
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