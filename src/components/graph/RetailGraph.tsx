import {FC} from 'react'

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


import './RetailGraph.scss'
import { useAppSelector } from '../../redux/hooks';
import { selectSales } from '../../features/retail/retailSlice';


const MONTH_ABBR = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

const RetailGraph: FC = () => {
  
  const sales = useAppSelector(selectSales);
  
  const fromatTick = (tick: string, index: number) => {
    if (index % (Math.ceil(sales.length / MONTH_ABBR.length)) === 1) {
      const monthIndex = parseInt(tick.split("-")[1], 10) - 1;
      return MONTH_ABBR[monthIndex]
    }
    return '';
  }
  
  return (
    <div className='graph-container'>
      <p className='graph-title'>Retail Sales</p>
      <ResponsiveContainer width="100%" height="90%">
      <LineChart data={sales} margin={{ top: 10, right: 30, left: 30, bottom: 40 }}>
        <XAxis
          dataKey="weekEnding"
          tickLine={false}
          tickFormatter={(tick, index) => fromatTick(tick, index)}
        />
        <YAxis domain={[-500000, 1500000]} hide />
        <Tooltip />
        <Line type="monotone" dataKey="retailSales" stroke="#44a7f6" dot={false} strokeWidth={3}/>
        <Line type="monotone" dataKey="wholesaleSales" stroke="#98a3bd" dot={false} strokeWidth={3}/>
      </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RetailGraph