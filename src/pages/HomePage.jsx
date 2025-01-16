import React, { useContext, useState } from 'react'
import { HeroSection, Info, Layout, BrandsSlider, InfoVideo, TopBrands, HomeServices, Contact, Features, ServiceTab } from '../components';
import { heroBrands } from "../components/brandItems";
import { OpenMenuContext } from '../context/MenuContext';
import HomeCaseStudies from '../components/HomePage/Case Studies/HomeCaseStudies';

const HomePage = () => {

  const { isMenuOpen, setIsMenuOpen } = useContext(OpenMenuContext);

  return (
    <>
      <Layout>
        <HeroSection />
        <BrandsSlider items={heroBrands} itemHeight='100%' itemWidth='200px' className="flex justify-center items-center" />
        <div className={`secondary-container ${isMenuOpen ? "d-none" : "d-block"}`} style={{ background: "#00041c", zIndex: 999 }}>
          <Info />
          <InfoVideo />
          <TopBrands />
          <HomeServices />
          <Features />
          {/* <ServiceTab /> */}
          <HomeCaseStudies />
          <Contact />
        </div>
      </Layout>
    </>
  )
}


export default HomePage;
