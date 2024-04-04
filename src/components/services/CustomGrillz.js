import React from "react";
import AestheticsBanner from "./CustomGrillz/AestheticsBanner";
import AestheticsServices from "./CustomGrillz/AestheticsServices";
import QualityProducts from "./CustomGrillz/QualityProducts";
import OurValues from "./CustomGrillz/OurValues";
import AestheticsTestimonial from "./CustomGrillz/AestheticsTestimonial";
import Contact from "./CustomGrillz/Contact";
import HomeBanner from "../home/HomeBanner";
import DynamicSeo from "../global/DynamicSeo";

const FacialAesthetics = () => {
  return (
    <>
      <div className="bg-[#1E1E1E] text-white">
        <AestheticsBanner />
        <AestheticsServices />
        <AestheticsTestimonial />
        <OurValues />
        <QualityProducts />
        <div className="mb-5">
          <HomeBanner />
        </div>
        <Contact />{" "}
        
      </div>
    </>
  );
};

export default FacialAesthetics;

export const Head = () => (
  <DynamicSeo
    title="Get Custom Grillz and Tooth Gems in Leeds | Pav Dental"
    description="We at Pav Dental offers a customized grillz and tooth gems in Leeds. Choose from gold, silver, and diamond options to create a look that's uniquely yours."
  />
);