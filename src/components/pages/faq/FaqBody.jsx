import React, { useEffect, useRef, useState } from "react";
import Heading from "../../utils/Heading";
import Peragraph from "../../utils/Peragraph";
import { faqData } from "../../../dummyData/faqData";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";

const FaqBody = () => {
  const [activeTab, setActiveTab] = useState(faqData[0].tabKey);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const activeTabLabel = faqData.find(
    (item) => item.tabKey === activeTab,
  )?.tabLabel;

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [activeTab]);

  return (
    <section className="pt-16 md:pt-20 lg:pt-[105px] pb-[35px]">
      <div className="container">
        <Heading
          className="text-center font-montserrat font-bold text-2xl sm:text-[34px] text-black_2"
          varient="h2"
          text="Frequently Asked Questions"
        />
        <Peragraph
          className="text-center max-w-[775px] mx-auto mt-3"
          text="Nullam vestibulum, justo vitae varius interdum, nibh turpis eleifend tellus, sit amet porttitor orci erat vitae odio. Duis sapien metus, egestas rhoncus metus id, dignissim malesuada eros"
        />
        {/* desktop tab */}
        <div className="mt-10 hidden md:flex gap-x-13 lg:gap-x-16 xl:gap-x-20 justify-center items-center">
          {faqData.map((item, index) => (
            <button
              onClick={() => setActiveTab(item.tabKey)}
              key={index}
              className={`text-base xl:text-lg font-montserrat font-bold  capitalize cursor-pointer hover:text-blue_1 transition-all duration-300 relative after:absolute after:content-[""] after:bg-blue_1 after:w-0 after:h-0.5 after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full ${activeTab === item.tabKey ? "text-blue_1 after:w-full" : "text-gray_2"}`}
            >
              {item.tabLabel}
            </button>
          ))}
        </div>
        {/* mobile tab */}
        <div
          ref={dropdownRef}
          className="mt-10 md:hidden flex gap-x-2 justify-start  items-center relative"
        >
          <button
            className="w-6 flex"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            {dropdownOpen ? (
              <IoClose className="text-black text-xl " />
            ) : (
              <FaBars className="text-black text-2xl " />
            )}
          </button>
          <span
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="text-lg font-montserrat font-semibold  capitalize cursor-pointer hover:text-blue_1 transition-all duration-300"
          >
            {activeTabLabel}
          </span>
          <div
            className={`w-50 bg-white shadow-xl absolute -bottom-2 left-0 translate-y-full grid grid-cols-1 transition-all duration-300 ${dropdownOpen ? "opacity-100 visible -bottom-2" : "opacity-0 invisible -bottom-5"}`}
          >
            {faqData.map((item, index) => (
              <button
                onClick={() => {
                  setActiveTab(item.tabKey);
                  setDropdownOpen(false);
                }}
                key={index}
                className={`text-base font-montserrat font-medium  capitalize cursor-pointer hover:text-blue_1 transition-all duration-300 relative py-2 ${activeTab === item.tabKey ? "text-blue_1 bg-gray-300" : "text-gray_2"}`}
              >
                {item.tabLabel}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-8 md:mt-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{opacity:0, y: 12}}
              animate={{opacity:1, y: 0}}
              exit={{opacity:0, y: -12}}
              transition={{duration: 0.25, ease: 'easeInOut'}}
              className="grid grid-cols-1 md:grid-cols-2 gap-y-9 gap-x-10"
            >
              {faqData
                .find((item) => item.tabKey === activeTab)
                ?.tabContent.map((contentItem, contentIndex) => (
                  <div key={contentIndex} className="">
                    <Heading
                      className="text-base font-montserrat font-bold text-black_2"
                      text={contentItem.title}
                      varient="h4"
                    />
                    <Peragraph className="mt-3" text={contentItem.content} />
                  </div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FaqBody;
