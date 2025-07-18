// PricingBuilder.jsx
import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

export default function PricingBuilder() {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlans = async () => {
      const { data, error } = await supabase.from("plans").select("*");
      if (error) {
        console.error("Error loading plans:", error.message);
      } else {
        setPlans(data);
      }
      setLoading(false);
    };

    fetchPlans();
  }, []);

  if (loading) return <p className="text-center">Loading pricing...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {plans.map((plan) => (
        <div key={plan.id} className="border border-gray-300 rounded-lg shadow-md p-5">
          <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
          <p className="text-gray-700 mb-4">{plan.description}</p>
          <p className="text-2xl font-bold mb-4">${plan.price}</p>
          <form action="/.netlify/functions/createCheckoutSession" method="POST">
            <input type="hidden" name="priceId" value={plan.stripe_price_id} />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Choose {plan.name}
            </button>
          </form>
        </div>
      ))}
    </div>
  );
}
