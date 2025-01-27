import React, { useState } from "react";
import "./style.css"
import { Header, Navbar, NavbarMenuItems, ShortCompanyInfo, Services, Timeline, CaseStudies, Contact, Footer, CompanyLocation, PricingObjectives } from "../components/index";

const HomePage = () => {

  const [isClick, setIsClick] = useState(false);

  const handleSideMenu = () => {
    setIsClick(!isClick);
  }

  return (
    <>
      <div className={`container-full relative h-[115vh] w-screen ${isClick ? "active overflow-hidden" : ""}`}>

        <Navbar onSideMenuChange={handleSideMenu} isClick={isClick} />


          <div className={`main-container `}>
            <div className={`main w-full z-50 origin-left border-[#ffffff66] transition-all duration-500 h-screen`}>
              <Header bgColor="bg-gradient-to-r from-[#30007d] to-[#000]" />
              <main id="main_sections" className={`transition-all ease-in ${isClick ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}>
                <ShortCompanyInfo />
                <Services title={"Explore Our Experience as a Web Design Firm"} description={"Being a full-service web design firm, we take care of all your online requirements in one location. In-depth planning and research, unique designs, and digital tactics that expand your audience, increase traffic, and promote interaction are all part of our custom web design services."} />
                <Timeline />
                <CaseStudies />
                <PricingObjectives />
                <CompanyLocation />
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
  );
};

export default HomePage;
