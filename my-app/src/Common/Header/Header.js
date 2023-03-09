import React from 'react'
import Head from './Head';
import Navbar from './Navbar';
import Search from './Search';
import "./HeaderStyle.scss"
const Header = () => {
  return (
    <div>
      <Head/>
      <Search/>
      <Navbar/>
    </div>
  )
}

export default Header;
