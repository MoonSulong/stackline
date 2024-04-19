import {FC} from 'react'

import { useAppSelector } from '../../redux/hooks';
import { selectProduct } from '../../features/retail/retailSlice';

import './ProductSummary.scss'

const ProductSummary: FC = () => {
  
  const product = useAppSelector(selectProduct);
  
  return (
    <div className='summary-container'>
      <img id='product-image' src={product?.image} alt={`view of the product ${product?.title}`} />

      <h1 id='product-title'>{product?.title}</h1>
      <h2 id='product-subtitle'>{product?.subtitle}</h2>

      <div id='product-tags'>
        {product?.tags.map((tag) => (
          <p className='product-tag' key={tag} >{tag}</p>
        ))}
      </div>
    </div>
  )
}

export default ProductSummary