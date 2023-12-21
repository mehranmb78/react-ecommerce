import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Product } from '../../types'

function ProductDetail() {
  const params = useParams()
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos/' + params.id).then(async r => {
      const apiProduct = await r.json()
      setProduct(apiProduct)
    })
  }, [params.id])
  return (
    <>
      <h1>{product?.title}</h1>
      <img src={product?.url} alt={product?.title} />
      <p>product detail</p>
    </>
  )
}

export default ProductDetail
