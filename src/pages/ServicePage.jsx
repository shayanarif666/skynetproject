import React, { useState } from "react";
import "./style.css"
import { Footer, Navbar, NavbarMenuItems, ServiceDetails, ServiceHeader, Subscribe, TopBrands, WhyUs, WhyWeUse } from "../components/index";

const ServicePage = () => {

    const [isClick, setIsClick] = useState(false);

    const handleSideMenu = () => {
        setIsClick(!isClick);
    }

    return (
        <>
            <div className={`container-full h-screen w-screen ${isClick ? "active overflow-y-hidden h-screen" : ""}`}>

                <Navbar onSideMenuChange={handleSideMenu} isClick={isClick} />

                <div className={`main-container `}>
                    <div className={`main w-full h-screen z-50 origin-left transition-all duration-500`}>
                        <ServiceHeader />
                        <main id="main_sections" className={`transition-all ease-in ${isClick ? "opacity-0 pointer-events-none" : "opacity-100"
                            }`}>
                            <ServiceDetails />
                            <TopBrands />
                            <WhyUs />
                            <Subscribe />
                            <WhyWeUse />
                            <Footer />
                        </main>
                    </div>

                    <div className={`shadow one`}></div>
                    <div className={`shadow two`}></div>
                </div>

                <NavbarMenuItems isClick={isClick} />

            </div>
        </>
    )
}

export default ServicePage
