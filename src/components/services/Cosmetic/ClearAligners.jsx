import React from "react";
import ClearAlignersBaner from "./ClearAlignersBaner";
import ClrarContent from "./ClrarContent";
import Faq from "./Faq";
import ContactInfo from "./ContactInfo";
import HomeBanner from "../../home/HomeBanner";
import DynamicSeo from "../../global/DynamicSeo";

const ClearAligners = () => {
  return (
    <>
      <ClearAlignersBaner />
      <ClrarContent />
      <Faq />
      <section className="container mx-auto px-10 py-12">
        <div className="tab1 py-6">
          <h1 className="blue text-3xl	py-4">Conclusion</h1>
          <p>
            Cosmetic Dentistry is more than just superficial enhancements; it's
            about restoring both function and confidence in your smile. Whether
            you're seeking a subtle change or a dramatic transformation,
            cosmetic dentistry offers versatile solutions to meet your needs.
          </p>
        </div>
      </section>
      <div className="mb-5">
        <HomeBanner />
      </div>
      <ContactInfo />
    </>
  );
};

export default ClearAligners;

export const Head = () => (
  <DynamicSeo
    title="Top Cosmetic Dentistry Clinic in Leeds | Pav Dental "
    description="Transform your smile with our cosmetic dentistry services in Leeds. Discover personalized care from our private cosmetic dentist. Book your consultation today!"
  />
);
