import React from "react";
// import video1 from "../../../../static/videos/1.mp4";
// import video2 from "../../../../static/videos/2.mp4";
// import video3 from "../../../../static/videos/3.mp4";
// import video4 from "../../../../static/videos/4.mp4";
import Pricing from "./Pricing";

const whiteFillingPrices = [
  {
    price: "140",
    name: "Basic Composite Fillings",
    desc: "This pricing is generally for small composite fillings, typically used for minor tooth decay or small cavities. These fillings are ideal for restoring teeth with minimal structural damage. The procedure usually involves a straightforward treatment, often completed in one visit, and covers essential restoration needs.",
  },
  {
    price: "195",
    name: "Intermediate Composite Fillings",
    desc: "This category is for medium-sized composite fillings, suitable for moderate tooth decay or cavities that are larger than those covered under the basic category. These fillings might require more detailed work, including more extensive preparation of the tooth and shaping of the composite material. This tier may also cover fillings that are placed in areas of the mouth that endure more biting force, requiring more durable and carefully shaped restorations.",
  },
  {
    price: "295",
    name: "Advanced Composite Fillings",
    desc: "Advanced composite fillings are priced higher due to their complexity and the materials used. This category includes large fillings for significant decay or damage, potentially involving multiple tooth surfaces or more complex tooth anatomy. These fillings may require extensive shaping to ensure a proper bite and aesthetic appearance, and could involve more time-consuming procedures or multiple visits.",
  },
];

const extractionPrices = [
  {
    price: "140",
    name: "Simple Tooth Extraction",
    desc: "This category typically includes the removal of teeth that are visible in the mouth and do not require surgical procedures. These are straightforward extractions, often involving teeth that are fully erupted and have simple root structures.",
  },
  {
    price: "195",
    name: "Intermediate Tooth Extraction",
    desc: "This involves slightly more complex procedures than simple extractions. It might include the removal of teeth that have broken at the gum line or have not fully erupted, like partially erupted wisdom teeth. The process might require sectioning the tooth or removing some overlying bone.",
  },
  {
    price: "295",
    name: "Complex Tooth Extraction",
    desc: "Complex extractions are the most involved and typically include surgical procedures. This might involve the removal of impacted teeth, like impacted wisdom teeth, or teeth with complicated root structures. These extractions usually require incisions, removal of bone, and possibly the sectioning of the tooth into multiple parts for easier removal.",
  },
];
const rootCanalPrices = [
  {
    price: "195",
    name: "Standard Root Canal Treatment",
    desc: "This category typically includes root canal treatments on teeth with a single root, such as front teeth (incisors and canines). These teeth usually have a straightforward root canal system, which makes the treatment less complicated and time-consuming.",
  },
  {
    price: "295",
    name: "Intermediate Root Canal Treatment",
    desc: "This pricing tier is generally for root canal treatments on premolars or teeth with two roots. The procedure in this category may be more complex than a standard root canal due to the presence of multiple roots and potentially more intricate root canal systems.",
  },
  {
    price: "495",
    name: "Advanced Root Canal Treatment",
    desc: "This is for the most complex root canal treatments, typically involving molars, which have multiple roots and a more complex root canal system. These procedures are often more time-consuming and require advanced techniques and equipment, justifying the higher price.",
  },
];

const ClearAlignersBaner = () => {
  return (
    <section className="container mx-auto px-10 py-12">
      <div className="tab1 py-16">
        <h1 className="blue text-3xl t-style-2	py-6">
          What is General Dentistry?
        </h1>
        <p className="p-style">
          General Dentistry encompasses a wide array of treatments and
          procedures aimed at diagnosing, treating, and preventing dental
          issues. It serves as the first line of defense against oral health
          problems and is crucial for individuals of all ages.
        </p>
      </div>

      <Pricing title="Our Root Canal Prices" services={rootCanalPrices} />
      <div>
        <iframe
          className="w-full pb-20"
          height="600px"
          src="https://www.youtube.com/embed/jJaPPNv8fVM?si=mAdEPB2X4xENA1Zk"
          title="About Pav Dental"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <Pricing title="Our White Filling Prices" services={whiteFillingPrices} />
      <div>
        <iframe
          className="w-full pb-20"
          height="600px"
          src="https://www.youtube.com/embed/C7oYq_iRtD0?si=X9wU8AieGnTYBiF3"
          title="About Pav Dental"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <Pricing title="Our Extraction Prices" services={extractionPrices} />
      <div>
        <iframe
          className="w-full pb-20"
          height="600px"
          src="https://www.youtube.com/embed/I980f_bpDMI?si=TFH4bq-rpBCg1ueE"
          title="About Pav Dental"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <div className="tab1 pb-14">
        <h1 className="blue text-3xl  t-style-2	pb-8">
          Services Offered in General Dentistry
        </h1>
        <div className="flexe pb-10">
          <div className="nove">
            <h2 className="blue text-2xl	pt-2.5 ">Regular Check-ups</h2>
            <p>
              Routine dental check-ups are essential for maintaining good oral
              health. These appointments typically include a dental cleaning,
              X-rays, and an examination by the dentist.
            </p>
          </div>
          <div className="nove">
            <h2 className="blue text-2xl	pt-2.5 "> Dental Fillings</h2>

            <p>
              Dental fillings are used to restore teeth damaged by decay back to
              their normal function and shape.
            </p>
          </div>
          <div className="nove">
            <h2 className="blue text-2xl	pt-2.5 "> Tooth Extractions</h2>

            <p>
              Sometimes a tooth may need to be removed due to decay, disease, or
              crowding. General dentists can perform simple extractions.
            </p>
          </div>
        </div>

        <div className="flexe">
          <div className="nove">
            <h2 className="blue text-2xl	pt-2.5 ">Preventative Care</h2>

            <p>
              General dentistry aims to prevent oral health problems before they
              become severe. This includes advice on proper brushing techniques,
              flossing, and diet.
            </p>
          </div>
          <div className="nove">
            <h2 className="blue text-2xl	pt-2.5 ">Gum Disease Treatment</h2>

            <p>
              Treatment for gum diseases like gingivitis and periodontitis is
              another crucial aspect of general dentistry.
            </p>
          </div>
          <div className="nove">
            <h2 className="blue text-2xl	pt-2.5 ">Dental Crowns and Bridges</h2>

            <p>
              These are used to restore and replace damaged or missing teeth,
              improving the function and appearance of your smile.
            </p>
          </div>
        </div>
      </div>

      <div className="tab1">
        <h1 className="blue text-3xl t-style-2	pb-6">
          Why General Dentistry is Important?
        </h1>

        <p className="p-style-2">
          1. Early Diagnosis: Regular dental visits help in early detection of
          oral health problems like cavities and gum disease.
        </p>
        <p className="p-style-2">
          2. Prevention: General dentistry focuses on preventative care, which
          can save you from more extensive and expensive treatments down the
          line.
        </p>
        <p className="p-style-2">
          3. Education: Dentists not only treat but also educate patients on the
          best practices for oral care.
        </p>
        <p className="p-style-2">
          4. Family Care: General dentistry caters to the dental needs of the
          entire family, from children to seniors.
        </p>
      </div>
      <div className="tab1 pt-16">
        <h1 className="blue text-3xl t-style-2	pb-6">Cost and Insurance</h1>
        <p className="p-style-2">
          The cost of general dentistry services varies depending on the
          treatment and location. Many dental insurance plans cover the cost of
          preventative care treatments like regular check-ups and cleanings.
        </p>
      </div>
      <div className="tab1 pt-16">
        <h1 className="blue text-3xl t-style-2	pb-6">
          How to Choose a General Dentist
        </h1>
        <p className="p-style-2">
          1. Qualifications: Make sure the dentist is board-certified and has
          good reviews.{" "}
        </p>
        <p className="p-style-2">
          2. Location: A conveniently located clinic will make regular visits
          easier.{" "}
        </p>
        <p className="p-style-2">
          3. Services Offered: Ensure that the dental office offers the range of
          services you and your family may need.
        </p>
        <p className="p-style-2">
          4. Insurance: Check if the dental practice accepts your insurance.
        </p>
      </div>
      <div className="tab1 pt-16">
        <h1 className="blue text-3xl t-style-2	pb-6">Educational Videos</h1>
        <div className="grid md:grid-cols-2 gap-4">
          <iframe
            className="w-full"
            height="300px"
            src="https://www.youtube.com/embed/jJaPPNv8fVM?si=mAdEPB2X4xENA1Zk"
            title="About Pav Dental"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className="w-full"
            height="300px"
            src="https://www.youtube.com/embed/kdF9k_YbbgM?si=-GWoIZTLtnoRtkLz"
            title="About Pav Dental"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className="w-full"
            height="300px"
            src="https://www.youtube.com/embed/EqRQfIcw1y0?si=YvkYvaBNoTXbeVFy"
            title="About Pav Dental"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className="w-full"
            height="300px"
            src="https://www.youtube.com/embed/mk0mneumVJo?si=A361cq2vRD8Xk92U"
            title="About Pav Dental"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ClearAlignersBaner;
