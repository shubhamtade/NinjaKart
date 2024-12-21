import React, { useState } from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CloseIcon from "@mui/icons-material/Close";

const Notification = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-[#ff9194] text-white flex justify-center md:justify-between items-center p-2">
      <div className="flex md:flex-1 justify-center items-center">
        <LocalOfferIcon />
        <p className="ml-2">
          30% off storewide -- Limited time! &nbsp;
          <span className="hidden md:inline">
            Shop Now <ArrowForwardIcon />
          </span>
        </p>
      </div>
      <button
        onClick={() => setVisible(false)}
        className="md:pr-3 md:text-right"
      >
        <CloseIcon />
      </button>
    </div>
  );
};

export default Notification;
