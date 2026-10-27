import React from 'react'
import '../App.css'

function Navbar() {
  return (
    <div className='cont'>
      <div className='left'>
        <span>Zoho</span>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnoqnPLip1dUa2VXV-q6IrsD_GHqQMxOX09lZMuUAfTA&s=10" alt="" />
      </div>

      <div className="right">
        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Address</li>
      </div>
    </div>
  )
}

export default Navbar
