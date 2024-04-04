import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import LinkButton from "../../global/PrimaryButton.jsx";

const ToothExtractionBody = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const openLightbox = () => {
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const [showEmbed, setShowEmbed] = useState(false);

  const toggleEmbed = () => {
    setShowEmbed(!showEmbed);
  };

  return (
    <>
      <div className="max-w-screen-2xl md:mx-auto mx-[5%]">
        <div className="max-w-screen-xl mx-auto pt-[10%] px-[5%] pb-[5%]">
          <h1 className="text-center text-4xl font-semibold text-primary py-4">
            Guaranteed Tooth Extraction - Same Day Treatment
          </h1>
          <p className=" max-w-screen-lg text-textDecoder mx-auto text-center text-md text-paragraph py-4">
            We understand that tooth pain can be unbearable and waiting is not
            an option. That’s why we guarantee same-day tooth extraction
            services to provide you with immediate relief.
          </p>
        </div>
      </div>
      <div className="max-w-screen-2xl md:mx-auto mx-[5%]">
        <div className="pb-[5%] px-[5%]">
          <h1 className="text-center text-4xl text-primary font-semibold py-4">
            Our Extraction Services and Pricing
          </h1>
          <div className="grid md:grid-cols-3 grid-cols-1 justify-center pb-6 pt-10 items-center gap-[3%]">
            <div className="p-6 h-full flex flex-col justify-center text-center bg-backgroundPrimary rounded-lg">
              <h2 className="text-2xl text-primary font-normal py-2">£140</h2>
              <p className="text-textDecoder">
                <b> Simple Tooth Extraction: </b>
                This category typically includes the removal of teeth that are
                visible in the mouth and do not require surgical procedures.
                These are straightforward extractions, often involving teeth
                that are fully erupted and have simple root structures.
              </p>
            </div>
            <div className="p-6 h-full flex flex-col justify-center text-center bg-backgroundPrimary rounded-lg">
              <h2 className="text-2xl text-primary font-normal py-2"> £195</h2>
              <p className="text-textDecoder">
                <b>Intermediate Tooth Extraction: </b>
                This involves slightly more complex procedures than simple
                extractions. It might include the removal of teeth that have
                broken at the gum line or have not fully erupted, like partially
                erupted wisdom teeth. The process might require sectioning the
                tooth or removing some overlying bone.
              </p>
            </div>
            <div className="p-6 h-full flex flex-col justify-center text-center bg-backgroundPrimary rounded-lg">
              <h2 className="text-2xl text-primary font-normal py-2"> £295</h2>
              <p className="text-textDecoder">
                <b>Complex Tooth Extraction: </b>
                Complex extractions are the most involved and typically include
                surgical procedures. This might involve the removal of impacted
                teeth, like impacted wisdom teeth, or teeth with complicated
                root structures. These extractions usually require incisions,
                removal of bone, and possibly the sectioning of the tooth into
                multiple parts for easier removal.
              </p>
            </div>
          </div>
        </div>
        <div className="px-[5%] pb-[5%]">
          {!showEmbed ? (
            <div
              onClick={toggleEmbed}
              style={{ cursor: "pointer", position: "relative" }}
            >
              <img
                className="w-full h-[600px] rounded-xl shadow-xl"
                src="https://res.cloudinary.com/db1i46uiv/image/upload/v1708321609/Screenshot_2024-02-18_224734_ponjjr.png"
                alt="Thumbnail"
              />
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ color: "#fff" }}
              >
                <button className="p-10 text-white rounded-full bg-customBlack-50/70 transform transition-all duration-300 hover:scale-110">
                  <FaPlay />
                </button>
              </div>
            </div>
          ) : null}
          {showEmbed && (
            <div>
              <iframe
                mute
                className="w-full"
                height="600px"
                src="https://www.youtube.com/embed/I980f_bpDMI?si=rA_j60KPoGNYI8Gb"
                title="About Pav Dental"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ display: showEmbed ? "block" : "none" }}
              ></iframe>
            </div>
          )}
        </div>
      </div>
      <div id="body" className="max-w-screen-2xl md:mx-auto mx-[5%]">
        <div className="pb-[5%] px-[5%]">
          <h1 className="text-center text-4xl text-primary font-semibold py-4">
            Post-operative instructions after a tooth extraction
          </h1>
          <p className=" max-w-screen-lg text-textDecoder mx-auto text-center text-md text-paragraph py-4">
            Post-operative instructions after a tooth extraction are crucial for
            a smooth recovery and to minimize the risk of complications. Here's
            a general guide, but remember to follow any specific instructions
            given by your dentist or oral surgeon:
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 justify-center pb-6 pt-10 gap-8">
            <div className="p-6 h-full flex flex-col  bg-backgroundPrimary rounded-lg">
              <h2 className="text-xl text-primary font-normal py-2">
                Bleeding Management:
              </h2>
              <p className="text-textDecoder">
                - Use over-the-counter pain relievers like ibuprofen or
                acetaminophen as directed. <br />- If prescribed pain
                medication, take as instructed.
              </p>
            </div>
            <div className="p-6 h-full flex flex-col  bg-backgroundPrimary rounded-lg">
              <h2 className="text-xl text-primary font-normal py-2">
                {" "}
                Swelling and Bruising :
              </h2>
              <p className="text-textDecoder">
                - Apply an ice pack to the cheek near the extraction site for 10
                minutes on, then 10 minutes off, during the first 24 hours.
              </p>
            </div>
            <div className="p-6 h-full flex flex-col  bg-backgroundPrimary rounded-lg">
              <h2 className="text-xl text-primary font-normal py-2"> Rest:</h2>
              <p className="text-textDecoder">
                - Relax for at least 24 hours after the extraction. <br />-
                Avoid strenuous activities for 2-3 days to reduce bleeding and
                help the healing process.
              </p>
            </div>
            <div className="p-6 h-full flex flex-col  bg-backgroundPrimary rounded-lg">
              <h2 className="text-xl text-primary font-normal py-2">
                Oral Hygiene:
              </h2>
              <p className="text-textDecoder">
                - Do not rinse your mouth for the first 24 hours. <br />- After
                24 hours, gently rinse with warm salt water (1/2 teaspoon of
                salt in a cup of water) after meals and before bed.
              </p>
            </div>
            <div className="p-6 h-full flex flex-col  bg-backgroundPrimary rounded-lg">
              <h2 className="text-xl text-primary font-normal py-2">
                {" "}
                Bleeding Management:
              </h2>
              <p className="text-textDecoder">
                - Bite on a gauze pad firmly for 30-60 minutes after the
                extraction. <br />- If bleeding continues, replace the gauze and
                bite down for another 30 minutes.
              </p>
            </div>
            <div className="p-6 h-full flex flex-col  bg-backgroundPrimary rounded-lg">
              <h2 className="text-xl text-primary font-normal py-2">
                {" "}
                Eating and Drinking:
              </h2>
              <p className="text-textDecoder">
                - Start with soft foods and liquids <br />
                - Avoid using a straw for the first few days to prevent
                dislodging the blood clot. <br />- Avoid hot liquids and
                alcoholic beverages in the first 24 hours.
              </p>
            </div>
            <div className="p-6 h-full flex flex-col  bg-backgroundPrimary rounded-lg">
              <h2 className="text-xl text-primary font-normal py-2">
                Smoking:
              </h2>
              <p className="text-textDecoder">
                - Avoid smoking for as long as possible after the extraction,
                ideally for at least 48 hours.
              </p>
            </div>
            <div className="p-6 h-full flex flex-col  bg-backgroundPrimary rounded-lg">
              <h2 className="text-xl text-primary font-normal py-2">
                {" "}
                Protect the Clot:
              </h2>
              <p className="text-textDecoder">
                - Avoid spitting or rinsing forcefully. <br />- Chew on the
                opposite side of your mouth.s.
              </p>
            </div>
            <div className="p-6 h-full flex flex-col  bg-backgroundPrimary rounded-lg">
              <h2 className="text-xl text-primary font-normal py-2">
                {" "}
                Medications:
              </h2>
              <p className="text-textDecoder">
                - Take any prescribed antibiotics as directed to prevent
                infection.
              </p>
            </div>
            <div className="p-6 h-full flex flex-col  bg-backgroundPrimary rounded-lg">
              <h2 className="text-xl text-primary font-normal py-2">
                Follow-Up:
              </h2>
              <p className="text-textDecoder">
                - Keep any follow-up appointments with your dentist or oral
                surgeon.
              </p>
            </div>
            <div className="p-6 h-full flex flex-col  bg-backgroundPrimary rounded-lg">
              <h2 className="text-xl text-primary font-normal py-2">
                {" "}
                Watch for Complications:
              </h2>
              <p className="text-textDecoder">
                - Look out for signs of infection like fever, severe pain, or
                swelling that worsens after a few days. Also, be aware of dry
                socket, a condition where the blood clot fails to develop or is
                dislodged, leading to delayed healing.
              </p>
            </div>
            <div className="p-6 h-full flex flex-col  bg-backgroundPrimary rounded-lg">
              <h2 className="text-xl text-primary font-normal py-2">
                {" "}
                Remender:
              </h2>
              <p className="text-textDecoder">
                Remember, these are general guidelines. Always adhere to the
                specific instructions given by your healthcare provider, as they
                may have additional or different recommendations based on your
                individual case and health history.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl md:mx-auto mx-[5%]">
        <div className=" pb-[5%] px-[5%]">
          <div className="grid md:grid-cols-2 grid-cols-1 py-4 gap-[5%] items-center">
            <div className="py-12">
              <div className="pb-6">
                <h1 className="text-4xl font-semibold text-primary py-4">
                  Book Your Appointment Today
                </h1>
                <p className=" max-w-[80%]  text-textDecoder text-md ">
                  Don’t let tooth pain hold you back. Contact PavDental now for
                  a consultation and experience swift, professional care that
                  puts your needs first.
                </p>
              </div>
              <div className="pt-6">
                <h1 className="text-3xl font-semibold text-primary py-4">
                  Why Choose PavDental?
                </h1>
                <div className=" text-textDecoder text-md ">
                  <p className=""> • Experienced and Compassionate Team</p>
                  <p className=""> • State-of-the-Art Facilities</p>
                  <p className=""> • Patient-Centric Approach</p>
                  <p className="">• Affordable and Transparent Pricing</p>
                </div>
                <div className="py-8">
                  <LinkButton
                    target="_blank"
                    href="https://uk.dentalhub.online/v1/view/organization/6119/index.html#/perspectives/3"
                    variant="secondary"
                  >
                    Book an appointment
                  </LinkButton>
                </div>
              </div>
            </div>

            {isLightboxOpen && (
              <div className="fixed top-0 cursor-pointer overflow-hidden left-0 w-full h-full bg-black bg-opacity-100 z-[99999] flex justify-center items-center">
                <div className="relative">
                  <button
                    className="absolute top-2 right-2 text-white"
                    onClick={closeLightbox}
                  >
                    Close
                  </button>
                  {/* Add your video player component here */}
                  <iframe
                    title="video"
                    className="md:w-[450px] md:h-[800px] w-[300px] h-[600px]"
                    src="https://www.youtube.com/embed/wJdAOwpC7jw?si=x3kBJVyE__6BBy5n"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            {/* Add onClick to open lightbox */}
            <div
              className="md:h-full h-[500px] flex justify-center items-center cursor-pointer bg-cover rounded-xl bg-[url('https://res.cloudinary.com/db1i46uiv/image/upload/v1706966683/pixlr-image-generator-3d73c7b6-9977-412a-97d1-b4ab8c29b122_jjgiyv.png')]"
              onClick={openLightbox}
            >
              <div className="text-center">
                <button className="p-10 text-white rounded-full bg-customBlack-50/70 transform transition-all duration-300 hover:scale-110">
                  <FaPlay />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToothExtractionBody;
