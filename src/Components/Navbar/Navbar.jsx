import React, { useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom';

export const Navbar = () => {

  const [menu,setMenu] = useState("shop");

  return (
    <div className='navbar'>
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>
       <ul className="nav-menu">
          <li onClick={() => {setMenu("shop")}}> <Link to='/shops'>Shop</Link> {menu === "shop" ? <hr/> :<></>}</li>
          <li onClick={() => {setMenu("mens")}}> <Link to='/mens'>Mens</Link> {menu === "mens" ? <hr/> :<></>}</li>
          <li onClick={() => {setMenu("womens")}}> <Link to='/womens'>Womens</Link> {menu === "womens" ? <hr/> : <></>}</li>
          <li onClick={() => {setMenu("kids")}}> <Link to='/kids'>Kids</Link> {menu === "kids" ? <hr/> :<></>}</li>
          <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link><img src={cart_icon} alt="" /></Link>
            <div className='nav-cart-count'>0</div>
          </div>
        </ul>
    </div>
  )
}