import React from 'react';
import CommanBanner from '../elements/CommanBanner';
import { IMAGES } from '../constants/theme';
import Working from '../components/Working';
import Projects from '../components/Projects';
// import Testimonial1 from '../components/Testimonial1';
// import Testimonial2 from '../components/Testimonial2';
import Faq from '../components/Faq';
import {motion} from 'framer-motion'
import { Helmet } from 'react-helmet';

const workingProcess = [
    { num: "01", heading: "ATS CASA ESPANA, MOHALI (PB)"  },
    { num: "02", heading: "CM REST HOUSE, JHANJHELI (HP)" },
    { num: "03", heading: "COMBINED OFFICE, THUNAG (HP)" },
    { num: "04", heading: "CIRCUIT HOUSE, MANALI (HP)" },
]

const AboutUs = () => {
    return (
        <>



<Helmet>

<title> About impresabuild Tech. </title>


<meta name="description" content=" Impresa Buildtech offers premium services for UPVC window and door services that are customizable, energy-efficient, durable, low-maintenance, and cost-effective."/>
{/* <meta name="Keyword" content=" upvc windows in Mohali"/> */}



</Helmet>

            <div className="page-content bg-white">
                <CommanBanner mainTitle="About Us" parentTitle="Home" pageName="About Us" bgImage={IMAGES.bannerbg3} />
                <section className="section-full content-inner about-bx2" style={{ backgroundImage: `url(${IMAGES.background2})`, backgroundPosition: 'right bottom', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                    <div className="container">
                        <Working />
                    </div>
                </section>
                <section className="content-inner-2">
                    <div className="container">
                        <div className="section-head style-1 text-center">
                            <h6 className="sub-title text-primary">WORK PROCESS</h6>
                            <h2 className="title">How Our Work Process</h2>
                        </div>
                        <div className="row">
                            {
                                workingProcess.map((i) => (
                                    <motion.div className="col-lg-3 col-sm-6" key={i.num}
                                        initial={{ opacity: 0, y: '100%' }}
                                        whileInView={{ opacity: 1, y: "0" }}
                                        transition={{ duration: 0.8}}
                                    >
                                        <div className="work-process shadow text-center m-b30">
                                            <div className="number">{i.num}</div>
                                            <h4 className="title m-b15">{i.heading}</h4>
                                            {/* <p className="m-b0">Nullam nec rutrum eros. Maecenas maximus augue eget libero dictum.</p> */}
                                        </div>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                </section>
                <section className="content-inner-2">
                    <Projects />
                </section>
            
                <section className="section-full content-inner overflow-hidden" style={{ backgroundImage: `url(${IMAGES.bg1})`, backgroundPosition: 'left top', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                    <Faq />
                </section>
            </div>
            
        </>
    )
}
export default AboutUs;