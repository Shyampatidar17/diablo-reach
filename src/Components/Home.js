import React from 'react'
import {Link, NavLink } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Home = () => {

    // const[show,setShow] = useState(false)

  return (
    <>
    <Header/>
    
     <div className="dia-img">
        <div className="svg"></div>
     </div>   


    <div className="header-con"  
    data-aos="fade-up"
    data-aos-offset="200"
    data-aos-easing="linear"
     data-aos-duration="2000">
      <h1>Making Connections</h1>
      <h2 className="col-white">Delivering Results</h2>
      <p>
        We are <em>Reach MBN,</em> a no-lomt data & technology-driven performance marketing agency.
      </p>
    </div>

    <div className="bottom-logo">
      <div className="bottom-row">
        <div className="img-2">
         <img src="img/award-1.png" alt=""  />
        </div>
        <div className="img-1">
          <img src="img/Awards-2.svg" alt="" />
        </div>
        <div className="img-1">
         <img src="img/award-3.svg" alt="" />
        </div>
     </div>
   </div>

    

    <div className="row">
      <div className="create-value">
        <div className="create-col">
          <h1>Here to create value</h1>
          <p>
            To run an effective performance marketing campaign you need to
            deliver the right message across the right channels. Whether you
            need to acquire new customers, generate leads, or drive other
            customer actions—we have the tools, the people, and the expertise to
            get the job done.
          </p>
        </div>
        <div className="create-col" data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-offset="300"
        data-aos-easing="linear">
          <img src="img/legal-col.svg" alt="" />
        </div>
      </div>
    </div>


    <section className="capabilities" data-aos="fade-up"
    data-aos-offset="200"
     data-aos-duration="1000"
     data-aos-anchor-placement="top-bottom"
     data-aos-easing="linear">
      <p>CAPABILITIES</p>
      <h1 className='capbility-h1'>
        Delivering effective, data and technology-driven marketing services.
        Period.
      </h1>

      <div className="capabilities-row">
        <div className="capabilities-col">
          <NavLink to='/dataManagment'><img src="img/Data-Management.svg" alt="" /></NavLink>
         <NavLink to='/dataManagment'><h3>Data Management</h3></NavLink>
        </div>
        
        <div className="capabilities-col">
        <NavLink to='/affiliateservice'><img src="img/affiliate-services.svg" alt="" /></NavLink>
          <NavLink to='/affiliateservice'><h3>Affiliate Services</h3></NavLink>
        </div>

       
        <div className="capabilities-col">
        <NavLink to='/legalmarketing'><img src="img/Service-Legal-Services.svg" alt="" /></NavLink>
        <NavLink to='/legalmarketing'><h3>Legal Marketing</h3></NavLink>
          
        </div>

        <div className="capabilities-col">
        <NavLink to='/leadgeneration'> <img src="img/Service-Lead-Generation.svg" alt="" /></NavLink>
          <NavLink to='/leadgeneration'><h3>Lead Generation</h3></NavLink>
        </div>

        <div className="capabilities-col">
        <NavLink to='/mediabuying'><img src="img/Service-Media-Buying.svg" alt="" /></NavLink>
          <NavLink to='/mediabuying'><h3>Media Buying</h3></NavLink>
          
        </div>
      </div>
      <Link to='/services'><button  className="cap-btn">SEE THE REACH MBN DIFFERENCE</button> </Link>
    </section>


    <div className="about">
    <div className="about-row">
      <div className="about-col">
        <h1>
          We are more than typical, we
          genuinely care
        </h1>
        <p>
          Learn more about our values and history, get to know the people
          behind Reach MBN, and discover how you can join our team!
        </p>
        <a href='/'>MORE ABOUT US</a>
      </div>
      <div className="about-col" data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-easing="linear"
        data-aos-offset="300">
        <img src="img/animation-img.png" alt="" />
      </div>
    </div>
  </div>
 
<Footer/>

    </>
  )
}

export default Home