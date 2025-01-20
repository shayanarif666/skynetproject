import React, { useContext, useEffect, useRef } from 'react';
import { HeroImagesOverlay } from '../../index';
import { OpenMenuContext } from '../../../context/MenuContext';
import "./heroSection.css";
import { animate, motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {

    const { isMenuOpen, setIsMenuOpen } = useContext(OpenMenuContext);

    const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
    const color = useMotionValue(COLORS_TOP[0]);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 10%, ${color})`;

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        });
    }, []);

    return (
        <>
            <motion.section id="hero-section" data-scroll-section style={{ backgroundImage, height: isMenuOpen ? "90vh" : "calc(100vh - 114px)", overflow: "hidden", }} className='flex items-center relative'>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12" style={{ zIndex: 9 }}>
                            <div className="hero-section-content text-center" >
                                <h1 className='text-4xl sm:text-7xl xl:text-8xl text-white my-4 font-semibold'>Transforming Ideas <br></br> into Digital Success Stories</h1>
                                <h3 className='text-lg sm:text-2xl text-white mb-12 uppercase font-semibold'>Innovate. Inspire. Achieve – with SKYNET SILICON</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <HeroImagesOverlay />
            </motion.section>
        </>
    )
}

export default HeroSection
