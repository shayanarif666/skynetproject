import React from 'react';
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { heroBrands } from '../brandItems';

const InfiniteMovingBrands = () => {
    return (
        <>
            <div className="h-[10vh] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={heroBrands}
                    direction="left"
                    speed="slow"
                    className='bg-[#00042a] '
                />
            </div>
        </>
    )
}

export default InfiniteMovingBrands

