import React from 'react';
import "./subscribe.css"

const Subscribe = () => {
    return (
        <>
            <section id="subscribe" className='lg:pt-0 pt-10'>
                <div className="container">
                    <div className="row flex items-center">
                        <div className="col-lg-6">
                            <div className="subscribe-form">
                                <h1 className='text-white text-4xl font-bold'>Stay Ahead in 2025!</h1>
                                <p className='text-white text-2xl lg:text-3xl font-bold my-4'><em className='text-sky-500'>Subscribe</em> Now & Lead the Digital Revolution!</p>
                                <div className="relative">
                                    <input type="email" placeholder='Enter Your Email' className='p-4 form-control bg-transparent w-100 text-white rounded-none border-1 border-gray-600' />
                                    <button className='bg-sky-500 text-white py-3 px-4 uppercase font-medium mt-2 me-2 hover:bg-sky-600 absolute top-0 right-0'>Subscribe</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="subscribe-img">
                                <img src="https://www.digitalsilk.com/wp-content/uploads/2024/12/digitalsilk_whitepaper_2025-1024x768.png.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Subscribe
