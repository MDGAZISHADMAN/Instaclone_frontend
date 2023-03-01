import React from 'react';
import './landing.css'
import { NavLink } from 'react-router-dom';
import Insta from"../ista.gif"
import Wel from"../wel.jpg"
export default function Landing() {
  return (
    <div className='landcontainer'>
     
     <img className='insta' src={Insta}></img>
    <div className='enter'>
      <div><img className='welcome' src={Wel}></img></div> 
    <NavLink to="/Post"><button className='btn'>Enter</button> </NavLink> 
      
    </div>
      
    </div>
  );
}
