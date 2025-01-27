import React from 'react';
import HeaderOverlay from '../Home Page Components/Header Overlay/HeaderOverlay';
import "./header.css";

const Header = ({
    bgColor = "",
    minHeight = "h-[100vh]",
    isHeroImagesContained = true,
    content = "",
    isActive,
    ...props
}) => {
    return (
        <header className={`header ${minHeight} overflow-hidden relative flex items-center justify-center`}>

            <div className={`absolute w-screen h-screen ${bgColor} z-[2] opacity-70`}></div>

            <div className="header_content text-center z-[9] mt-[10vh] px-3">
                <h2 className="header_primary_heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white font-bold leading-tight">Transforming Ideas <br className='sm:block hidden' />
                    into Digital Success Stories</h2>
                <h1 className="header_secondary_heading text-2xl lg:text-3xl xl:text-4xl text-white font-bold mt-4">Innovate. Inspire. Achieve – with SKYNET SILICON</h1>
            </div>
            {
                isHeroImagesContained && <div className="header_overlay_images absolute z-[1] opacity-[.6] lg:max-w-[80vw] max-w-[100vw]">
                    <HeaderOverlay />
                </div>
            }
        </header>
    )
}

export default Header
