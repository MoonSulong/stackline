import {FC} from 'react';
import ProductSummary from '../product/ProductSummary'
import ProductVisual from '../product/ProductVisual'
import './Dashboard.scss'

/**
 * A componment to contain product information and sale stats 
 */

const Dashboard : FC = () => {
  return (
    <div className='dashboard'>
      <ProductSummary />
      <ProductVisual />
    </div>
  )
}

export default Dashboard