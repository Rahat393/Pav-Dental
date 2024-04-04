import { Button } from "@material-tailwind/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { BsCalendarCheck } from "react-icons/bs";
import customeGrillzImg from "../../../../static/img/custom-grillz.png";

const AestheticsBanner = () => {
  return (
    <section className="relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[#1E1E1E] before:z-[1] before:opacity-70">
      <StaticImage
        layout="fullWidth"
        className="h-[calc(100vh-150px)] xl:h-[calc(100vh-250px)]"
        src="https://grillz.com/cdn/shop/products/yellow-gold-grillz-los-angeles_1400x.png?v=1628904483"
      />
      <div className="py-6 xl:py-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[2]">
        <h3 className="text-xl lg:text-3xl font-light mb-3">
          Crafting Brilliance, One Smile at a Time
        </h3>
        <div className="border-b mb-6 max-w-[300px] mx-auto"></div>
        <h1 className="font-bold text-4xl lg:text-6xl mb-5 whitespace-normal xl:whitespace-nowrap">
          Custom Grillz and Tooth Gems Crafted for Stardom
        </h1>
        <p className="text-base lg:text-2xl">
          Expert in Custom Grillz for Entertainment Industry
        </p>

        <a
          href="https://booking.setmore.com/scheduleappointment/932f19c8-6989-4716-93c5-c73ac31d511b"
          target="_blank"
        >
          <Button className="mt-12 px-14 py-4 text-lg bg-secondary hover:shadow-secondary/50">
            Book Now
          </Button>
        </a>
      </div>
    </section>
  );
};

export default AestheticsBanner;
