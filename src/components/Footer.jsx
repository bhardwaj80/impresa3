import React from "react";
import { IMAGES } from "../constants/theme";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
    
      <footer className="site-footer style-1" id="footer">
        
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <motion.div
                className="col-md-12 aos-item"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
                initial={{ opacity: 0, y: "100%" }}
                whileInView={{ opacity: 1, y: "0%" }}
                transition={{ duration: 0.8 }}
              >
                <div className="ft-calltoaction">
                  <h2 className="title">
                    Let's Make Your Dream House Together
                  </h2>
                  <Link
                    to="/contact-us"
                    className="btn btn-primary btn-rounded"
                  >
                    Contact Us
                  </Link>
                </div>
              </motion.div>
              
              <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6 aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                <motion.div className="widget widget_services"
                                    initial={{ opacity: 0, y: "70%" }}
                                    whileInView={{ opacity: 1, y: "0%" }}
                                    transition={{ duration: 1 }}
                                >
                                    <h4 className="footer-title">Our Links</h4>
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li><Link to="/about-us">About Us</Link></li>
                                        <li><Link to="/services">Services</Link></li>
                                        <li><Link to="/portfolio">Portfolio</Link></li>
                                        <li><Link to="/blog-grid">Blogs</Link></li>
                                        <li><Link to="/contact-us">Contact Us</Link></li>
                                    </ul>
                                </motion.div>
                            </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-12 aos-item"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="600"
              >
                <motion.div
                  className="widget widget_about"
                  initial={{ opacity: 0, y: "70%" }}
                  whileInView={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 1, delay: 0.4 }}
                >
                  <div className="footer-logo">
                    <Link to="/">
                      <img src={IMAGES.white2} alt="Footer Logo" />
                    </Link>
                  </div>
                  <p>
                  We offer a wide range of high-quality and durable products to suit your specific needs and preferences.
                  </p>
                  <div className="widget_getintuch">
                    <ul>
                      <li>
                        <i className="las la-map-marker-alt"></i>
                        <span>
                          {" "}
                          Impresa Buildtech , SCO 1031, First and Second
                          Floor,Near Arista Hotel,Airport Road,Mohali
                        </span>
                      </li>
                      <li>
                        <i className="las la-phone-volume"></i>
                        <span>  <a  style={{color:"#ffffff"}} href="tel: +919988227050">  +919988227050</a>  |  <a  style={{color:"#ffffff"}} href="tel: +919015170299"> +919015170299</a>  </span>
                      </li>
                    </ul>
                  </div>
                  <ul className="social-list style-1 mt-3">
                    <li>
                      <Link to="https://www.facebook.com/impresawindows">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="https://www.instagram.com/impresabuildtech/">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="">
                        <i className="fab fa-whatsapp"></i>
                      </Link>
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                <motion.div className="widget widget_services"
                                    initial={{ opacity: 0, y: "70%" }}
                                    whileInView={{ opacity: 1, y: "0%" }}
                                    transition={{ duration: 1 }}
                                >
                                    <h4 className="footer-title">Our Service</h4>
                                    <ul>
                                        <li><Link>Floor Plan Design</Link></li>
                                        <li><Link>Furniture Work</Link></li>
                                        <li><Link>Construction Work</Link></li>
                                        <li><Link>Architecture</Link></li>
                                        <li><Link>Interior Designing</Link></li>
                                        <li><Link>Planning Solution</Link></li>
                                        <li><Link>24x7 Support</Link></li>
                                    </ul>
                                </motion.div>
                            </div> */}
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-sm-12 aos-item"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <motion.div
                  className="widget recent-posts-entry"
                  initial={{ opacity: 0, y: "70%" }}
                  whileInView={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 1 }}
                >
                  <h4 className="footer-title">Recent Posts</h4>
                  <div className="widget-post-bx">
                    <div className="widget-post clearfix">
                      <div className="dz-media">
                        <Link to="/blog-details">
                          <img src={IMAGES.footer1} alt="" />
                        </Link>
                      </div>
                      <div className="dz-info">
                        <h4 className="title">
                          <Link to="/blog-details" className="text-white">
                          Enhancing Home Security with UPVC Windows
                          </Link>
                        </h4>
                        <div className="dz-meta">
                          <ul>
                            <li className="post-date"> 25 March, 2023 </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="widget-post clearfix">
                      <div className="dz-media">
                        <Link to="/blog-details">
                          <img src={IMAGES.footer2} alt="" />
                        </Link>
                      </div>
                      <div className="dz-info">
                        <h4 className="title">
                          <Link to="/blog-details1" className="text-white" >
                          How to Hire Construction company in Mohali?
                          </Link>
                        </h4>
                        <div className="dz-meta">
                          <ul>
                            <li className="post-date"> 7 March, 2023 </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>


                  
                </motion.div>

          

              </div>

              <div 
                className="col-xl-3 col-lg-4 col-md-6 col-sm-12 aos-item"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >

<motion.div  
                  className="widget recent-posts-entry map-iframe"
                  initial={{ opacity: 0, y: "70%" }}
                  whileInView={{ opacity: 1, y: "0%" }}
                  transition={{ duration: 1 }}   >

                    <div >
            <iframe   src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d27436.905865008!2d76.66751899368808!3d30.729271723466628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d30.722706199999998!2d76.6990166!4m5!1s0x390fef5e5d8bf55f%3A0x2e09ffc1f4e2ff22!2simpresa%20buildtech!3m2!1d30.742540599999998!2d76.67454239999999!5e0!3m2!1sen!2sin!4v1691423899400!5m2!1sen!2sin" className="align-self-stretch radius-sm" style={{ border: 0, width: '100%', height:"380px",borderRadius:"20px" }} allowFullScreen></iframe>
                      
                    </div>
            </motion.div>
                </div>

           
            </div>
            
          </div>

        
        </div>
        <div className="footer-bottom">
          <div className="container">
            {/* <div className="row align-items">
                            <div className="col-md-6 text-start ">
                               
                            </div>
                            <div className="col-md-4 text-end ">
                                
                            </div>
                            <div className="col-md-6 text-center text-md-center">

                            </div>
                        </div> */}
            <div class="row">
              <div class="col-sm">
                <span className="copyright-text">
                  Copyright © 2023{" "}
                  <Link
                    to="https://impresabuildtech.com/"
                    className="text-primary"
                    target="_blank"
                  >
                    ImpresaBuildTech
                  </Link>{" "}
                  All rights reserved.
                </span>{" "}
              </div>
              <div class="col-sm">
             
                <li>
                <span className="copyright-text">
                        Designed And Developed By 
                  </span>
                  &nbsp;&nbsp;

                  <Link to="https://www.thinkadigital.com">
                    Think A Digital
                  </Link>
                </li>
              </div>
              <div class="col-sm">
                <ul className="footer-link d-inline-block">
                  <li>
                    <Link to={"#"}>Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Team & Condition</Link>
                  </li>
                </ul>{" "}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
