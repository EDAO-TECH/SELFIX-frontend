import React from "react";
import CheckoutButton from "./CheckoutButton";

const plans = [
  {
    name: "Basic",
    description: "Perfect for individuals",
    price: "$9",
    priceId: "price_1NwXYZbasic123", // Replace with your actual Stripe priceId
    features: ["1 Device", "Basic Support", "Limited Storage"],
  },
  {
    name: "Standard",
    description: "Ideal for small teams",
    price: "$29",
    priceId: "price_1NwXYZstandard456",
    features: ["3 Devices", "Priority Support", "10GB Storage"],
    recommended: true,
  },
  {
    name: "Pro",
    description: "Great for growing businesses",
    price: "$59",
    priceId: "price_1NwXYZpro789",
    features: ["10 Devices", "24/7 Support", "100GB Storage"],
  },
  {
    name: "Enterprise",
    description: "Custom solution for large teams",
    price: "Custom",
    priceId: "price_1NwXYZenterprise999",
    features: ["Unlimited Devices", "Dedicated Support", "Custom Storage"],
  },
];

const PricingBuilder = () => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`border rounded-lg p-6 shadow-sm flex flex-col justify-between ${
            plan.recommended ? "border-indigo-600 shadow-lg" : "border-gray-200"
          }`}
        >
          <div>
            <h3 className="text-xl font-semibold mb-1">{plan.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{plan.description}</p>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-6 space-y-2 text-sm text-gray-700">
              {plan.features.map((feature, idx) => (
                <li key={idx}>✅ {feature}</li>
              ))}
            </ul>
          </div>

          <CheckoutButton priceId={plan.priceId} />
        </div>
      ))}
    </div>
  );
};

export default PricingBuilder;
