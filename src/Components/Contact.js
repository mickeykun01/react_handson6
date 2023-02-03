import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div className='main-container'>
      <ul className='navbar'>
        <li id='none'><Link to= "/">Home</Link></li>
        <li id='none'><Link to= "/contact-us">Contact</Link></li>
        <li id='none'><Link to= "/student-details">Student</Link></li>
      </ul>
        
     
      <h1>contact page</h1>
    </div>
  )
}

export default Contact
