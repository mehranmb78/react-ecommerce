import { Product } from '../../types'

function ProductCard(props: { product: Product }) {
  return (
    <div className="bg-amber-200 aspect-square">
      <img src={props.product.url} />
      <h3>{props.product.title}</h3>
    </div>
  )
}

export default ProductCard
