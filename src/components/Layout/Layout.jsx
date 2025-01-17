import React, { useContext, useEffect, useRef, useState } from 'react';
import { Footer, Header } from '../index';
import LocomotiveScroll from "locomotive-scroll";
import "./layout.css";
import { OpenMenuContext } from '../../context/MenuContext';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

const Layout = ({ children }) => {

  // State Variables
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scrollRef = useRef(null); // Reference for scroll container

  const { isMenuOpen, setIsMenuOpen } = useContext(OpenMenuContext);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current, // Scrollable container
      smooth: true, // Enable smooth scrolling
      multiplier: 1.2, // Adjust scroll speed
      class: "is-reveal", // Class added to active sections
    });

    // Cleanup to avoid memory leaks
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <>
      <div className={`menu-container w-screen ${isMenuOpen ? "active" : ""}`}>

        <div class="shadow one"></div>
        <div class="shadow two"></div>

        <div className={`${isMenuOpen ? "d-block" : "d-none"}`}>
          <Header />
        </div>
        <div className="wrapper" >
          <div className={`${isMenuOpen ? "d-none" : "d-block"}`}>
            <Header />
          </div>
          <main id='main' data-scroll-container ref={scrollRef}>
            {children}
          </main>
          {!isMenuOpen && <Footer />}
        </div>

        <ul className={`menu-container-links ${isMenuOpen ? "d-block" : "d-none"}`}>
          <li><Link to="/about">About</Link></li>
          <li className='dropdown'>
            <Link href="/services" className='dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">Services</Link>
            <ul class="dropdown-menu">
              <div className="sub-menus flex justify-between px-4">
                <div>
                  <h3 className='text-lg uppercase font-bold'>Branding</h3>
                  <Link to="/branding-service">Branding Services</Link>
                  <Link to="/logo-design-service">Logo Design</Link>
                  <Link to="/brand-identity-service">Brand Identity</Link>
                  <Link to="/graphic-design-service">Graphic Design</Link>
                  <Link to="/brand-marketing-service">Brand Marketing</Link>
                </div>
                <div>
                  <h3 className='text-lg uppercase font-bold'>Web Designing</h3>
                  <Link to="/branding-service">Branding Services</Link>
                  <Link to="/logo-design-service">Logo Design</Link>
                  <Link to="/brand-identity-service">Brand Identity</Link>
                  <Link to="/graphic-design-service">Graphic Design</Link>
                  <Link to="/brand-marketing-service">Brand Marketing</Link>
                </div>
                <div>
                  <h3 className='text-lg uppercase font-bold'>Marketing</h3>
                  <Link to="/branding-service">Branding Services</Link>
                  <Link to="/logo-design-service">Logo Design</Link>
                  <Link to="/brand-identity-service">Brand Identity</Link>
                  <Link to="/graphic-design-service">Graphic Design</Link>
                  <Link to="/brand-marketing-service">Brand Marketing</Link>
                </div>
              </div>
            </ul>
          </li>
          <li className='dropdown'>
            <Link to="#" className='dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">Work Trends</Link>
            <ul class="dropdown-menu">
              <div className="sub-menus flex justify-between px-4">
                <div>
                  <h3 className='text-lg uppercase font-bold'>Branding</h3>
                  <Link to="/branding-service">Branding Services</Link>
                  <Link to="/logo-design-service">Logo Design</Link>
                  <Link to="/brand-identity-service">Brand Identity</Link>
                  <Link to="/graphic-design-service">Graphic Design</Link>
                  <Link to="/brand-marketing-service">Brand Marketing</Link>
                </div>
                <div>
                  <h3 className='text-lg uppercase font-bold'>Web Designing</h3>
                  <Link to="/branding-service">Branding Services</Link>
                  <Link to="/logo-design-service">Logo Design</Link>
                  <Link to="/brand-identity-service">Brand Identity</Link>
                  <Link to="/graphic-design-service">Graphic Design</Link>
                  <Link to="/brand-marketing-service">Brand Marketing</Link>
                </div>
                <div>
                  <h3 className='text-lg uppercase font-bold'>Marketing</h3>
                  <Link to="/branding-service">Branding Services</Link>
                  <Link to="/logo-design-service">Logo Design</Link>
                  <Link to="/brand-identity-service">Brand Identity</Link>
                  <Link to="/graphic-design-service">Graphic Design</Link>
                  <Link to="/brand-marketing-service">Brand Marketing</Link>
                </div>
              </div>
            </ul>
          </li>
          <li><Link to="/digital-trends">Digital Trends</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

      </div>
    </>
  )
}



export default Layout


