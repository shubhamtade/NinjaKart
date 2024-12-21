import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

const FeatureSection = () => {
  return (
    <div className="my-6 md:my-12 mx-[10%] text-center flex flex-wrap justify-evenly gap-5 opacity-60">
      <div>
        <LocalShippingOutlinedIcon fontSize="large" />
        <h2 className="text-xl md:text-2xl font-bold">Free Shipping</h2>
        <p>Order above ₹200</p>
      </div>
      <div>
        <PaymentsOutlinedIcon fontSize="large" />
        <h2 className="text-xl md:text-2xl font-bold">Money-back</h2>
        <p>30 days guarantee</p>
      </div>
      <div>
        <LockOutlinedIcon fontSize="large" />
        <h2 className="text-xl md:text-2xl font-bold">Secure Payments</h2>
        <p>Secured by Stripe</p>
      </div>
      <div>
        <CallOutlinedIcon fontSize="large" />
        <h2 className="text-xl md:text-2xl font-bold">24/7 Support</h2>
        <p>Phone and Email support</p>
      </div>
    </div>
  );
};

export default FeatureSection;
