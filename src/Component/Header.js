import React from 'react';
import './header.css'
import { NavLink } from 'react-router-dom';
import Icon from"../header.png"
import Camera from"../camera.png"
 function Header() {
  return (
    <>
     <div className='header'>
       <span><img className='icon' src={Icon}/></span> 
      <NavLink to="/upload"><span><img className='camera' src={Camera}/></span> </NavLink>
    </div>
    </>
  
  );
}
export default Header