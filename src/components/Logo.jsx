import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({
    src = "",
    className = "",
    ...props
}) => {
    return (
        <>
            <Link to={`/`}>
                <img src={src} alt={src} className={`${className}`} {...props} />
            </Link>
        </>
    )
}

export default Logo
