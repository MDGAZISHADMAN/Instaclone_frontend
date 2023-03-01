import React from 'react';
import './form.css'
import axios from "axios"
import { NavLink } from 'react-router-dom';
function Form({setUpdateUI}) {
 
  const handleChange = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", e.target.files[0]);
    console.log(formData);
    axios
      .post("http://localhost:5000/api/save", formData)
      .then((res) => {
        console.log(res.data);
        setUpdateUI(res.data._id);
      })
      .catch((err) => console.log(err));
  };

  
  return (
   <>
   <div className='container'>
   <form action='#' method='post'>

   <input type="file"
       id="avatar" name="avatar"
       accept="image/png, image/jpeg" onChange={(e)=> handleChange(e)}/>
       <br></br>
    <input  className='author' type="text" id='author' name='author' placeholder='Author' />
    <input className='location'  type="text" id='location' name='location' placeholder='Location'/>
    <br></br>
    <input className='description'  type="text" id='description' name='description' placeholder='Description'/>
    <br></br><br></br>
   <NavLink to="/Post"><button id='post'>Post</button></NavLink> 
    </form>


 
   </div>
   
   </>
  );
  }
export default Form