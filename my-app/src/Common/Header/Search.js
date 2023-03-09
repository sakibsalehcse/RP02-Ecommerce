import React from 'react'
import { BsSearch } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { GiBeachBag } from "react-icons/gi";

const Search = () => {
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
        <label className='label'>10</label>
      </div>
    </div>
  )
}

export default Search;
