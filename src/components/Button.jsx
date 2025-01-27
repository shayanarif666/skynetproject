import React from 'react'

const Button = ({
    label,
    Icon = null,
    className = '',
    bgColor = "bg-[radial-gradient(circle,_rgba(26,8,152,1)_0%,_rgba(24,12,75,1)_64%)]",
    txtColor = 'text-[#fff]',
    ...props
}) => {
    return (
        <>
            <button className={`${className} after:${bgColor} hover:${txtColor} `} {...props}>
                {label} 
            </button>
        </>
    )
}

export default Button
