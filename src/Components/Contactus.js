import React from 'react'
// import { Link } from 'react-router-dom'
import Header from './Header'

const Contactus = () => {
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
      <p className="ser-font">CONTACT</p>
      <h2 className="col-white">Get In Touch</h2>
      <p>
        It’s a big data digital world out there, we can help you find  your
        place in it.
      </p>
    </div>
   



    <div className="growth">
      <div className="growth-flex">
        <p>
          Want to learn more about our services? Interested in joining our team?
          Ready to start working together to achieve your goals? Call or fill
          out the form below—we’re excited to hear from you!
        </p>
      </div>
    </div>

    <div className="contact">
      <div className="contact-row">
        <div className="contact-col-1">
          <div>
            <h4>MAILING ADDRESS</h4>
            <br />
            <p>
            Haiderpur, Delhi
             <br />
             www.reachmbn.com<br />customercare@reachmbn.com
            </p>
            <br />
            <h4>CONNECT</h4>
            <br />
            <p>Phone & Fax </p>
            <p>customercare@reachmbn.com</p>
            <br />

            <h4>SOCIAL</h4>
            <br />
            <i className="ri-linkedin-box-fill"></i>
            <i className="ri-facebook-box-fill"></i>
            <i className="ri-instagram-fill"></i>
            <i className="ri-twitter-fill"></i>
            <br />
            <br />
          </div>
        </div>

        <div className='contact-col-wi-2'>
        <div className="contact-col-2">
          <form>
            <div className="input-row">
              <div className="input-col">
                <div><label for="">COMPANY NAME</label></div>
                <input type="text" />
              </div>
              <div className="input-col">
               <div> <label for="">YOUR NAME</label></div>
                <input type="text" />
              </div>
            </div>

            <div className="input-row">
              <div className="input-col">
                <div><label for="">YOUR EMAIL</label></div>
                <input type="text" />
              </div>
              <div className="input-col">
                <div><label for="">YOUR PHONE</label></div>
                <input type="text" />
              </div>
            </div>

            <div className="input-col">
             <div> <label for="">WHAT CAN WE HELP YOU WITH?</label></div>
              <textarea rows="10"></textarea>
            </div>
            <div className="btn-send">
              <button>SEND MESSAGE</button>
            </div>
          </form>
         
        </div>
        </div>
      </div>
    </div>

    <div className="policy">
      <div className="policy-row">
        <div className="policy-col">
          <p>© 2021 Reach MBN. All rights reserved.</p>
        </div>
        <div className="policy-col">
          <p>Privacy Policy • Anti-Spam</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contactus