import React from 'react';
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { GiVibratingShield } from "react-icons/gi";
import "./info.css";

const Info = () => {
    return (
        <>
            <section id="info" className='py-16' data-scroll-section>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1 className='text-5xl text-white font-bold leading-tight'>Creative Web Agency <br /> Delivering Custom Solutions</h1>
                            <div className="info-service mt-5">
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
                            </div>
                            <p className='text-xl text-white mt-5'>Skynet Silicon is a web design company & digital marketing agency focused on growing brands online.
                                We create effective brand strategies, custom web design, development, and digital marketing solutions
                                to generate greater brand engagement and conversions. We work closely with our clients to ensure each
                                project meets their brand guidelines and business goals and provide technical and marketing expertise to
                                ensure optimal results.</p>
                        </div>
                        <div className="col-lg-6">
                            <img src="https://www.digitalsilk.com/wp-content/uploads/2024/06/solutions.png.webp" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Info
