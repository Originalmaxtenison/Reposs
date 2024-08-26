import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-20 pb-12 bg-black">
      <div className="w-[90%] mx-auto flex items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-8 border-b-[1.5px] border-white border-opacity-20">
        {/* 1st part */}
        <div className="hidden md:block">
          <Image src={"/images/3.png"} alt="logo" height={100} width={100} />
          <p className="text-white text-opacity-50 mt-6">
            Expore our Categories and Different Products.
          </p>
          {/* social links */}
          <div className="flex items-center space-x-4 mt-6">
            <FaFacebookF className="w-6 h-6 text-white hover:text-rose-500" />
            <FaTwitter className="w-6 h-6 text-white hover:text-rose-500" />
            <FaYoutube className="w-6 h-6 text-white hover:text-rose-500" />
            <FaInstagram className="w-6 h-6 text-white hover:text-rose-500" />
          </div>
        </div>
        {/* 2nd part */}
        <div>
          <h1 className="footer__heading">Quick Links</h1>
          <a href="#">
            <p className="footer__links">Home</p>
          </a>
          <a href="/Download#Categories">
            <p className="footer__links">Categories</p>
          </a>
          <a href="/Download">
            <p className="footer__links">Download</p>
          </a>
          <a href="/Contact">
            <p className="footer__links">Contact Us</p>
          </a>
          <a href="tel:919851251830">
            <p className="footer__links">Call Us</p>
          </a>
          <a href="mailto:originalmaxtenison@gmail.com">
            <p className="footer__links">Email Us</p>
          </a>
        </div>
        {/* 3nd part */}
        <div>
          <h1 className="footer__heading">Popular Categories</h1>
          <p className="footer__links">Wooden Print</p>
          <p className="footer__links">Mozac Print</p>
          <p className="footer__links">Brick Print</p>
          <p className="footer__links">3d Print</p>
          <p className="footer__links">Grass Print</p>
          <p className="footer__links">Custom Print</p>
        </div>
        {/* 4rd part */}
        <div className="hidden md:block">
          <h1 className="footer__heading">Get our New Products on your Email.</h1>
          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="f36d6c56-6474-48a7-9fb7-3619ae3d74d0"
            ></input>
            <input
              id="Mail"
              name="email"
              type="email"
              placeholder="Enter Your Email Here.."
              className="px-6 py-2 rounded-lg outline-none bg-gray-700 w-full text-white"
            />
            <input
              type="submit"
              className="px-6 py-2 mt-4 rounded-lg outline-none bg-rose-500 hover:bg-rose-700 w-full text-white"
              placeholder="Subscribe"
            />
          </form>
        </div>
      </div>
      <p className="text-right pr-4 mt-4 text-base text-white opacity-50">
        &copy; Copyright 2024 all right reserved by Reposso
      </p>
    </div>
  );
};

export default Footer;
