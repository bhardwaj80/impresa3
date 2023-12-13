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




const Landingpage2 = () => {
    return (
        <>

<Helmet>

<title> Premium Aluminium Windows and Doors in Mohali  </title>


<meta name="description" content="Elevate your living or working space with top-quality aluminium windows and doors in Mohali. Explore sleek designs, durability, and energy efficiency. Contact Impresa Build Tech for expert installation and customization options."/>
<meta name="Keyword" content=" upvc windows in Mohali"/>



</Helmet>
        <div className="page-content bg-white">
            <CommanBanner mainTitle="Welcome to Mohali's Premier Destination for Premium Aluminium Windows and Doors"  bgImage={IMAGES.bannerbg3} showPlush = {true} />
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
                                    <h2 className="dz-title">Welcome to Mohali's Premier Destination for Premium Aluminium Windows and Doors</h2>
                                    <div className="dz-post-text">
                                        <p>
                                        Upgrade your living spaces with the elegance and durability of aluminium windows and doors. At Impresa Build Tech, we take pride in being the leading provider of top-quality aluminium window and door solutions in Mohali. Our commitment to excellence, innovative designs, and superior craftsmanship make us the preferred choice for homeowners and businesses alike.</p>
                                        {/* <blockquote className="block-quote style-1">
                                            <p>“ Mauris justo augue, laoreet quis faucibus et, ultrices eu ante. Duis magna eratut dui eu maximus metus bibendum suscipit ”</p>
                                            <cite>Visva</cite>
                                        </blockquote> */}
                                        {/* <div className="alignleft w-50">
                                            <img alt="" src={IMAGES.blogGridPic2} className="w-100" />
                                        </div> */}
                                        <h2>	Why Choose Aluminium Windows and Doors from Impresa Build Tech?</h2>
                                        {/* <p> UPVC windows are excellent at insulating your home. They have good thermal properties, which help to keep your home warm in the winter and cool in the summer. This can lead to energy savings and lower heating and cooling costs.</p> */}
                                        <h4>	Unmatched Durability:</h4>
                                        <p>Our aluminium windows and doors are built to last. With corrosion-resistant properties, they withstand the test of time, ensuring longevity and minimal maintenance.</p>
                                        <h4>		Energy Efficiency:</h4>
                                        <p> Enjoy a comfortable and energy-efficient living environment with our high-performance aluminium windows and doors. Designed to meet modern energy standards, they contribute to lower energy bills and reduced environmental impact.</p>
                                        <h4>			Sleek and Modern Design:</h4>
                                        <p>Elevate the aesthetic appeal of your property with our sleek and modern designs. Our aluminium windows and doors seamlessly blend functionality with contemporary style, enhancing the overall look of your home or business.</p>
                                        <h4>			Customization Options:</h4>
                                        <p>Tailor our products to your unique preferences. Choose from a variety of styles, finishes, and configurations to complement your architectural vision. Our team is dedicated to bringing your design ideas to life.</p>
                                        <h4>				Noise Reduction:</h4>
                                        <p>Experience tranquility within your space. Our aluminium windows and doors provide excellent noise reduction, creating a peaceful and quiet atmosphere for you to enjoy.</p>
                                        
                                        <h4>				Security Features:</h4>
                                        <p>Your safety is our priority. Our windows and doors are equipped with advanced security features, offering you peace of mind and safeguarding your property against intruders</p>
                                       
                                        <h4>				Expert Installation:</h4>
                                        <p>Trust our team of skilled professionals to handle the installation with precision and care. We ensure a seamless fit, optimal functionality, and a hassle-free experience for our customers.</p>
                                       
                                        
                                        <h2>	Explore Our Range:</h2>
                                        <h4>			Aluminium Windows: </h4>
                                        <p>Choose from a variety of window styles, including casement, sliding, awning, and more, each crafted for durability and aesthetics.</p>
                                        <h4>				Aluminium Doors:</h4>
                                        <p> Discover an array of door options, including sliding, folding, French doors, designed to enhance the entrance and functionality of your space.</p>
                                        {/* <h4>				Tilt and Turn Windows:</h4>
                                        <p>Versatile and easy to clean, our tilt and turn windows provide multiple opening options, allowing you to control ventilation and maintenance with ease.</p>
                                        <h4>					Fixed Windows:</h4>
                                        <p>Create stunning panoramic views with our fixed windows, showcasing the beauty of Mohali's surroundings.</p> */}
                                        <h2>Contact Us Today:</h2>
                                        {/* <h4>				 Customization:</h4> */}
                                        <p>Ready to transform your space with premium aluminium windows and doors? Contact Impresa Build Tech today for a consultation. Our knowledgeable team is ready to assist you in choosing the perfect solution for your needs. Elevate your living or working environment with the timeless appeal of aluminium craftsmanship.</p>

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
export default Landingpage2;