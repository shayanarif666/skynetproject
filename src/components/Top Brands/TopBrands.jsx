import React from 'react';
import { BrandsSlider, Button } from '../index';
import { workingBrands } from '../brandItems';
import { motion } from "framer-motion"

const TopBrands = () => {
    return (
        <>
            <section id="topBrands" data-scroll-section className='pt-20 pb-12' style={{ background: 'linear-gradient(90deg, rgba(0,15,55,1) 3%, rgba(2,100,167,1) 44%, rgba(32,15,82,1) 75%)' }}>
                <div className="container mb-20">
                    <div className="row">
                        <motion.div initial={{ y: "100px", opacity: 0 }} viewport={{ once: true }} whileInView={{ opacity: 1, transition: { duration: 1 }, y: 0 }} className="col-12 text-center">
                            <div className="top-brands-info">
                                <h5 className='text-2xl text-white uppercase font-bold'>Clients Across Industries</h5>
                                <h4 className='sm:text-5xl text-3xl text-white uppercase font-bold my-4'>Full-Service Web Design Agency</h4>
                                <p className='text-xl sm:text-2xl text-white font-normal'>From startups to Fortune 500 companies <br />
                                    <span className='text-2xl sm:text-3xl font-medium'>we create custom solutions that grow brands online</span>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <BrandsSlider bannerHeight='18vh' sliderGap="mb-4" items={workingBrands} itemBgColor='#4c86d21a' scrollPosition='left' scrollTo="scrollLeft" itemWidth='300px' className="flex flex-column justify-center items-center" bgColor="none !important" />
                {/* <BrandsSlider bannerHeight='18vh' sliderGap="mb-4" items={workingBrands} itemBgColor='#4c86d21a' scrollPosition='right' scrollTo="scrollRight" itemWidth='300px' className="flex flex-column justify-center items-center" bgColor="none !important" /> */}

                <div className="flex justify-center mt-14">
                    <Button className='primary-btn text-white hover:text-white' label={"EXPLORE ALL SERVICES"} />
                </div>

            </section >
        </>
    )
}



export default TopBrands
