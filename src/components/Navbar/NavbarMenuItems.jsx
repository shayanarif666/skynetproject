import React from 'react'

const NavbarMenuItems = ({
  isClick
}) => {
  return (
    <>
      <div className={`navbar_menu_links absolute w-[30%] right-[10%] top-[5%] h-screen z-20 flex items-center justify-center  ${isClick ? "opacity-100" : "opacity-0"}`}>
        <ul className='list-none'>
          <li>
            <a href="#" className='text-[#eee] py-[.7rem] inline-block text-[2.5rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#fff]' style={{ "--i": "0.05s" }}>About</a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.1s" }} className='text-[#eee] py-[.7rem] inline-block text-[2.5rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#fff]'>Services</a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.15s" }} className='text-[#eee] py-[.7rem] inline-block text-[2.5rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#fff]'>Work History</a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.2s" }} className='text-[#eee] py-[.7rem] inline-block text-[2.5rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#fff]'>Digital Trends</a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.3s" }} className='text-[#eee] py-[.7rem] inline-block text-[2.5rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#fff]'>Case Studies</a>
          </li>
          <li>
            <a href="#" style={{ "--i": "0.35s" }} className='text-[#eee] py-[.7rem] inline-block text-[2.5rem] uppercase font-bold tracking-[1px] transition-all duration-300 hover:text-[#fff]'>Contact</a>
          </li>
          <div className="quote mt-10">
            <button className="text-white secondary-button">Request a Quote</button>
          </div>
        </ul>

      </div>
    </>
  )
}

export default NavbarMenuItems
