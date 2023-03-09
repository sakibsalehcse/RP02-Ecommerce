import React from 'react'
import { ImPhone } from "react-icons/im";
import { MdEmail } from "react-icons/md";

const Head = () => {
  return (
    <div>
      <div className='head'>
        <div className='flex'>
          <div className='flex-item'>
            <ImPhone />
            <a style={{ color: "white", textDecoration: "none" }} href="tel:01745675677576">+01745675677576</a>
          </div>
          <div className='flex-item'>
            <MdEmail />
            <label>support@bdbd.com</label>
          </div>
        </div>
        <div className='flex'>
          <label>Theme FAQ's</label>
          <label>Need Help</label>
          <span>🏳️‍⚧️</span>
          <label>EN</label>
          <span>🏳️‍⚧️</span>
          <label>USD</label>
        </div>
      </div>
    </div>
  )
}

export default Head
