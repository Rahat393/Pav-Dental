import React from "react";
// import video1 from "../../../../static/videos/1.mp4";
// import video2 from "../../../../static/videos/2.mp4";
// import video3 from "../../../../static/videos/3.mp4";
// import video4 from "../../../../static/videos/4.mp4";

const ClearAlignersBaner = () => {
  return (
    <section className="container mx-auto px-10 py-12">
      <div className="tab1 py-6">
        <h1 className="blue text-3xl t-style-2	py-4">
          What is Cosmetic Dentistry?
        </h1>
        <p className="p-style">
          Cosmetic Dentistry refers to dental work that improves the appearance
          of teeth, gums, and/or bite. It primarily focuses on improvement in
          dental aesthetics such as color, position, shape, size, and overall
          smile appearance.
        </p>
      </div>
      <div className="tab1 py-16">
        <h1 className="blue text-3xl  t-style-2	pb-14">
          Popular Cosmetic Dentistry Procedures
        </h1>
        <div className="flexe">
          <div className="nove-3">
            <h2 className="blue text-2xl	pt-2.5 ">Teeth Whitening</h2>

            <p>
              One of the most common and cost-effective cosmetic dentistry
              treatments, teeth whitening can brighten your smile in just one
              session.
            </p>
          </div>
          <div className="nove-3">
            <h2 className="blue text-2xl	pt-2.5 ">Porcelain Veneers</h2>

            <p>
              These are thin shells of porcelain that are custom-fitted to cover
              the front surface of a tooth, often used to correct uneven teeth,
              worn enamel, or discoloration.
            </p>
          </div>
          <div className="nove-3">
            <h2 className="blue text-2xl	pt-2.5 ">Dental Implants</h2>

            <p>
              Used to replace missing teeth, dental implants offer a
              long-lasting solution that looks and feels natural.
            </p>
          </div>
          <div className="nove-3">
            <h2 className="blue text-2xl	pt-2.5 ">Dental Bonding</h2>

            <p>
              This involves applying a tooth-colored resin to a tooth and
              hardening it with a special light. It’s a cost-effective way to
              repair chipped or cracked teeth.
            </p>
          </div>
          <div className="nove-3">
            <h2 className="blue text-2xl	pt-2.5 ">Tooth Contouring</h2>

            <p>
              This procedure involves reshaping the tooth by removing some of
              its enamel to alter its length, shape, or surface.
            </p>
          </div>
        </div>
      </div>

      <div className="tab1 py-6">
        <h1 className="blue text-3xl  t-style-2	py-4">
          Benefits of Cosmetic Dentistry
        </h1>

        <p className="p-style-2">
          1. Enhanced Appearance: The most obvious benefit is a more attractive
          smile.
        </p>
        <p className="p-style-2">
          2. Boosted Confidence: A better smile often leads to increased
          self-esteem and confidence.
        </p>
        <p className="p-style-2">
          3. Improved Oral Health: Some procedures can help improve your oral
          health by making cleaning easier.
        </p>
        <p className="p-style-2">
          4. Long-Lasting Results: Many cosmetic dentistry procedures offer
          long-term or permanent solutions.
        </p>
        <p className="p-style-2">
          5. Wider Range of Options: There are treatments available for almost
          every aesthetic issue you might have with your teeth. l
        </p>
      </div>
      <div className="tab1 py-6">
        <h1 className="blue text-3xl  t-style-2	py-4">Costs and Financing</h1>
        <p className="p-style-2">
          The cost of cosmetic dentistry varies widely depending on the type of
          procedure, the expertise of the dentist, and geographic location.
          While many cosmetic procedures are not covered by dental insurance,
          financing options are often available.
        </p>
      </div>
      <div className="tab1 py-6">
        <h1 className="blue text-3xl  t-style-2	py-4">
          How to Choose a Cosmetic Dentist
        </h1>
        <p className="p-style-2">
          1. Experience and Qualifications: Look for a dentist with specialized
          training and a portfolio of before-and-after cases.{" "}
        </p>
        <p className="p-style-2">
          2. Technology: Opt for a clinic that uses the latest technology for
          more precise and effective treatments.
        </p>
        <p className="p-style-2">
          3. Reviews and Testimonials: Customer reviews can provide valuable
          insights into patient satisfaction and quality of service.
        </p>
        <p className="p-style-2">
          4. Consultation: A thorough initial consultation is a good sign of a
          dentist’s professionalism and concern for your needs.
        </p>
      </div>
      <div className="tab1 py-6">
        <h1 className="blue text-3xl  t-style-2	py-4">Educational Videos</h1>
        <div className="grid md:grid-cols-2 gap-4">
          <iframe
            className="w-full"
            height="300px"
            src="https://www.youtube.com/embed/MrULCZZ4rSk?si=jAiFL-D34t3LVyOg"
            title="About Pav Dental"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className="w-full"
            height="300px"
            src="https://www.youtube.com/embed/58IJdhBZVyc?si=koZ4Lj2UDMlAQXQ0"
            title="About Pav Dental"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe
            className="w-full"
            height="300px"
            src="https://www.youtube.com/embed/fWFiBW1WuBo?si=gf1RM1JI94CDFQ4B"
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
