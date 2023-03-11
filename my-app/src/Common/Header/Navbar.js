import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiCategory,BiChevronDown } from "react-icons/bi";
import { AiOutlineDown } from "react-icons/ai";
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='flex'>
        <BiCategory className='icon'/>
        <h2>Categories</h2>
        <BiChevronDown className='icon'/>
      </div>
      <div className='navOption'>
        <NavLink className="link" to="/">Home</NavLink>
        <NavLink className="link" to="/pages">Pages</NavLink>
        <NavLink className="link" to="/useraccount">User Account</NavLink>
        <NavLink className="link" to="/vendoraccount">Vendor Account</NavLink>
        <NavLink className="link" to="/trackmyorder">Track My Order</NavLink>
        <NavLink className="link" to="/contact">Contact</NavLink>
      </div>
    </div>
  )
}

export default Navbar
