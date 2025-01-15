import React from 'react';

const Logo = ({
    src = "",
    className = "",
    ...props
}) => {
    return (
        <>
            <img src={src} alt={src} className={`${className} h-fit sm:h-20`} {...props} />
        </>
    )
}

export default Logo
