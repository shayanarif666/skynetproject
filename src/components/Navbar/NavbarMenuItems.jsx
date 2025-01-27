import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
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
      <div className={`navbar_menu_links h-full mt-[20vh] absolute w-[40%] transition-all duration-200 ease-in-out flex justify-start ${activeLink === "services" || activeLink === "workHistory" ? "top-[0]" : "top-[0]"} right-0 z-20 ${isClick ? "opacity-100" : "opacity-0"}`}>
        <ul className='list-none'>
          <li>
            <a href="#" className='text-[#eee] py-[.7rem] inline-block text-[1.5rem] lg:text-[2rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#0898ff]' style={{ "--i": "0.05s" }}>About</a>
          </li>
          <li className='relative'>
            <a
              href="#"
              onClick={() => handleLinkClick("services")}
              className={`active_menu_link text-[#eee] pt-[.7rem] lg:py-[.7rem] text-center flex items-center text-[1.5rem] lg:text-[2rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#0898ff]`}
              style={{ "--i": "0.05s" }}
            >
              Services <MdOutlineKeyboardArrowDown className={`ms-3 transition-all duration-300 ease-in-out ${activeLink === "services" && "rotate-[-180deg]"}`} />
            </a>
            <div className={`navbar_sub_menu flex ${activeLink === "services" ? "opacity-100" : "opacity-0"} transition-all duration-300 ease-in-out items-start ${activeLink === "services" ? "lg:h-[240px] h-[120px] overflow-y-auto" : "h-0"}`}>
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
                <h3 className='text-white uppercase font-bold my-3'>Development</h3>
                <span className='text-white block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>App Development</span>
                <span className='text-white block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Web Development</span>
                <span className='text-white block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Appsheet Development</span>
                <span className='text-white block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>Social Media Marketing</span>
                <span className='text-white block mb-2 font-semibold text-[.8rem] 2xl:text-base cursor-pointer'>SEO</span>
              </div>
            </div>
          </li>
          {/* <li className='relative'>
            <a
              href="#"
              onClick={() => handleLinkClick("workHistory")}
              className={`text-[#eee] pb-[.7rem] pt-[.4rem] lg:py-[.7rem] flex items-center justify-center lg:justify-start text-[1.5rem] lg:text-[2rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#0898ff]`}
              style={{ "--i": "0.05s" }}
            >
              Work History <MdOutlineKeyboardArrowDown className={`ms-3 transition-all duration-300 ease-in-out ${activeLink === "workHistory" && "rotate-[-180deg]"}`} />
            </a>
            <div className={`navbar_sub_menu flex ${activeLink === "workHistory" ? "opacity-100" : "opacity-0"} transition-all duration-300 ease-in-out items-start ${activeLink === "workHistory" ? "lg:h-[200px] h-[120px] overflow-y-auto" : "h-0"}`}>
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
            <a href="#" style={{ "--i": "0.2s" }} className={` text-[#eee] py-[.7rem] inline-block text-[1.5rem] lg:text-[2rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#0898ff]`}>Digital Trends</a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.3s" }} className='text-[#eee] py-[.7rem] inline-block text-[1.5rem] lg:text-[2rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#0898ff]'>Case Studies</a>
          </li> */}
          <li>
            <a href="#" style={{ "--i": "0.35s" }} className='text-[#eee] py-[.7rem] inline-block text-[1.5rem] lg:text-[2rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#0898ff]'>Contact</a>
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
