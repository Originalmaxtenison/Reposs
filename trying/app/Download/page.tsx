import Noscroll from "@/components/Helper/Noscroll";
import Productpage from "@/components/Helper/Product";
import { groupdata } from "@/Product/product";
import React from "react";

export const metadata = {
  title: "Reposso Download Page",
  description: "Download PDFs Explore our Products and Categories.",
};

const Categorypage: React.FC = () => {
  return (
    <div>
      <Noscroll />
      <div className="w-full pt-[12vh]">
        <div className="flex justify-center w-full bg-gray-200 pr-10 pl-10 pt-6">
          <h1 data-aos="fade-up" className="text-4xl md:text-5xl pb-4 text-blue-950 xl:text-6xl font-bold border-b-4 border-blue-950 text-center">
            Download
          </h1>
        </div>
        {groupdata.map((Category) => (
          <Productpage key={Category.id} {...Category} />
        ))}
      </div>
    </div>
  );
};

export default Categorypage;
