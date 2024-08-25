import Input from "@/components/Helper/Input";
import React from "react";
import { FaPaperPlane, FaPhone } from "react-icons/fa";

const Review = () => {
  return (
    <div className="pt-20 pb-16 bg-white">
      <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 items-center gap-20">
        {/* datails */}
        <div className="lg:col-span-1 mt-6">
          {/* sub heading */}
          <div className="flex items-center space-x-4">
            <div
              data-aos="fade-up"
              className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col"
            >
              <FaPaperPlane className="h-6 w-6 text-white" />
            </div>
            <h1
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-xl text-gray-800 font-semibold"
            >
              Get In Touch With Us!
            </h1>
          </div>
          {/* title */}
          <h1
            data-aos="fade-right"
            className="text-2xl md:text-3xl lg:text-4xl mt-8 font-bold md:leading-[1.7rem] lg:leading-[2.3rem] text-gray-900"
          >
            Send Email or Call us Directly.
          </h1>
          <p
            data-aos="data-right"
            data-aos-delay="200"
            className="text-base text-gray-800 text-opacity-60 mt-6"
          >
            We try to handle as many clients as we can but becase of rush calls we may sometimes
            miss calls unintentially so send us a email with your query and we contact you overself.
          </p>
          {/* call button */}
          <a
            data-aos="fade-up"
            data-aos-delay="400"
            href="/Linkedpages"
            className="flex items-center w-[9.5rem] space-x-2 px-8 py-3 mt-8 hover:bg-rose-700 transition-all duration-200 rounded-3xl bg-black text-white"
          >
            <span className="mr-2 font-semibold">Call Us</span>
            <FaPhone />
          </a>
        </div>
        {/* Input */}
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="lg:col-span-2 mt-6 overflow-hidden hidden md:block just__in"
        >
          <Input />
        </div>
      </div>
    </div>
  );
};

export default Review;
