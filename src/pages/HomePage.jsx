import React, { useState } from "react";
import "./hello.css"
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import BrandsSlider from "../components/Brands/BrandsSlider"
import { heroBrands } from "../components/brandItems";

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
            <Header />
            <div className="bg-[#03042a]">
              <BrandsSlider sliderGap="mb-4" items={heroBrands} scrollPosition='left' scrollTo="scrollLeft" itemHeight='160px' itemWidth='300px' className="flex flex-column justify-center items-center" bgColor="#000 !important" />
            </div>
          </div>

          <div className="shadow one"></div>
          <div className="shadow two"></div>
        </div>

        <div className={`links ${isClick ? "opacity-100" : "opacity-0"}`}>
          <ul>
            <li>
              <a href="#" style={{ "--i": "0.05s" }}>About</a>
            </li>
            <li>
              <a href="#" style={{ "--i": "0.1s" }}>Services</a>
            </li>
            <li>
              <a href="#" style={{ "--i": "0.15s" }}>Work History</a>
            </li>
            <li>
              <a href="#" style={{ "--i": "0.2s" }}>Digital Trends</a>
            </li>
            <li>
              <a href="#" style={{ "--i": "0.3s" }}>Contact</a>
            </li>
            <div className="quote mt-10">
              <button className="text-white text-3xl">Request a Quote</button>
            </div>
          </ul>

        </div>
      </div>
    </>
  );
};

export default HomePage;
