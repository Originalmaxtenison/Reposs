"use client";

import { Navlinks } from "@/constant/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

// define props type
type props = {
  openNav: () => void;
};

const Nav = ({ openNav }: props) => {
  // set bg here

  return (
    <div className="fixed w-full transition-all duration-200 h-[12vh] z-[2]">
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Image src="/images/3.png" alt="logo" width={60} height={60} className="rounded-[30%]" />
        {/* NavLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {Navlinks.map((link) => {
            return (
              <Link key={link.id} href={link.url}>
                <p className="nav__link">{link.label}</p>
              </Link>
            );
          })}
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <a
            href="/#Mail"
            className="md:px-10 md:py-2 px-8 py-1.5 text-white font-semibold text-base bg-pink-700 hover:bg-pink-900 transition-all duration-200 rounded-lg"
          >
            Send Mail
          </a>
          {/* Burger lines */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
