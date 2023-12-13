import React from 'react';
import CommanBanner from '../elements/CommanBanner';
import { IMAGES } from '../constants/theme';
import Working from '../components/Working';
import Projects from '../components/Projects';
// import Testimonial1 from '../components/Testimonial1';
// import Testimonial2 from '../components/Testimonial2';
import Faq from '../components/Faq';
import {motion} from 'framer-motion'
// import { Link } from 'react-router-dom'
import LargeSidebar from '../components/LargeSidebar'

import { Helmet } from 'react-helmet';




const Landingpage3 = () => {
    return (
        <>

<Helmet>

<title> Premium Aluminium Windows and Doors  </title>


<meta name="description" content="Explore premium aluminium windows and doors at Impresa Build Tech. Elevate your space with contemporary designs, durability, and energy efficiency. "/>
<meta name="Keyword" content=" Premium Aluminium Windows and Doors"/>



</Helmet>
        <div className="page-content bg-white">
            <CommanBanner mainTitle="Elevate Your Space with Premium Aluminium Windows and Doors"  bgImage={IMAGES.bannerbg3} showPlush = {true} />
            <div className="content-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8">
                            <div className="dz-card blog-single style-1">
                                {/* <div className="dz-media">
                                    <img src={IMAGES.blogGridPic2} alt="" />
                                </div> */}
                                <div className="dz-info">
                                    {/* <div className="dz-meta">
                                        <ul>
                                            <li>April 26, 2021</li>
                                            <li className="post-user">By <Link>John Doe</Link></li>
                                        </ul>
                                    </div> */}
                                    <h2 className="dz-title">Elevate Your Space with Premium Aluminium Windows and Doors</h2>
                                    <div className="dz-post-text">
                                        <p>
                                        Welcome to Impresa Build Tech where innovation meets elegance. We take pride in presenting a sophisticated range of aluminium windows and doors that redefine style, durability, and energy efficiency. Whether you're enhancing your home or upgrading your commercial space, our premium aluminium solutions are crafted to exceed your expectations.</p>
                                        {/* <blockquote className="block-quote style-1">
                                            <p>“ Mauris justo augue, laoreet quis faucibus et, ultrices eu ante. Duis magna eratut dui eu maximus metus bibendum suscipit ”</p>
                                            <cite>Visva</cite>
                                        </blockquote> */}
                                        {/* <div className="alignleft w-50">
                                            <img alt="" src={IMAGES.blogGridPic2} className="w-100" />
                                        </div> */}
                                        <h2>Discover Unmatched Quality</h2>
                                        {/* <p> UPVC windows are excellent at insulating your home. They have good thermal properties, which help to keep your home warm in the winter and cool in the summer. This can lead to energy savings and lower heating and cooling costs.</p> */}
                                        <h4>	Aluminium Windows:</h4>
                                        <p>Our aluminium windows are engineered with precision, combining contemporary design with robust functionality. The inherent strength of aluminium allows for sleek, slimline frames that maximize natural light and provide unobstructed views. With a focus on thermal performance, our windows are designed to keep your space comfortable while reducing energy costs.
Explore a variety of styles, from classic casement windows to modern sliding windows. Each window is crafted with attention to detail, ensuring smooth operation and long-lasting performance. The corrosion-resistant properties of aluminium mean your windows will maintain their aesthetic appeal even in challenging weather conditions.</p>
                                        <h4>		Aluminium Doors:</h4>
                                        <p> Make a grand entrance with our exquisite range of aluminium doors. Whether you desire a striking front door or a contemporary sliding patio door, we offer a diverse selection to suit your taste. The slim profiles of our aluminium doors provide a sleek and modern look without compromising on strength and security.
Experience the perfect blend of form and function with our range of aluminium bi-fold doors. These space-saving marvels effortlessly connect your indoor and outdoor living spaces, creating a seamless transition that enhances the overall appeal of your home.</p>
                                        {/* <h4>			Sleek and Modern Design:</h4>
                                        <p>Elevate the aesthetic appeal of your property with our sleek and modern designs. Our aluminium windows and doors seamlessly blend functionality with contemporary style, enhancing the overall look of your home or business.</p>
                                        <h4>			Customization Options:</h4>
                                        <p>Tailor our products to your unique preferences. Choose from a variety of styles, finishes, and configurations to complement your architectural vision. Our team is dedicated to bringing your design ideas to life.</p>
                                        <h4>				Noise Reduction:</h4>
                                        <p>Experience tranquility within your space. Our aluminium windows and doors provide excellent noise reduction, creating a peaceful and quiet atmosphere for you to enjoy.</p>
                                        
                                        <h4>				Security Features:</h4>
                                        <p>Your safety is our priority. Our windows and doors are equipped with advanced security features, offering you peace of mind and safeguarding your property against intruders</p>
                                       
                                        <h4>				Expert Installation:</h4>
                                        <p>Trust our team of skilled professionals to handle the installation with precision and care. We ensure a seamless fit, optimal functionality, and a hassle-free experience for our customers.</p>
                                       
                                         */}
                                        <h2>	Why Choose Impresa Build Tech</h2>
                                        <h4>			Quality Craftsmanship: </h4>
                                        <p>Our aluminium windows and doors are crafted using the highest quality materials, ensuring longevity and performance.</p>
                                        <h4>				Energy Efficiency:</h4>
                                        <p>Enjoy a more energy-efficient space with our thermally efficient aluminium products. Save on utility costs while reducing your carbon footprint.</p>
                                       
                                        <h4>				Customization Options:</h4>
                                        <p> Tailor your windows and doors to match your unique vision. Choose from a variety of finishes, colors, and configurations to create a look that suits your style.</p>
                                       
                                       
                                        <h4>				Expert Installation:</h4>
                                        <p> Our team of skilled professionals ensures that your aluminium windows and doors are installed with precision, guaranteeing optimal performance and security.</p>

                                        {/* <h4>				Tilt and Turn Windows:</h4>
                                        <p>Versatile and easy to clean, our tilt and turn windows provide multiple opening options, allowing you to control ventilation and maintenance with ease.</p>
                                        <h4>					Fixed Windows:</h4>
                                        <p>Create stunning panoramic views with our fixed windows, showcasing the beauty of Mohali's surroundings.</p> */}
                                        <h2>Transform Your Living Spaces</h2>
                                      
                                        <p>Investing in premium aluminium windows and doors is an investment in the comfort, aesthetics, and value of your property. Whether you're renovating your home or planning a commercial project, the right windows and doors can make a significant difference.</p>


                                        <h2>Get in Touch</h2>
                                      
                                      <p>Ready to elevate your space with our premium aluminium solutions? Contact us today for a consultation. Our team is dedicated to helping you choose the perfect windows and doors to enhance your living or working environment.</p>

                                        {/* <h4>				Professional Installation:</h4>
                                        <p>Our team of skilled professionals ensures that your UPVC windows are installed with precision and care, guaranteeing optimal performance.</p> */}

                                        {/* <h4>				Customer Satisfaction:</h4>
                                        <p>Customer satisfaction is our priority. We are committed to providing excellent service from consultation to installation and beyond.</p>
                                        <p>Elevate your home with the finest UPVC windows in Mohali. Impresa Build Tech today for a consultation and transform your living space into a haven of beauty, comfort, and efficiency.</p> */}

                                    </div>
                                  
                                </div>
                            </div>
                           

                           
                            
{/* 
                            <div className="comment-respond style-1" id="respond">
                                <div className="widget-title">
                                    <h4 className="title">Leave Your Comment</h4>
                                    <div className="dz-separator style-1 text-primary mb-0"></div>
                                </div>
                                <form className="comment-form" id="commentform" method="post">
                                    <p className="comment-form-author">
                                        <label htmlFor="author">Name <span className="required">*</span></label>
                                        <input type="text" name="Author" placeholder="Author" id="author" />
                                    </p>
                                    <p className="comment-form-email">
                                        <label htmlFor="email">Email <span className="required">*</span></label>
                                        <input type="text" placeholder="Email" name="email" id="email" />
                                    </p>
                                    <p className="comment-form-author w-100">
                                        <label htmlFor="author">Subtitale <span className="required">*</span></label>
                                        <input type="text" name="Author" placeholder="Subtitale" id="subtitale" />
                                    </p>
                                    <p className="comment-form-comment">
                                        <label htmlFor="comment">Comment</label>
                                        <textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
                                    </p>
                                    <p className="form-submit">
                                        <button type="submit" className="btn shadow-primary btn-primary btn-icon btn-rounded" id="submit">POST NOW
                                            <i className="fas fa-caret-right ms-1"></i>
                                        </button>
                                    </p>
                                </form>
                            </div> */}





                        </div>
                        <LargeSidebar />
                    </div>
                </div>
            </div>
        </div>

    </>
    )
}
export default Landingpage3;