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




const Landingpage = () => {
    return (
        <>

<Helmet>

<title> Premium UPVC Windows in Mohali for Stylish and Energy-Efficient Living </title>


<meta name="description" content=" Enhance your living space with durable, energy-efficient, and custom-designed UPVC windows from Impresa Buildtech. Explore our range for a home that reflects your taste and embraces modern living. Contact us for a consultation today."/>
<meta name="Keyword" content=" upvc windows in Mohali"/>



</Helmet>
        <div className="page-content bg-white">
            <CommanBanner mainTitle="Welcome to Impresa Buildtech– Your Trusted Source for UPVC Windows in Mohali"  bgImage={IMAGES.bannerbg3} showPlush = {true} />
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
                                    <h2 className="dz-title">Welcome to Impresa Buildtech– Your Trusted Source for UPVC Windows in Mohali</h2>
                                    <div className="dz-post-text">
                                        <p>
                                        Enhance the beauty, comfort, and energy efficiency of your home with our premium UPVC windows in Mohali. At Impresa Buildtech. we take pride in offering top-quality UPVC windows that not only elevate the aesthetics of your space but also provide unmatched durability and functionality.</p>
                                        {/* <blockquote className="block-quote style-1">
                                            <p>“ Mauris justo augue, laoreet quis faucibus et, ultrices eu ante. Duis magna eratut dui eu maximus metus bibendum suscipit ”</p>
                                            <cite>Visva</cite>
                                        </blockquote> */}
                                        {/* <div className="alignleft w-50">
                                            <img alt="" src={IMAGES.blogGridPic2} className="w-100" />
                                        </div> */}
                                        <h2>	Why Choose UPVC Windows?</h2>
                                        {/* <p> UPVC windows are excellent at insulating your home. They have good thermal properties, which help to keep your home warm in the winter and cool in the summer. This can lead to energy savings and lower heating and cooling costs.</p> */}
                                        <h4>	Durability and Longevity:</h4>
                                        <p>UPVC (Unplasticized Polyvinyl Chloride) is a durable material that withstands harsh weather conditions, ensuring your windows remain robust and long-lasting.</p>
                                        <h4>		Energy Efficiency:</h4>
                                        <p>Our UPVC windows are designed to provide excellent insulation, keeping your home cool in summers and warm in winters. This energy-efficient feature can help you reduce your energy bills.</p>
                                        <h4>			 Low Maintenance:</h4>
                                        <p>Say goodbye to frequent maintenance hassles. UPVC windows are resistant to rot, corrosion, and fading, making them incredibly low-maintenance compared to traditional window materials.</p>
                                        <h4>			Noise Reduction:</h4>
                                        <p>Enjoy a peaceful and quiet living environment with our UPVC windows, which effectively reduce outside noise, creating a serene atmosphere within your home.</p>
                                        <h4>				Security:</h4>
                                        <p>Your safety is our priority. Our UPVC windows come with advanced locking systems, providing enhanced security for your home and family.</p>
                                        <h2>	Explore Our Range of UPVC Windows:</h2>
                                        <h4>				Casement Windows:</h4>
                                        <p>Ideal for maximizing natural light and ventilation, our casement windows add a touch of elegance to your home.</p>
                                        <h4>				Sliding Windows:</h4>
                                        <p>Sleek and space-saving, our sliding windows are perfect for modern homes, offering smooth functionality and contemporary aesthetics.</p>
                                        <h4>				Tilt and Turn Windows:</h4>
                                        <p>Versatile and easy to clean, our tilt and turn windows provide multiple opening options, allowing you to control ventilation and maintenance with ease.</p>
                                        <h4>					Fixed Windows:</h4>
                                        <p>Create stunning panoramic views with our fixed windows, showcasing the beauty of Mohali's surroundings.</p>
                                        <h2>Why Choose Impresa Build Tech</h2>
                                        <h4>				 Customization:</h4>
                                        <p>We understand that every home is unique. That's why we offer a wide range of customization options, allowing you to choose the perfect style, color, and design for your UPVC windows.</p>

                                        <h4>				Professional Installation:</h4>
                                        <p>Our team of skilled professionals ensures that your UPVC windows are installed with precision and care, guaranteeing optimal performance.</p>

                                        <h4>				Customer Satisfaction:</h4>
                                        <p>Customer satisfaction is our priority. We are committed to providing excellent service from consultation to installation and beyond.</p>
                                        <p>Elevate your home with the finest UPVC windows in Mohali. Impresa Build Tech today for a consultation and transform your living space into a haven of beauty, comfort, and efficiency.</p>

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
export default Landingpage;