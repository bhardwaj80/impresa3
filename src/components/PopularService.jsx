import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const card = [
    { id: 1, delay: 0.2, icon: 'flaticon-blueprint-1',title:"UPVC Windows and Doors", link:"/UPVC-windows-in-mohali", description:"Impresa Buildtech always believes in providing quality sturdy and long-lasting materials to customers for UPVC doors and windows. We offer these solutions to commercial and residential spaces. Here customers will get modern designs and cost-effective solutions for their new doors and windows. We also offer bespoke solutions for their needs, such as consulting, selecting designs, frames, widths, and free installations at their doorsteps. Our chief aim is that customers can easily find the top products according to their requirements, so they look attractive. " },
    { id: 2, delay: 0.2, icon: 'flaticon-crane',title:"Aluminium Windows and Doors",link:"/aluminium-windows-and-doors",description:"At Impresa Buildtech, we offer high-quality aluminum windows and door-fitting services for residential and commercial properties. We provide a range of styles, colors, and finishes to choose from the enormous range of options. Our experts use only the highest quality materials to ensure a reliable and efficient installation. We pride ourselves on our attention to detail, reliability, and exceptional customer service, and offer competitive prices without compromising on quality. Contact us today for all your aluminum needs and make your area more attractive. " },
    { id: 3, delay: 0.2, icon: 'flaticon-interior-design-1',title:"Construction",link:"/construction-company-in-Mohali",description:"We specialize in residential and commercial construction projects. We offer a comprehensive range of construction services, using high-quality materials and skilled professionals. With a focus on customer satisfaction, they deliver exceptional service and innovative designs for both residential and commercial properties. Impresa Buildtech is your reliable partner for all your construction needs in Mohali, whether it's for residential or commercial purposes. Our professionals complete all construction projects at the given time and also offer solutions from that day on. Consult our expert team now for the best solutions." },
    { id: 4, delay: 0.2, icon: 'flaticon-furniture',title:"Façade",link:"",description:"Impresa Buildtech specializes in offering facade work for your residential and commercial needs. They provide comprehensive facade solutions, using high-quality materials and skilled professionals. Their focus is on customer satisfaction, delivering exceptional service and innovative designs. Our customers get a wide range of ultra-modern designs so they can select perfectly from them. We use the best facade material, which is water and moisture resistant. Impresa Buildtech is a reliable and experienced partner for all your facade needs in Mohali." },
    { id: 5, delay: 0.2, icon: 'flaticon-home',title:"Interior Design",link:"",description:"We provide comprehensive interior design services, combining creativity and functionality to transform spaces. With a focus on customer satisfaction, they deliver exceptional service and modern designs for residential and commercial properties. Our customers will get beautifully curated interior design ideas, so they upgrade your home or office with a modern look. We have a team of professionals who can quickly give you new ideas after knowing your needs. Our customers can get ample options and they can choose them accordingly."},
    { id: 6, delay: 0.2, icon: 'flaticon-support',title:"Many More",link:"",description:"" },

]

const PopularService = () => {
    const [addActive, setAddActive] = useState(1)
    const [expandedCard, setExpandedCard] = useState(null); // Track expanded card

    const handleReadMoreClick = (itemId) => {
      if (expandedCard === itemId) {
        setExpandedCard(null); // Collapse if already expanded
      } else {
        setExpandedCard(itemId);
      }
    };
    return (
        <>
            <div className="container">
                <div className="section-head style-1 text-center">
                    <h6 className="sub-title text-primary">POPULAR SERVICES</h6>
                    <h2 className="title">Our Featured Services</h2>
                </div>
                <div className="row">
          {card.map((item) => (
            <motion.div
              key={item.id}
              className={`col-lg-4 col-sm-6 aos-item ${
                expandedCard === item.id ? 'expanded' : ''
              }`}
              initial={{ opacity: 0, y: '100%' }}
              whileInView={{ opacity: 1, y: '0%' }}
              transition={{ duration: 0.8, delay: item.delay }}
            >
              <div
                className={`icon-bx-wraper style-3  m-b30 ${
                  expandedCard === item.id ? 'active' : ''
                }`}
              >
                <div className="icon-xl m-b30">
                  <Link className="icon-cell">
                    <i className={item.icon}></i>
                  </Link>
                </div>
                <div className="icon-content">
                  <h4 className="title m-b10">
                    <Link>{item.title}</Link>
                  </h4>
                  <p
                    className={`m-b3 ${
                      expandedCard === item.id ? 'expanded' : 'collapsed'
                    }`}
                  >
                    {item.description}
                  </p>
                 <Link to={item.link}> <button
                    className="btn btn-primary btn-rounded btn-sm hover-icon"
                    // onClick={() => handleReadMoreClick(item.id)}
                  >
                    <span>
                      {expandedCard === item.id ? 'Read Less' : 'Read More'}
                    </span>
                  </button></Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
            </div>

        </>
    )
}

export default PopularService