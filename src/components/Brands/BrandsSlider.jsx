import React from 'react';
import "./brandSlider.css";

const BrandsSlider = ({
    items = [],
    height = "15vh",
    bgColor = "#03042a",
    itemBgColor = "",
    itemWidth = "",
    itemHeight = "",
    border = "#03042a",
    className = "",
    scrollPosition = "left",
    scrollTo = "scrollLeft",
    sliderGap = "",
    imgMxWid = "",
    ...props
}) => {

    console.log(scrollPosition, scrollTo)

    return (
        <>
            <div id="marquee" className={`${sliderGap}`} data-scroll-section>
                <div className={`marquee-wrapper flex items-center justify-center`} style={{ height: height, backgroundColor: `${bgColor}` }}>
                    {
                        items?.map((item, ind) => {
                            return (
                                <div
                                    class={`item item${item.id} ${className} mt-2`}
                                    style={{
                                        position: "absolute",
                                        width: itemWidth,
                                        [scrollPosition]: `max(calc(${itemWidth} * ${items.length}), 100%)`,
                                        animation: `${scrollTo} 80s infinite linear`, 
                                        animationDelay: `calc(80s / ${items?.length} * (${items?.length} - ${item.id}) * -1)`,
                                        border: `${border}`,
                                        backgroundColor: `${itemBgColor}`,
                                        padding: "2.5rem",
                                    }}
                                >
                                     <div className="client_logos">
                                        <img src={item.src} alt="" />
                                    </div>
                                    {item.company && <h3 className='text-lg mt-4 font-medium text-slate-300'>{item.comapny}</h3>}
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
