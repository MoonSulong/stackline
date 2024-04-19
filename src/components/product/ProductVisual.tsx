import {FC} from 'react'
import RetailGraph from '../graph/RetailGraph'
import RetailTable from '../table/RetailTable'

import './ProductVisual.scss'

/**
 * A component to contain table and graph at right panel
 */
const ProductVisual : FC = () => {
  return (
    <div className='visual'>
      <RetailGraph />
      <RetailTable/>
    </div>
  )
}

export default ProductVisual