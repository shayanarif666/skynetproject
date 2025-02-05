import React, { useEffect, useState } from 'react';
import { About, Header, Navbar, NavbarMenuItems, SkynetMean, SkynetVision, ServiceOffers, ValueAddition, Contact, Footer } from "../components/index";
import AboutImage from "/Images/about-us-banner.webp";
import ScrollToTop from "../components/ScrollToTop";
import "./style.css";

const AboutPage = ({ setLoading }) => {

  const [isClick, setIsClick] = useState(false);

  const handleSideMenu = () => {
    setIsClick(!isClick);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3300);
  }, [])

  return (
    <>
      <div className={`container-full h-screen w-screen ${isClick ? "active overflow-y-clip" : ""}`} style={{ transformStyle: `${isClick ? "preserve-3d" : ""}` }}>
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
        <ScrollToTop />

      </div>
    </>
  )
}

export default AboutPage
