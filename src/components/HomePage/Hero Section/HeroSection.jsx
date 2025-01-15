import React, { useContext } from 'react';
import { HeroImagesOverlay } from '../../index';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { OpenMenuContext } from '../../../context/MenuContext';
import "./heroSection.css";

const HeroSection = () => {

    const { isMenuOpen, setIsMenuOpen } = useContext(OpenMenuContext);

    return (
        <>
            <section id="hero-section" data-scroll-section style={{ height: isMenuOpen ? "90vh" : "calc(100vh - 114px)", overflow: "hidden", }} className='flex items-center relative'>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12" style={{ zIndex: 9 }}>
                            <div className="hero-section-content text-center" >
                                <h1 className='text-4xl sm:text-7xl xl:text-8xl text-white my-4 font-semibold'>Transforming Ideas <br></br> into Digital Success Stories</h1>
                                <h3 className='text-lg sm:text-2xl text-white mb-12 uppercase font-semibold'>Innovate. Inspire. Achieve – with SKYNET SILICON</h3>
                                {/* <button className='primary-button border border-white text-3xl flex items-center justify-center'>REQUEST A QUOTE <MdKeyboardDoubleArrowRight className='ms-2 font-semibold' /></button> */}
                            </div>
                        </div>
                    </div>
                </div>
                <HeroImagesOverlay />
            </section>
        </>
    )
}

export default HeroSection
