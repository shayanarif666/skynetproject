import React from 'react'

const WhyWeUse = ({
    service = { category: null, featured_list: [], title: "", description: "", category: "" },
}) => {
    return (
        <>
            {service = {} &&
                <section id="why_we_use" className='py-24'>
                    <div className="container text-center">
                        <div className="why_we_use_content">

                            <h2 className='text-4xl font-bold mb-10'>Why Choose <span className='text-[#1092fd]'>Skynet Silicon For {service.category.name || "Loading Service..."}</span></h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                {
                                    service.why_choose_skynet?.map(({ _id, title, description, }, ind) => (
                                        <div className={`md:m-1 lg:m-0 ${ind % 2 !== 0 ? "bg-[#1092fd]" : "bg-[#222]"}  p-10`}>
                                            <h2 className='text-white text-2xl font-semibold'>{title}</h2>
                                            <p className='text-white mt-6 text-sm'>{description}</p>
                                        </div>
                                    ))
                                }
                                {
                                    service.category.name === "App Development" && <div className={`md:m-1 lg:m-0 bg-[#222] p-10`}>
                                        <h2 className='text-white text-2xl font-semibold'>Advanced Security Measures</h2>
                                        <p className='text-white mt-6 text-sm'>We implement encryption, secure authentication, and firewall protection to safeguard your website and app from cyber threats. Our proactive security approach ensures data protection, compliance, and a reliable digital experience for users.</p>
                                    </div>
                                }
                                {
                                    service.category.name === "Web Development" && <div className={`md:m-1 lg:m-0 bg-[#222] p-10`}>
                                        <h2 className='text-white text-2xl font-semibold'>Advanced Security Measures</h2>
                                        <p className='text-white mt-6 text-sm'>We implement encryption, secure authentication, and firewall protection to safeguard your website and app from cyber threats. Our proactive security approach ensures data protection, compliance, and a reliable digital experience for users.</p>
                                    </div>
                                }
                            </div>

                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default WhyWeUse
