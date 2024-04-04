import React from "react";
import LinkButton from "../../global/PrimaryButton.jsx";

const MainComponent = () => {
  return (
    <div className="max-w-screen-2xl md:mx-auto mx-[5%]">
      <div className="max-w-screen-lg mx-auto pt-[10%] pb-[5%]">
        <h1 className="text-center md:text-6xl text-3xl font-semibold text-primary py-4">
          Pav Dental: Your Trusted Partner in Oral Health
        </h1>
        <p className="text-center text-md text-paragraph py-4">
          At Pav Dental, our experienced oral surgeons are dedicated to
          providing you with the highest standard of care. Utilizing the latest
          techniques and technologies, we ensure a comfortable and effective
          treatment experience.
        </p>
        <div className="my-4 flex gap-4 justify-center">
          <LinkButton
            target="_blank"
            href="https://booking.setmore.com/scheduleappointment/932f19c8-6989-4716-93c5-c73ac31d511b"
            variant="secondary"
          >
            Book an appointment
          </LinkButton>
          <div className="md:block hidden">
            <LinkButton href="#body" variant="transparent">
              Learn more
            </LinkButton>
          </div>
        </div>
      </div>
      <div className="md:h-[600px] h-[300px] md:mx-10 mx-0 cursor-pointer rounded-xl bg-[url('https://res.cloudinary.com/db1i46uiv/image/upload/v1706910074/dentist-hands-working-young-woman-patient-with-dental-tools_rckfpj.jpg')]"></div>
    </div>
  );
};

export default MainComponent;
