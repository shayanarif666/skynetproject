import React, { useState } from "react";
import "./style.css"
import { Header, Navbar, NavbarMenuItems, ShortCompanyInfo, Services, Timeline, CaseStudies, Contact, Footer, CompanyLocation, PricingObjectives, Subscribe, ServiceTab, BrandsSlider, TopBrands } from "../components/index";
import { heroBrands } from "../components/brandItems";

const HomePage = () => {

  const [isClick, setIsClick] = useState(false);

  const handleSideMenu = () => {
    setIsClick(!isClick);
  }

  return (
    <>
      <div className={`container-full h-screen w-screen ${isClick ? "active overflow-hidden" : ""}`}>

        <Navbar onSideMenuChange={handleSideMenu} isClick={isClick} />

          <div className={`main-container `}>
            <div className={`main w-full z-50 origin-left transition-all duration-500 h-screen`}>
              <Header bgColor="bg-gradient-to-r from-[#30007d] to-[#000]" titleMaxWidth="w-[1500px]" title={`Transforming Ideas into Digital Success Stories`} subTitle="Innovate. Inspire. Achieve – with SKYNET SILICON" />
              <BrandsSlider items={heroBrands} itemWidth='350px' className="flex flex-column justify-center items-center" />
              <main id="main_sections" className={`transition-all ease-in ${isClick ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}>
                <ShortCompanyInfo />
                <TopBrands />
                <Services title={"Explore Our Experience as a Web Design Firm"} description={"Being a full-service web design firm, we take care of all your online requirements in one location. In-depth planning and research, unique designs, and digital tactics that expand your audience, increase traffic, and promote interaction are all part of our custom web design services."} />
                <Timeline />
                {/* <CaseStudies />
                <ServiceTab /> */}
                <PricingObjectives />
                <Subscribe />
                <CompanyLocation />
                <Contact />
              </main>
              <Footer />
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
