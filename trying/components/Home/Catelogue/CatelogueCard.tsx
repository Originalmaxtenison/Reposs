"use client";

import Image from "next/image";
import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

// define the type
type props = {
  product: {
    id: number;
    image: string;
    title: string;
    country: string;
    price: number;
    category: string;
    url: string;
  };
};

const CatelogueCard = ({ product }: props) => {
  return (
    <div
      data-aos="fade-left"
      data-aos-delay="200"
      className="bg-white rounded-lg overflow-hidden relative"
    >
      {/* images */}
      <div>
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="w-full h-full"
        />
      </div>
      {/* prices */}
      <div className="p-4">
        {/* cut z index from the classes */}

        <span className="ml-auto relative h-10 w-20 flex items-center text-lg font-bold justify-center mt-[-2rem] rounded-full bg-rose-700 text-white">
          ${product.price}
        </span>

        {/* title of card */}
        <div className="flex items-center mt-6 space-x-4">
          <span className="text-lg text-black text-opacity-70 font-bold">{product.title}</span>
          <span className="text-base text-gray-600">{product.country}</span>
        </div>
        {/* category */}
        <h1 className="text-xl text-gray-800 font-bold mt-2">{product.category}</h1>
        <span className="absolute rounded-lg right-0 top-0 w-8 h-8 bg-rose-200 hover:bg-gray-200 text-black hover:text-rose-500">
          <a
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center"
          >
            <FaCloudDownloadAlt className="text-2xl mt-1" />
          </a>
        </span>
      </div>
    </div>
  );
};

export default CatelogueCard;
