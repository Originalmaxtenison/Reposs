import { Category } from "@/Product/product";
import Image from "next/image";
import React from "react";

const Productpage: React.FC<Category> = ({ name, cards }) => {
  return (
    <div data-aos="fade-up" data-aos-delay="200" className="pt-6 pb-16 bg-gray-200">
      <h2 className="text-center text-5xl font-bold">{name}</h2>
      <div className="w-[80%] pt-8 pb-8 mx-auto">
        <div className="md:mt-16 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {cards.map((Card) => (
            <div key={Card.id} className="bg-white rounded-lg overflow-hidden cursor-pointer">
              {/* images */}
              <div>
                <Image
                  src={Card.image}
                  alt={Card.title}
                  width={400}
                  height={400}
                  className="w-full h-full"
                />
              </div>
              {/* prices */}
              <div className="p-4">
                {/* cut z index from the classes */}
                <h1 className="ml-auto relative h-10 w-20 flex items-center text-lg font-bold justify-center flex-col mt-[-2rem] rounded-full bg-rose-700 text-white">
                  ${Card.price}
                </h1>
                {/* title of card */}
                <div className="flex items-center mt-6 space-x-4">
                  <span className="text-lg text-black text-opacity-70 font-bold">
                    <a href="/" className="hover:text-rose-500">
                      {Card.title}
                    </a>
                  </span>
                  <span className="text-base text-gray-600">{Card.country}</span>
                </div>
                {/* category */}
                <h1 className="text-xl text-gray-800 font-bold mt-2">{Card.category}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productpage;
