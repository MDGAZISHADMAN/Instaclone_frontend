import React from 'react';
import './post.css'
import Header from './Header';
 import X from"../10x.png"
import comment from"../share.png"
import like from"../like1.png"
 function Post({photos}) {
  return (
    <>
    <Header/>
    {photos.map(({ photo, _id }) =>{return (
  
     <div  className='post'>
      <section className='head'>
        <span className='name'><b>Shiv</b></span>
        <span className='place'>Bengaluru</span>
        <span className='dot'><b>...</b></span>
      </section>
      <section>
        <img className='image' src={ `http://localhost:5000/uploads/${photo}`}/>
      </section>
      <section>
        <span className='like'>   <img className='share' src={like}/></span>
        <span className='comment'>   <img className='share' src={comment}/></span>
        <span className='date'>10 jan 2021</span>
        <p className='count'>64 likes</p>
        <b className='text'>Kick start your career with a bang</b>
        </section>
      </div>
          )})}
      </>
   
  )
    }
export default Post