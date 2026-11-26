import React, { useState } from "react";
import Heading from "../../utils/Heading";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Peragraph from "../../utils/Peragraph";
import Input from "../../utils/Input";

const data = [
  {
    id: 1,
    icon: <FaEnvelope />,
    iconColor: "#00C3B7",
    label: "Email",
    list: ["monnersupport@email.com", "monnerhr@email.com"],
  },
  {
    id: 2,
    icon: <FaPhone />,
    iconColor: "#5F5FFF",
    label: "Call Us",
    list: ["(+1) 123-123-123", "(+1) 202-555-0134"],
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt />,
    iconColor: "#FF5851",
    label: "Location",
    list: ["275 Jimmy Way", "Copperopolis, California(CA), 95228"],
  },
];

const ContactBody = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    brife: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    brife: "",
  });
  const inputStyle =
    "border border-[#C8C8C8] border-opacity-[73%] bg-[#F5F5FF] bg-opacity-[53%] rounded-[24px] py-2.5 px-4 font-normal font-lato text-base placeholder:text-gray_2 placeholder:font-lato outline-0 w-full";

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    let newError = {
      name: "",
      email: "",
      message: "",
      rememberMe: "",
    };

    // Name validation
    if (!formData.name.trim()) {
      newError.name = "Name is required";
    } else if (formData.name.length > 16) {
      newError.name = "Max length is 16";
    }

    // Email validation
    if (!formData.email.trim()) {
      newError.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newError.email = "Valid Email is required";
    }

    setError(newError);

    if (Object.values(newError).some((item) => item !== "")) {
      return;
    }

    console.log(formData);
  };

  return (
    <section className="py-25">
      <div className="container">
        <div className="max-w-[825px] mx-auto grid grid-cols-3 gap-x-13">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                className={`size-20 rounded-full bg-white shadow-xl flex items-center justify-center [&>svg]:text-2xl`}
                style={{ color: item.iconColor }}
              >
                {item.icon}
              </div>
              <Heading
                text={item.label}
                varient="h3"
                className="font-bold font-montserrat text-xl text-black_2 mt-5"
              />
              <ul className="mt-1.5">
                {item?.list.map((list, listIndex) => (
                  <li
                    key={listIndex}
                    className="text-center font-lato font-bold text-base text-gray_2"
                  >
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-18 max-w-[725px] mx-auto">
          <Heading
            text="We are ready to help grow your idea"
            varient="h3"
            className="font-montserrat font-bold text-[34px] text-black_2 text-center"
          />
          <Peragraph
            text="Ut feugiat dictum consequat. Aenean varius, augue malesuada eleifend faucibus"
            className="text-center mt-6"
          />
          <form
            onSubmit={handleSubmit}
            action=""
            className="mt-7 grid grid-cols-2 gap-4"
          >
            <div className="">
              <Input
                value={formData.name}
                onChange={handleChange}
                name="name"
                placeholder="Your Name"
                type="text"
                className={inputStyle}
              />
              {error.name && (
                <p className="text-red-500 font-lato text-sm mt-1">
                  {error.name}
                </p>
              )}
            </div>
            <div className="">
              <Input
                value={formData.email}
                onChange={handleChange}
                name="email"
                placeholder="Your Email"
                type="email"
                className={inputStyle}
              />
              {error.email && (
                <p className="text-red-500 font-lato text-sm mt-1">
                  {error.email}
                </p>
              )}
            </div>
            <div className="">
              <Input
                value={formData.company}
                onChange={handleChange}
                name="company"
                placeholder="Company Name"
                type="text"
                className={inputStyle}
              />
              {error.company && (
                <p className="text-red-500 font-lato text-sm mt-1">
                  {error.company}
                </p>
              )}
            </div>
            <div className="">
              <Input
                value={formData.phone}
                onChange={handleChange}
                name="phone"
                placeholder="Phone Number"
                type="text"
                className={inputStyle}
              />
              {error.phone && (
                <p className="text-red-500 font-lato text-sm mt-1">
                  {error.phone}
                </p>
              )}
            </div>
            <textarea
                onChange={handleChange}
                value={formData.brife}
                name="brife"
                placeholder="Tell About Your Project"
                className=" w-full border border-[#C8C8C8] border-opacity-[73%] bg-[#F5F5FF] bg-opacity-[53%] rounded-[24px] py-2.5 px-4 font-normal font-lato text-base placeholder:text-gray_2 placeholder:font-lato min-h-[219px] outline-0 resize-none col-span-2"
              ></textarea>
              <div className="col-span-2 flex justify-center">
                <button
                type="submit"
                value="Leave a Reply"
                className="bg-linear-(--formSubmit-linear-bg) py-4 px-21 text-white font-montserrat font-semibold inline-block rounded-[28px] cursor-pointer"
              >
                Send
              </button>
              </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactBody;
