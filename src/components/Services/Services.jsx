import React from 'react';
import { TbDeviceDesktopStar } from "react-icons/tb";
import { VscSettingsGear } from "react-icons/vsc";
import { MdOutlineSendToMobile } from "react-icons/md";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { RiLuggageCartLine } from "react-icons/ri";
import { motion } from 'framer-motion';
import custom_web_image from "/Images/Services/custom_web_design-min.webp";
import responsive_web_image from "/Images/Services/responsive_design-min.webp";
import seo_web_image from "/Images/Services/seo-min.webp";
import uiux_web_image from "/Images/Services/ux_ui_design-min.webp";
import redesign_web_image from "/Images/Services/website_redesign-min.webp";
import ecommerce_web_image from "/Images/Services/e_commerce_design-min.webp";
import "./services.css";

const Services = ({
    title,
    description,
    services = [],
    ...props
}) => {
    return (
        <>
            <section id="services" className='py-20 bg-[#00042a] relative overflow-clip'>
                <div className="container">
                    <div className="lg:flex g-4">
                        <motion.div viewport={{ once: true }} initial={{ x: "-300px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 }, x: 0 }} className="w-full lg:w-2/5 service-intro-column">
                            <div className="service-intro min-h[40%] sticky top-0 p-[2rem]">
                                <h3 className='text-sky-500 font-semibold text-xl mb-4'>WHY SKYNET SILICON?</h3>
                                <h1 className='text-white font-bold text-3xl md:text-4xl xl:text-6xl'>{title}</h1>
                                <p className='text-white text-lg mt-5'>{description}</p>
                                <img className='img-fluid mt-20' src="https://www.digitalsilk.com/wp-content/uploads/2024/09/Explore-Our-Web-Design-Services-1.png.webp" alt="" />
                            </div>
                        </motion.div>
                        <div className="service_detail_before_effect w-full lg:w-3/5">
                            <motion.div viewport={{ once: true }} initial={{ x: "300px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 }, x: 0 }} className="service-detail group mb-4 bg-[#070b30] px-[4rem] py-[3rem] relative overflow-hidden w-full z-[999] hover:w-[60vw] cursor-pointer">
                                <div className="service-detail-wrapper block absolute top-0 left-0 w-full h-full z-[-1] invisible transition-all duration-300 opacity-0 bg-white" style={{ background: `url(${custom_web_image})` }}></div>
                                <TbDeviceDesktopStar className='text-white text-8xl border-2 border-sky-500 rounded-full p-3' />
                                <h3 className='text-white font-bold text-3xl sm:text-4xl my-3 group-hover:text-[#00042a]'>Custom Web Design</h3>
                                <p className='text-white font-semibold text-lg mt-8 group-hover:text-[#00042a]'>Each website we create is meticulously crafted to deliver a 100% unique online experience tailored to your
                                    brand. Our expert designers transform your vision into a dynamic, custom design that enhances your brand’s
                                    visibility, boosts engagement, and drives conversions. With us, your website will not only stand out but
                                    also connect deeply with your audience. </p>

                                <div className="overlay-circle-one block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[320px] h-[320px] bg-[#7e57c2] right-0 bottom-[-50%]"></div>
                                <div className="overlay-circle-two block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[270px] h-[270px] bg-[#00b9ff] right-[-10%] top-[20%]"></div>
                            </motion.div>
                            <motion.div viewport={{ once: true }} initial={{ x: "300px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 }, x: 0 }} className="service-detail mb-4 bg-[#070b30] px-[4rem] py-[3rem] relative overflow-hidden w-full z-[999] hover:w-[60vw] cursor-pointer">
                                <div className="service-detail-wrapper block absolute top-0 left-0 w-full h-full z-[-1] invisible transition-all duration-300 opacity-0 bg-white" style={{ background: `url(${redesign_web_image})` }}></div>

                                <VscSettingsGear className='text-white text-8xl border-2 border-sky-500 rounded-full p-3' />
                                <h3 className='text-white font-bold text-3xl sm:text-4xl my-3'>Website Redesign</h3>
                                <p className='text-white font-semibold text-lg mt-8'>Whether you need a design refresh or a complete website overhaul, we analyze your site’s pain points and opportunities to revitalize your digital presence. Our award-winning web designers will breathe new life into your website, enhancing its functionality, user experience, and aesthetic appeal. The result? A modern, dynamic site that drives increased traffic and bolsters your industry reputation.
                                </p>

                                <div className="overlay-circle-one block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[320px] h-[320px] bg-[#7e57c2] right-0 bottom-[-50%]"></div>
                                <div className="overlay-circle-two block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[270px] h-[270px] bg-[#00b9ff] right-[-10%] top-[20%]"></div>
                            </motion.div>
                            <motion.div viewport={{ once: true }} initial={{ x: "300px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 }, x: 0 }} className="service-detail mb-4 bg-[#070b30] px-[4rem] py-[3rem] relative overflow-hidden w-full z-[999] hover:w-[60vw] cursor-pointer">
                                <div className="service-detail-wrapper block absolute top-0 left-0 w-full h-full z-[-1] invisible transition-all duration-300 opacity-0 bg-white" style={{ background: `url(${responsive_web_image})` }}></div>

                                <MdOutlineSendToMobile className='text-white text-8xl border-2 border-sky-500 rounded-full p-3' />
                                <h3 className='text-white font-bold text-3xl sm:text-4xl my-3'>Responsive Web Design</h3>
                                <p className='text-white font-semibold text-lg mt-8'>We deliver seamless user experiences across all devices. Our responsive designs adapt flawlessly to any screen size, ensuring that your website not only meets but exceeds user expectations. From planning to design and development, we ensure a consistent, engaging experience for every visitor, no matter how they access your site. </p>

                                <div className="overlay-circle-one block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[320px] h-[320px] bg-[#7e57c2] right-0 bottom-[-50%]"></div>
                                <div className="overlay-circle-two block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[270px] h-[270px] bg-[#00b9ff] right-[-10%] top-[20%]"></div>
                            </motion.div>
                            <motion.div viewport={{ once: true }} initial={{ x: "300px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 }, x: 0 }} className="service-detail mb-4 bg-[#070b30] px-[4rem] py-[3rem] relative overflow-hidden w-full z-[999] hover:w-[60vw] cursor-pointer">
                                <div className="service-detail-wrapper block absolute top-0 left-0 w-full h-full z-[-1] invisible transition-all duration-300 opacity-0 bg-white" style={{ background: `url(${seo_web_image})` }}></div>

                                <FaMagnifyingGlassChart className='text-white text-8xl border-2 border-sky-500 rounded-full p-3' />
                                <h3 className='text-white font-bold text-3xl sm:text-4xl my-3'>Search Engine Optimization</h3>
                                <p className='text-white font-semibold text-lg mt-8'>We offer a comprehensive range of services designed to boost your website’s ranking and attract organic, non-paid Google search traffic. Our team can conduct a thorough SEO audit of your website, providing actionable insights and strategies to enhance your organic reach and visibility on search engines.</p>

                                <div className="overlay-circle-one block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[320px] h-[320px] bg-[#7e57c2] right-0 bottom-[-50%]"></div>
                                <div className="overlay-circle-two block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[270px] h-[270px] bg-[#00b9ff] right-[-10%] top-[20%]"></div>
                            </motion.div>
                            <motion.div viewport={{ once: true }} initial={{ x: "300px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 }, x: 0 }} className="service-detail mb-4 bg-[#070b30] px-[4rem] py-[3rem] relative overflow-hidden w-full z-[999] hover:w-[60vw] cursor-pointer">
                                <div className="service-detail-wrapper block absolute top-0 left-0 w-full h-full z-[-1] invisible transition-all duration-300 opacity-0 bg-white" style={{ background: `url(${uiux_web_image})` }}></div>

                                <FaMagnifyingGlassChart className='text-white text-8xl border-2 border-sky-500 rounded-full p-3' />
                                <h3 className='text-white font-bold text-3xl sm:text-4xl my-3'>UX/UI Web Design</h3>
                                <p className='text-white font-semibold text-lg mt-8'>Our award-winning designers use trusted methods and innovative approaches to create engaging visual experiences and seamless user journeys. Whether you’re looking to build a custom UX/UI or redesign your current one, we’ll enhance your visual identity and ensure your website is both aesthetically pleasing and highly functional.</p>

                                <div className="overlay-circle-one block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[320px] h-[320px] bg-[#7e57c2] right-0 bottom-[-50%]"></div>
                                <div className="overlay-circle-two block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[270px] h-[270px] bg-[#00b9ff] right-[-10%] top-[20%]"></div>
                            </motion.div>
                            <motion.div viewport={{ once: true }} initial={{ x: "300px", opacity: 0 }} whileInView={{ opacity: 1, transition: { duration: 1 }, x: 0 }} className="service-detail mb-4 bg-[#070b30] px-[4rem] py-[3rem] relative overflow-hidden w-full z-[999] hover:w-[60vw] cursor-pointer">
                                <div className="service-detail-wrapper block absolute top-0 left-0 w-full h-full z-[-1] invisible transition-all duration-300 opacity-0 bg-white" style={{ background: `url(${ecommerce_web_image})` }}></div>

                                <RiLuggageCartLine className='text-white text-8xl border-2 border-sky-500 rounded-full p-3' />
                                <h3 className='text-white font-bold text-3xl sm:text-4xl my-3'>eCommerce Design & Development</h3>
                                <p className='text-white font-semibold text-lg mt-8'>Each website we create is meticulously crafted to deliver a 100% unique online experience tailored to your brand. Our expert designers transform your vision into a dynamic, custom design that enhances your brand’s visibility, boosts engagement, and drives conversions. With us, your website will not only stand out but also connect deeply with your audience.</p>

                                <div className="overlay-circle-one block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[320px] h-[320px] bg-[#7e57c2] right-0 bottom-[-50%]"></div>
                                <div className="overlay-circle-two block rounded-full absolute blur-2xl invisible opacity-0 transition-all duration-300 ease-in-out w-[270px] h-[270px] bg-[#00b9ff] right-[-10%] top-[20%]"></div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services;

