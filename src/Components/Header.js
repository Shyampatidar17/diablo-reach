import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    const[show,setShow] =useState(false)

    // console.log("from state", show)
    
  return (
    <>
   {/* <div className="dia-img">
        <div className="svg"></div>
     </div>    */}

      <div className="dia-header">
         <div className="logo">
            <img src="img/logo.png" alt="logo not found" />
         </div> 
      </div>

    <div className='navbar'>
       <i className="menu-icon ri-menu-3-line" onClick={()=>setShow(true)}></i>
       </div>

      {
        show ? (<div className="navbar">
          
        <div className="menu-bar" >
          <div onClick={()=>setShow(false)}>
          <div className="dia-header">
         <div className="logo">
            <img src="img/logo.png" alt="logo not found" />
         </div> 
      </div>
            <h4>NAVIGATE</h4>
            <br />
            <br />
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/joinus">Join Us</Link></li>
            <li><Link to="/contactus">Contact</Link></li>
          </div>
        </div>
        <div className="connect-bar">
          <div>
            <h4>CONNECT</h4>
            <br />
            <br />
            <p>
              Haiderpur, Delhi<br />
              <br />www.reachmbn.com
              <br />customercare@reachmbn.com
            </p>
            <br/>
            <p>+91-8929370027</p>
            <br/>
            <p>+91-9903451376</p>
            <br/>

            <div className="contact-icon">
              <i className="ri-linkedin-box-fill"></i>
              <i className="ri-facebook-box-fill"></i>
              <i className="ri-instagram-fill"></i>
              <i className="ri-twitter-fill"></i>
            </div>
            <br/>
            <button>PUBLISHERS</button>
          </div>
        </div>
        <div className='navbar'> <i className="close-icon ri-close-line" onClick={()=>setShow(false)}  ></i>
       </div>
      </div>) : '' 
      }

    </>
  )
}

export default Header 