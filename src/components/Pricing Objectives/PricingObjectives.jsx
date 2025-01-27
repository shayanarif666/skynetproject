import React from 'react';
import "./pricingObjectives.css";

const PricingObjectives = () => {
    return (
        <>
            <section id="pricing_features" className='pricing_features pt-20'>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="pricing_features_intro text-center">
                                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold'>Custom Web Design Pricing For <span className='text_gradient leading-snug'>Each Client’s Objectives</span></h1>
                                <p className='text-lg md:text-2xl text-white font-normal mt-5 max-w-5xl mx-auto'>Every website design project comes with unique challenges and specific requirements that influence its final cost. A simple project typically ranges from <span className='text-sky-500 font-bold'>$25,000</span> to <span className='text-sky-500 font-bold'>$30,000</span>, while more complex endeavors can reach <span className='text-sky-500 font-bold'>$50,000</span> to <span className='text-sky-500 font-bold'>$60,000</span> or more.</p>
                                <p className='text-lg md:text-2xl text-white font-normal mt-5 max-w-5xl mx-auto'>The technical setup of your website, which directly impacts its performance, is a key factor in determining cost. More complex setups that demand significant time and effort will naturally increase the overall price.</p>
                                <div className="pricing_features_btn flex justify-center mt-5">
                                    <button className='glowingButton'>
                                        <span className='me-3'>EXPLORE ALL SERVICES</span>
                                        <span>➤</span>
                                    </button>
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
