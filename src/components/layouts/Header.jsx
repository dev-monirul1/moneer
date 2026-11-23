import React from 'react'
import logo from '../../assets/images/logo.png'
import Image from '../utils/Image'
import { FaUser } from "react-icons/fa";
import { Link } from 'react-router';
import { menuData } from '../../dummyData/menuData';

const Header = () => {
  return (
    <header className='bg-primary py-4'>
      <div className="container">
        <div className="flex justify-between items-center ">
          <div className="">
            <Image source={logo} alt='img' />
          </div>
          <div className="flex gap-9 items-center">
            <ul className='flex gap-[55px]'>
              {menuData.map((item)=>(
                <li key={item.id}>
                <Link  to={item.url} className='text-white text-base font-lato font-extrabold tracking-[0.8px] relative after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:h-[2px] after:bg-linear-(--nav-hover-linear) after:content-[""] after:rounded-[3px] capitalize'>{item.text}</Link>
              </li>
              ))}
            </ul>
            <FaUser className='text-white cursor-pointer' />
          </div>
        </div>


      </div>

    </header>
  )
}

export default Header