import React from 'react'
import CommanBanner from '../elements/CommanBanner'
import { IMAGES } from '../constants/theme'
import ReCAPTCHA from 'react-google-recaptcha'
import { NavLink } from 'react-router-dom'
import emailjs from 'emailjs-com';
import { Helmet } from 'react-helmet';

// import { useState } from 'react'

import { useState, useEffect } from 'react';
// import ReCAPTCHA from 'react-google-recaptcha';
import { calcLength } from 'framer-motion'


const cards = [
  { id: '01', icon: "flaticon-telephone", title: "Call Now", detail: <a href="tel:++919988227050">+919988227050</a>, detail2: <a href="tel:++919988227050">+919988227050</a> },
  { id: '02', icon: "flaticon-email", title: "Email Now", detail: "   info@impresabuildtech.com" },
  { id: '03', icon: "flaticon-placeholder", title: "Location", detail: <NavLink to={'https://www.google.com/maps?ll=30.729273,76.688068&z=13&t=m&hl=en&gl=IN&mapclient=embed&saddr=NBR+GRAPHICS+AND+MACHINES,+Sidcul+Haridwar,+Suman+Nagar+Road,+Uttarakhand+249402&daddr=IMPRESA+BUILDTECH,+SCO+1031,+near+Arista+Hotel,+Sector+125,+Greater,+New,+Sunny+Enclave,+Kharar,+Punjab+140301&dirflg=d'}>Impresa Buildtech , SCO 1031, First and Second Floor,Near Arista Hotel,Airport Road,Mohali</NavLink> },
]






const ContectUs = () => {



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });


  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); 
  
    const formElement = document.getElementById("contactForm"); 
  
    if (formElement) {
      emailjs
        .sendForm("service_t7xnl5d", "template_i09fmoi", formElement, "lboL1276ykzr5OI3U")
        .then(
          (result) => {
            alert("Message sent successfully!");
            setFormData({
              name: "",
              email: "",
              mobile: "",
              message: "",
            });
          },
          (error) => {
            console.error("Error sending message:", error);
            alert("Error sending message. Please try again later.");
          }
        );
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   mobile: '',
  //   message: '',  
  // });


  // const handleSubmit = (e) => {
  
  
  //   e.preventDefault();
  
  //   emailjs
  //     .sendForm('service_2wm2l6x', 'template_cx1vjlz', e.target, '0zZ-WRTuzyCtBamuU')
  //     .then(
  //       (result) => {
  //         alert('Message sent successfully!');
  //         setFormData({
  //           name: '',
  //           email: '',
  //           mobile: '',
  //           message: '',
  //         });
  //       },
  //       (error) => {
  //         console.error('Error sending message:', error);
  //         alert('Error sending message. Please try again later.');
  //       }
  //     );
  // };
  
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };





  // function onChange(value) {
  //   console.log("Captcha value:", value);
  // }



  // useEffect(() => {
  //   // Dynamically load the reCAPTCHA script when the component mounts
  //   const script = document.createElement('script');
  //   script.src = 'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit';
  //   script.async = true;
  //   script.defer = true;
  //   document.body.appendChild(script);

  //   // Cleanup: Remove the script when the component unmounts to avoid potential issues
  //   return () => {
  //     document.body.removeChild(script);
  //   }
  // }, []);




  return (
    <>
<Helmet>

<title> Contact us Today - +919988227050 </title>


<meta name="description" content="Our expert team call you and guide you how we can proceed our work. Call Today - +919988227050"/>
{/* <meta name="Keyword" content=" upvc windows in Mohali"/> */}



</Helmet>



      <div className="page-content bg-white">
        <CommanBanner mainTitle="Contact Us" parentTitle="Home" pageName="Contact Us" bgImage={IMAGES.video} />
        <section className="content-inner">
          <div className="container">
            <div className="row">

              {
                cards.map((i) => (
                  <div key={i.id} className="col-lg-4 col-md-12 m-b30 aos-item">
                    <div className="icon-bx-wraper style-8 bg-white" data-name={i.id}>
                      <div className="icon-md m-r20">
                        <span className="icon-cell text-primary"><i className={i.icon}></i></span>
                      </div>
                      <div className="icon-content">
                        <h4 className="tilte m-b10">{i.title}</h4>
                        <p className="m-b0">{i.detail}<br />{i.detail2}</p>
                      </div>
                    </div>
                  </div>
                ))
              }



            </div>
          </div>
        </section>
        <section className="content-inner-1 pt-0">
          <div className="map-iframe">
            <iframe  src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d27436.905865008!2d76.66751899368808!3d30.729271723466628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d30.722706199999998!2d76.6990166!4m5!1s0x390fef5e5d8bf55f%3A0x2e09ffc1f4e2ff22!2simpresa%20buildtech!3m2!1d30.742540599999998!2d76.67454239999999!5e0!3m2!1sen!2sin!4v1691423899400!5m2!1sen!2sin" className="align-self-stretch radius-sm" style={{ border: 0, width: '100%', minHeight: '100%' }} allowFullScreen></iframe>
          </div>


          <div className="container">
            <div className="contact-area aos-item">
              <div className="section-head style-1 text-center">
                <h6 className="sub-title text-primary">Contact Us</h6>
                <h2 className="title">Get In Touch With Us</h2>
              </div>


              <div className="dz-form dzForm contact-bx" >
                <div className="dzFormMsg"></div>
                <div className="dz-form dzForm contact-bx"  >
                <div className="dzFormMsg"></div>
                <div className="row sp10">


                <form id="contactForm" >

          <div style={{display:"flex",flexDirection:"row"}}>
          <div className="col-sm-6 m-b20">
                    <div className="input-group">
                      <input type="text" className="form-control" required name="name" placeholder=" Name"       id="name"        value={formData.name}
          onChange={(e)=>{
            handleChange(e)
          }} />
                    </div>
                  </div>
                
                  <div className="col-sm-6 m-b20">
                    <div className="input-group">
                      <input type="text" className="form-control" required name="email" placeholder="Email"         id="email"       value={formData.email}
          onChange={handleChange} />
                    </div>
                  </div>
          </div>
                  <div className="col-sm-12 m-b20">
                    <div className="input-group">
                      <input type="mobile" className="form-control" required name="mobile" placeholder="Phone No."    id="mobile"       value={formData.mobile}
          onChange={handleChange} />
                    </div>
                  </div>
                  {/* <div className="col-sm-12 m-b20">
                    <div className="input-group">
                      <input type="text" className="form-control" required name="dzOther" placeholder="Subject" />
                    </div>
                  </div> */}
                  <div className="col-sm-12 m-b20">
                    <div className="input-group">
                      <textarea name="message" rows="5" className="form-control" placeholder="Message"      id="message"           value={formData.message}
          onChange={handleChange} ></textarea>
                    </div>
                  </div>



                  {/* <div   className="g-recaptcha" data-sitekey="6LcPpe8oAAAAADidMa2Dgz6kQWgTNvpuJwk327dQ"></div> */}

                
                  <div className="col-sm-12 text-center">
                    <button onClick={(e)=>{
                      handleSubmit(e)
                    }} className="btn btn-primary btn-rounded">SUBMIT <i className="m-l10 fas fa-caret-right"></i></button>
                  </div>




                  {/* <div className="col-sm-12 m-b20">
  <div className="input-group">
  <ReCAPTCHA
  sitekey="6LcPpe8oAAAAADidMa2Dgz6kQWgTNvpuJwk327dQ"
  onChange={(value) => {
    setRecaptchaValue(value);
  }}
/>
  </div>
</div> */}




                  </form>


                </div>
              </div>
              </div>





              

            </div>
          </div>



        </section>
      </div>
    </>
  )
}

export default ContectUs