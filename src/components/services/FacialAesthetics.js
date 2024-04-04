import React from "react";
import AestheticsBanner from "./FacialAesthetics/AestheticsBanner";
import AestheticsServices from "./FacialAesthetics/AestheticsServices";
import QualityProducts from "./FacialAesthetics/QualityProducts";
import OurValues from "./FacialAesthetics/OurValues";
import PriceList from "./FacialAesthetics/PriceList";
import AestheticsTestimonial from "./FacialAesthetics/AestheticsTestimonial";
import Contact from "./FacialAesthetics/Contact";
import KeepingSafe from "./FacialAesthetics/KeepingSafe";
import ThingsToKnow from "./FacialAesthetics/ThingsToKnow";
import TreatmentFaq from "./FacialAesthetics/TreatmentFaq";
import HomeBanner from "../home/HomeBanner";
import DynamicSeo from "../global/DynamicSeo";

const FacialAesthetics = () => {
  return (
    <>
      <div className="bg-[#1E1E1E] text-white">
        <AestheticsBanner />
        <AestheticsServices />
        <QualityProducts />
        <OurValues />
        <PriceList />
        <AestheticsTestimonial />
        <ThingsToKnow />
        <KeepingSafe />
        <TreatmentFaq />
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
    title="Aesthetics Dental Clinic in Leeds - Pav Dental"
    description="Our expert team at Pav Dental offers safe & effective aesthetic dental care services like lip fillers, skin rejuvenation, dermal fillers & more. Book now!"
  />
);
