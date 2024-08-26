import React from "react";
import { FaAward, FaPhone } from "react-icons/fa";

const About = () => {
  return (
    <div className="pt-16 pb-16" id="About">
      {/* defining grid */}
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        {/* first part */}
        <div>
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col">
              <FaAward className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl text-black font-semibold">Best Quality Product</h1>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.5rem] text-gray-800">
            Ships all over India via Land Routes.
          </h1>
          <p className="mt-4 text-gray-600">
            Having 20+ Years of Experience in this field, We Provide Best Service for long time
            Business.{" "}
          </p>
          <a
            href="tel:79845654485"
            className="flex w-[10rem] items-center space-x-2 px-8 py-3 mt-8 hover:bg-rose-700 transition-all duration-200 rounded-3xl bg-black text-white"
          >
            <span className="mr-2">Call Us</span>
            <FaPhone />
          </a>
        </div>
        {/* second part */}
        <div>
          <div>
            <h1 className="text-7xl lg:text-9xl font-bold text-black text-opacity-5">01</h1>
            <div className="-mt-10">
              <h1 className="text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold">
                New Designs
              </h1>
              <p className="w-[90%] lg:w-0[70%] text-base text-black text-opacity-60">
                New and Mordern Designs made for our clients needs with best Quality Materials.
              </p>
            </div>
          </div>
          <div className="mt-8 w-full">
            <h1 className="text-7xl lg:text-9xl font-bold text-black text-opacity-5">02</h1>
            <div className="-mt-10">
              <h1 className="text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold">
                Easy Transport
              </h1>
              <p className="w-[90%] lg:w-0[70%] text-base text-black text-opacity-60">
                We use Trucks to Deliver our Materials and Products to our clients, with easy and on
                affordalble price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
