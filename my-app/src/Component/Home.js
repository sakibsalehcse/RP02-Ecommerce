import React from 'react'
import Header from '../Common/Header/Header';
import MiniPage from './Minipage/MiniPage';
import ProductView from '../feature/ProductView';
import styled from 'styled-components';
const Home = () => {

  return (
    <HomeStyle>
      <div className='main'>
        <div className='fit'> <MiniPage /></div>
        <div> <ProductView /></div>
      </div>
    </HomeStyle>
  )
}

export default Home;

const HomeStyle = styled.section`
  .main {
    display: grid;
    grid-template-columns: 1fr 6fr;
    padding: 0.5rem;
    justify-content: center;
    align-item: center;
    text-align: center;
    gap: 3rem;
    margin: 0rem;
  }

`;
