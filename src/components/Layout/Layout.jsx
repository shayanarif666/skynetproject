import React, { useContext, useEffect, useRef, useState } from 'react';
import { Footer, Header } from '../index';
import LocomotiveScroll from "locomotive-scroll";
import "./layout.css";
import { OpenMenuContext } from '../../context/MenuContext';

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
          <li><a href="#">About</a></li>
          <li className='dropdown'>
            <a href="#" className='dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">Services</a>
            <ul class="dropdown-menu">
            <div className="sub-menus flex justify-between px-4">
                <div>
                  <h3 className='text-lg uppercase font-bold'>Branding</h3>
                  <a href="">Branding Services</a>
                  <a href="">Logo Design</a>
                  <a href="">Brand Identity</a>
                  <a href="">Graphic Design</a>
                  <a href="">Brand Marketing</a>
                </div>
                <div>
                  <h3 className='text-lg uppercase font-bold'>Web Designing</h3>
                  <a href="">Branding Services</a>
                  <a href="">Logo Design</a>
                  <a href="">Brand Identity</a>
                  <a href="">Graphic Design</a>
                  <a href="">Brand Marketing</a>
                </div>
                <div>
                  <h3 className='text-lg uppercase font-bold'>Marketing</h3>
                  <a href="">Branding Services</a>
                  <a href="">Logo Design</a>
                  <a href="">Brand Identity</a>
                  <a href="">Graphic Design</a>
                  <a href="">Brand Marketing</a>
                </div>
              </div>
            </ul>
          </li>
          <li className='dropdown'>
            <a href="#" className='dropdown-toggle' type="button" data-bs-toggle="dropdown" aria-expanded="false">Work Trends</a>
            <ul class="dropdown-menu">
              <div className="sub-menus flex justify-between px-4">
                <div>
                  <h3 className='text-lg uppercase font-bold'>Branding</h3>
                  <a href="">Branding Services</a>
                  <a href="">Logo Design</a>
                  <a href="">Brand Identity</a>
                  <a href="">Graphic Design</a>
                  <a href="">Brand Marketing</a>
                </div>
                <div>
                  <h3 className='text-lg uppercase font-bold'>Web Designing</h3>
                  <a href="">Branding Services</a>
                  <a href="">Logo Design</a>
                  <a href="">Brand Identity</a>
                  <a href="">Graphic Design</a>
                  <a href="">Brand Marketing</a>
                </div>
                <div>
                  <h3 className='text-lg uppercase font-bold'>Marketing</h3>
                  <a href="">Branding Services</a>
                  <a href="">Logo Design</a>
                  <a href="">Brand Identity</a>
                  <a href="">Graphic Design</a>
                  <a href="">Brand Marketing</a>
                </div>
              </div>
            </ul>
          </li>
          <li><a href="#">Digital Trends</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </>
  )
}



export default Layout


