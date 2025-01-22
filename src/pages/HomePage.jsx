import React, { useState } from "react";
import "./style.css"
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import BrandsSlider from "../components/Brands/BrandsSlider"
import { heroBrands } from "../components/brandItems";
import NavbarMenuItems from "../components/Navbar/NavbarMenuItems";

const HomePage = () => {

  const [isClick, setIsClick] = useState(false);

  const handleSideMenu = () => {
    setIsClick(!isClick);
  }

  return (
    <>
      <div className={`container-full ${isClick ? "active" : ""}`}>

        <Navbar onSideMenuChange={handleSideMenu} />

        <div className="main-container">
          <div className="main">
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
