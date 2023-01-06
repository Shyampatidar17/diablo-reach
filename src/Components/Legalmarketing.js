import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Capabilities from './Capabilities'

const Legalmarketing = () => {
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
     data-aos-duration="3000">
        <p className="ser-font">SERVICES</p>
        <h2 className="col-white">Legal Marketing
      </h2>
        <p>Experience real growth with Facebook marketing.</p>
      </div>

   
    


      <div className="growth">
        <div className="growth-flex">
          <p>
            Founded in 2013, Law Scout, a wholly-owned subsidiary of Reach MBN, has effectively expanded to meet our legal clients’ needs. Our Facebook marketing expertise will provide the necessary insights to increase conversions and drive ROI.
          </p>
        </div>
      </div>

      <div className="area-exp">
        <p>AREAS OF EXPERTISE:</p>
        <div className="area-exp-row">
            <div className="area-exp-col area-exp-col-1">
                <i className="ri-checkbox-multiple-line"></i>
                <h2>Mass Tort</h2>
            </div>
            <div className="area-exp-col area-exp-col-1">
                <i className="ri-checkbox-multiple-line"></i>
                <h2>Personal Injury</h2>
            </div>
            <div className="area-exp-col">
                <i className="ri-checkbox-multiple-line"></i>
                <h2>Social Security Disability</h2>
            </div>
            <div className="area-exp-col">
                <i className="ri-checkbox-multiple-line"></i>
                <h2>Workers’ Compensation</h2>
            </div>
            <div className="area-exp-col">
                <i className="ri-checkbox-multiple-line"></i>
                <h2>Motor Vehicle Accidents</h2>
            </div>
        </div>
      </div>


      <div className="facebook">
        <div className="facebook-row">
            <div className="facebook-col" 
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-offset="100"
            data-aos-easing="linear">
                <img src="img/Legal-Facebook.svg" alt="" />
              </div>
          <div className="facebook-col">
            <h1>Our legal industry practice uses Facebook to increase your law firm’s number of qualified clients.</h1>
            <p>
                With well over a billion monthly active users, Facebook is the largest and most powerful social media advertising platform in the world. At Law Scout, we put the right ads in front of the right people on Facebook at the right time, creating greater results for your company.
            </p>
            <p>
                Our legal campaigns typically result in over a 300% ROI, and every year we connect hundreds of thousands of leads to law firms across the country. We have increased lead volume and distribution by more than 230% across multiple verticals.
            </p>
            <p>
                Our qualified Facebook marketing program is designed to advertise around each of our verticals, leading to higher conversion rates.
            </p>
          </div>
        </div>
      </div>
  


      <div className="relevent">
        <h1>
            What can you expect from Law Scout?
        </h1>
        <div className="relevent-row">
          <div className="relevent-col">
            <div className="relevent-flex">
              <i className="ri-checkbox-circle-fill"></i>
              <h2>Manage Ad Spending</h2>
            </div>
            <div className="relevent-flex">
              <i className="ri-checkbox-circle-fill"></i>
              <h2>Dynamic Content Creation</h2>
            </div>
          </div>
  
          <div className="relevent-col">
            <div className="relevent-flex">
              <i className="ri-checkbox-circle-fill"></i>
              <h2>Custom Landing Pages</h2>
            </div>
            <div className="relevent-flex">
              <i className="ri-checkbox-circle-fill"></i>
              <h2>Custom Audience Creation</h2>
            </div>
          </div>
  
          <div className="relevent-col">
            <div className="relevent-flex">
              <i className="ri-checkbox-circle-fill"></i>
              <h2>Tracking & Optimization</h2>
            </div>
            <div className="relevent-flex">
              <i className="ri-checkbox-circle-fill"></i>
              <h2>Pixel Implementation</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonial"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1000">
        <div className="testimonial-row">
          <div className="testimonial-col">
            <div className="test-img">
              <img src="img/testimonial-quote-sm.png" alt="" />
            </div>
          </div>
          <div className="testimonial-col">
            <div className="test-content">
              <em>Nick and his team are experts in the legal marketing space. Their no non-sense approach to marketing yields cost effective results, while maintaining the highest levels of customer service.</em>
              <p>Jason C.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="digital">
        <div className="digital-row law-scout-row">
          <div className="digital-col">
            <h1>A partnership with Law Scout is built on trust and will deliver the type of results you need to thrive..</h1>
            <p>
                With our services, you have the ability to easily measure your return on investment and see exactly why these campaigns are so successful. Law Scout customizes each campaign to your specific needs based on your practice area, geography, statute of limitations, hours of operation, and more.
            </p>
            <p>
               We believe in developing real relationships with our clients, delivering tailor-made solutions that address their field and legal specialty. We’re your resource to always stay ahead of the game. Our team of experts love what they do and take pride in helping people get the legal help they need. 
            </p>
           <div className="btn-law"> <a  href="/">VISIT LAW SCOUT</a></div>
          </div>
          <div className="digital-col law-scout-col"
          data-aos="fade-left"
          data-aos-duration="1500"
          data-aos-offset="100"
          data-aos-easing="linear">
            <img src="img/legal-col.svg" alt="" />
          </div>
        </div>
      </div>

  
      <Capabilities/>
      <Footer/>

    </>
  )
}

export default Legalmarketing