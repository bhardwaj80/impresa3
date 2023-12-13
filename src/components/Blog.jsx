import React from 'react'
import { IMAGES } from '../constants/theme'
import { motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'


const ourBlogs = [
  
    { ourBlogImg: IMAGES.pic2, skill: "Architectural", name: "John Doe", delay: 0.7, text: "How to Hire Construction company in Mohali?" , link:"/blog-details1" },
    { ourBlogImg: IMAGES.pic3, skill: "Architectural", name: "John Doe", delay: 1, text: "What is the Benefits of Aluminium Windows?"  , link:"/blog-details2"  },
]

const Blog = () => {
    return (
        <>
            <div className="container">
                <div className="section-head style-1 text-center">
                    <h6 className="sub-title text-primary">OUR BLOG</h6>
                    <h2 className="title">Latest News Feed</h2>
                </div>
                <div className="blog-area">
                    <div className=" row">
                        <div className="col-md-4">
                            <motion.div className="dz-card blog-grid style-1 aos-item h-100 overlay-post" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200"
                                initial={{ y: "20%", opacity: 0 }}
                                whileInView={{ y: "0%", opacity: 1 }}
                                transition={{ duration: 1, delay: 0.1 }}
                            >
                                <div className="dz-media">
                                    <Link to="/blog-details"><img src={IMAGES.pic1} alt="" /></Link>
                                </div>
                                <div className="dz-info">
                                    <div className="dz-meta">
                                        <ul>
                                            <li className="post-date"><strong>20</strong><span>March</span></li>
                                            <li className="post-category"><Link>Architectural</Link></li>
                                            {/* <li className="post-user">By <Link>John Doe</Link></li> */}
                                        </ul>
                                    </div>
                                    <h5 className="dz-title"><Link to="/blog-details">Enhancing Home Security with UPVC Windows: What You Need to Know</Link></h5>
                                    <div className="read-more">
                                        <Link to="/blog-details" className="btn btn-primary btn-rounded btn-sm hover-icon">
                                            <span>Read More</span>
                                            <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </div>












                        {
                            ourBlogs.map((i, index) => (
                                <motion.div className="col-md-4" key={index}
                                    initial={{ y: "20%", opacity: 0 }}
                                    whileInView={{ y: "0%", opacity: 1 }}
                                    transition={{ duration: 1, delay: i.delay }}
                                >
                                    <div className="dz-card blog-grid style-1 aos-item h-100" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="800">
                                        <div className="dz-media">
                                            <NavLink to={i.link}><img src={i.ourBlogImg} alt="" /></NavLink>
                                        </div>
                                        <div className="dz-info">
                                            <div className="dz-meta">
                                                <ul>
                                                    <li className="post-date"><strong>05</strong><span>March</span></li>
                                                    <li className="post-category"><Link>{i.skill}</Link></li>
                                                    {/* <li className="post-user">By <Link>{i.name}</Link></li> */}
                                                </ul>
                                            </div>
                                            <h5 className="dz-title"><NavLink to={i.link}>{i.text}</NavLink></h5>
                                            <div className="read-more">
                                                <NavLink to={i.link} className="btn btn-primary btn-rounded btn-sm hover-icon">
                                                    <span>Read More</span>
                                                    <i className="fas fa-arrow-right"></i>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog