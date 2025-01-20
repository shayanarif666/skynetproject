import React from 'react';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import "./info.css";

const Info = () => {
    return (
        <>
            <section id="info" className='py-16' data-scroll-section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <motion.h1 initial={{ opacity: 0, x: "-300px" }}  whileInView={{ opacity: 1, transition: { duration: 1 }, x: 0 }} className='text-5xl text-white font-bold leading-tight '>Creative Web Agency <br /> Delivering Custom Solutions</motion.h1>
                            <motion.div className="info-service mt-5" initial={{ opacity: 0, y: "100px" }}  whileInView={{ opacity: 1, transition: { duration: 1, delay: .2 }, y: 0 }}>
                                <p className='text-2xl text-white mb-4 flex items-center'>
                                    <IoCheckmarkDoneSharp className='me-2 text-cyan-500' />
                                    <p>Custom Web Design Solutions <span className='text_gradient ms-2'> To Drive Conversions</span></p>
                                </p>
                                <p className='text-2xl text-white mb-4 flex items-center'>
                                    <IoCheckmarkDoneSharp className='me-2 text-cyan-500' />
                                    <p>Effective Marketing Campaigns <span className='text_gradient ms-2'> To Generate Growth</span></p>
                                </p>
                                <p className='text-2xl text-white mb-4 flex items-center'>
                                    <IoCheckmarkDoneSharp className='me-2 text-cyan-500' />
                                    <p>Tailored Branding Strategies <span className='text_gradient ms-2'>To Drive Engagemen</span></p>
                                </p>
                            </motion.div>
                            <motion.p initial={{ opacity: 0, x: "-300px" }}  whileInView={{ opacity: 1, transition: { duration: 1, delay: .2 }, x: 0 }} className='text-xl text-white mt-5'>Skynet Silicon is a web design company & digital marketing agency focused on growing brands online.
                                We create effective brand strategies, custom web design, development, and digital marketing solutions
                                to generate greater brand engagement and conversions. We work closely with our clients to ensure each
                                project meets their brand guidelines and business goals and provide technical and marketing expertise to
                                ensure optimal results.</motion.p>
                        </div>
                        <motion.div className="col-lg-6" initial={{ opacity: 0, x: "300px" }}  whileInView={{ opacity: 1, transition: { duration: 1, delay: .2 }, x: 0 }}>
                            <img src="https://www.digitalsilk.com/wp-content/uploads/2024/06/solutions.png.webp" alt="" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Info
