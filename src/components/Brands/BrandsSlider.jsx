import React from 'react';
import "./brandSlider.css";

const BrandsSlider = ({
    items = [],
    bannerHeight = "10vh",
    bgColor = "#03042a",
    itemBgColor = "",
    itemWidth = "",
    itemHeight = "",
    border = "#03042a",
    className = "",
    scrollPosition = "left",
    scrollTo = "scrollLeft",
    sliderGap = "",
    ...props
}) => {
    return (
        <>
            <div id="marquee" className={`${sliderGap}`}>
                <div className={`marquee-wrapper flex items-center justify-center`} style={{ height: bannerHeight, backgroundColor: `${bgColor}` }}>
                    {
                        items?.map((item, ind) => {
                            return (
                                <div
                                    class={`item item${item.id} ${className} mt-2 absolute p-[2.5rem]`}
                                    key={item.id}
                                    style={{
                                        width: itemWidth,
                                        [scrollPosition]: `max(calc(${itemWidth} * ${items.length}), 100%)`,
                                        animation: `${scrollTo} 80s infinite linear`, 
                                        animationDelay: `calc(80s / ${items?.length} * (${items?.length} - ${item.id}) * -1)`,
                                        border: `${border}`,
                                        backgroundColor: `${itemBgColor}`,
                                    }}
                                >
                                     <div className="client_logos">
                                        <img src={item.src} alt="" />
                                    </div>
                                    {item.company && <h3 className='text-lg mt-0 font-medium text-slate-300'>{item.company}</h3>}
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        </>
    )
}

export default BrandsSlider
