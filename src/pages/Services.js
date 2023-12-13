import React from 'react'
import CommanBanner from '../elements/CommanBanner'
import { IMAGES } from '../constants/theme'
import PopularService from '../components/PopularService'
import VideoCounter from '../components/VideoCounter'
import Faq from '../components/Faq'
import Progress from '../components/Progress'
import Brand from '../components/Brand'
import { Helmet } from 'react-helmet';

const Services = () => {
    return (
        <>




<Helmet>

<title> UPVC Window Dealers in Chandigarh Mohali Panchkula </title>


<meta name="description" content="  Explore top UPVC window dealers in Chandigarh, Mohali, and Panchkula. High-quality, energy-efficient UPVC windows for residential and commercial projects. Discover durable and stylish solutions for your property. Contact us for expert advice and installation services."/>
{/* <meta name="Keyword" content=" upvc windows in Mohali"/> */}



</Helmet>
            <div className="page-content bg-white">
            <CommanBanner mainTitle="Our Services" parentTitle="Home" pageName="Our Services" bgImage={IMAGES.bnr6} />
            <section className="content-inner-2" style={{ backgroundImage: `url(${IMAGES.background3})`, backgroundPosition: 'left top', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                <PopularService />
            </section>
            <section className="dz-content-bx style-3">
                <VideoCounter />
            </section>
           
            <section className="section-full content-inner overflow-hidden" style={{ backgroundImage: `url(${IMAGES.bg1})`, backgroundPosition: 'left top', backgroundSize: '100%', backgroundRepeat: 'no-repeat' }}>
                <Faq />
            </section>
            <section className="section-full dz-content-bx style-2 text-white" >
                <Progress />
            </section>
            <section className="content-inner-1">
                <div className="container">
                    <div className="section-head style-1 text-center">
                        <h6 className="sub-title text-primary">Brands</h6>
                        <h2 className="title">Our Business Partners</h2>
                    </div>
                    <Brand />
                </div>
            </section>
            </div>
        </>
    )
}

export default Services