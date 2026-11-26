import React, { useState } from "react";
import Heading from "../../utils/Heading";
import Input from "../../utils/Input";
import Image from "../../utils/Image";
import form_shape from "../../../assets/images/form_shape.webp";

const FaqContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    rememberMe: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
    rememberMe: "",
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
    <section className="pt-14 pb-16 md:pb-20 lg:pt-[105px]  3xl:pb-[180px] relative">
      <Image
        source={form_shape}
        alt="img"
        className="hidden  lg:inline max-w-[450px] 2xl:max-w-[650px] 3xl:max-w-[800px] 4xl:max-w-[960px] max-h-[676px] absolute right-0 top-1/2 -translate-y-1/2"
      />
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[535px_auto] gap-x-[83px]">
          <div className="">
            <Heading
              varient="h3"
              text="Need More Answers?"
              className="text-blue_1 font-montserrat text-2xl sm:text-3xl md:text-[42px] font-bold"
            />
            <form onSubmit={handleSubmit}>
              <textarea
                onChange={handleChange}
                value={formData.message}
                name="message"
                placeholder="Your Question"
                className="mt-4 w-full border border-[#C8C8C8] border-opacity-[73%] bg-[#F5F5FF] bg-opacity-[53%] rounded-[24px] py-2.5 px-4 font-normal font-lato text-base placeholder:text-gray_2 placeholder:font-lato min-h-[219px] outline-0 resize-none"
              ></textarea>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2.5 gap-y-4 mt-4">
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
              </div>
              <div className="mt-5.5 flex items-center gap-2">
                <Input
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  type="checkbox"
                  id="rememberMe"
                  className=" w-[18px] h-[18px] rounded-[4px] accent-[#979797]"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 text-base font-normal font-lato text-gray_2"
                >
                  Remember Me
                </label>
              </div>
              <button
                type="submit"
                value="Leave a Reply"
                className="bg-linear-(--formSubmit-linear-bg) py-4 px-[54px] mt-6 text-white font-montserrat font-semibold inline-block rounded-[28px] cursor-pointer"
              >
                Leave a Reply
              </button>
            </form>
          </div>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export default FaqContactForm;
