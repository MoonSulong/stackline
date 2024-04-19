import ProductSummary from '../product/ProductSummary'
import './Dashboard.scss'
import ProductVisual from '../product/ProductVisual'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <ProductSummary />
      <ProductVisual />
    </div>
  )
}

export default Dashboard