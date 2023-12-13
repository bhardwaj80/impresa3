import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import { IMAGES } from '../constants/theme'
import { motion } from 'framer-motion'


const accordian = [
    { id: 1, key: 0, title: " Why Do I Choose Aluminum Doors and Windows for My Space? ", data: "Aluminum doors and windows are durable, low maintenance, and cost-effective. They are also water and moisture-resistant so you can freely use them. No matter the weather, these doors are a perfect fit. " },
    { id: 2, key: 1, title: " Is Impresa Buildtech Offers Installation of Doors and Windows? ", data: "Our customers will get a complete installation at their convenience. We have a team of experts to install according to the guidelines and make our customers satisfied." },
    { id: 3, key: 2, title: " How durable are UPVC doors?", data: "UPVC doors are always durable, and you can easily use them for years. You can see that there are no weathering or rusting effects on them. " }
]


const Faq = () => {
    return (
        <>
            <div className="container">
                <div className="row align-items-center">
                    <motion.div className="col-lg-6 m-b30 aos-item" data-aos="fade-right" data-aos-duration="800" data-aos-delay="300"
                        initial={{ opacity: 0, x: "-100%" }}
                        whileInView={{ opacity: 1, x: "0%" }}
                        transition={{ duration: 1 }}
                    >
                        <div className="twentytwenty-img-area">
                            <div className="twentytwenty-container">
                                <img src={IMAGES.pic2_2} alt="" />
                            </div>
                        </div>
                    </motion.div>
                    <div className="col-lg-6 aos-item" data-aos="fade-left" data-aos-duration="800" data-aos-delay="600">
                        <div className="section-head style-1">
                            <h6 className="sub-title text-primary">FAQ</h6>
                            <h2 className="title">Get Every Answer From Here</h2>
                        </div>
                        <Accordion defaultActiveKey="0" className="dz-accordion accordion-sm">
                            {
                                accordian.map((i, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: "100%" }}
                                        whileInView={{ opacity: 1, x: "0%" }}
                                        transition={{ duration: 1 }}
                                    >
                                        <Accordion.Item eventKey={`${i.key}`}>
                                            <Accordion.Header className="accordion-header" id="headingOne">
                                             {i.title}
                                                <span className="toggle-close"></span>
                                            </Accordion.Header>
                                            <div id="collapseOne" className="accordion-collapse collapse show" >
                                                <Accordion.Body>
                                                    <p className="m-b0">{i.data}</p>
                                                </Accordion.Body>

                                            </div>
                                        </Accordion.Item>
                                    </motion.div>
                                ))
                            }
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq