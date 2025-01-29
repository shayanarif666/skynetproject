import React, { useState } from 'react';
import { BeatLoader } from 'react-spinners';
import { useCollapse } from "react-collapsed";
import "./css/serviceDetail.css";
import ServicePortfolioImages from './ServicePortfolioImages';
import { Button } from '../index';

const ServiceDetails = () => {
    // Error Handling
    const [loading, setLoading] = useState(false);
    const [openIndex, setOpenIndex] = useState(0);

    const handleToggle = (index) => {
        if (openIndex !== index) {
            setOpenIndex(index);
        }
    };

    const serviceOffers = [
        {
            title: "Custom Web Design",
            content: "Make use of our award-winning designers' skills to create a completely unique website for your company. Our web design deliverables include SEO to increase site traffic, customized UX and UI design, and research, analysis, and planning. Our design team will collaborate closely with your website strategy to create a unique design that increases brand awareness, engagement, and conversions, including branded animations, unique iconography, and a well-thought-out conversion funnel."
        },
        {
            title: "Redesign of a Custom Website",
            content: "Utilize the expertise of our award-winning designers to develop a wholly original website for your business. Our web design deliverables include research, analysis, and planning; SEO to boost site traffic; and personalized UX and UI design. Using branded animations, distinctive iconography, and a carefully considered conversion funnel, our design team will work closely with your website plan to produce a distinctive design that boosts brand awareness, engagement, and conversions."
        },
        {
            title: "Personalized End-to-End Creationn",
            content: "We create custom websites on all of the top platforms in the market that are scalable, on-brand, admin-friendly, and fully optimized. Utilize our comprehensive custom web design deliverables, which include quality assurance, UX & UI design, search engine optimization, and careful website planning."
        }
    ];

    return (
        <>
            <section id="service_details" className='bg-[#00042a] py-24'>
                <div className="container">

                    <div className="lg:flex">
                        <div className="service_details_explanation z-[9] lg:w-[60%]">
                            <h1 className='text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug'>Services for Creating Custom Websites</h1>
                            <p className='text-white text-[20px] mt-10'>Skynet Silicon is a full-service agency comprised of leading web designers from around the globe. Whether building a website from scratch or redesigning your current digital presence, our web design services include:</p>
                            <div className="service_offers mt-14">
                                {serviceOffers.map((offer, index) => {
                                    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({ isExpanded: openIndex === index });
                                    return (
                                        <div className={`service_offer_card mb-10 ${isExpanded ? "isActiveService" : ""}`} key={index}>
                                            <button {...getToggleProps({ onClick: () => handleToggle(index) })} className='text-3xl font-bold text-[#04e4ff]'>
                                                {offer.title}
                                            </button>
                                            <div {...getCollapseProps()} className='service_offer_card_content mt-3'>
                                                <p className='text-white text-[20px] leading-relaxed'>{offer.content}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="service_detail_form lg:w-[35%] lg:ml-[5%] bg-white h-full p-10">
                            <h3 className='text-[#1092fd] text-3xl font-bold'>Request A Quote</h3>
                            <h2 className='text-[#123c76] font-bold leading-snug text-3xl mt-6'>Maximize Your Website’s Potential With Skynet Silicon</h2>
                            <form action="">
                                <input type="name" name='name' placeholder='Name*' className='placeholder:text-lg py-3 focus:shadow-none focus:border-inherit form-control mt-6' />
                                <input type="name" name='Company Name' placeholder='Company Name*' className='placeholder:text-lg py-3 focus:shadow-none focus:border-inherit form-control mt-6' />
                                <input type="email" name='email' placeholder='Email*' className='placeholder:text-lg py-3 focus:shadow-none focus:border-inherit form-control mt-6' />
                                <input type="number" name='number' placeholder='Phone*' className='placeholder:text-lg py-3 focus:shadow-none focus:border-inherit form-control mt-6' />
                                <textarea name='message' placeholder='Message*' className='mb-6 placeholder:text-lg py-3 focus:shadow-none focus:border-inherit form-control mt-6' />
                                <Button className='primary-btn text-base' label={"Submit"} />
                            </form>
                        </div>
                    </div>

                    {/* <ServicePortfolioImages /> */}

                </div>
            </section>
        </>
    );
};

export default ServiceDetails;
