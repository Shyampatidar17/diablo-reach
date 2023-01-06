import React from 'react'
// import { Link } from 'react-router-dom'
import Header from './Header'

const Joinus = () => {
    // const[show,setShow] = useState(false)

  return (
    <>
    <Header/>


    <div className="dia-img">
      <div className="svg"></div>
    </div>


        <div className="header-con m-top"
        data-aos="fade-up"
        data-aos-offset="200"
        data-aos-easing="linear"
         data-aos-duration="3000">
          <p className="ser-font">CAREERS</p>
          <h2 className="col-white">join Reach MBN </h2>
        </div>
    


      <div className="cur-opn">
        <div>
          <a href="/">CURRENT OPENINGS</a>
        </div>
      </div>
      
      <div className="fun-to-work">
        <div className="fun-row">
          <div className="fun-col-1">
            <h1> We Are Fun to Work With, and Then Some</h1>
            <p>At Reach MBN, our people are an important part of what drives our continued success as a data-driven marketing technology leader. We bring together the best and the brightest minds, and foster an entrepreneurial spirit that encourages innovation and collaboration.</p>
            <p>We offer competitive salaries and great benefits. However, our intrinsic motivation comes from passion, talent, and drive. From doing what we love, with people we respect, to learning and growing together.
            </p>
          </div>
          <div className="fun-col-2"
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-easing="linear">
            <img src="img/team-social.jpg" alt="" />
          </div>
        </div>
      </div>



      <div className="work-remote"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      data-aos-easing="linear">
        <div className="remote-row">
          <div className="remote-col remote-col-1">
            <div>
              <i className="ri-chrome-fill"></i>
              <h1>Work From Anywhere</h1>
              <p>Work remote from anywhere in the country! Our current team exists and works together seamlessly from multiple timezones.</p>
            </div>
            <div>
              <i className="ri-lightbulb-flash-line"></i>
              <h1>Professional Development</h1>
              <p>Take a className, attend a conference, or learn new skills on us. No matter where you are in your career, there’s always room to learn.
              </p>
            </div>
            <div>
              <i className="ri-heart-3-line"></i>
              <h1>
                Medical, Dental, & Life Insurance</h1>
              <p>We offer competitive health, dental, and life insurance for you and your family.</p>
            </div>
          </div>
          <div className="remote-col remote-col-2">
            <div>
              <i className="ri-timer-flash-fill"></i>
              <h1>Flexible Work Schedule</h1>
              <p>We recognize the need for employees to take time away from the office to creatively recharge. We’ve adopted a generous PTO policy, in which each employee is afforded the flexibility to take a vacation, take time off for illness, enjoy time with their family, and shift schedules as necessary.
              </p>
            </div>
            <div>
              <i className="ri-hotel-line"></i>
              <h1>Conferences</h1>
              <p>We go to conferences and trade-shows around the country and are super pumped about showing you off to our clients and potential clients. Enjoy paid travel, sweet hotel rooms, non-boring networking events, and attending learning sessions and workshops that you’re interested in.</p>
            </div>
          </div>
          <div className="remote-col remote-col-3">
            <div>
              <i className="ri-save-3-line"></i>
              <h1>401k Matching</h1>
              <p>Full match up to 4% of income on a pre-tax or Roth 401(k) option.</p>
            </div>
            <div>
              <i className="ri-home-4-line"></i>
              <h1>Paid Parental Leave</h1>
              <p>Our maternity/paternity leave plan also has you covered when you welcome a new child into your family.</p>
            </div>
            <div>
              <i className="ri-chat-3-line"></i>
              <h1>Team Outings</h1>
              <p>We offer team outings, happy hours, and events because we believe that excellent work stems from strong relationships inside and outside of the office.</p>
            </div>
          </div>
        </div>
      </div>


      <div className="reach-img">
      <div className="reach-img-row">
        <div className="reach-img-col"
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        data-aos-offset="200">
            <img src="img/diablo-RiNo-5k-2021.jpg" alt="" />
          </div>
        <div className="reach-img-col"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="300"
          data-aos-offset="200">
          <img src="img/image-71.png" alt="" />
        </div>
      <div>
        <div className="reach-img-col-1">
            
            <div data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="300"
        data-aos-offset="200">
              <img src="img/animation-img.png" alt="" />
            </div>
            <div data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        data-aos-offset="200">
              <img src="img/office-5k.jpg" alt="" />
            </div>
            
          </div>
          <div className="reach-img-col-2"
           data-aos="fade-up"
           data-aos-easing="linear"
           data-aos-duration="500"
           data-aos-offset="150">
            <img src="img/award.jpeg" alt="" />
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
              <em
                >Reach MBN is a staple in the affiliate industry. But what makes the company stand alone is its insatiable desire to invest in its own employees through coaching, development, technology, and internal mobility. I have experienced this first-hand through my years at Reach MBN.</em
              >
              <p>– Andrew</p>
            </div>
          </div>
        </div>
      </div>
     
  
      {/* <div className="current-opn">
        <div className="current-text">
          <h3>WORK WITH US</h3>
        <h1>Current Openings</h1>
        </div>
        <div className="current-row">
          <div className="current-col">
            <h1>Entry-Level Marketing Assistant</h1>
            <a href="/">READ MORE</a>
          </div>
          <div className="current-col">
            <h1>Senior Advertising Executive</h1>
            <a href="/">READ MORE</a>
          </div>
          <div className="current-col">
            <h1>Senior Affiliate Manager</h1>
            <a href="/">READ MORE</a>
          </div>
          <div className="current-col">
            <h1>Front-End Developer</h1>
            <a href="/">READ MORE</a>
          </div>
        </div>
      </div> */}

    <div className="policy" >
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

export default Joinus