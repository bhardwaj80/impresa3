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

const BlogDetail1 = () => {
    return (
        <>
            <div className="page-content bg-white">
                <CommanBanner  mainTitle="How to Hire Construction company in Mohali?" parentTitle="Home" pageName="Blog" bgImage={IMAGES.bannerbg3} />
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
                                        <h2 className="dz-title">How to Hire Construction company in Mohali?</h2>
                                        <div className="dz-post-text">
                                            <p>
                                            Hiring a construction company in Mohali, or any other location, involves a series of steps to ensure that you select a reputable and reliable contractor. Here's a step-by-step guide to help you find the right construction company for your project
</p>
                                            {/* <blockquote className="block-quote style-1">
                                                <p>“ Mauris justo augue, laoreet quis faucibus et, ultrices eu ante. Duis magna eratut dui eu maximus metus bibendum suscipit ”</p>
                                                <cite>Visva</cite>
                                            </blockquote> */}
                                            {/* <div className="alignleft w-50">
                                                <img alt="" src={IMAGES.blogGridPic2} className="w-100" />
                                            </div> */}
                                            <h4>		Define Your Project Requirements</h4>
                                            <p> 	Clearly outline your project's scope, budget, and timeline.
                                                <br/>
	Determine the specific services you need, such as new construction, remodeling, renovation, or other specialized work.
</p>
                                            <h4>		Research and Gather Recommendations</h4>
                                            <p>	Ask friends, family, neighbors, and colleagues for recommendations on construction companies they may have worked with in the past.<br/>
	Look for online reviews and ratings on websites like Google, Yelp, or specialized construction directories.
</p>
                                            <h4>		Check for Licensing and Insurance</h4>
                                            <p>	Ensure that the construction company is licensed and registered to operate in Mohali.
<br/>	Verify their insurance coverage, including liability and workers' compensation, to protect yourself from potential liabilities.
</p>
                                            <h4>				Check Their Portfolio</h4>
                                            <p>	Review the construction company's portfolio to see if they have experience in projects similar to yours.
<br/>	Ask for references from past clients and contact them to get feedback on their experiences.
</p>
                                            <h4>				Interview Multiple Contractors</h4>
                                            <p>	Contact multiple construction companies to discuss your project and obtain estimates.
<br/>	Ask about their experience, the team's qualifications, and their approach to project management.
</p>
                                            <h4>					Verify Credentials</h4>
                                            <p>	Check if the contractor is affiliated with professional organizations like the Mohali Builders Association.
<br/>	Ask for details about their experience, certifications, and training.
</p>
                                            <h4>				Request Detailed Bids</h4>
                                            <p>	Obtain detailed project proposals or bids from the contractors you're considering. These should include cost estimates, project timelines, and the scope of work.</p>
                                            <h4>					Check References</h4>
                                            <p> 	Contact the references provided by the contractors to get insight into their work quality, reliability, and professionalism.</p>
                                            <h4>				Visit Completed Projects</h4>
                                            <p>	If possible, visit some of the contractor's completed projects to assess the quality of their work.</p>
                                            <h4>						Review Contracts</h4>
                                            <p>	Carefully review the contracts provided by the selected construction companies, paying attention to payment schedules, project milestones, and any warranties or guarantees.</p>
                                            <h4>					Finalize the Agreement</h4>
                                            <p>	Choose the construction company that best meets your criteria, taking into account the quality of their work, reputation, and cost.
<br/>	Sign a detailed contract that outlines all project specifics, including timelines, costs, and responsibilities.
</p>

<h4>						Monitor Progress</h4>
                                            <p>	Stay involved in the project, communicate regularly with the construction team, and address any concerns promptly.
</p>

<h4>						Make Payments Wisely</h4>
                                            <p>	Stick to the payment schedule as outlined in the contract, and make sure payments are tied to project milestones or completed work.
</p>

<h4>						Keep Records</h4>
                                            <p>	Maintain detailed records of all communications, contracts, and financial transactions related to the project.
</p>

<h4>							Conduct Inspections</h4>
                                            <p>	Inspect the work at various stages of the project to ensure it aligns with the agreed-upon standards and specifications.
</p>

                                        </div>
                                        <div className="post-footer">
                                            <div className="post-tags">
                                                <strong>Tags:</strong>
                                                <Link rel="tag">Construction</Link>
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

export default BlogDetail1