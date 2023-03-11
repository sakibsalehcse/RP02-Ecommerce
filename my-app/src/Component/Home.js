import React from 'react'
import Header from '../Common/Header/Header';
import MiniPage from './Minipage/MiniPage';
import { useGlobalProductContext } from '../Context/ProductContext';
const Home = () => {
  const {GlobalProductName}= useGlobalProductContext();
  return (
    <div>
      {GlobalProductName}
      <MiniPage/>
    </div>
  )
}

export default Home
