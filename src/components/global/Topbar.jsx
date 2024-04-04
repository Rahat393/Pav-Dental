import React from "react";
import { FiClock, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Topbar = () => {
  return (
    <div className="bg-primary text-white text-sm font-light hidden lg:block">
      <div className="flex container mx-auto px-2 ">
        <div className="w-[25%] flex items-center">
          <FiClock className="mr-2" />
          <span>Open 7 days - 24/7 available on request</span>
        </div>
        <div className="w-[75%]">
          <div className="flex justify-end">
            <div className="flex gap-4">
              <div className="relative group">
                <button className="py-1 my-3 font-semibold border-2 border-red-600 rounded-lg hover:text-white text-red-600 px-4 bg-white hover:bg-red-600 group-hover:bg-red-600 group-hover:text-white">
                  PRIVATE
                </button>
                <div className="absolute z-[99] right-0 mt-0 w-60	bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                  <button className="block py-2 px-4 hover:text-white text-red-600 hover:bg-red-600 w-full text-left">
                    <a className="flex  gap-2" href="tel:08000996375">
                      <FiPhone className="mt-[2px]" />
                      0800 099 6375
                    </a>
                  </button>
                  <button className="block py-2 px-4 hover:text-white text-red-600 hover:bg-red-600 w-full text-left">
                    <a
                      className="flex  gap-2"
                      href="mailto:private@pavdental.com"
                    >
                      <FiMail className="mt-[2px]" />
                      private@pavdental.com
                    </a>
                  </button>
                </div>
              </div>
              {/* <div className="relative group">
                <button className="py-1  my-3 font-semibold border-2 border-blue-600 rounded-lg hover:text-white text-blue-600 px-4 bg-white hover:bg-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                  NHS
                </button>
                <div className="absolute z-[99] right-0 mt-0 w-60	 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                  <button className="block py-2 px-4 hover:text-white text-blue-600 hover:bg-blue-600 w-full text-left">
                    <a className="flex  gap-2" href="tel:01132638509">
                      <FiPhone className="mt-[2px]" />
                      0113 263 8509</a>
                  </button>
                  <button className="block py-2 px-4 hover:text-white text-blue-600 hover:bg-blue-600 w-full text-left">
                  <a className="flex  gap-2" href="mailto:nhspavdental.com">
                      <FiMail className="mt-[2px]" />
                      nhspavdental.com</a>

                  </button>
                </div>
              </div> */}
            </div>
            <div className="pl-4 flex items-center">
              <FiMapPin className="mr-2" /> 7-9 Branch Rd, Armley, Leeds LS12
              3AQ, UK
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
