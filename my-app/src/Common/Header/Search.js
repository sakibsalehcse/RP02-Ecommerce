import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { FaUserAlt } from 'react-icons/fa';
import { GiBeachBag } from 'react-icons/gi';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartView from '../../feature/CartView';

const Search = () => {
  const cartItem = useSelector((state) => state.cartItem.counter);

  // const [showCart, setShowCart] = useState(false);
  // const toggleCart = () => {
  //   setShowCart(!showCart);
  // };

  return (
    <div className="search">
      <h1 style={{ fontStyle: 'italic', fontWeight: 'bold' }}>বণিক</h1>
      <div className="flex">
        <div className="searchBar">
          <BsSearch />
          <input type="text" placeholder="Search and hit enter ..." />
        </div>
        <div>
          <span>All Category</span>
        </div>
      </div>
      <div className="user">
        <span className="icon">
          <FaUserAlt />
        </span>
        <NavLink to="/cartview">
        <span className="icon" >    {/* or   <span className="icon" onClick={toggleCart}> */}
     
          <GiBeachBag />
          <label className="label" style={{ color: 'white' }}>
          {cartItem}
        </label>
        </span></NavLink>
      </div>
      {/* {showCart && <CartView />} */}
    </div>
  );
};

export default Search;
