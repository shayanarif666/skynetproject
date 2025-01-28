import React from 'react';
import { Button } from '../index';
import "./pricingObjectives.css";

const PricingObjectives = () => {
    return (
        <>
            <section id="pricing_features" className='pricing_features pt-20'>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="pricing_features_intro text-center">
                                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold 2xl:max-w-[70%] mx-auto'>Custom Web Design Costs Based on the  <span className='text_gradient leading-snug'>Goals of Each Client</span></h1>
                                <p className='text-lg md:text-2xl text-white font-normal mt-5 max-w-5xl mx-auto'>Every website design project has different requirements and problems, which affect the project's ultimate cost. While more complicated projects can cost <span className='text-sky-500 font-bold'>$50,000</span> to <span className='text-sky-500 font-bold'>$60,000</span> or more. a simple project usually costs between <span className='text-sky-500 font-bold'>$25,000</span> to <span className='text-sky-500 font-bold'>$30,000</span> </p>
                                <p className='text-lg md:text-2xl text-white font-normal mt-5 max-w-5xl mx-auto'>One of the main determinants of cost is your website's technical configuration, which has a direct effect on how well it performs. The total cost will inevitably rise with more intricate configurations that require a lot of time and work.</p>
                                <div className="pricing_features_btn flex justify-center mt-5">
                                    <Button className="primary-btn uppercase " label={"Calculate Your Website"} bgColor='bg-white'></Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-32">
                        <div className="col-lg-3 col-md-6">
                            <div className="pricing_features_list text-center">
                                <h2 className='text-white text-3xl font-bold'>Your choice of platform</h2>
                                <p className='text-white text-base font-normal my-4'>also plays a role in the cost. Templated solutions are more affordable while developing a fully custom site will increase the project’s total expense.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="pricing_features_list text-center">
                                <h2 className='text-white text-3xl font-bold'>Custom graphic elements</h2>
                                <p className='text-white text-base font-normal my-4'>are essential for enhancing your web presence. However, the more complex the design requirements, the higher the overall cost.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="pricing_features_list text-center">
                                <h2 className='text-white text-3xl font-bold'>After launching</h2>
                                <p className='text-white text-base font-normal my-4'>your new website, the next step is to outperform competitors in search engine rankings and secure top positions in your industry.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="pricing_features_list pricing_features_list_after text-center">
                                <h2 className='text-white text-3xl font-bold'>Our full-service</h2>
                                <p className='text-white text-base font-normal my-4'>web design company offers expertise to clients of all sizes. You can use our design cost calculator below for an estimate or schedule a free consultation with one of our experts to discuss your project’s specifics.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PricingObjectives
