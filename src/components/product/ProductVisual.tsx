import React from 'react'
import RetailGraph from '../graph/RetailGraph'
import RetailTable from '../table/RetailTable'

import './ProductVisual.scss'

type Props = {}

const ProductVisual = (props: Props) => {
  return (
    <div className='visual'>
      <RetailGraph />
      <RetailTable/>
    </div>
  )
}

export default ProductVisual