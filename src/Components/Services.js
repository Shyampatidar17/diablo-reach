import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Services = () => {
    // const[show,setShow] = useState(false)
  return (
    <>
    <Header/>

    <div className="ser-img">
      <div className="ser-svg"></div>
    </div>

   
   
    <div className="header-con" data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-offset="200"
     data-aos-duration="3000">
      <p className="ser-font ser-mtop">SERVICES</p>
      <h2 className="col-white" id='content-right'>
        Offering Performance Marketing Services Built to Deliver
      </h2>
      <p >
        Grow your client base with data-driven and targeted performance
        strategies.
      </p>
    </div>




    <div className="offers">
      <div className="offers-h">
        <h1>
          Reach MBN offers a unique mix of services
          proven to increase leads, sales, and revenue.
        </h1>
      </div>
    </div>

    <div className="offer-contetn">
      <div className="offer-row">
        <div className="offer-col">
          <p>
          Reach MBN is a data-driven performance marketing company that has
            helped businesses grow for over a decade. Whether you need to
            acquire new customers, generate leads, or drive other customer
            actions—we have the tools and the expertise to get the job done. We
            are fully rooted in our single-minded mission to convert consumer
            intent into revenue for our clients.
          </p>
        </div>
        <div className="offer-col">
          <p>
            We are a leading one-stop destination for performance-driven brand
            and marketplace solutions to connect your audience with you. We have
            built our own custom technology platform that allows us to provide
            our clients with greater stability and zero restrictions, due to our
            total control over our proprietary technologies.
          </p>
        </div>
      </div>
    </div>

    <div className="cap">
      <div>
        <p>CAPABILITIES</p>
        <h1>
          Delivering effective, data and technology-driven marketing services.
          Period.
        </h1>
      </div>
    </div>

    <div className="data-manage">
      <div className="data-row">
        <div className="data-col">
          <div data-aos="fade-right"
           data-aos-offset="100"
            data-aos-easing="linear"
           data-aos-duration="800">
            <img src="img/Data-Management.svg" alt="" />
          </div>
          <div className="data-pad">
            <h1>Data Management</h1>
            <p>
            Reach MBN takes a unique approach to data through our owned and
              operated properties and partners data feeds to help shape and
              grow our clients businesses. We take data and turn it into a
              highly targeted asset.
            </p>
            <Link to="/dataManagment">LEARN MORE</Link>
          </div>
        </div>

        <div className="data-col data-col-reverse">
          <div>
            <h1>Affiliate Services</h1>
            <p className='affilate-right'> Home grown exclusive offers Industry leading performance Competitive weekly payouts Dedicated Account Support White Label and iframe technology Real Time Stats
            </p>
            <div className="line-br">
              <Link to="/affiliateservice">FOR ADVERTISERS</Link>
              <Link to="/">FOR PUBLISHERS</Link>
            </div>
          </div>
          <div data-aos="fade-left"
           data-aos-offset="100"
            data-aos-easing="linear"
           data-aos-duration="800">
            <img src="img/affiliate-services.svg" alt="img note found" />
          </div>
        </div>

        <div className="data-col m-top">
          <div data-aos="fade-right"
           data-aos-offset="100"
            data-aos-easing="linear"
           data-aos-duration="800">
            <img src="img/Service-Legal-Services.svg" alt="" />
          </div>
          <div className="data-pad">
            <h1>Legal Marketing</h1>
            <p>
              Law Scout is a subsidiary of  Reach MBN specializing in legal
              Facebook lead generation. Our expertise covers Social Security
              Disability, Personal Injury, Workers Compensation, Motor Vehicle
              Accidents, and Mass Tort.
            </p>
            <Link to="/legalmarketing">LEARN MORE</Link>
          </div>
        </div>

        <div className="data-col data-col-reverse">
          <div>
            <h1>Lead Generation</h1>
            <p>
            Owned and Operated Brands Industry Leading Conversions Price Reject, CPF, Static buying Dedicated Account Support In House Data Analytics Homegrown Technology
            </p>
            <Link to="/leadgeneration">LEARN MORE</Link>
          </div>
          <div data-aos="fade-left"
           data-aos-offset="100"
            data-aos-easing="linear"
           data-aos-duration="800">
            <img src="img/Service-Lead-Generation.svg" alt="img note found" />
          </div>
        </div>

        <div className="data-col">
          <div data-aos="fade-right"
           data-aos-offset="100"
            data-aos-easing="linear"
           data-aos-duration="800">
            <img src="img/Service-Media-Buying.svg" alt="img note found" />
          </div>
          <div className="data-pad">
            <h1>Media Buying</h1>
            <p>
              We select the right combination of media and strategy to get your
              message in front of your target audience, driving real action to
              make the most of your budget.
            </p>
            <Link  to="/mediabuying">LEARN MORE</Link>
          </div>
        </div>
      </div>
    </div>


    <div className="testimonial" 
    data-aos="fade-up"
    data-aos-offset="200"
     data-aos-easing="linear"
     data-aos-duration="1000">
      <div className="testimonial-row">
        <div className="testimonial-col">
          <div className="test-img">
            <img src="img/testimonial-quote-sm.png" alt="img note found" />
          </div>
        </div>
        <div className="testimonial-col">
          <div className="test-content">
            
            <em>It has been a pleasure to work with      Reach MBN over the past 16
              months. During that time we have been able to scale our
              performance marketing efforts and have discovered the power of
              performance based Email. Their KPI s are so great that we measure
              and hold our new Email vendors to  Reach MBN KPI averages.</em>
        
            <p>Christine D.</p>
          </div>
        </div>
      </div>
    </div>

  <Footer/>

    </>
  )
}

export default Services
