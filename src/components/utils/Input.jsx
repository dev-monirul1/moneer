import React from 'react'

const Input = ({onClick,value, placeholder, type, className, name, id, checked , onChange}) => {
  return (
    <input onClick={onClick} placeholder={placeholder} type={type} className={className} name={name} id={id} value={value} checked={checked} onChange={onChange} />
  )
}

export default Input