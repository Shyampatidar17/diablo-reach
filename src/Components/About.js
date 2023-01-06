import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'


const About = () => {
//   const[show,setShow] = useState(false)
  return (
    <>
    <Header/>

     <div className="dia-img">
      <div className="svg"></div>
    </div>
    

    <div className="header-con">
        <p className="ser-font">ABOUT</p>
        <h2 className="col-white">Who We Are</h2>
        <p>
          We breathe strategy, we sweat data, we drive results, and  most importantly, we like to have fun.
        </p>
      </div>

    
   
      
     <div className="growth">
      <div className="growth-flex">
        <p>
        Reach MBN is a growth partner. We’re a nimble, hungry, results-driven performance agency. We execute with purpose and focus on measurable, actionable results. We are not just a performance agency; we are a team of experienced, business-minded individuals that are dedicated to one goal; your success.</p>
      </div>
     </div>



     <div className="work-smarter">
        <div className="work-row">
            <div className="work-col">
                <div className="work-space">
                    <p>Our passionate team works smarter, takes a creative approach to solving problems, and raises the standard of excellence for what a performance marketing partner can do for your business.</p>
                    <p>As a team, we nurture an environment of trust built on respect, authentic communication, and an insatiable desire to serve our people and clients. The culture at Reach MBN is what binds our organization together.</p>
                </div>
                <div>
                    <h1>Our Mission</h1>
                    <p>With integrity and determination, our mission is to pioneer and push the boundaries of performance marketing to help our clients thrive by using our expertise, consultative approach, and proprietary technology so that consumers can connect with reputable brands.</p>
                </div>
            </div>
            <div className="work-col">
                <div data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-easing="linear">
                    <img src="img/image-68.png" alt="" />
                </div>
            </div>
        </div>
     </div>


     <div className="we-value">
        <div className="we-row">
            <div className="we-col-1">
                <h1>What we value</h1>
                <p>We thrive on creating a fun and exciting workplace while keeping at the forefront of hard work and dedication in creating amazing data-driven solutions for our clients as well as opportunities for our team members to grow professionally.</p>
                <p>It all starts with our people, they get it. At the core, we are accountable, kind, authentic, cool, vulnerable, transparent, and selfless.</p>
            </div>
            <div className="we-col-2">

                    <div className="icon-flex">
                        <div className="icon-we">
                            <span> <i className="ri-chat-3-line"></i> </span>
                        </div>
                       <div>
                        <h1> Be Positive</h1>
                        <p>Elevate open dialogue through listening, humility, respect, trust, and truth.</p>
                       </div>
                    </div>

                    <div className="icon-flex">
                       <div className="icon-we">
                        <span><i className="ri-chrome-fill"></i></span>
                       </div>
                        <div>
                            <h1>Be Community-Minded</h1>
                        <p>We listen, learn, support, and elevate each other to work collectively toward solutions.</p>
                        </div>
                    </div>

                    <div className="icon-flex">
                        <div className="icon-we">
                            <span><i className="ri-star-line "></i></span>
                        </div>
                        <div>
                            <h1>Have Fun</h1>
                        <p>Stay curious, enjoy yourself, and build something you are proud of.</p>
                        </div>
                    </div>

                    <div className="icon-flex">
                        <div className="icon-we">
                            <span><i className="ri-checkbox-circle-line "></i></span>
                        </div>
                        <div>
                            <h1>Take Responsibility</h1>
                        <p>Take ownership of problems, not just your own.</p>
                        </div>
                    </div>

                    <div className="icon-flex">
                        <div className="icon-we">
                            <span><i className="ri-heart-3-line"></i></span>
                        </div>
                        <div>
                            <h1>Be Respectful</h1>
                        <p>Honor the experience of your fellow team members.</p>
                        </div>
                    </div>

                    <div className="icon-flex">
                        <div className="icon-we">
                            <span> <i className="ri-lightbulb-flash-line"></i></span>
                        </div>
                       <div>
                        <h1>Be Creative</h1>
                        <p>Bring fresh perspectives and creativity to inspire and activate your next best idea.</p>
                       </div>
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
          <img src="img/image-68.png" alt="" />
        </div>
      <div>
        <div className="reach-img-col-1">
            <div data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="300"
        data-aos-offset="200">
              <img src="img/office-5k.jpg" alt="" />
            </div>
            <div data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        data-aos-offset="200">
              <img src="img/animation-img.png" alt="" />
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



     <div className="award">
        <div className="award-row">
            <div className="award-col-1">
                <div>
                    <h1>Awards & Partnerships</h1>
                <p> Reach MBN is a two-time winner of Inc. Best Companies to Work For, three-time winner of Colorado Companies to Watch, four-time winner of the Inc 5000, and a six-time winner of Colorado Top 250 Private Companies.</p>
                </div>
            </div>
            <div className="award-col-2"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="800">
                <img src="img/Inc_5000-logo.svg" alt="" />
                <img className="award-img-2" src="img/colorado-biz-mag.svg" alt="" />
            </div>
        
        </div>
     </div>


    <div className="history">
        <div className="history-row">
            <div className="history-col-1"
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="linear">
                <img src="img/benmike.jpg" alt="" />
            </div>
            <div className="history-col-2">
                <h1>Our History</h1>
                <p>Reach MBN has been a pioneer is the consumer fintech industry for over a decade, leading the way in the financial services industry. Our cutting edge technology, marketing and analytical data, has helped us deliver superior results to our partners. We specialize in lead generation, data monetization, and affiliate marketing, while using a wide variety of advanced technology tools to stay ahead of the curve. We hold high standards, and only work with trusted partners to bring high quality results to our clients.</p>
                <p>Reach MBN strives to build our business through our people. Our group of talented developers, marketers, and analysts are what drives our performance forward and beyond. We take pride in knowing each day, as our team enters the world of Reach MBN, that each idea can grow into a successful venture.</p>
            </div>
        </div>

        <div className="history-row-2">
            <div className="history-col-2">
                <p> Reach MBN developed our own proprietary technology that tracks, analyzes, and optimizes campaigns offering our clients results they won’t get anywhere else. With the help of our experienced team, we have become a leader in delivering data-driven performance marketing strategies through our specialized technology and above and beyond service mentality.</p>
                <p>As we continue to grow each year, we remain focused on working together to deliver service that’s personal and tailored to our clients. It’s what we do, but more importantly, it’s what we believe in.</p>
            </div>
            <div className="history-col-3">
                <h5><em>A PERSONAL NOTE FROM OUR CEO, BEN SMITH :</em></h5>
                <p><em>“We have a team of leaders who I am proud of. We have a vision that starts at the top and is shared by every single team member. We listen to our clients both internally and externally, hear what is important to them, and create opportunities to help them succeed.”</em></p>
            </div>
        </div>
    </div>

    <div className="team-meet">
        <div className="team-text"
        >
           <div data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000" className='meet-team-width'>
            <h1>Meet the Team</h1>
            <p>Meet the people behind your current and future marketing domination.</p>
           <a href="/">MEET THE TEAM</a>
           </div>
        </div>
    </div>


    <div className="join-diablo">
        <div className="join-text">
            <h1>Join The Reach MBN Family!</h1>
            <p>Dust off that resume and send us some information about who you are, what you’re great at, and how you may fit in with our team. We’re excited to meet you!</p>
            <Link to="/joinus">CURRENT OPEN POSITIONS </Link>
        </div>
    </div>

   
   <Footer/>
    
    </>
  )
}

export default About