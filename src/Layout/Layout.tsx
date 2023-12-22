import { Link, Outlet } from 'react-router-dom'

function Layout() {
  // const basket = useSelector<RootState>(state => state.basket)
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          {/*<li>Basket: {basket.length}</li>*/}
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  )
}

export default Layout
