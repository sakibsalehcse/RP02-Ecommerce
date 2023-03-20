import React from 'react'
import Head from './Head';
import Navbar from './Navbar';
import Search from './Search';
import "./HeaderStyle.scss"

import styled from 'styled-components';
const Header = () => {
  return (
    <HeaderStyle>
    <div className=''>
      <Head/>
      <Search/>
      <Navbar/>
    </div>
    </HeaderStyle>
  )
}

export default Header;

const HeaderStyle=styled.section`

.main{
position:fixed;

}
`;
