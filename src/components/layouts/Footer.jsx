import React from 'react'
import Image from '../utils/Image'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router'
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import Heading from '../utils/Heading';
import { FaChevronRight } from "react-icons/fa";
import { footerUrl, recentNews } from '../../dummyData/footerUrl';
import RecentNewsard from '../common/RecentNewsard';
import dubleUpArrow from '../../assets/svg/duble-up-arrow.svg'


const Footer = () => {
  const scrollTop = ()=>{
    window.scrollTo(
      {
        top:0,
        behavior: 'smooth'
      }
    )
  }
  return (
    <footer className='bg-linear-(--footer-linearbg) py-[110px] relative'>
      <div className="container">
        <div className="flex justify-between ">
          <div className="w-[285px]">
            <Image source={logo} alt='img' />
            <p className='mt-6  text-base font-lato font-normal text-white leading-7 '>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin commodo</p>
            <div className="mt-5 grid grid-cols-1 gap-y-4">
              <div className="grid grid-cols-[16px_auto] gap-x-4  ">
                <FaEnvelope className='text-secondary mt-1' />
                <Link to="mailto:monnersupport@email.com" className='text-base font-lato font-bold text-white leading-snug tracking-[0.7px] inline-block'>
                  monnersupport@email.com
                </Link>
              </div>
              <div className="grid grid-cols-[16px_auto] gap-x-4  ">
                <FaPhone className='text-secondary mt-1' />
                <Link to="tel:123-123-123" className='text-base font-lato font-bold text-white leading-snug tracking-[0.7px] inline-block'>
                  (+1) 123-123-123
                </Link>
              </div>
              <div className="grid grid-cols-[16px_auto] gap-x-4  ">
                <IoLocationSharp className='text-secondary mt-1' />
                <Link to="#" className='text-base font-lato font-bold text-white leading-snug tracking-[0.7px] inline-block'>
                  275 Jimmy Way
                  Copperopolis, California(CA), 95228
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <Heading varient='h3' text="company" className='capitalize mt-2 font-montserrat font-bold leading-normal text-white text-2xl' />
            <div className='mt-[33px] grid grid-cols-1 gap-y-[15px]'>
              {footerUrl.map((item) => (
                <div key={item.id} className='flex items-center gap-x-4'>
                  <div className="flex items-center gap-x-2">
                    <FaChevronRight className='text-white' />
                    <Link to={item.url} className='text-lato text-white text-base font-bold leading-6 tracking-[0.87px] capitalize'>
                      {item.text}
                    </Link>
                  </div>
                  {item.isNew && <span className='inline-block bg-orange px-3 py-1 rounded-[6px] text-white text-xs font-lato font-bold tracking-[0.87px] uppercase'>Hot!</span>}
                  
                </div>
              ))}

            </div>
          </div>
          <div className="">
            <Heading varient='h3' text="Recent News" className='capitalize mt-2 font-montserrat font-bold leading-normal text-white text-2xl' />
            <div className="mt-5.5 grid gird-cols-1 gap-y-[14px]">
              {recentNews.map((item)=>(
                <RecentNewsard key={item.id} title={item.title} url={item.url} publishedDate={item.publishDate} />
              ))}
              
            </div>
          </div>
        </div>
      </div>
      <div onClick={scrollTop} className="inline-block absolute left-1/2 -translate-1/2 bottom-3 cursor-pointer">
         <Image source={dubleUpArrow} />
      </div>
       
    </footer>
  )
}

export default Footer