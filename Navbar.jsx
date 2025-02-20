import React, {useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../assets/product'
import { Link } from 'react-router-dom';
import { StoreContext } from './Context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("home");

    const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to="/"><h2>Tomato.</h2></Link>
      <ul>
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"? "active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"? "active":""}>Menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"? "active":""}>Mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"? "active":""}>Contact-us</a>
      </ul>
      <div className='nav-right'>
        <img src={assets.search_icon} alt="" className='w-[30px]'/>
        <div className='nav-search-icon'>
           <Link to="/cart"><img src={assets.cart} alt="" className='w-[30px]'/></Link>
           <div className={getTotalCartAmount()===0?"":'dot'}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
