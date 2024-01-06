import React, { children } from 'react'

const Button = ({onClick, children, className, color}) => {


  return <button onClick={onClick} className={className} color={color}>{children}</button>
}

export default Button
