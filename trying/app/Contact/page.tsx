import Input from "@/components/Helper/Input";
import Noscroll from "@/components/Helper/Noscroll";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export const metadata = {
  title: "Reposso Contact Page",
  description: "Fill out the Contact Page, Send Us Message.",
};

const page = () => {
  return (
    <div>
      <Noscroll />
      <div data-aos="fade-up" className="w-full h-[90vh] pt-[20vh] mb-16 relative flex items-center justify-center">
        {/* right side */}
        <div data-aos="fade-left" data-aos-delay="400" className="w-[90%] md:w-[60%] lg:[60%] absolute h-[80vh] mr-4 ml-4 md:right-20 flex items-center justify-center bg-gray-200 shadow-lg shadow-gray-600 rounded-xl">
          <div className="w-full just__out">
            <Input />
          </div>
        </div>
        {/* left side */}
        <div data-aos="fade-right" data-aos-delay="400" className="hidden md:block md:w-[30%] top-[30vh] p-5 h-[50vh] bg-rose-500 absolute left-20 rounded-xl shadow-lg shadow-gray-600">
          <div className="flex flex-col w-full h-full relative">
            <ul className="text-white">
              <li className="mb-2 font-semibold">
                Phone No :{" "}
                <a href="tel:91852786321" className="hover:text-rose-900">
                  Sandeep Budbak
                </a>
              </li>
              <li className="mb-2 font-semibold">
                Mobile No :{" "}
                <a href="tel:7845185421" className="hover:text-rose-900">
                  Gotavade Mundi
                </a>
              </li>
              <li className="mb-2 font-semibold">
                Email Address :{" "}
                <a href="mailto:originalmaxtenison@gmail.com" className="hover:text-rose-900">
                  Punit Half takla
                </a>
              </li>
              <li className="mb-2 font-semibold">
                Address : Master list Dharam pura, pind Vasoli, punjab, India, 100495
              </li>
            </ul>
            {/* social links */}
            <div className="flex items-center absolute bottom-0 space-x-4 md:space-x-6 lg:space-x-10 mt-6 cursor-pointer">
              <FaFacebookF className="w-6 h-6 text-white hover:text-rose-900" />
              <FaTwitter className="w-6 h-6 text-white hover:text-rose-900" />
              <FaYoutube className="w-6 h-6 text-white hover:text-rose-900" />
              <FaInstagram className="w-6 h-6 text-white hover:text-rose-900" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
