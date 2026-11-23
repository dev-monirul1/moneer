import React from 'react'
import bg from '../../assets/images/errorbg.png'
import bg2 from '../../assets/images/error_bg-2.png'
import Image from '../utils/Image'
import { Link } from 'react-router'

const Error = () => {
  return (
    <section className='h-screen w-full flex items-center justify-center py-11 relative'>
        <Image source={bg} alt="img" className="w-[80%]" />
        <div className="absolute left-[49.5%] top-[30%]">
            <Image source={bg2} alt="img" className="" />
            <div className="flex flex-col items-center absolute top-20 left-1/2 -translate-x-1/2">
                <span className='text-[#5F5FFF] font-montserrat font-bold text-[120px]  block leading-none'>404</span>
                <p className='text-base font-montserrat font-bold text-[#000619] '>Sorry, Page not Found</p>
                <Link to="/" className="bg-[#5F5FFF] font-montserrat text-white text-sm font-semibold capitalize py-4 px-7.5 rounded-[25.5px] mt-[18px]">back to home</Link>
            </div>
        </div>
        
    </section>
  )
}

export default Error