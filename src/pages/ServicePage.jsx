import React, { useEffect, useState } from "react";
import "./style.css"
import { Footer, Navbar, NavbarMenuItems, ServiceDetails, ServiceHeader, Subscribe, TopBrands, WhyUs, WhyWeUse } from "../components/index";
import { useParams } from "react-router-dom";

const ServicePage = () => {

    // State Variables
    const [isClick, setIsClick] = useState(false);
    const [service, setService] = useState(null);

    // Handle Aside Menu
    const handleSideMenu = () => {
        setIsClick(!isClick);
    }

    // Get Params
    const { category } = useParams();

    // Service Api Call
    useEffect(() => {
        let isMounted = true;

        (async () => {
            try {
                const response = await fetch(`https://skynetsiliconserver.vercel.app/api/services/${category}`);
                const data = await response.json();
                if (isMounted) {
                    setService(data);
                    console.log("Fetched Data:", data);
                }
            } catch (error) {
                console.log("Error fetching service data:", error);
            }
        })();

        return () => {
            isMounted = false; // Cleanup function to prevent state updates on unmounted components
            // setService(null)
        };
    }, [category]);

    return (
        <>


            <div className={`container-full h-screen w-screen ${isClick ? "active overflow-y-hidden h-screen" : ""}`}>
                {service &&
                    <>
                        <Navbar onSideMenuChange={handleSideMenu} isClick={isClick} />

                        <div className={`main-container `}>
                            <div className={`main w-full h-screen z-50 origin-left transition-all duration-500`}>
                                <ServiceHeader service={service} />
                                <main id="main_sections" className={`transition-all ease-in ${isClick ? "opacity-0 pointer-events-none" : "opacity-100"
                                    }`}>
                                    <ServiceDetails service={service} />
                                    <TopBrands />
                                    <WhyUs service={service} />
                                    <Subscribe />
                                    <WhyWeUse service={service} />
                                    <Footer />
                                </main>
                            </div>

                            <div className={`shadow one`}></div>
                            <div className={`shadow two`}></div>
                        </div>

                        <NavbarMenuItems isClick={isClick} />
                    </>
                }
            </div>
        </>
    )
}

export default ServicePage
