import { Button } from "@material-tailwind/react";
import React, { useEffect } from "react";

const BookingButton = () => {
  useEffect(() => {
    const setmoreScript = document.createElement("script");
    setmoreScript.id = "setmore_script";
    setmoreScript.type = "text/javascript";
    setmoreScript.src =
      "https://storage.googleapis.com/fullintegration-live/webComponentAppListing/Container/setmoreIframeLive.js";
    document.body.appendChild(setmoreScript);

    return () => {
      document.body.removeChild(setmoreScript);
    };
  }, []);

  return (
    <a
      style={{ float: "none" }}
      id="Setmore_button_iframe"
      className="flex items-center"
      href="https://booking.setmore.com/scheduleappointment/932f19c8-6989-4716-93c5-c73ac31d511b"
    >
      <Button className="flex items-center bg-secondary">
         Book now
      </Button>
    </a>
  );
};

export default BookingButton;
