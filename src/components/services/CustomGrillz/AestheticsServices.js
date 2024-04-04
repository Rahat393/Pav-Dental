import React from "react";

import BotoxIcon from "../../../images/icons/botox.svg";
import DermaFillerIcon from "../../../images/icons/derma-filler.svg";
import ChemicalPeelIcon from "../../../images/icons/chemical-peels.svg";
import LipEnhanceIcon from "../../../images/icons/lip-enhance.svg";
import SkinRejuvenIcon from "../../../images/icons/skin-rejuvenation.svg";
import MicroneedlingIcon from "../../../images/icons/microneedling.svg";

const AestheticsServices = () => {
  const aesthetics = [
    {
      id: 1,
      name: "Gold Grillz: Timeless Luxury",
      icon: BotoxIcon,
      description:
        "Our gold grillz exude classic elegance. Whether you prefer yellow, white, or rose gold, we offer a variety of karat options to match your taste. Gold grillz are perfect for adding a touch of timeless sophistication to your smile.",
    },
    {
      id: 2,
      name: "Silver Grillz: Sleek and Modern",
      icon: DermaFillerIcon,
      description:
        "Opt for the sleek appeal of silver grillz. Known for their modern and versatile look, silver grillz are a popular choice for those seeking a chic, understated style that complements any outfit or occasion.",
    },
    {
      id: 3,
      name: "Diamond Grillz: Dazzling Brilliance",
      icon: ChemicalPeelIcon,
      description:
        "Elevate your smile with the ultimate statement of luxury - diamond grillz. Our diamonds are meticulously set to maximize sparkle and impact, ensuring your smile catches every light and eye in the room.",
    },
    {
      id: 4,
      name: "Perfect Fit, Guaranteed",
      icon: LipEnhanceIcon,
      description:
        "Comfort is key. Our grillz are custom-made to fit your teeth flawlessly, ensuring maximum comfort without compromising on style",
    },
    {
      id: 5,
      name: "Shine in Your Unique Way",
      icon: SkinRejuvenIcon,
      description:
        "Ready to create your signature grillz? Contact Pav Dental today for a consultation. Our experts are excited to help you design a piece that's as unique as you are.",
    },
    {
      id: 6,
      name: "Customization at Its Finest",
      icon: MicroneedlingIcon,
      description:
        " Mix and match metals and gems for a truly unique creation. From fully iced-out designs to subtle accents, we tailor each piece to your specifications. Our expert team is dedicated to bringing your vision to life with precision and flair.",
    },
  ];
  return (
    <section className="container mx-auto px-10 mt-28 ">
      <h2 className="text-4xl text-center font-semibold mb-6">
        Tailored Elegance: Gold, Silver, and Diamond Grillz
      </h2>
      <p className="text-medium leading-8 text-gray-400 max-w-5xl text-center mx-auto mb-16">
        At Pav Dental, we believe in a personalized approach to dental
        aesthetics. Our custom grillz are more than just accessories; they are a
        reflection of your individual style and flair. Choose from gold, silver,
        and diamond options to create a look that's uniquely yours.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {aesthetics.map((item) => (
          <div className="flex flex-col items-center bg-[#242625] rounded-md p-6 shadow-lg">
            <h4 className="text-center mt-3 text-2xl font-medium mb-3">
              {item.name}
            </h4>
            <p className="text-center text-gray-400 leading-8">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AestheticsServices;
