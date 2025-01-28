import React, { useState } from 'react';
import { About, Header, Navbar, NavbarMenuItems, SkynetMean, SkynetVision, ServiceOffers, ValueAddition, Contact, Footer } from "../components/index";
import AboutImage from "/Images/about-us-banner.webp"
import "./style.css";

const AboutPage = () => {

  const [isClick, setIsClick] = useState(false);

  const handleSideMenu = () => {
    setIsClick(!isClick);
  }

  return (
    <>
      <div className={`container-full h-screen w-screen ${isClick ? "active overflow-hidden" : ""}`}>
        <Navbar onSideMenuChange={handleSideMenu} isClick={isClick} />

        <div className={`main-container `}>
          <div className={`main w-full z-[999] origin-left border-[#ffffff66] transition-all duration-500 h-screen`}>
            <Header bgImg={AboutImage} isHeroImagesContained={false} minHeight='h-[70vh]' bgColor="bg-[#2b1360]" title={`About Skynet Silicon`} subTitle="Skynet has a digital heart and a technological mind." />
            <main id="main_sections" className={`transition-all ease-in bg-[#fff] ${isClick ? "pointer-events-none overflow-hidden h-[30vh]" : "opacity-100 h-full"
              }`}>
              <About />
              <SkynetMean />
              <SkynetVision />
              <ServiceOffers />
              <ValueAddition />
              <Contact />
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

export default AboutPage
