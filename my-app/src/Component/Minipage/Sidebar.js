import React from 'react';
import CategoriIcons from "../../Data/CategoriesIcon.json";
import { NavLink } from 'react-router-dom';
import "./MiniPageStyle.scss";
import styled from "styled-components";
// import ig from "../../Assets/CategoryIcon/cat1.png";
const Sidebar = () => {

  return (
    <SideStyle>
    <div>
      <div className='minipage'>
        {CategoriIcons && CategoriIcons.map(CategoriIcon => {
          return (
            <div className='style' key={CategoriIcon.id}>
              {/* <img src={CategoriIcon.icon} /> */}
              <p>
                {CategoriIcon.caption}
              </p>
            </div>
          )
        })}
      </div>
    </div >
    </SideStyle>
  )
}

export default Sidebar;

const SideStyle=styled.section`


.main{
  width:20%;
  background:red;
}


`;
