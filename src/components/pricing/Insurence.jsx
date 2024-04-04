import React from "react";
import Slide from "./slide";

const Insurence = () => {
  return (
    <>
      <div className="px-10 pb-24 container mx-auto">
        <h2 className="text-center text-5xl my-2 pb-10 capitalize font-semibold text-primary">
          We Accept all Insurance Providers
        </h2>
        <div className="">
          <Slide />
        </div>
        <div className="py-10">
          <h3 className="text-xl text-primary font-semibold my-2 pb-2  ">
            Special Announcement from Pav Dental
          </h3>
          <p className="text-secondary text-lg  my-2 pb-8">
            At Pav Dental, we take immense pride in being recognized as the
            market leader in dental pricing. Our dedication to offering
            top-notch dental services at the most competitive rates is
            unwavering.
          </p>

          <h3 className="text-xl text-primary font-semibold my-2 pb-2  ">
            Our Price Match Promise
          </h3>
          <p className="text-secondary text-lg  my-2 pb-8">
            We're committed to providing not only the best dental care but also
            the best value. Therefore, we guarantee to beat the price of any
            dental treatment offered by our competitors. Just present us with a
            written quote from another provider, and we will offer you a better
            price.
          </p>

          <h3 className="text-xl text-primary font-semibold my-2 pb-2  ">
            Choose Pav Dental for:
          </h3>
          <p className="text-secondary text-lg  my-2 pb-8">
            <b className="text-primary">Affordable Excellence: </b> We ensure
            that superior dental care is accessible to everyone.
            <br />
            <b className="text-primary">Comprehensive Care: </b> From routine
            check-ups to advanced treatments, we offer a wide range of dental
            services.
            <br />
            <b className="text-primary">Trusted Expertise: </b> Our team of
            skilled dental professionals is dedicated to your oral health. Visit
            us at Pav Dental for your dental needs, and experience first-hand
            our commitment to affordability and quality care.
          </p>
        </div>
      </div>
    </>
  );
};

export default Insurence;
