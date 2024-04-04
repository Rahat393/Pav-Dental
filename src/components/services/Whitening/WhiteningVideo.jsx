import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const Whitening = () => {
  const [showEmbed, setShowEmbed] = useState(false);

  const toggleEmbed = () => {
    setShowEmbed(!showEmbed);
  };

  return (
    <>
      <div className="px-[5%] pt-[5%]">
        {!showEmbed ? (
          <div
            onClick={toggleEmbed}
            style={{ cursor: "pointer", position: "relative" }}
          >
            <img
              className="w-full h-[600px] rounded-xl shadow-xl"
              src="https://res.cloudinary.com/db1i46uiv/image/upload/v1708330992/Screenshot_2024-02-19_141359_zuqtew.png"
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
    </>
  );
};

export default Whitening;
