import React from "react";
import PricingBuilder from "../components/PricingBuilder";

const Pricing = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Choose Your Plan</h1>
      <PricingBuilder />
    </div>
  );
};

export default Pricing;
