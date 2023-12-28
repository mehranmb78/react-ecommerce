import { Product } from '../../types'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add } from '../../Basket/basketSlice.ts'

function ProductCard(props: { product: Product }) {
  const dispatch = useDispatch()
  return (
    <div className="p-4 border border-gray-300 flex flex-col items-start">
      <Link className="flex-1 w-full mb-3" to={`${props.product.id}`}>
        <img className="w-full mb-2" src={props.product.thumbnailUrl} alt={props.product.title} />
        <h3>{props.product.title}</h3>
      </Link>
      <button onClick={() => dispatch(add(props.product))}>+ Add to basket</button>
    </div>
  )
}

export default ProductCard
