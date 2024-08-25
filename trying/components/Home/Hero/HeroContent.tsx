import React from "react";

const HeroContent = () => {
  return (
    <div>
      {/* title */}
      <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold md:leading-[2rem] lg:leading-[2rem] xl:leading-[2.5rem] text-white">
        Best Service and Quality Guranteed.
      </h1>
      {/* discription */}
      <p className="mt-6 text-sm md:text-base text-white text-opacity-60">
        Discover unparalleled service with us! Operating across India, we partner with trusted
        experts and serve loyal clients, ensuring top tier solutions and unbeatable prices. Our
        commitment to excellence and integrity sets us apart. Experience the difference of working
        with a team dedicated to delivering exceptional value and reliability. Join us in our
        journey!
      </p>
      {/* buttons */}
      <div className="mt-8 flex items-center space-x-4">
        <button className="button__cls bg-green-700 hover:bg-gray-900">Categories</button>
        <a href="/#Contact" className="button__cls bg-yellow-700 hover:bg-yellow-900">
          Contact Us
        </a>
      </div>
      {/* stats */}
      <div className="flex items-center flex-wrap space-x-16 mt-8">
        <div>
          <p className="md:text-lg lg:text-xl text-base text-white font-bold">12 +</p>
          <p className="w-[100px] h-[3px] bg-green-600 mt-2 mb-2 rounded-lg"></p>
          <p className="md:text-lg text-sm text-white text-opacity-60">Categories</p>
        </div>
        <div>
          <p className="md:text-lg lg:text-xl text-base text-white font-bold">50 +</p>
          <p className="w-[100px] h-[3px] bg-blue-600 mt-2 mb-2 rounded-lg"></p>
          <p className="md:text-lg text-sm text-white text-opacity-60">Products</p>
        </div>
        <div>
          <p className="md:text-lg lg:text-xl text-base text-white font-bold">24 / 7</p>
          <p className="w-[100px] h-[3px] bg-pink-600 mt-2 mb-2 rounded-lg"></p>
          <p className="md:text-lg text-sm text-white text-opacity-60">Support</p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
