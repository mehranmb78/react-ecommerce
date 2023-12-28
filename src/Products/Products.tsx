import { useEffect, useState } from 'react'
import { Product } from '../types'
import ProductCard from './ProductCard/ProductCard'

function Products() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos').then(async r => {
      const apiProducts = await r.json()
      setProducts(apiProducts)
    })
  }, [])

  return (
    <>
      <div className="grid grid-cols-5 gap-2 p-4">
        {products.map(product => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  )
}

export default Products
