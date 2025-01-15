import React from 'react';
import { BrandsSlider } from '../../index';
import { workingBrands } from '../../brandItems';

const TopBrands = () => {
    return (
        <>
            <section id="topBrands" data-scroll-section className='pt-20 pb-12' style={{ background: 'linear-gradient(90deg, rgba(0,15,55,1) 3%, rgba(2,100,167,1) 44%, rgba(32,15,82,1) 75%)' }}>
                <div className="container mb-20">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="top-brands-info">
                                <h5 className='text-2xl text-white uppercase font-bold'>Clients Across Industries</h5>
                                <h4 className='sm:text-5xl text-3xl text-white uppercase font-bold my-4'>Full-Service Web Design Agency</h4>
                                <p className='text-xl sm:text-2xl text-white font-normal'>From startups to Fortune 500 companies <br />
                                    <span className='text-2xl sm:text-3xl font-medium'>we create custom solutions that grow brands online</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <BrandsSlider sliderGap="mb-4" items={workingBrands} scrollPosition='left' scrollTo="scrollLeft" itemHeight='150px' itemWidth='300px' className="flex flex-column justify-center items-center" height="160px" bgColor="none !important" border="1px solid rgba(31, 60, 128, .2)" itemBgColor="rgba(31, 60, 128, .2)" />
                <BrandsSlider sliderGap="mb-4" items={workingBrands} scrollPosition='right' scrollTo="scrollRight" itemHeight='150px' itemWidth='300px' className="flex flex-column justify-center items-center" height="160px" bgColor="none !important" border="1px solid rgba(31, 60, 128, .2)" itemBgColor="rgba(31, 60, 128, .2)" />

                <div className="row">
                    <div className="col-12 flex justify-center mt-5">
                        <button className='glowingButton'>
                            <span className='me-3'>EXPLORE ALL SERVICES</span>
                            <span>➤</span>
                        </button>
                    </div>
                </div>

            </section >
        </>
    )
}



export default TopBrands
