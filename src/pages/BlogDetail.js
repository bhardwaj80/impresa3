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
    {name: "A", img: IMAGES.pic12 },
    {changeStyle: "m-l40", name: "B", img: IMAGES.pic11 },
    {name: "C", img: IMAGES.pic10 },
]

const BlogDetail = () => {
    return (
        <>
            <div className="page-content bg-white">
                <CommanBanner mainTitle="Enhancing Home Security with UPVC Windows" parentTitle="Home" pageName="Blog" bgImage={IMAGES.bannerbg3} />
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
                                        <h2 className="dz-title">Enhancing Home Security with UPVC Windows: What You Need to Know</h2>
                                        <div className="dz-post-text">
                                            <p>
UPVC (unplasticized polyvinyl chloride) windows offer several benefits, which have made them a popular choice for homeowners and builders. Here are some of the key advantages of UPVC windows
</p>
                                            {/* <blockquote className="block-quote style-1">
                                                <p>“ Mauris justo augue, laoreet quis faucibus et, ultrices eu ante. Duis magna eratut dui eu maximus metus bibendum suscipit ”</p>
                                                <cite>Visva</cite>
                                            </blockquote> */}
                                            {/* <div className="alignleft w-50">
                                                <img alt="" src={IMAGES.blogGridPic2} className="w-100" />
                                            </div> */}
                                            <h4>	Energy Efficiency</h4>
                                            <p> UPVC windows are excellent at insulating your home. They have good thermal properties, which help to keep your home warm in the winter and cool in the summer. This can lead to energy savings and lower heating and cooling costs.</p>
                                            <h4>	Durability</h4>
                                            <p>UPVC is a robust and long-lasting material. It does not rot, corrode, or warp over time, making it ideal for use in windows, especially in areas with harsh weather conditions.</p>
                                            <h4>		Low Maintenance</h4>
                                            <p>UPVC windows are virtually maintenance-free. They do not require painting, staining, or sealing, which reduces the ongoing costs associated with maintaining your windows.</p>
                                            <h4>			Weather Resistance</h4>
                                            <p>UPVC windows are highly resistant to moisture and are not prone to water damage or swelling. They are also resistant to the effects of sunlight, so they won't fade or deteriorate in the sun.</p>
                                            <h4>			Security</h4>
                                            <p>UPVC windows can be equipped with multi-point locking systems, making them more secure than older window types. They are also difficult to break, enhancing the overall security of your home.</p>
                                            <h4>				Noise Reduction</h4>
                                            <p>UPVC windows provide good sound insulation, reducing the amount of noise entering your home from the outside. This is particularly beneficial if you live in a noisy area or near a busy street.</p>
                                            <h4>				Aesthetics</h4>
                                            <p>UPVC windows are available in a wide range of styles, colors, and finishes, allowing you to choose options that match your home's aesthetic. They can be designed to mimic the appearance of traditional wood windows while offering the advantages of UPVC.</p>
                                            <h4>				Affordability</h4>
                                            <p> UPVC windows are often more cost-effective than other window materials like wood or aluminum. This makes them a budget-friendly option for many homeowners.</p>
                                            <h4>				Environmental Friendliness</h4>
                                            <p>UPVC is a recyclable material, and many manufacturers use recycled UPVC in their window production, making them a more eco-friendly choice.</p>
                                            <h4>					Improved Property Value</h4>
                                            <p>Installing UPVC windows can enhance the resale value of your home. Buyers often look for energy-efficient and low-maintenance features, which UPVC windows offer.</p>
                                            <h4>				Customization</h4>
                                            <p>UPVC windows can be customized to fit specific sizes and shapes, allowing for flexibility in design and functionality.</p>

                                        </div>
                                        <div className="post-footer">
                                            <div className="post-tags">
                                                <strong>Tags:</strong>
                                                <Link rel="tag">UPVC Windows</Link>
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

export default BlogDetail