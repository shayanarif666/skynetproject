import React, { useState } from "react";
import "./style.css"
import { Footer, Navbar, NavbarMenuItems } from "../components/index";
import { ContactHeader } from "../components/index";

const ContactPage = () => {

    const [isClick, setIsClick] = useState(false);

    const handleSideMenu = () => {
        setIsClick(!isClick);
    }

    return (
        <>
            <div className={`container-full w-screen ${isClick ? "active overflow-y-clip" : ""}`} style={{ transformStyle: `${isClick ? "preserve-3d" : ""}` }}>
                <Navbar onSideMenuChange={handleSideMenu} isClick={isClick} />
                <div className={`main-container `}>
                    <div className={`main w-full z-[50] origin-left transition-all duration-500 h-screen ${isClick ? "pointer-events-none" : ""}`}>
                        <ContactHeader />
                        <main id="main_sections" className={`transition-all ease-in ${isClick ? "opacity-0 pointer-events-none" : "opacity-100"
                            }`}>
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

export default ContactPage
