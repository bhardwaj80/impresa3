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




const Landingpage5 = () => {
    return (
        <>

<Helmet>

<title>  Premier Construction Company in Mohali, Chandigarh, Panchkula  </title>


<meta name="description" content="Leading construction company serving Mohali, Chandigarh, and Panchkula. Specializing in residential and commercial projects. Quality craftsmanship, on-time delivery, and customer satisfaction. "/>
<meta name="Keyword" content="construction company, Mohali, Chandigarh, Panchkula, residential construction, commercial construction, quality craftsmanship"/>



</Helmet>
        <div className="page-content bg-white">
            <CommanBanner mainTitle="Your Trusted Partner for Premier Construction Services in Mohali, Chandigarh, and Panchkula"  bgImage={IMAGES.bannerbg3} showPlush = {true} />
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
                                    <h2 className="dz-title">Your Trusted Partner for Premier Construction Services in Mohali, Chandigarh, and Panchkula</h2>
                                    <div className="dz-post-text">
                                        <p>
                                        Welcome to Impresa Build Tech, your premier choice for construction services in the vibrant regions of Mohali, Chandigarh, and Panchkula. With a commitment to excellence, we bring your vision to life through quality craftsmanship, on-time delivery, and a dedication to customer satisfaction.</p>





                                        {/* <p>
                                        Welcome to Impresabuild Tech, your premier destination for high-quality UPVC windows and doors. We take pride in offering a comprehensive range of products that combine aesthetic appeal with unmatched durability.</p> */}
                                        {/* <blockquote className="block-quote style-1">
                                            <p>“ Mauris justo augue, laoreet quis faucibus et, ultrices eu ante. Duis magna eratut dui eu maximus metus bibendum suscipit ”</p>
                                            <cite>Visva</cite>
                                        </blockquote> */}
                                        {/* <div className="alignleft w-50">
                                            <img alt="" src={IMAGES.blogGridPic2} className="w-100" />
                                        </div> */}
                                        <h2>About Us</h2>
                                       
                                        <p>At Impresa Build Tech we pride ourselves on being more than just builders; we are your partners in transforming dreams into reality. With years of experience, we have become a trusted name in the construction industry, known for our unwavering commitment to quality and client-centric approach.</p>
                                        
                                        
                                        <h2>Our Services</h2>
                                        <h4>	Residential Construction</h4>
                                       
                                       <p>Turn your dream home into a reality with our residential construction services. Whether it's a custom-designed house, a renovation, or an extension, our team of skilled professionals ensures every detail is meticulously crafted to meet your unique requirements.</p>
                                       
                                       

                                        <h4>Commercial Construction</h4>
                                        <p>For businesses looking to create a lasting impression, our commercial construction services are tailored to deliver functional and aesthetically pleasing spaces. From office complexes to retail spaces, we bring expertise to every project, ensuring it aligns with your brand and business needs.</p>
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
                                        <h2>	Why Choose Impresa Build Tech?</h2>
                                        <h4>			Quality Craftsmanship: </h4>
                                        <p>Our team consists of skilled and experienced professionals committed to delivering construction projects of the highest quality.</p>
                                        <h4>				On-Time Delivery:</h4>
                                        <p>We understand the importance of timelines. Our efficient project management ensures that your project is delivered on schedule, without compromising on quality.</p>
                                       
                                        <h4>				Customer Satisfaction:</h4>
                                        <p> Your satisfaction is our priority. We value open communication, transparency, and collaboration throughout the construction process.</p>
                                       
                                       
                                        <h4>				Local Expertise:</h4>
                                        <p>Being based in Mohali, we have an in-depth understanding of the local building regulations and unique architectural styles, ensuring seamless project execution.</p>

                                        {/* <h4>				Tilt and Turn Windows:</h4>
                                        <p>Versatile and easy to clean, our tilt and turn windows provide multiple opening options, allowing you to control ventilation and maintenance with ease.</p>
                                        <h4>					Fixed Windows:</h4>
                                        <p>Create stunning panoramic views with our fixed windows, showcasing the beauty of Mohali's surroundings.</p> */}
                                        {/* <h2>Transform Your Living Spaces</h2>
                                      
                                        <p>Investing in premium aluminium windows and doors is an investment in the comfort, aesthetics, and value of your property. Whether you're renovating your home or planning a commercial project, the right windows and doors can make a significant difference.</p>
 */}



<h2>Recent Projects</h2>
                                      
                                      <p>Explore our portfolio of completed projects to witness the diversity and quality of our work. From modern residences to innovative commercial spaces, each project reflects our commitment to excellence.</p>



                                        <h2>Get in Touch</h2>
                                      
                                      <p>Ready to embark on your construction journey? Contact us for a consultation. Our team is eager to discuss your ideas, provide insights, and develop a personalized plan that aligns with your vision and budget.</p>

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
export default Landingpage5;