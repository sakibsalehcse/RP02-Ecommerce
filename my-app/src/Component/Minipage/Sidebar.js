import React from 'react';
import CategoriIcons from "../../Data/CategoriesIcon.json";
import { NavLink } from 'react-router-dom';
import "./MiniPageStyle.scss";
// import ig from "../../Assets/CategoryIcon/cat1.png";
const Sidebar = () => {

  return (
    <div>
      <div className='minipage'>
        {CategoriIcons && CategoriIcons.map(CategoriIcon => {
          return (
            <div className='style' key={CategoriIcon.id}>
              <img src={CategoriIcon.icon} />
              <p>
                {CategoriIcon.caption}
              </p>
            </div>
          )
        })}
      </div>
    </div >
  )
}

export default Sidebar;
