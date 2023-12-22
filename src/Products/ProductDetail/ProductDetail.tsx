import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Product } from '../../types'
import { add } from '../../Basket/basketSlice.ts'
import { useDispatch } from 'react-redux'

function ProductDetail() {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos/' + params.id).then(async r => {
      const apiProduct = await r.json()
      setProduct(apiProduct)
    })
  }, [params.id])
  return product ? (
    <>
      <h1>{product.title}</h1>
      <button onClick={() => dispatch(add(product))}>+ Add to basket</button>
      <img src={product?.url} alt={product.title} />
      <p>product detail</p>
    </>
  ) : (
    <></>
  )
}

export default ProductDetail
