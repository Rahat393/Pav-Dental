import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@material-tailwind/react";
import { useLocation } from "@reach/router";
import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import { HiChevronDown } from "react-icons/hi2";
import { navPages } from "../../common/constant";
import { customSlugify } from "../../common/utils";
import useServicesQuery from "../../hooks/useServicesQuery";
import Logo from "./Logo";

const MobileMenu = ({ open, setOpen }) => {
  const [accordionOpen, setAccordionOpen] = useState(0);
  const services = useServicesQuery();

  const location = useLocation();

  const handleAccordionOpen = (value) =>
    setAccordionOpen(accordionOpen === value ? 0 : value);

  useEffect(() => {
    const serviceSlugs = services.map((service) => customSlugify(service.name));
    const currentLocationSplit = location.pathname.split("/");
    const currentLocation =
      currentLocationSplit[currentLocationSplit.length - 1];

    if (serviceSlugs.includes(currentLocation)) {
      handleAccordionOpen(1);
    }
  }, []);

  const closeDrawer = () => setOpen(false);

  return (
    <Drawer width={400} open={open} className="p-6">
      <div className="mb-3 flex items-center justify-between">
        <div className="w-40">
          <Logo />
        </div>
        <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-7 w-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </div>
      <div className="flex justify-center gap-3 text-[12px]">
        <div className="relative group">
          <button className="py-[2px] my-3 font-semibold border-2 border-red-600 rounded-[6px] hover:text-white text-red-600 px-3 bg-white hover:bg-red-600 group-hover:bg-red-600 group-hover:text-white">
            PRIVATE
          </button>
          <div className="absolute z-[99] right-[-146px] mt-0 w-60	bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible">
            <button className="block py-2 px-4 hover:text-white text-red-600 hover:bg-red-600 w-full text-left">
              <a className="flex  gap-2" href="tel:08000996375">
                <FiPhone className="mt-[2px]" />
                0800 099 6375
              </a>
            </button>
            <button className="block py-2 px-4 hover:text-white text-red-600 hover:bg-red-600 w-full text-left">
              <a className="flex  gap-2" href="mailto:private@pavdental.com">
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
          <div className="absolute z-[99] right-[-81px] mt-0 w-60	 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible">
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
        <a
          target="_blank"
          href="https://booking.setmore.com/scheduleappointment/932f19c8-6989-4716-93c5-c73ac31d511b"
        >
          <button className="py-[2px] my-3 font-semibold border-2 border-customPink-600 rounded-[6px] hover:text-white text-customPink-600 px-3 bg-white hover:bg-customPink-600 group-hover:bg-customPink-600 group-hover:text-white">
            Book Now
          </button>
        </a>
      </div>
      <div className="flex gap-2">
        <List
          className={`${
            accordionOpen === 1 ? "overflow-y-scroll" : ""
          } h-[calc(100vh-50px)] pb-10`}
        >
          {navPages.map((page) => {
            if (page.name === "Services") {
              return (
                <Accordion
                  key={page.id}
                  open={accordionOpen === 1}
                  icon={
                    <HiChevronDown
                      className={`mx-auto h-4 w-4 transition-transform ${
                        accordionOpen === 1 ? "rotate-180" : ""
                      }`}
                    />
                  }
                >
                  <ListItem className="p-0" selected={accordionOpen === 1}>
                    <AccordionHeader
                      onClick={() => handleAccordionOpen(1)}
                      className="border-b-0 p-3"
                    >
                      <Typography
                        color="blue-gray"
                        className="mr-auto font-normal"
                      >
                        {page.name}
                      </Typography>
                    </AccordionHeader>
                  </ListItem>
                  <AccordionBody className="py-1">
                    <List className="p-0">
                      {services.map((service) => (
                        <Link
                          key={service.id}
                          to={`/services/${customSlugify(service.name)}`}
                          activeClassName="bg-blue-gray-50 rounded-lg"
                        >
                          <ListItem className="ml-4">
                            <Typography
                              color="blue-gray"
                              className="mr-auto font-normal"
                            >
                              {service.name}
                            </Typography>
                          </ListItem>
                        </Link>
                      ))}
                    </List>
                  </AccordionBody>
                </Accordion>
              );
            }

            return (
              <Link
                to={page.route}
                activeClassName="bg-blue-gray-50 rounded-lg"
                key={page.id}
              >
                <ListItem>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    {page.name}
                  </Typography>
                </ListItem>
              </Link>
            );
          })}
        </List>
      </div>
    </Drawer>
  );
};

export default MobileMenu;
