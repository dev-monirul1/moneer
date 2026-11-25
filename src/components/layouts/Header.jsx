import React, { useEffect } from "react";
import logo from "../../assets/images/logo.png";
import Image from "../utils/Image";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router";
import { menuData } from "../../dummyData/menuData";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(()=>{
    document.body.style.overflow = sidebarOpen ? "hidden" : "auto";
    return()=>{
      document.body.style.overflow = "auto"
    }

  },[sidebarOpen])

  return (
    <header className="bg-primary py-4 absolute w-full top-0 left-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center ">
          <Link to="/">
            <Image source={logo} alt="img" />
          </Link>
          <div className="hidden lg:flex gap-9 items-center">
            <ul className="flex gap-x-10 xl:gap-[55px]">
              {menuData.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.url}
                    className='text-white text-base font-lato font-extrabold tracking-[0.8px] relative after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:h-[2px] after:bg-linear-(--nav-hover-linear) after:content-[""] after:rounded-[3px] capitalize'
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            <FaUser className="text-white cursor-pointer" />
          </div>
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden">
            <FaBars className="text-white text-2xl " />
          </button>
        </div>
      </div>
      <div
        onClick={() => setSidebarOpen(false)}
        className={`fixed inset-0  bg-black/60 transition-all duration-300 lg:hidden ${sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      />
      <aside
        className={`fixed top-0 right-0 h-screen w-[300px] p-6 bg-primary z-1000 transition-all duration-300 ease-in-out lg:hidden ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* sidebar header */}
        <div className="flex justify-between items-center mb-10">
          <Link to="/" onClick={() => setSidebarOpen(false)}>
            <Image source={logo} alt="img" />
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="text-white"
            aria-label="Close menu"
          >
            <FaXmark className="text-2xl" />
          </button>
        </div>
        {/* sidebar menu */}
        <ul className="flex flex-col gap-y-7">
          {menuData.map((item) => (
            <li key={item.id}>
              <Link
                to={item.url}
                onClick={() => setSidebarOpen(false)}
                className="text-white text-base font-lato font-bold tracking-[0.8px] capitalize"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex gap-2 items-center">
          <FaUser className="text-white text-xl cursor-pointer" />
          <span className="text-white text-base font-lato font-bold tracking-[0.8px] capitalize">Profile</span>
        </div>
      </aside>
    </header>
  );
};

export default Header;
