import React, { useEffect, useState } from 'react';
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const ScrollToTop = () => {
    const [isScrollY, setIsScrollY] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrollY(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed transition-all duration-300 bottom-[2%] right-[2%] scroll_to_top bg-[#1092fd] hover:bg-[#38a4fc] ${isScrollY ? "opacity-100 visible" : "opacity-0 invisible"} shadow-lg`}
        >
            <MdOutlineKeyboardArrowUp className='text-white text-3xl' />
        </button>
    );
};

export default ScrollToTop;