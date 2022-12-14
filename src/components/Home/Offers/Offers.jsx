import React from "react";

const Offers = () => {
  return (
    <div className="mx-8 md:mx-24  my-32">
      <h2 className=" py-1 text-3xl font-bold mb-8 rounded-lg  border-2  bg-gradient-to-tl from-blue-300 via-emerald-500 to-lime-600 text-white">
        Mega Offer
      </h2>
      <div className="p-6 py-12 bg-gradient-to-tl from-teal-900 via-cyan-300 to-current text-gray-900 rounded-lg">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Up to
              <br className="sm:hidden" />
              15% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>For New Year 2023:</span>
              <span className="font-bold text-lg">KS Interior</span>
            </div>
            <p className="border-2 rounded-lg px-3 py-2 font-semibold">
              Grave Offer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
