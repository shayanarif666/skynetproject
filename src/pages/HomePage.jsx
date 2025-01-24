import React, { useState } from "react";
import "./style.css"
import { Header, Navbar, NavbarMenuItems, ShortCompanyInfo, Services } from "../components/index";

const HomePage = () => {

  const [isClick, setIsClick] = useState(false);

  const handleSideMenu = () => {
    setIsClick(!isClick);
  }

  return (
    <>
      <div className={`container-full h-[100vh] w-[100vw] ${isClick ? "active overflow-hidden" : ""}`}>

        <Navbar onSideMenuChange={handleSideMenu} />

        <div className="main-container">
          <div className={`main w-full z-50 origin-left border-[#ffffff66] transition-all duration-500 h-screen`}>
            <Header bgColor="bg-gradient-to-r from-[#30007d] to-[#000]" />
            <main id="main_sections" className={`transition-all ease-in ${isClick ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}>
              <ShortCompanyInfo />
              <Services title={"Discover Our Expertise as a Web Design Company"} description={"As a full-service web design agency, we handle all your digital needs under one roof. Our custom web design services include thorough research and planning, bespoke designs and digital strategies tailored to grow your reach, drive traffic and encourage engagement."} />
            </main>
          </div>

          <div className="shadow one"></div>
          <div className="shadow two"></div>
        </div>

        <NavbarMenuItems isClick={isClick} />

      </div>
    </>
  );
};

export default HomePage;
