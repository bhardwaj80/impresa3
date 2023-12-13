import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'



// import img
import pic1 from '../assets/images/img/building.jpg'
import pic2 from '../assets/images/img/sofa.jpg'
import pic3 from '../assets/images/img/bsofa.jpg'


const accordian = [
    { icon: "flaticon-crane", key: 0, heading: "UPVC Windows and Doors", text: " At Impresa Buildtech, we offer modern designs of UPVC doors and windows, and they come soundproof and are bulletproof. " },
    { icon: "flaticon-interior-design", key: 1, heading: "Aluminium Windows and Doors", text: " With our wide range of aluminum doors and windows, our customers easily give their space an ultra-modern look. " },
    { icon: "flaticon-blueprint", key: 2, heading: " Façade Work,Renovation", text: " We provide facade and renovation services. Our premium range of modern designs makes our facade work sleek & trendy. " },
]


const Working = () => {
    return (
        <>
            <div className="row">
                <div className="col-lg-6">
                    <div className="dz-media">
                        <div className="img1 aos-item">
                            <img src={pic1} alt="" />
                        </div>
                        
                        <div className="img2 aos-item" data-aos="fade-up">
                            <img src={pic2} alt="" />
                        </div>
                        <div className="img3 aos-item">
                            <img src={pic3} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 align-self-center">
                    <div className="year-exp">
                        <motion.h2 className="year aos-item counter" data-aos="fade-up"
                            initial={{ opacity: 0, y: "100%" }}
                            whileInView={{ opacity: 1, y: "0%" }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <CountUp
                                end={25}
                                duration={8}
                            />
                        </motion.h2>
                        <motion.h4 className="text aos-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600"
                            initial={{ opacity: 0, y: "100%" }}
                            whileInView={{ y: "0%", opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >Years Of Working Experience</motion.h4>
                    </div>
                    <motion.p className="m-b30 aos-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400"
                        initial={{ opacity: 0, y: "100%" }}
                        whileInView={{ opacity: 1, y: "0%" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >Impresa Buildtech offers premium services for UPVC window and door services that are customizable, energy-efficient, durable, low-maintenance, and cost-effective. Our team of
                     experts provides top-quality service and ensures that you get the best possible results for your home. There are a lot of options for homeowners for UPVC windows and doors.
                      Customers select from the options according to their needs, style, and budget. 
                    Our prime priority is to deliver superior quality with complete assistance, from consulting glass and frame selection to smooth and hassle-free
                     installation at your convenience. </motion.p>
                    <div className="accordion dz-accordion about-faq" id="aboutFaq">
                        <Accordion defaultActiveKey="0">
                            {
                                accordian.map((i, ind) => (
                                    <Accordion.Item eventKey={`${i.key}`} key={ind}>
                                        <motion.div
                                            initial={{ opacity: 0, x: "100%" }}
                                            whileInView={{ opacity: 1, x: "0%" }}
                                            transition={{ duration: 1 }}
                                        >
                                            <Accordion.Header className="accordion-header" id="flush-headingOne">
                                                    <i className={i.icon}></i>
                                                    {i.heading}
                                                    <span className="toggle-close"></span>
                                        </Accordion.Header>
                                            <Accordion.Body>
                                                {i.text}
                                            </Accordion.Body>
                                        </motion.div>
                                    </Accordion.Item>
                                ))
                            }
                        </Accordion>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Working