import { productData } from "@/data/data";
import Image from "next/image";
import React from "react";
import CatelogueCard from "./CatelogueCard";

const Catelogue = () => {
  return (
    <div className="pt-16 pb-16 relative bg-gray-200">
      {/* background animation */}
      <Image
        src={"/images/3.png"}
        alt="img"
        width={800}
        height={800}
        className="hidden absolute top-[50%] rounded-full opacity-60 animate-pulse"
      />
      <div className="w-[80%] pt-8 pb-8 mx-auto ">
        {/* title */}
        <h1 data-aos="fade-up" className="text-4xl md:text-5xl text-gray-900 font-bold">
          Most Selling Products
        </h1>
        {/* catelogue listings */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="md:mt-16 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"
        >
          {productData.map((product) => {
            // individual product cards
            return (
              <div key={product.id}>
                <CatelogueCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Catelogue;
