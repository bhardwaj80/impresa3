import React from 'react'
import CommanBanner from '../elements/CommanBanner'
import { IMAGES } from '../constants/theme'
import LargeSidebar from '../components/LargeSidebar'
import { Link } from 'react-router-dom'

// const testimonialBlog = [
//     {img: IMAGES.blogGridPic2 },
//     {img: IMAGES.blogGridPic1 },
// ]

const coments = [
    { name: "A", img: IMAGES.pic12 },
    { changeStyle: "m-l40", name: "B", img: IMAGES.pic11 },
    { name: "C", img: IMAGES.pic10 },
]

const BlogDetail2 = () => {
    return (
        <>
            <div className="page-content bg-white">
                <CommanBanner mainTitle="What is the Benefits of Aluminium Windows?" parentTitle="Home" pageName="Blog" bgImage={IMAGES.bannerbg3} />
                <div className="content-inner">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-8">
                                <div className="dz-card blog-single style-1">
                                    <div className="dz-media">
                                        <img src={IMAGES.blogGridPic2} alt="" />
                                    </div>
                                    <div className="dz-info">
                                        {/* <div className="dz-meta">
                                            <ul>
                                                <li>April 26, 2021</li>
                                                <li className="post-user">By <Link>John Doe</Link></li>
                                            </ul>
                                        </div> */}
                                        <h2 className="dz-title">What is the Benefits of Aluminium Windows?</h2>
                                        <div className="dz-post-text">
                                            <p>
                                                Aluminium windows offer several benefits that make them a popular choice for homeowners and commercial buildings. Here are some of the advantages of using aluminium windows</p>
                                            {/* <blockquote className="block-quote style-1">
                                                <p>“ Mauris justo augue, laoreet quis faucibus et, ultrices eu ante. Duis magna eratut dui eu maximus metus bibendum suscipit ”</p>
                                                <cite>Visva</cite>
                                            </blockquote> */}
                                            {/* <div className="alignleft w-50">
                                                <img alt="" src={IMAGES.blogGridPic2} className="w-100" />
                                            </div> */}
                                            <h4>		Durability</h4>
                                            <p> 	 Aluminium is a robust and corrosion-resistant material, making it well-suited for windows. It does not rust, warp, or rot over time, and it can withstand various weather conditions, including rain, snow, and high winds.
                                            </p>
                                            <h4>		Low Maintenance</h4>
                                            <p>	Aluminium windows require minimal maintenance. They do not need regular painting or staining, and cleaning them typically involves simple tasks like wiping down the frames with a damp cloth.
                                            </p>
                                            <h4>	Slim Profiles</h4>
                                            <p>Aluminium frames can be designed with slim profiles, allowing for more extensive glass areas. This means that aluminium windows can offer a more significant glass-to-frame ratio, maximizing natural light and providing unobstructed views.
                                            </p>
                                            <h4>				Energy Efficiency</h4>
                                            <p>	 Modern aluminium windows often come with thermal breaks, which are insulating materials that separate the interior and exterior of the frame. This helps improve energy efficiency by reducing heat transfer and preventing condensation.
                                            </p>
                                            <h4>			Design Flexibility</h4>
                                            <p>	Aluminium can be easily shaped and customized, enabling a wide range of design options. Whether you prefer traditional or contemporary styles, aluminium windows can be tailored to your specific architectural needs.
                                            </p>
                                            <h4>					Color Options</h4>
                                            <p>Aluminium windows are available in various finishes and colors. They can be powder-coated or anodized to achieve the desired aesthetic, and the color is long-lasting and fade-resistant.
                                            </p>
                                            <h4>					Security</h4>
                                            <p>Aluminium is inherently strong and resistant to forced entry. Many aluminium windows come with advanced locking mechanisms and can be fitted with laminated or toughened glass for enhanced security.</p>
                                            <h4>					Recyclability</h4>
                                            <p> 	Aluminium is a highly recyclable material. When it's time to replace aluminium windows, the old frames can be recycled, which is environmentally friendly and reduces waste.</p>
                                            <h4>				Sound Insulation</h4>
                                            <p>Aluminium frames can be designed to offer good sound insulation. This can help reduce noise from outside, creating a quieter and more comfortable indoor environment.</p>
                                            <h4>						Longevity</h4>
                                            <p>Aluminium windows have a longer lifespan compared to some other window materials. They can last for several decades with proper care and maintenance.</p>
                                            <h4>					Resistant to Insects</h4>
                                            <p>Unlike wooden frames, aluminium is not susceptible to insect infestations, such as termites, which can damage or compromise the integrity of window frames.
                                            </p>

                                            <h4>						Fire Resistance</h4>
                                            <p>	Aluminium has a high melting point and is non-combustible, which can contribute to fire safety in buildings.

                                            </p>

                                            <p>While aluminium windows offer many advantages, it's important to consider your specific needs and budget when choosing windows for your property. Additionally, the quality of installation is crucial to maximize the benefits of aluminium windows, so it's advisable to work with experienced professionals.</p>



                                        </div>
                                        <div className="post-footer">
                                            <div className="post-tags">
                                                <strong>Tags:</strong>
                                                <Link rel="tag"> Aluminium Windows</Link>
                                            </div>
                                            <div className="dz-share-post">
                                                <h5 className="title">Share :</h5>
                                                <ul className="dz-social-icon">
                                                    <li><Link target="_blank"><i className="fab fa-facebook-f"></i></Link></li>
                                                    <li><Link target="_blank"><i className="fab fa-twitter"></i></Link></li>
                                                    <li><Link target="_blank"><i className="fab fa-linkedin"></i></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="author-box blog-user m-b60">
                                    <div className="author-profile-info">
                                        <div className="author-profile-pic">
                                            <img src={IMAGES.pic12} alt="Profile Pic" />
                                        </div>
                                        <div className="author-profile-content">
                                            <h6>John Doe</h6>
                                            <p>We woke reasonably late following the feast and free flowing wine the night before. After gathering ourselves and our packs, we headed down to our home.</p>
                                            <ul className="list-inline m-b0">
                                                <li>
                                                    <Link target="_blank" className="btn-link">
                                                        <i className="fas fa-globe"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link target="_blank" className="btn-link">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link target="_blank" className="btn-link">
                                                        <i className="fab fa-twitter"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link target="_blank" className="btn-link">
                                                        <i className="fab fa-youtube"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div> */}

                                {/* <div className="row extra-blog style-1">
                                    <div className="col-md-12">
                                        <div className="widget-title">
                                            <h4 className="title"> Related Blogs</h4>
                                            <div className="dz-separator style-1 text-primary mb-0"></div>
                                        </div>
                                    </div>
                                    {
                                        testimonialBlog.map((i, index) => (
                                            <div className="col-md-6" key={index}>
                                                <div className="dz-card blog-grid style-1 aos-item">
                                                    <div className="dz-media">
                                                        <Link to="/blog-details"><img src={i.img} alt="" /></Link>
                                                    </div>
                                                    <div className="dz-info">
                                                        <div className="dz-meta">
                                                            <ul>
                                                                <li className="post-date">
                                                                    <strong>26</strong>
                                                                    <span>Apr</span>
                                                                </li>
                                                                <li className="post-user">By <Link>John Doe</Link></li>
                                                            </ul>
                                                        </div>
                                                        <h5 className="dz-title"><Link to="/blog-details">Modern Family House.</Link></h5>
                                                        <div className="read-more">
                                                            <Link className="btn btn-primary btn-rounded btn-sm hover-icon"><span>Read More </span><i className="fas fa-arrow-right"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div> */}

                                {/* <div className="clear" id="comment-list">
                                    <div className="comments-area style-1" id="comments">
                                        <div className="widget-title">
                                            <h4 className="title">8 Comments</h4>
                                            <div className="dz-separator style-1 text-primary mb-0"></div>
                                        </div>
                                        <div className="clearfix">
                                            <ol className="comment-list">
                                                {
                                                    coments.map((i, index) => (
                                                        <li className={`comment ${i.changeStyle}`} key={index}>
                                                            <div className="comment-body">
                                                                <div className="comment-author vcard">
                                                                    <img className="avatar photo" src={i.img} alt="" />
                                                                    <cite className="fn">John Doe</cite>
                                                                </div>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                                                <div className="reply">
                                                                    <Link className="comment-reply-link">
                                                                        <i className="fa fa-reply"></i>Reply</Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))
                                                }

                                            </ol>
                                        </div>
                                    </div>
                                </div> */}

                                <div className="comment-respond style-1" id="respond">
                                    <div className="widget-title">
                                        <h4 className="title">Leave Your Comment</h4>
                                        <div className="dz-separator style-1 text-primary mb-0"></div>
                                        <Link style={{ display: 'none' }} id="cancel-comment-reply-link" rel="nofollow">Cancel reply</Link>
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
                                </div>
                            </div>
                            <LargeSidebar />
                        </div>
                    </div>
                </div>
            </div>

        </>)
}

export default BlogDetail2