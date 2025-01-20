import React from 'react';
import { PiDesktopTowerBold } from "react-icons/pi";
import { TbDeviceDesktopStar } from "react-icons/tb";
import { VscSettingsGear } from "react-icons/vsc";
import { MdOutlineSendToMobile } from "react-icons/md";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { RiLuggageCartLine } from "react-icons/ri";
import { motion } from 'framer-motion';
import "./homeServices.css";

const HomeServices = () => {
    return (
        <>
            <section id="homeServices" className='py-20'>
                <div className="container">
                    <div className="row g-4">
                        <motion.div initial={{ x: "-300px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 }, x: 0 }} className="col-lg-5 service-intro-column">
                            <div className="service-intro">
                                <h3 className='text-sky-500 font-semibold text-xl mb-4'>WHY SKYNET SILICON?</h3>
                                <h1 className='text-white font-bold text-3xl md:text-4xl xl:text-6xl'>Discover Our Expertise as a Web Design Company</h1>
                                <p className='text-white text-lg mt-5'>As a full-service web design agency, we handle all your digital needs under one roof. Our custom web design
                                    services include thorough research and planning, bespoke designs and digital strategies tailored to grow
                                    your reach, drive traffic and encourage engagement.
                                </p>
                                <img className='img-fluid mt-20' src="https://www.digitalsilk.com/wp-content/uploads/2024/09/Explore-Our-Web-Design-Services-1.png.webp" alt="" />
                            </div>
                        </motion.div>
                        <div className="col-lg-7">
                            <motion.div initial={{ x: "300px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 }, x: 0 }} className="service-detail mb-4">
                                <div className="service-detail-wrapper"></div>
                                <TbDeviceDesktopStar className='text-white text-8xl border-2 border-sky-500 rounded-full p-3' />
                                <h3 className='text-white font-bold text-4xl my-3'>Custom Web Design</h3>
                                <p className='text-white font-semibold text-lg mt-8'>Each website we create is meticulously crafted to deliver a 100% unique online experience tailored to your
                                    brand. Our expert designers transform your vision into a dynamic, custom design that enhances your brand’s
                                    visibility, boosts engagement, and drives conversions. With us, your website will not only stand out but
                                    also connect deeply with your audience. </p>

                                <div className="overlay-circle-one"></div>
                                <div className="overlay-circle-two"></div>
                            </motion.div>
                            <motion.div initial={{ x: "300px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1, delay: .2 }, x: 0 }} className="service-detail mb-4">
                                <div className="service-detail-wrapper"></div>

                                <VscSettingsGear className='text-white text-8xl border-2 border-sky-500 rounded-full p-3' />
                                <h3 className='text-white font-bold text-4xl my-3'>Website Redesign</h3>
                                <p className='text-white font-semibold text-lg mt-8'>Whether you need a design refresh or a complete website overhaul, we analyze your site’s pain points and opportunities to revitalize your digital presence. Our award-winning web designers will breathe new life into your website, enhancing its functionality, user experience, and aesthetic appeal. The result? A modern, dynamic site that drives increased traffic and bolsters your industry reputation.
                                </p>

                                <div className="overlay-circle-one"></div>
                                <div className="overlay-circle-two"></div>
                            </motion.div>
                            <motion.div initial={{ x: "300px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1, delay: .3 }, x: 0 }} className="service-detail mb-4">
                                <div className="service-detail-wrapper"></div>

                                <MdOutlineSendToMobile className='text-white text-8xl border-2 border-sky-500 rounded-full p-3' />
                                <h3 className='text-white font-bold text-4xl my-3'>Responsive Web Design</h3>
                                <p className='text-white font-semibold text-lg mt-8'>We deliver seamless user experiences across all devices. Our responsive designs adapt flawlessly to any screen size, ensuring that your website not only meets but exceeds user expectations. From planning to design and development, we ensure a consistent, engaging experience for every visitor, no matter how they access your site. </p>

                                <div className="overlay-circle-one"></div>
                                <div className="overlay-circle-two"></div>
                            </motion.div>
                            <motion.div initial={{ x: "300px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1, delay: .4 }, x: 0 }} className="service-detail mb-4">
                                <div className="service-detail-wrapper"></div>

                                <FaMagnifyingGlassChart className='text-white text-8xl border-2 border-sky-500 rounded-full p-3' />
                                <h3 className='text-white font-bold text-4xl my-3'>Search Engine Optimization</h3>
                                <p className='text-white font-semibold text-lg mt-8'>We offer a comprehensive range of services designed to boost your website’s ranking and attract organic, non-paid Google search traffic. Our team can conduct a thorough SEO audit of your website, providing actionable insights and strategies to enhance your organic reach and visibility on search engines.</p>

                                <div className="overlay-circle-one"></div>
                                <div className="overlay-circle-two"></div>
                            </motion.div>
                            <motion.div initial={{ x: "300px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1, delay: .5 }, x: 0 }} className="service-detail mb-4">
                                <div className="service-detail-wrapper"></div>

                                <RiLuggageCartLine className='text-white text-8xl border-2 border-sky-500 rounded-full p-3' />
                                <h3 className='text-white font-bold text-4xl my-3'>eCommerce Design & Development</h3>
                                <p className='text-white font-semibold text-lg mt-8'>Each website we create is meticulously crafted to deliver a 100% unique online experience tailored to your brand. Our expert designers transform your vision into a dynamic, custom design that enhances your brand’s visibility, boosts engagement, and drives conversions. With us, your website will not only stand out but also connect deeply with your audience.</p>

                                <div className="overlay-circle-one"></div>
                                <div className="overlay-circle-two"></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeServices

