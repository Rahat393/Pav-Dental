import React from "react";
import WhiteningBanner from "./Whitening-header";
import WhiteningCta from "./WhiteningCta";
import Range from "./Range";
import ProductsBanner from "./ProductsBanner";
import Faq from "./Faq";
import Types from "./Types";
import HomeBanner from "../../home/HomeBanner";
import DynamicSeo from "../../global/DynamicSeo";

const Whitening = () => {
  return (
    <>
      <WhiteningBanner />
      <Types />
      <WhiteningCta />
      <ProductsBanner />
      <Range />
      <Faq />
      <div className="mb-5">
        <HomeBanner />
      </div>
    </>
  );
};

export default Whitening;

export const Head = () => (
  <DynamicSeo
    title="Best Teeth Whitening Service & Product  in Leeds | Pav Dental"
    description="Get a radiant smile with our expert teeth whitening services in Leeds. Choose from Whitening Strips, Home, or In-Office Whitening for great results. Visit now!"
  />
);
