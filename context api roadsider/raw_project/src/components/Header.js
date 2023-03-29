import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Cart } from '../Context'

const Header = () => {
  const {cart} = useContext(Cart)

  return (
    <div>
      <span>Lorem ipsum dolor sit amet.</span>
      <ul className="nav">
        <li className="prod">
          <Link to="/">Home page</Link>
        </li>
        <li className="prod1">
          <Link to="/cart">Cart: ({cart.length})</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header