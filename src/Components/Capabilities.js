import React from 'react'
import { NavLink } from 'react-router-dom'

const Capabilities = () => {
  return (
    <>
    
      <div className="touch-today">
      <div className="btn-touch">
        <a href="/">GET IN TOUCH TODAY</a>
      </div>
      <div className="touch-content" 
      data-aos="zoom-in"
      data-aos-duration="1000"
           data-aos-easing="linear">
        <h2>Learn What Other Services Reach MBN Has to Offer</h2>
      </div>
      </div>

    <div className="touch-today"
    data-aos="zoom-in"
    data-aos-duration="1000"
         data-aos-easing="linear">
      <div className="touch-row">
        <div className="touch-col">
          <NavLink  to="/dataManagment"> <img src="img/Data-Management.svg" alt="" /></NavLink>
          <NavLink  to="/dataManagment"><h3>Data Management</h3></NavLink>
        </div>
        <div className="touch-col">
          <NavLink  to="/affiliateservice"> <img src="img/affiliate-services.svg" alt="" /></NavLink>
          <NavLink  to="/affiliateservice"><h3>Affiliate Services</h3> </NavLink>
        </div>
        <div className="touch-col">
          <NavLink  to="/legalmarketing"> <img src="img/Service-Legal-Services.svg" alt="" /> </NavLink>
          <NavLink  to="/legalmarketing"><h3>Legal Marketing</h3> </NavLink>
        </div>
        <div className="touch-col">
          <NavLink  to="/leadgeneration"> <img src="img/Service-Lead-Generation.svg" alt="" /></NavLink>
          <NavLink  to="/leadgeneration"><h3>Lead Generation</h3> </NavLink>
        </div>
        <div className="touch-col">
          <NavLink  to="/mediabuying"> <img src="img/Service-Media-Buying.svg" alt="" /></NavLink>
          <NavLink  to="/mediabuying"><h3>Media Buying</h3> </NavLink>
        </div>
      </div>
    </div>

    </>
  )
}

export default Capabilities