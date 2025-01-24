import React, { useState } from "react";
import "./style.css"
import { Header, Navbar, NavbarMenuItems, ShortCompanyInfo } from "../components/index";

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
          <div className={`relative left-0 main w-full z-50 origin-left border-[#ffffff66] transition-all duration-500 h-screen`}>
            <Header bgColor="bg-gradient-to-r from-[#30007d] to-[#000]" />
            <main id="main_sections" className={`transition-all ease-in ${isClick ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}>
              <ShortCompanyInfo />
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
