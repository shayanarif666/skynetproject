import React, { useState } from 'react';
import { TbArrowBadgeDown } from "react-icons/tb";
import { Button } from "../index";
import { Link } from 'react-router-dom';

const NavbarMenuItems = ({
  isClick,
}) => {

  const [activeLink, setActiveLink] = useState(""); // Active link state
  const [isSubMenu, setIsSubMenu] = useState(false);

  // Function to handle click on links
  const handleLinkClick = (link) => {
    setActiveLink((prev) => (prev === link ? "" : link)); // Toggle active link
    setIsSubMenu(!isSubMenu);
  };

  console.log(activeLink)

  return (
    <>
      <div className={`navbar_menu_links h-screen absolute w-[40%] transition-all duration-200 ease-in-out flex items-center justify-start ${activeLink === "services" || activeLink === "workHistory" ? "top-[15%]" : "top-[5%]"} right-0 z-20 ${isClick ? "opacity-100" : "opacity-0"}`}>
        <ul className='list-none'>
          <li>
            <a href="#" className='text-[#eee] py-[.7rem] inline-block text-[2rem] md:text-[2.5rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#fff]' style={{ "--i": "0.05s" }}>About</a>
          </li>
          <li className='relative'>
            <a
              href="#"
              onClick={() => handleLinkClick("services")}
              className={`text-[#eee] py-[.7rem] text-center flex items-center justify-center lg:justify-start text-[2rem] md:text-[2.5rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#fff]`}
              style={{ "--i": "0.05s" }}
            >
              Services <TbArrowBadgeDown className='ms-3' />
            </a>
            <div className={`navbar_sub_menu flex ${activeLink === "services" ? "opacity-100" : "opacity-0"} transition-all duration-300 ease-in-out items-start ${activeLink === "services" ? "lg:h-[240px] h-[120px] overflow-y-scroll" : "h-0"}`}>
              <div className="sub_menu me-4">
                <h3 className='text-white uppercase font-bold my-3'>Branding</h3>
                <span className='text-white block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Branding Service</span>
                <span className='text-white block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Logo Design</span>
                <span className='text-white block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Brand Identity</span>
                <span className='text-white block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Graphic Design</span>
                <span className='text-white block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Brand Marketing</span>
              </div>
              <div className="sub_menu me-4">
                <h3 className='text-white uppercase font-bold my-3'>Web Design</h3>
                <span className='text-white block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Custom Design</span>
                <span className='text-white block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Responsive Design</span>
                <span className='text-white block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Redesign Identity</span>
                <span className='text-white block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Wordpress Design</span>
                <span className='text-white block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>eCommerce Marketing</span>
              </div>
              <div className="sub_menu me-4">
                <h3 className='text-white uppercase font-bold my-3'>Marketing</h3>
                <span className='text-white block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>SEO</span>
                <span className='text-white block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Social Media Marketing</span>
                <span className='text-white block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Blogging</span>
                <span className='text-white block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Consulting</span>
                <span className='text-white block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Integrated Service</span>
              </div>
            </div>
          </li>
          <li className='relative'>
            <a
              href="#"
              onClick={() => handleLinkClick("workHistory")}
              className={`text-[#eee] py-[.7rem] flex items-center justify-center lg:justify-start text-[2rem] md:text-[2.5rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#fff]`}
              style={{ "--i": "0.05s" }}
            >
              Work History <TbArrowBadgeDown className='ms-3' />
            </a>
            <div className={`navbar_sub_menu flex ${activeLink === "workHistory" ? "opacity-100" : "opacity-0"} transition-all duration-300 ease-in-out items-start ${activeLink === "workHistory" ? "lg:h-[200px] h-[120px] overflow-y-scroll" : "h-0"}`}>
              <div className="sub_menu me-4">
                <span className='text-white block mb-2 font-semibold cursor-pointer'>Before After</span>
                <span className='text-white block mb-2 font-semibold cursor-pointer'>AutoRepair Website Design</span>
                <span className='text-white block mb-2 font-semibold cursor-pointer'>Bank Website Design</span>
                <span className='text-white block mb-2 font-semibold cursor-pointer'>Dental Web Design</span>
                <span className='text-white block mb-2 font-semibold cursor-pointer'>Gym Web Design</span>
              </div>
              <div className="sub_menu me-4">
                <span className='text-white block mb-2 font-semibold cursor-pointer'>Hotel Web Design</span>
                <span className='text-white block mb-2 font-semibold cursor-pointer'>Medical Web Design</span>
                <span className='text-white block mb-2 font-semibold cursor-pointer'>Construction Web Design</span>
                <span className='text-white block mb-2 font-semibold cursor-pointer'>Plumber Web Design</span>
                <span className='text-white block mb-2 font-semibold cursor-pointer'>Restaurant Web Design</span>
              </div>
              <div className="sub_menu me-4">
                <span className='text-white block mb-2 font-semibold cursor-pointer'>Real Estate Web Design</span>
                <span className='text-white block mb-2 font-semibold cursor-pointer'>Corporate Web Design</span>
                <span className='text-white block mb-2 font-semibold cursor-pointer'>Automobile Web Design</span>
                <span className='text-white block mb-2 font-semibold cursor-pointer'>HealthCare Web Design</span>
                <span className='text-white block mb-2 font-semibold cursor-pointer'>Ecommerce Web Design</span>
              </div>
            </div>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.2s" }} className={` text-[#eee] py-[.7rem] inline-block text-[2rem] md:text-[2.5rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#fff]`}>Digital Trends</a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.3s" }} className='text-[#eee] py-[.7rem] inline-block text-[2rem] md:text-[2.5rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#fff]'>Case Studies</a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.35s" }} className='text-[#eee] py-[.7rem] inline-block text-[2rem] md:text-[2.5rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#fff]'>Contact</a>
          </li>
          <div className="quote mt-10">
            <Button className="text-white secondary-button" label="Request a Quote" />
          </div>
        </ul>

      </div>
    </>
  )
}

export default NavbarMenuItems
