import React from 'react'
import Header from '../Common/Header/Header';
import MiniPage from './Minipage/MiniPage';
import ProductView from '../feature/ProductView';
import styled from 'styled-components';
const Home = () => {
  
  return (
    <HomeStyle>
    <div className='main'>
      
      <MiniPage/>
      <ProductView/>

    </div>
    </HomeStyle>
  )
}

export default Home;

const HomeStyle=styled.section`

.main{display:flex;
padding:1rem;
justify-content:center;
align-item:center;
text-align:center;
gap:3rem;
}

`;
