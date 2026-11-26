import React from 'react'
import breadCrumbBg from '../../assets/images/breadCrumbBg.png'
import { Link } from 'react-router'
import { FaChevronRight } from "react-icons/fa";

const BreadCrumb = ({title, routeName, parentRouteName="home",parentRouteUrl="/", bg= breadCrumbBg}) => {
  return (
    <section style={{backgroundImage: `url(${bg})`}} className='bg-cover bg-center bg-no-repeat pt-28 xl:pt-[172px] pb-10 xl:pb-[125px]'>
        <div className="container">
            <h3 className='text-white text-center font-montserrat text-[34px] font-bold leading-12 uppercase'>{title}</h3>
            <div className="mt-3 sm:mt-7 xl:mt-10 flex justify-center items-center gap-x-2">
                <Link to={parentRouteUrl} className='inline-block mb-1'>
                <span className='text-white font-lato text-sm font-bold capitalize'>{parentRouteName}</span>
                </Link>
                <FaChevronRight className='text-white' />
                <span className='text-[#C9B5E5]  font-lato text-sm font-normal uppercase '>{routeName}</span>
            </div>
        </div>
    </section>
  )
}

export default BreadCrumb