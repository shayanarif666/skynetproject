import React from 'react';
import { motion } from "framer-motion";
import "./timeline.css";
import { Button } from '../index';

const Timeline = () => {
    return (
        <>
            <section id="timeline_section" className='timeline_section bg-white overflow-clip'>
                <div className="container lg:px-5">
                    <div className="lg:flex gx-0">
                        <div className="lg:w-1/2 w-full py-20 px-4 bg-white timeline_section_left_column z-[99]">
                            <div className="timeline_left_section sticky top-0 min-h[40%]">
                                <div className="timeline_left_content">
                                    <motion.h2 initial={{ x: "-200px", opacity: 0 }} viewport={{ once: true }} whileInView={{ opacity: 1, transition: { duration: 1 }, x: 0 }} className='text-[#1b2c5c] font-bold text-3xl md:text-4xl xl:text-6xl'>Technologies We Use to Meet Customer Needs</motion.h2>
                                    <motion.p initial={{ x: "-200px", opacity: 0 }} viewport={{ once: true }} whileInView={{ opacity: 1, transition: { duration: 1 }, x: 0 }} className='text-lg font-medium text-[#1b2c5c] mt-4'>with our comprehensive services for software development We at Skynet Silicon provide full-cycle software development services that are customized to meet your particular project specifications and commercial objectives. From technological roadmaps and IT strategy advice to scalable

end-to-end solutions—you're in good hands!</motion.p>
                                </div>
                                <div className="timeline_left_img mt-4">
                                    <img src="https://www.digitalsilk.com/wp-content/uploads/2024/10/CMS-Platform-Tailored-For-Client-Needs.png.webp" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="timeline_right_section">
                                <div className="timeline_card relative z-[9] flex items-center after:bg-gradient-to-r sm:hover:after:bg-gradient-to-r from-[#c6eff9] to-[#38d5fc] py-5 sm:border-l-[6px] sm:border-[#61dbfb] cursor-pointer">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" className='-ms-20 me-10 img-fluid max-w-52 sm:block hidden' alt="" />
                                    <div className="timeline_card_content ps-lg-0 ps-sm-4 sm:px-0 px-4">
                                        <div className="timeline_card_title">
                                            <h3 className='text-3xl font-bold text-[#1b2c5c]'>React Js</h3>
                                        </div>
                                        <div className="timeline_card_description py-4 text-sm xl:text-base font-medium text-[#1b2c5c] xl:pr-4">
                                            <p>Skynet Silicon delivers dynamic, high-performance React.js solutions tailored to your business goals. Our expert team builds scalable, component-based user interfaces that provide a seamless experience across all devices. We specialize in creating fast, responsive, and interactive web applications that boost engagement and streamline workflows. With cutting-edge technology and continuous support, we ensure your React.js projects evolve with your business needs.</p>
                                        </div>
                                        <div className="timeline_card_btn justify-center lg:invisible lg:opacity-0 transition-all duration-100 linear">
                                            <Button className="primary-btn py-0 transition-all duration-100 linear uppercase" label="React Js Development" txtColor='text-[#000]' bgColor='bg-gradient-to-r from-[#9be8fb] to-[#26d2fc]' />
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline_card relative z-[9] flex items-center after:bg-gradient-to-r sm:hover:after:bg-gradient-to-r from-[#a5ff90] to-[#529f41]  py-5 sm:border-l-[6px] sm:border-[#529f41] cursor-pointer">
                                    <img src="https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png" className='sm:block hidden me-10 max-w-52 -ms-20' alt="" />
                                    <div className="timeline_card_content ps-lg-0 ps-sm-4 sm:px-0 px-4">
                                        <div className="timeline_card_title">
                                            <h3 className='text-3xl text-[#1b2c5c] font-bold'>Node Js</h3>
                                        </div>
                                        <div className="timeline_card_description py-4 text-base font-medium xl:pr-4 text-[#1b2c5c]">
                                            <p>Skynet Silicon provides powerful, server-side solutions using Node.js to drive your backend development needs. We deliver secure, fast, and scalable APIs and server applications that integrate seamlessly with your front-end and business operations. Our team ensures optimized performance and reliability, making your Node.js applications the backbone of your company's growth with consistent support and maintenance.</p>
                                        </div>
                                        <div className="timeline_card_btn justify-center lg:invisible lg:opacity-0 transition-all duration-100 linear">
                                            <Button className="primary-btn py-0 transition-all duration-100 linear uppercase" label="Node Js Development" bgColor='bg-gradient-to-r from-[#a0fd8b] to-[#339d1b]' />
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline_card relative z-[9] flex items-center after:bg-gradient-to-r sm:hover:after:bg-gradient-to-r from-[#bdd9ff] to-[#105fc7] py-5 sm:border-l-[6px] sm:border-[#3B7BCE] cursor-pointer">
                                    <img src="https://www.digitalsilk.com/wp-content/uploads/2024/09/g10.svg" className='sm:block hidden me-10' alt="" />
                                    <div className="timeline_card_content ps-lg-0 ps-sm-4 sm:px-0 px-4">
                                        <div className="timeline_card_title">
                                            <h3 className='text-3xl font-bold text-[#1b2c5c]'>Wordpress</h3>
                                        </div>
                                        <div className="timeline_card_description py-4 text-base font-medium xl:pr-4 text-[#1b2c5c]">
                                            <p>Skynet Silicon creates fully customized, high-performing WordPress websites that precisely complement your brand and company objectives. Our professionals craft smooth, intuitive user experiences that increase interaction and conversions. We guarantee that your WordPress website stays scalable, safe, and optimized as your company expands with strong security features and continuous support.</p>
                                        </div>
                                        <div className="timeline_card_btn justify-center lg:invisible lg:opacity-0 transition-all duration-100 linear">
                                        <Button className="primary-btn py-0 transition-all duration-100 linear uppercase" label="Wordpress Development" bgColor='bg-gradient-to-r from-[#92bfff] to-[#105fc7]' />
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline_card relative z-[9] flex items-center after:bg-gradient-to-r sm:hover:after:bg-gradient-to-r from-[#e8ffa9] to-[#97c024] py-5 sm:border-l-[6px] sm:border-[#97c024] cursor-pointer">
                                    <img src="https://www.freeiconspng.com/thumbs/android-icon/android-png-0.png" className='sm:block hidden -ms-20 me-10 img-fluid max-w-52' alt="" />
                                    <div className="timeline_card_content ps-lg-0 ps-sm-4 sm:px-0 px-4">
                                        <div className="timeline_card_title">
                                            <h3 className='text-3xl font-bold text-[#1b2c5c]'>Android</h3>
                                        </div>
                                        <div className="timeline_card_description py-4 text-base font-medium text-[#1b2c5c] xl:pr-4">
                                            <p>Skynet Silicon offers fully customized, feature-rich Android applications designed to meet your specific business objectives. Our developers craft user-friendly, secure, and scalable apps that enhance customer engagement and deliver outstanding performance. Whether you're building an e-commerce app, a social platform, or a productivity tool, we guarantee a solution optimized for success on the Android platform with ongoing updates and robust support.</p>
                                        </div>
                                        <div className="timeline_card_btn justify-center lg:invisible lg:opacity-0 transition-all duration-100 linear">
                                        <Button className="primary-btn py-0 transition-all duration-100 linear uppercase" label="Android Development" color='text-[#fff]' bgColor='bg-gradient-to-r from-[#defe87] to-[#8fc204]' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Timeline
