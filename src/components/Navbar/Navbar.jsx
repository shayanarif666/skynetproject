import React from 'react';
import logoSrc from "../../assets/logo-white.svg"
import Logo from '../Logo';

const Navbar = ({
    onSideMenuChange
}) => {
    return (
        <>
            <nav className="navbar fixed top-0 w-full left-0 z-[999] border-b border-b-[#ffffff66]">
                <div className="container-fluid flex-nowrap">
                    <div className="logo">
                        <Logo src={logoSrc} />
                    </div>
                    <div className="quote sm:block hidden">
                        <button className='secondary-button text-white'>Request a Quote</button>
                    </div>
                    <div className='flex items-center'>
                        <div className="hamburger-menu" onClick={onSideMenuChange}>
                            <div className="bar"></div>
                        </div>
                        <h3 className="mx-4 uppercase text-xl text-extrabold text-white">Menu</h3>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
