import {FC} from 'react'
import { useAppSelector } from '../../redux/hooks';
import { selectProduct, selectLoading } from '../../features/retail/retailSlice';
import './ProductSummary.scss'

/**
 * A component to show product summary at the left panel
 */
const ProductSummary: FC = () => {
  
  const product = useAppSelector(selectProduct);
  const loading = useAppSelector(selectLoading);
  
  return (
    <div className='summary'>
      {!loading && <>
        <img className='summary-image' src={product?.image} alt={`view of the product ${product?.title}`} />
        <p className='summary-title'>{product?.title}</p>
        <p className='summary-subtitle'>{product?.subtitle}</p>
        <div className='summary-tags'>
          {product?.tags.map((tag) => (
            <p className='summary-tag' key={tag} >{tag}</p>
          ))}
        </div>
      </>}
    </div>
  )
}

export default ProductSummary