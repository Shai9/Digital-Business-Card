import React from 'react'
import DpImage from '../images/RealIm.jpg'


export default function MainInfo (){
  return (
   <nav>
    <img src={DpImage} alt='profile photo'  />
      <h2>Dean Smith</h2>
        A FullStack Software Developer
       <p> Based in London </p>
      <button className='btn'><strong>LinkedIn</strong></button> <button className='btn'> <strong>Resume</strong></button> 
   </nav>

  )
}