import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <div className="footer" >
      <div className="footer-row"  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000"
     data-aos-offset="450">
        <div className="footer-col">
          <h1>Ready To Talk? Get In Touch!</h1>
          <p>
            Let's create amazing results together. Our team of experts is standing by. Whatever it is, let’s talk!
          </p>
          <Link to='/contactus'>CONTACT US</Link>
        </div>
      </div>
    </div>
    
    <div className="policy" id='footer-policy'>
      <div className="policy-row">
  
      <div className="policy-col">
        <p>© 2021 Reach MBN. All rights reserved.</p>
       </div>
       <div className="policy-col">
        <p>Privacy Policy  •  Anti-Spam</p>
     </div>
      </div>
    </div>
   
    </>
  )
}

export default Footer