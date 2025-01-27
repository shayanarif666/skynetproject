import React from 'react';
import logoSrc from "../../assets/logo-white.svg"
import { Button, Logo } from "../index";

const Navbar = ({
    onSideMenuChange,
    isClick
}) => {
    return (
        <>
            <nav className={`navbar fixed top-0 w-full left-0 z-[999] border-b border-b-[#ffffff66]`}>
                <div className="container-fluid flex-nowrap">
                    <div className="logo">
                        <Logo src={logoSrc} />
                    </div>
                    <div className="ml-[auto] navbar_request_btn sm:block hidden">
                        <Button className="text-white secondary-button" label="Request a Quote" />
                    </div>
                    <div className='navbar_hamburger_menu flex items-center'>
                        <div className="hamburger-menu h-[4rem] w-[3rem] cursor-pointer flex items-center justify-end" onClick={onSideMenuChange}>
                            <div className="bar relative transition-all duration-500 bg-[#eee] rounded-sm h-[3px] w-[1.4rem]"></div>
                        </div>
                        <h3 className="mx-4 uppercase text-xl text-extrabold text-white">Menu</h3>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
