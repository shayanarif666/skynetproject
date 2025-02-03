import React from 'react'

const WhyUs = ({ 
    service = { category: null, featured_list: [], title: "", description: "", category: "" },
}) => {

    return (
        <>
            <section id="why_us" className='py-24'>
                <div className="container text-center">
                    <div className="why_we_use_content">

                        <h2 className='text-4xl font-bold mb-10'>For a Top-Performing, You Need <span className='text-[#1092fd]'>{service.category.name|| "Loading Service..."}.</span> <br /> Here’s Why</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                            {
                                service.why_you_need_service?.map((serv, index, arr) => {
                                    console.log(arr)
                                    return (
                                        <div className={`md:m-1 lg:m-0 why_us_content ${index % 2 !== 0 ? "bg-[#1092fd]" : "bg-[#222]"} rounded-[0px] p-10`}>
                                            <h2 className={` text-white  text-2xl font-semibold`}>{serv.title}</h2>
                                            <p className={`text-white mt-6 text-sm`}>{serv.description}</p>
                                        </div>
                                    )
                                })
                            }
                            {
                                service.category.name === "App Development" &&
                                <>
                                    <div className="md:m-1 lg:m-0 why_us_content bg-[#222] rounded-[0px] p-10">
                                        <h2 className={` text-white  text-2xl font-semibold`}>5. Cross-Platform Compatibility</h2>
                                        <p className={`text-white mt-6 text-sm`}>In today’s digital landscape, having a website or app that works seamlessly across different devices and platforms is crucial. Our development process ensures responsive web design and cross-platform mobile app development, making sure your product functions smoothly on iOS, Android, and various screen sizes. This guarantees a consistent user experience, reducing bounce rates and increasing engagement, whether accessed from a smartphone, tablet, or desktop.</p>
                                    </div>
                                    <div className="md:m-1 lg:m-0 why_us_content bg-[#1092fd] p-10">
                                        <h2 className={` text-white  text-2xl font-semibold`}>6. AI & Automation in Development</h2>
                                        <p className={`text-white mt-6 text-sm`}>Integrating AI-powered features and automation in web and mobile development enhances efficiency, personalization, and user engagement. From chatbots for customer service to machine learning-driven recommendations, AI makes applications smarter and more intuitive. Automation streamlines processes like testing, content updates, and data analysis, improving overall performance. By leveraging AI and automation, businesses can stay ahead in a competitive market with intelligent and adaptive digital solutions.</p>
                                    </div>
                                </>
                            }
                            {
                                service.category.name === "Web Development" &&
                                <>
                                    <div className="md:m-1 lg:m-0 why_us_content bg-[#222] rounded-[0px] p-10">
                                        <h2 className={` text-white  text-2xl font-semibold`}>5. AI-Powered Web Development</h2>
                                        <p className={`text-white mt-6 text-sm`}>The future of web development lies in Artificial Intelligence. By integrating AI-driven chatbots, personalized content recommendations, and smart automation, websites can deliver an enhanced user experience. AI-powered analytics help businesses understand user behavior and optimize their platforms for better engagement and conversions. Machine learning algorithms ensure websites adapt dynamically to user needs, making digital platforms more intelligent and user-friendly.</p>
                                    </div>
                                    <div className="md:m-1 lg:m-0 why_us_content bg-[#1092fd] p-10">
                                        <h2 className={` text-white  text-2xl font-semibold`}>6. Progressive Web Applications (PWA)</h2>
                                        <p className={`text-white mt-6 text-sm`}>Progressive Web Applications (PWAs) combine the best of websites and mobile apps, offering a fast, responsive, and offline-capable experience. PWAs load quickly, work across all devices, and provide app-like functionality without requiring downloads from an app store. With improved performance, push notifications, and offline access, PWAs increase engagement and offer a seamless browsing experience, making them an essential part of modern web development.</p>
                                    </div>
                                </>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhyUs
