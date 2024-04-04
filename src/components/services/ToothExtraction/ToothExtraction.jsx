import React from "react";
import Faq from "./Faq";
import ToothExtractionInfo from "./ToothExtractionInfo";
import HomeBanner from "../../home/HomeBanner";
import ToothExtractionBody from "./ToothExtractionBody";
import ToothExtractionHeader from "./ToothExtractionHeader";
import DynamicSeo from "../../global/DynamicSeo";
const ClearAligners = () => {
  return (
    <>
      <ToothExtractionHeader />
      <ToothExtractionBody />
      <Faq />
      <div className="mb-5">
        <HomeBanner />
      </div>
      <ToothExtractionInfo />
    </>
  );
};

export default ClearAligners;
export const Head = () => (
  <DynamicSeo
    title="Get the Best Tooth Extraction Treatment in Leeds| Pav Dental "
    description="Book an emergency tooth extraction service in Leeds with Pav Dental. Our skilled dentists ensure safe and effective tooth removal treatments. Visit now!"
  />
);
