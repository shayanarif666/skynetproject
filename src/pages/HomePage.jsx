import React, { useState } from "react";
import "./style.css"
import { Header, Navbar, NavbarMenuItems } from "../components/index";

const HomePage = () => {

  const [isClick, setIsClick] = useState(false);

  const handleSideMenu = () => {
    setIsClick(!isClick);
  }

  return (
    <>
      <div className={`container-full h-[100vh] w-[100vw] ${isClick ? "active" : ""}`}>

        <Navbar onSideMenuChange={handleSideMenu} />

        <div className="main-container">
          <div className="main relative w-full left-0 z-50 overflow-x-hidden origin-left border-[#ffffff66] transition-all duration-500">
            <Header bgColor="bg-gradient-to-r from-[#30007d] to-[#000]" />
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
