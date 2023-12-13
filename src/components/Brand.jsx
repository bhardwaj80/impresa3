import React from 'react'
import { IMAGES } from '../constants/theme'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from "framer-motion"
import { Autoplay } from 'swiper'



const brand = [
    {img: "download.png" },
    {img: "gln.png" },
    {img: "cort.png" },
    {img: "snt.png" },
  {img: "simpl.png" },
  
    

]

const Brand = () => {
    
    return (
        <>

            <Swiper className="swiper-container clients-swiper"
                slidesPerView={4}
                spaceBetween={30}
                speed={1500}
                loop={true}
                modules={[Autoplay]}
                autoplay={{
                    delay:1200,
                    disableOnInteraction:false
                }}
                breakpoints={{
                    1191: {
                        slidesPerView: 6,
                    },
                    991: {
                        slidesPerView: 5,
                    },
                    691: {
                        slidesPerView: 4,
                    },
                    591: {
                        slidesPerView: 3,
                    },
                    320: {
                        slidesPerView: 2,
                    },
                }}
            >
                <div className="swiper-wrapper">
                    {
                        brand.map((i, ind) => (
                            <SwiperSlide className="swiper-slide" key={ind}>
                                <div className="clients-logo aos-item">
                                    <img  className="logo-main" src={i.img} alt="" />
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </div>
            </Swiper>
        </>
    )
}

export default Brand