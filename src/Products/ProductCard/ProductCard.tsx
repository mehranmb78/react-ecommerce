import { Product } from '../../types'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add } from '../../Basket/basketSlice.ts'

function ProductCard(props: { product: Product }) {
  const dispatch = useDispatch()
  return (
    <Link to={`${props.product.id}`}>
      <div className="bg-amber-200 aspect-square">
        <img src={props.product.thumbnailUrl} alt={props.product.title} />
        <h3>{props.product.title}</h3>
        <button onClick={() => dispatch(add(props.product))}>+ Add to basket</button>
      </div>
    </Link>
  )
}

export default ProductCard
