import React from "react";

const Offers = () => {
  return (
    <div className="mx-8 md:mx-24  my-32">
      <h2 className=" py-1 text-3xl font-medium mb-8 rounded-lg  border-2  bg-gradient-to-tl from-blue-300 via-emerald-500 to-lime-600 text-gray-700">
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
            <a
              href="#"
              rel="noreferrer noopener"
              className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block dark:bg-gray-50 dark:text-gray-900 dark:border-gray-400"
            >
              Grave Offer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
