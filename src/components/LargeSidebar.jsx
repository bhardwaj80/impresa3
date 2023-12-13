import React from 'react'
import { IMAGES } from '../constants/theme'
import { Link } from 'react-router-dom'
import emailjs from 'emailjs-com';
import { useState, useEffect } from 'react';



const LargeSidebar = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });


  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // if (!recaptchaValue) {
    //   alert('Please complete the reCAPTCHA');
    //   return;
    // }
  
    const formElement = document.getElementById("contactForm"); // Select the form element
  
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

  return (
   <>
          <div className="col-xl-4 col-lg-4 m-b30 dz-order-1">
              <aside className="side-bar sticky-top left">






            
          <div style={{width:"600px",marginTop:"200px",marginBottom:"50px"}} className="container self-container" >
            <div className="contact-area aos-item">
              <div className="section-head style-1 text-center">
                <h6 className="sub-title text-primary">Contact Us</h6>
                <h2 className="title">Get In Touch With Us</h2>
              </div>
              <form id="contactForm" >

<div style={{display:"flex",flexDirection:"row" ,gap:"10px"}}>
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






                  {/* <div className="widget widget_categories">
                      <div className="widget-title">
                          <h4 className="title">Categories</h4>
                          <div className="dz-separator style-1 text-primary mb-0"></div>
                      </div>
                      <ul>
                          <li className="cat-item"><Link>Residence</Link></li>
                          <li className="cat-item"><Link>Beauty</Link></li>
                          <li className="cat-item"><Link>Fashion</Link></li>
                          <li className="cat-item"><Link>Images</Link></li>
                          <li className="cat-item"><Link>Lifestyle</Link></li>
                      </ul>
                  </div> */}
                  {/* <div className="widget recent-posts-entry">
                      <div className="widget-title">
                          <h4 className="title">Recent Posts</h4>
                          <div className="dz-separator style-1 text-primary mb-0"></div>
                      </div>
                      <div className="widget-post-bx">
                          <div className="widget-post clearfix">
                              <div className="dz-media">
                                  <Link to="/blog-details"><img src={IMAGES.pic1} alt="" /></Link>
                              </div>
                              <div className="dz-info">
                                  <h4 className="title"><Link to="/blog-details">Fusce mollis felis quis tristique</Link></h4>
                                  <div className="dz-meta">
                                      <ul>
                                          <li className="post-date">1 June, 2023 </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="widget-post clearfix">
                              <div className="dz-media">
                                  <Link to="/blog-details"><img src={IMAGES.pic2} alt="" /></Link>
                              </div>
                              <div className="dz-info">
                                  <h4 className="title"><Link to="/blog-details">We Completed Our New Hotel Project</Link></h4>
                                  <div className="dz-meta">
                                      <ul>
                                          <li className="post-date"> 21 may, 2023 </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="widget-post clearfix">
                              <div className="dz-media">
                                  <Link to="/blog-details"><img src={IMAGES.pic3} alt="" /></Link>
                              </div>
                              <div className="dz-info">
                                  <h4 className="title"><Link to="/blog-details">We Are Building Global Company Offices</Link></h4>
                                  <div className="dz-meta">
                                      <ul>
                                          <li className="post-date"> 17 april, 2023 </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                          <div className="widget-post clearfix">
                              <div className="dz-media">
                                  <Link to="/blog-details"><img src={IMAGES.pic1} alt="" /></Link>
                              </div>
                              <div className="dz-info">
                                  <h4 className="title"><Link to="/blog-details">About Our Board of Directors</Link></h4>
                                  <div className="dz-meta">
                                      <ul>
                                          <li className="post-date"> 7 March, 2023 </li>
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div> */}
                  {/* <div className="widget widget widget_categories">
                      <div className="widget-title">
                          <h4 className="title">Archives</h4>
                          <div className="dz-separator style-1 text-primary mb-0"></div>
                      </div>
                      <ul>
                          <li><Link>January</Link>(3)</li>
                          <li><Link>Fabruary</Link>(4)</li>
                          <li><Link>March</Link>(4)</li>
                          <li><Link>April</Link>(3)</li>
                          <li><Link>May</Link>(4)</li>
                          <li><Link>Jun</Link>(1)</li>
                          <li><Link>July</Link>(4)</li>
                      </ul>
                  </div> */}
                  {/* <div className="widget widget_tag_cloud">
                      <div className="widget-title">
                          <h4 className="title">Search</h4>
                          <div className="dz-separator style-1 text-primary mb-0"></div>
                      </div>
                      <div className="search-bx">
                          <form role="search" method="post">
                              <div className="input-group">
                                  <input name="text" className="form-control" placeholder="Enter your keywords..." type="text" />
                                  <span className="input-group-btn">
                                      <button type="submit" className="btn btn-primary sharp radius-no"><i className="la la-search scale3"></i></button>
                                  </span>
                              </div>
                          </form>
                      </div>
                  </div> */}
              </aside>
          </div>
   </>
  )
}

export default LargeSidebar