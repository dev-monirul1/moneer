import React from 'react'

const Peragraph = ({className, text}) => {
  return (
    <p className={`font-lato text-base font-normal leading-6.5 text-gray_2 ${className}`}>{text}</p>
  )
}

export default Peragraph