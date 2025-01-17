import React from 'react';
import "./timeline.css";

const Timeline = () => {
    return (
        <>
            <section id="timeline_section" className='timeline_section bg-white overflow-x-hidden'>
                <div className="container-fluid lg:px-5">
                    <div className="row gx-0">
                        <div className="col-lg-6 py-20 px-4 bg-white timeline_section_left_column">
                            <div className="timeline_left_section sticky top-24 min-h-2">
                                <div className="timeline_left_content">
                                    <h2 className='text-[#1b2c5c] font-bold text-4xl md:text-5xl lg:text-4xl xl:text-5xl xxl:text-6xl'>CMS Platform Tailored For Client Needs</h2>
                                    <p className='text-lg font-medium text-[#1b2c5c] mt-4'>No matter which Content Management System (CMS) your website utilizes, our experts are here to help. We tailor our services to meet your specific needs, ensuring your CMS is optimized for performance, flexibility, and ease of use.</p>
                                </div>
                                <div className="timeline_left_img mt-4">
                                    <img src="https://www.digitalsilk.com/wp-content/uploads/2024/10/CMS-Platform-Tailored-For-Client-Needs.png.webp" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="timeline_right_section">
                                <div className="timeline_card flex items-center after:bg-gradient-to-r sm:hover:after:bg-gradient-to-r from-[#c6eff9] to-[#61dbfb] py-5 sm:border-l-4 sm:border-[#61dbfb]">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" className='-ms-20 me-10 img-fluid max-w-52 d-lg-block d-none' alt="" />
                                    <div className="timeline_card_content ps-lg-0 ps-sm-4 sm:px-0 px-4">
                                        <div className="timeline_card_title">
                                            <h3 className='text-3xl font-bold text-[#1b2c5c]'>React Js</h3>
                                        </div>
                                        <div className="timeline_card_description py-4 text-sm xl:text-base font-medium text-[#1b2c5c] xl:pr-4">
                                            <p>At Digital Silk, we deliver high-performance, fully customized WordPress websites that align perfectly with your brand and business goals. Our experts create seamless, user-friendly experiences designed to drive engagement and conversions. With robust security measures and ongoing support, we ensure your WordPress site remains optimized, secure, and scalable as your business grows.</p>
                                        </div>
                                        <div className="timeline_card_btn">
                                            <button className='glowingButton'>
                                                <span className='me-3'>EXPLORE ALL SERVICES</span>
                                                <span>➤</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline_card flex items-center after:bg-gradient-to-r sm:hover:after:bg-gradient-to-r from-[#c1ffb3] to-[#529f41]  py-5 sm:border-l-4 sm:border-[#529f41]">
                                    <img src="https://static-00.iconduck.com/assets.00/node-js-icon-1817x2048-g8tzf91e.png" className='d-lg-block d-none me-10 max-w-52 -ms-20' alt="" />
                                    <div className="timeline_card_content ps-lg-0 ps-sm-4 sm:px-0 px-4">
                                        <div className="timeline_card_title">
                                            <h3 className='text-3xl text-[#1b2c5c] font-bold'>Node Js</h3>
                                        </div>
                                        <div className="timeline_card_description py-4 text-base font-medium xl:pr-4 text-[#1b2c5c]">
                                            <p>At Digital Silk, we deliver high-performance, fully customized WordPress websites that align perfectly with your brand and business goals. Our experts create seamless, user-friendly experiences designed to drive engagement and conversions. With robust security measures and ongoing support, we ensure your WordPress site remains optimized, secure, and scalable as your business grows.</p>
                                        </div>
                                        <div className="timeline_card_btn d-sm-block d-flex justify-center">
                                            <button className='glowingButton'>
                                                <span className='me-3'>EXPLORE ALL SERVICES</span>
                                                <span>➤</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline_card flex items-center after:bg-gradient-to-r sm:hover:after:bg-gradient-to-r from-[#bdd9ff] to-[#3B7BCE] py-5 sm:border-l-4 sm:border-[#3B7BCE]">
                                    <img src="https://www.digitalsilk.com/wp-content/uploads/2024/09/g10.svg" className='d-lg-block d-none me-10' alt="" />
                                    <div className="timeline_card_content ps-lg-0 ps-sm-4 sm:px-0 px-4">
                                        <div className="timeline_card_title">
                                            <h3 className='text-3xl font-bold text-[#1b2c5c]'>Wordpress</h3>
                                        </div>
                                        <div className="timeline_card_description py-4 text-base font-medium xl:pr-4 text-[#1b2c5c]">
                                            <p>At Digital Silk, we deliver high-performance, fully customized WordPress websites that align perfectly with your brand and business goals. Our experts create seamless, user-friendly experiences designed to drive engagement and conversions. With robust security measures and ongoing support, we ensure your WordPress site remains optimized, secure, and scalable as your business grows.</p>
                                        </div>
                                        <div className="timeline_card_btn d-sm-block d-flex justify-center">
                                            <button className='glowingButton'>
                                                <span className='me-3'>EXPLORE ALL SERVICES</span>
                                                <span>➤</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline_card flex items-center after:bg-gradient-to-r sm:hover:after:bg-gradient-to-r from-[#e8ffa9] to-[#97c024] py-5 sm:border-l-4 sm:border-[#97c024]">
                                    <img src="https://www.freeiconspng.com/thumbs/android-icon/android-png-0.png" className='d-lg-block d-none -ms-20 me-10 img-fluid max-w-52' alt="" />
                                    <div className="timeline_card_content ps-lg-0 ps-sm-4 sm:px-0 px-4">
                                        <div className="timeline_card_title">
                                            <h3 className='text-3xl font-bold text-[#1b2c5c]'>Android</h3>
                                        </div>
                                        <div className="timeline_card_description py-4 text-base font-medium text-[#1b2c5c] xl:pr-4">
                                            <p>At Digital Silk, we deliver high-performance, fully customized WordPress websites that align perfectly with your brand and business goals. Our experts create seamless, user-friendly experiences designed to drive engagement and conversions. With robust security measures and ongoing support, we ensure your WordPress site remains optimized, secure, and scalable as your business grows.</p>
                                        </div>
                                        <div className="timeline_card_btn d-sm-block d-flex justify-center">
                                            <button className='glowingButton'>
                                                <span className='me-3'>EXPLORE ALL SERVICES</span>
                                                <span>➤</span>
                                            </button>
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
