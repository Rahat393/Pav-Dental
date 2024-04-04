import React from "react";

import GuidanceIcon from "../../../images/icons/guidance.svg";
import QualityIcon from "../../../images/icons/quality.svg";
import EleganceIcon from "../../../images/icons/elegance.svg";
import CommitmentIcon from "../../../images/icons/commitment.svg";

const OurValues = () => {
  const points = [
    {
      icon: GuidanceIcon,
      title: "3D Scan Submission",
      description:
        "Visit your nearest dental clinic and get a 3D scan of your teeth. Upload the scan to our secure platform. It's quick and easy!",
    },
    {
      icon: QualityIcon,
      title: "Design & Craftsmanship",
      description:
        "Our UK-based expert dental artisans will design your custom grillz. Using only the finest materials, your grillz will be crafted to perfection.",
    },
    {
      icon: EleganceIcon,
      title: "Online Consultation",
      description:
        'Schedule an online video consultation with our UK-based dentists. Get professional advice and customize your grillz to your liking.',
    },
    {
      icon: CommitmentIcon,
      title: "Delivery to Your Doorstep",
      description:
        "Within 4-6 weeks, your personalized grillz will be ready. We ship directly to you, ensuring a hassle-free experience.",
    },
  ];
  return (
    <section className="container mx-auto px-10 mt-28">
      <h2 className="text-4xl text-center font-semibold mb-16">How It Works</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-7">
        {points.map((item) => (
          <div className="px-2 py-5 rounded-md flex flex-col items-center ">
            <h3 className="text-white text-center mb-3 text-xl font-medium">
              {item.title}
            </h3>
            <p className="text-gray-400 text-center leading-8">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
