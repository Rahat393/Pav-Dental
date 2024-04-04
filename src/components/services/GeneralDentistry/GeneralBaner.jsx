import { Button } from "@material-tailwind/react";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const ClearAlignersBaner = () => {
  return (
    <section className="relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-[rgba(38,51,56,.80)] before:z-[1] before:opacity-70">
      <StaticImage
        layout="fullWidth"
        className="h-screen"
        src="../../../images/whitening-background.jpeg"
        alt="Whitening Banner"
      />
      <div className="absolute lg:left-28 left-1/2 -translate-x-1/2 lg:translate-x-0 top-1/2 text-white -translate-y-1/2 z-[2]">
        <h1 className="font-bold text-2xl lg:text-6xl leading-[1.2] lg:leading-tight text-center lg:text-left whitespace-nowrap">
          General Dentistry: Your <br /> of Gateway to Lifelong Oral Health
        </h1>
        <p className="leading-8 my-5 lg:max-w-[700px] max-w-none text-center lg:text-left">
          Welcome to your comprehensive guide to General Dentistry, the
          cornerstone of oral health and wellness. From regular check-ups to
          dental fillings, general dentistry covers a broad range of services
          designed to maintain and improve your dental health. Read on to
          discover the ins and outs of general dentistry and how it contributes
          to a lifetime of healthy smiles.
        </p>

        <a
          className=" mt-7 flex justify-center lg:justify-start"
          href="https://uk.dentalhub.online/soe/new/Parish%20Dental?pid=UKDRP02"
          target="_blank"
        >
          <Button
            className=" bg-white hover:shadow-white/20 text-[#263338]"
            size="lg"
          >
            Book an Appointment
          </Button>
        </a>
      </div>

      <svg
        className=" h-[300px] absolute -bottom-[120px] right-0 z-10 banner-triangle"
        style={{ transform: "rotateX(135deg)" }}
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          fill="#fff"
          d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
          className="shape-fill"
        ></path>
      </svg>
    </section>
  );
};

export default ClearAlignersBaner;
