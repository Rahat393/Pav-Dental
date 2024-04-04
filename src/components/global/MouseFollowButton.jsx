import React, { useState } from 'react';

const MouseFollowButton = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isFollowing, setIsFollowing] = useState(false);

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setIsFollowing(true);
    document.body.classList.add('cursor-none');
  };

  const handleMouseLeave = () => {
    setIsFollowing(false);
    document.body.classList.remove('cursor-none');
  };

  return (
    <div
      className="relative w-full rounded-xl overflow-hidden bg-cover bg-center h-[600px] cursor-default"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundImage: "url('https://res.cloudinary.com/db1i46uiv/image/upload/v1706910074/dentist-hands-working-young-woman-patient-with-dental-tools_rckfpj.jpg')" }}
    >
      <button
        className="absolute bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer transition-all duration-200"
        style={{ left: position.x, top: position.y }} // Button follows cursor
      >
        <a href="/home">Follow Me!</a>
      </button>
    </div>
  );
};

export default MouseFollowButton;
