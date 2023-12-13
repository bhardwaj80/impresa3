import React from 'react'
import { IMAGES } from '../constants/theme'
import { Link } from 'react-router-dom'

const BlogGridCard = (props) => {
    return (
        <>
            <div className="col-xl-6 col-lg-6 card-container">
                <div className="dz-card blog-grid style-1 m-b50 aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                    <div className="dz-media">
                        <Link to="/blog-details"><img src={props.image} alt="" /></Link>
                    </div>
                    <div className="dz-info">
                        <div className="dz-meta">
                            <ul>
                                <li className="post-date">
                                    <strong>26</strong>
                                    <span>Apr</span>
                                </li>
                                {/* <li className="post-category"><Link>Audio</Link></li> */}
                                {/* <li className="post-user">By <Link> John Doe</Link>
                                </li> */}
                            </ul>
                        </div>
                        <h3 className="dz-title"><Link to={"/Enhancing-Home-Security-with-UPVC-Windows-What-You-Need-to-Know/1"}>Enhancing Home Security with UPVC Windows: What You Need to Know </Link></h3>
                        <div className="dz-post-text text">
                            <p>UPVC (unplasticized polyvinyl chloride) windows offer several benefits, which have made them a popular choice for homeowners and builders. Here are some of the key advantages of UPVC windows</p>
                        </div>
                        <div className="read-more">
                            <Link 
                             className="btn btn-primary btn-rounded btn-sm hover-icon">
                                <span>Read More </span>
                                <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogGridCard