import React, { useState } from "react";
import Heading from "../../utils/Heading";
import Peragraph from "../../utils/Peragraph";
import { faqData } from "../../../dummyData/faqData";



const FaqBody = () => {
  const [activeTab, setActiveTab] = useState(faqData[0].tabKey);
  return (
    <section className="pt-[105px] pb-[35px]">
      <div className="container">
        <Heading
          className="text-center font-montserrat font-bold text-[34px] text-black_2"
          varient="h2"
          text="Frequently Asked Questions"
        />
        <Peragraph
          className="text-center max-w-[775px] mx-auto mt-3"
          text="Nullam vestibulum, justo vitae varius interdum, nibh turpis eleifend tellus, sit amet porttitor orci erat vitae odio. Duis sapien metus, egestas rhoncus metus id, dignissim malesuada eros"
        />
        <div className="mt-10 flex gap-20 justify-center items-center">
          {faqData.map((item, index) => (
            <button
              onClick={() => setActiveTab(item.tabKey)}
              key={index}
              className={`text-lg font-montserrat font-bold  capitalize cursor-pointer hover:text-blue_1 transition-all duration-300 relative after:absolute after:content-[""] after:bg-blue_1 after:w-0 after:h-0.5 after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:transition-all after:duration-300 hover:after:w-full ${activeTab === item.tabKey ? "text-blue_1 after:w-full" : "text-gray_2"}`}
            >
              {item.tabLabel}
            </button>
          ))}
        </div>
        <div className="mt-14 grid grid-cols-2 gap-y-9 gap-x-10">
          {faqData.find((item) => item.tabKey === activeTab)
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
        </div>
      </div>
    </section>
  );
};

export default FaqBody;
