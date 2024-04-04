import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const NhsCard = ({ title, price, features, remaining }) => {
  return (
    <div className="bg-white rounded text-center py-16">
      <div className="uppercase text-center text-secondary font-medium tracking-[0.2em] text-sm ">
      Bronze
      </div>
      <h3 className="text-2xl  my-2 px-12 text-primary font-semibold"> £9.47 (just 40p per day) <br/> per month</h3>
      <ul className="my-7 text-gray-600 px-12 text-left">
          <li className="my-4 flex items-start">
            <span className="w-4 h-4 inline-block mr-4">
              <FaCheckCircle className="text-green-500 text-lg  mt-1" />
            </span>
            1x check-up
          </li>
          <li className="my-4 flex items-start">
            <span className="w-4 h-4 inline-block mr-4">
              <FaCheckCircle className="text-green-500 text-lg  mt-1" />
            </span>
            1x hygiene treatments
          </li>
          <li className="my-4 flex items-start">
            <span className="w-4 h-4 inline-block mr-4">
              <FaCheckCircle className="text-green-500 text-lg  mt-1" />
            </span>
            Xrays included
          </li>
          <li className="my-4 flex items-start">
            <span className="w-4 h-4 inline-block mr-4">
              <FaCheckCircle className="text-green-500 text-lg  mt-1" />
            </span>
            Emergency appointments within 72hrs
          </li>
          <li className="my-4 flex items-start">
            <span className="w-4 h-4 inline-block mr-4">
              <FaCheckCircle className="text-green-500 text-lg  mt-1" />
            </span>
            10% off treatment
          </li>
          <li className="my-4 flex items-start">
            <span className="w-4 h-4 inline-block mr-4">
              <FaCheckCircle className="text-green-500 text-lg  mt-1" />
            </span>
            10% off Products
          </li>
      </ul>
    </div>
  );
};

export default NhsCard;
