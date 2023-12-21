import { Product } from '../../types'
import { Link } from 'react-router-dom'

function ProductCard(props: { product: Product }) {
  return (
    <Link to={`${props.product.id}`}>
      <div className="bg-amber-200 aspect-square">
        <img src={props.product.url} />
        <h3>{props.product.title}</h3>
      </div>
    </Link>
  )
}

export default ProductCard
