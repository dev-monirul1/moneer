import React from 'react'
import parse from 'html-react-parser';

const Heading = ({varient="h3", className="", text}) => {
    const Tag = varient || 'h3'; 
  return (
    <Tag className={className}>
       {parse(text)} 
    </Tag>
  )
}

export default Heading