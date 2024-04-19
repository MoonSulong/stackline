import {FC, useState, useEffect} from 'react'
import { SaleType } from '../../mock/mockAPI';
import { useAppSelector } from '../../redux/hooks';
import { selectSales, selectLoading } from '../../features/retail/retailSlice';
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

/**
 * Custom table header to support sort with icon
 */
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

/**
 * A component to show table for retail stats
 */
const RetailTable : FC = () => {
  // redux state
  const sales = useAppSelector(selectSales);
  const loading = useAppSelector(selectLoading);
  // state to dynamiclly map each key in sales
  const [saleKeys, setSaleKeys] = useState<(keyof SaleType)[]>([]);
  // state to support sort
  const [sortedData, setSortedData] = useState<SaleType[]>([]);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [sortBy, setSortBy] = useState<string | null>(null);
  
  useEffect(() => {
    // Update local state with Redux state
    setSortedData(sales ??[]);
    setSaleKeys(Object.keys(sales[0] ?? {}) as (keyof SaleType)[])
  }, [sales])

  // Function to handle sorting
  const handleSort = (key: keyof SaleType) => {
    const sorted = [...sales ?? []].sort((a, b) => {
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