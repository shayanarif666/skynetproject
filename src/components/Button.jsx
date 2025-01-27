import React from 'react'

const Button = ({
    label,
    Icon = null,
    className = '',
    ...props
}) => {
    return (
        <>
            <button className={`${className}`} {...props}>
                {label} 
            </button>
        </>
    )
}

export default Button
