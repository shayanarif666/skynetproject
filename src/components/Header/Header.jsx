import React from 'react';
import HeroImagesOverlay from '../HomePage/Hero Section Images Overlay/HeroImagesOverlay';
import "./header.css";

const Header = () => {
    return (
        <header className="header min-h-[85vh] overflow-hidden relative flex items-center justify-center">

            <div className="absolute w-screen h-screen bg-gradient-to-r from-[#512f87] to-[#00041c] z-[2] opacity-70"></div>

            <div className="header_content text-center z-[9] px-">
                <h2 className="header_primary_heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-tight">Transforming Ideas <br className='sm:block hidden' />
                into Digital Success Stories</h2>
                <h1 className="header_secondary_heading text-2xl lg:text-3xl xl:text-4xl text-white font-bold mt-4">Innovate. Inspire. Achieve – with SKYNET SILICON</h1>
            </div>

            <div className="hero_section_images absolute z-[1] opacity-[.6] lg:max-w-[80vw] max-w-[100vw]">
                <HeroImagesOverlay />
            </div>
        </header>
    )
}

export default Header
