import React from 'react';
import { BrandsSlider, Button } from '../index';
import { workingBrands } from '../brandItems';
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";

const TopBrands = () => {
    // Typewrite Effect
    const words = [
        {
            text: " Web",
        },
        {
            text: "Mobile",
        },
        {
            text: "&",
        },
        {
            text: "Marketing Experts",
        },
    ];

    return (
        <>
            <section id="topBrands" data-scroll-section className='pt-20 pb-12' style={{ background: 'linear-gradient(90deg, rgba(0,15,55,1) 3%, rgba(2,100,167,1) 44%, rgba(32,15,82,1) 75%)' }}>
                <div className="container mb-20">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="top-brands-info">
                                <h5 className='text-2xl text-white uppercase font-bold'>Clients Across Industries</h5>
                                <h4 className='sm:text-5xl text-3xl text-white uppercase font-bold my-4 flex items-center'><span className='mb-2 pr-[10px]'>SKYNET SILICON - </span> <TypewriterEffectSmooth words={words} /></h4>
                                <p className='text-xl sm:text-2xl text-white font-normal'>
                                    <span className='text-2xl sm:text-3xl font-medium'>we create custom solutions that grow brands online</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <BrandsSlider bannerHeight='18vh' sliderGap="mb-4" items={workingBrands} itemBgColor='#4c86d21a' scrollPosition='left' scrollTo="scrollLeft" itemWidth='300px' className="flex flex-column justify-center items-center" bgColor="none !important" />
                {/* <BrandsSlider bannerHeight='18vh' sliderGap="mb-4" items={workingBrands} itemBgColor='#4c86d21a' scrollPosition='right' scrollTo="scrollRight" itemWidth='300px' className="flex flex-column justify-center items-center" bgColor="none !important" /> */}

                {/* <div className="flex justify-center mt-14">
                    <Button className='primary-btn text-white hover:text-white' label={"EXPLORE ALL SERVICES"} />
                </div> */}

            </section >
        </>
    )
}



export default TopBrands
