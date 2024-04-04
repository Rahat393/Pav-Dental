import { Button } from "@material-tailwind/react";
import { Link } from "gatsby";
import React, { useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import Burger from "./Burger";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Navigation from "./Navigation";
import Topbar from "./Topbar";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <header>
      <Topbar />
      <div className="hidden md:flex justify-between items-center  container mx-auto px-2 py-6 xl:py-0">
        <Logo className />

        <div className="flex items-center">
          <Navigation />
          <div>
            <a
              href="tel:01133228354"
              className="mr-2  font-medium text-gray-600 ml-3 block xl:hidden "
            >
              <Button
                variant="outlined"
                className=" flex mb3p red pd-0 items-center text-sm px-1.5 whitespace-nowrap"
              >
                0113 322 8354 - Pvt.
              </Button>
            </a>
            {/* <a
              href="tel:01132638509"
              className="mr-2  font-medium text-gray-600 ml-3 block xl:hidden "
            >
              <Button
                variant="outlined"
                className=" flex vlue pd-0 items-center text-sm px-1.5 whitespace-nowrap"
              >
                0113 263 8509 - NHS
              </Button>
            </a> */}
          </div>

          <Burger open={openDrawer} setOpen={setOpenDrawer} />
        </div>
      </div>

      <MobileMenu open={openDrawer} setOpen={setOpenDrawer} />

      <div className="md:hidden block bg-white p-4">
        <div className="flex items-center">
          <div className="w-[35%]">
            <Link to="/">
              <img
                className="w-full h-full object-contain"
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1707403824/svgexport-1-svg_1_s8l1ev.svg"
                alt="Pav Dental"
              />
            </Link>
          </div>
          <div className="w-[55%]">
            <div className="flex justify-end gap-3 text-[12px]">
              <div className="relative group">
                <button className="py-[2px] my-3 font-semibold border-2 border-red-600 rounded-[6px] hover:text-white text-red-600 px-3 bg-white hover:bg-red-600 group-hover:bg-red-600 group-hover:text-white">
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
                <button className="py-[2px] my-3 font-semibold border-2 border-blue-600 rounded-[6px] hover:text-white text-blue-600 px-3 bg-white hover:bg-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                  NHS
                </button>
                <div className="absolute z-[99] right-0 mt-0 w-60	 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible">
                  <button className="block py-2 px-4 hover:text-white text-blue-600 hover:bg-blue-600 w-full text-left">
                    <a className="flex  gap-2" href="tel:01132638509">
                      <FiPhone className="mt-[2px]" />
                      0113 263 8509
                    </a>
                  </button>
                  <button className="block py-2 px-4 hover:text-white text-blue-600 hover:bg-blue-600 w-full text-left">
                    <a
                      className="flex  gap-2"
                      href="mailto:nhspavdental.com"
                    >
                      <FiMail className="mt-[2px]" />
                      nhspavdental.com
                    </a>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
          <div className=" flex justify-end pl-3 w-[10%]">
            <Burger open={openDrawer} setOpen={setOpenDrawer} />
          </div>
        </div>
      </div>
      <MobileMenu open={openDrawer} setOpen={setOpenDrawer} />
    </header>
  );
};

export default Header;
