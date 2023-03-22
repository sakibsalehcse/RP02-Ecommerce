import React from 'react'
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { GiBeachBag } from "react-icons/gi";
import { useSelector } from 'react-redux';

const Search = () => {
const CartItem=useSelector((state)=>state.cartItem.counter);
console.log(CartItem);

  return (
    <div className='search'>
      <h1 style={{ fontStyle: "italic", fontWeight: "bold" }}>বণিক</h1>
      <div className='flex'>
        <div className='searchBar'>
          <BsSearch />
          <input type="text" placeholder='Search and hit enter ...' />
        </div>
        <div>
          <span>All Category</span>
        </div>
      </div>
      <div className='user'>
        <span className='icon'><FaUserAlt /></span>
        <span className='icon'> <GiBeachBag /></span>
        <label className='label' style={{color:"white"}}>{CartItem}</label>
      </div>
    </div>
  )
}

export default Search;
