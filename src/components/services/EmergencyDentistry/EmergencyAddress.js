import { Typography } from "@material-tailwind/react";
import React from "react";
import {
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
} from "react-icons/hi2";

const addressBlocks = [
  {
    id: 1,
    name: "Address",
    val: "– HUB – 786 Leeds Road, Bradford, BD3 8TY ",
    Icon: HiOutlineMapPin,
  },
  {
    id: 2,
    name: "Phone",
    val: "0800 099 6375",
    Icon: HiOutlinePhone,
    href: "tel:0800 099 6375",
  },
  {
    id: 3,
    name: "Email",
    val: "hello@pavdental.com",
    Icon: HiOutlineEnvelope,
  },
];

function EmergencyAddress() {
  return (
    <section className="bg-red-700">
      <div className="container mx-auto px-10 py-20 text-white grid grid-cols-1 lg:grid-cols-3 gap-10">
        {addressBlocks.map((block) => (
          <div className="flex items-center">
            <div className="mr-3 bg-white/25 p-3 rounded-full">
              {<block.Icon className="text-2xl" />}
            </div>
            <div>
              {/* {block.href ? ( */}
              <a href={block.href ? block.href : "#"} target="_blank">
                <Typography variant="h4" className="font-bold">
                  {block.name}
                </Typography>
                {/* ) : ( */}
                {/* <Typography variant="h4" className="font-bold">
                  {block.name}
                </Typography> */}
                {/* )} */}
                <p className=" text-gray-300">{block.val}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default EmergencyAddress;
