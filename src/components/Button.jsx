import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({
    label,
    Icon = null,
    href = '/',
    className = '',
    bgColor = "bg-[radial-gradient(circle,_rgba(26,8,152,1)_0%,_rgba(24,12,75,1)_64%)]",
    color = 'hover:text-white',
    ...props
}) => {
    return (
        <>
            <button className={`${className} after:${bgColor} ${color} `} {...props}>
                {label} 
            </button>
        </>
    )
}

export default Button
