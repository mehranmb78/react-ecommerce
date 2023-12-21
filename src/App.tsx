import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import Products from './Products/Products.tsx'
import Layout from './Layout/Layout.tsx'
import ProductDetail from './Products/ProductDetail/ProductDetail.tsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
