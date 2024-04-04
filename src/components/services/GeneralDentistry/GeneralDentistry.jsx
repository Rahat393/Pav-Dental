import React from "react";
import GeneralBaner from "./GeneralBaner";
import GeneralContent from "./GeneralContent";
import Faq from "./Faq";
import ContactInfo from "./ContactInfo";
import HomeBanner from "../../home/HomeBanner";
import DynamicSeo from "../../global/DynamicSeo";

const ClearAligners = () => {
  return (
    <>
      <GeneralBaner />
      <GeneralContent />

      <Faq />
      <section className="container mx-auto px-10 py-12">
        <div className="tab1 py-6">
          <h1 className="blue text-3xl	py-4">Conclusion</h1>
          <p>
            General Dentistry is an integral part of maintaining your overall
            health. With a focus on preventative care, diagnosis, and treatment,
            it serves as your first line of defense against oral health issues.
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
    title="General Dentistry Treatments in Leeds | Pav Dental "
    description="Get the best general dental care at Pav Dental in Leeds, UK. From dental fillings to overall oral care, trust our specialists for your family's dental health. "
  />
);
