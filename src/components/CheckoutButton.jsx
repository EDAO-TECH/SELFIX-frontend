import React from 'react';

export default function CheckoutButton({ planId }) {
  const handleCheckout = async () => {
    const response = await fetch('/.netlify/functions/createCheckoutSession', {
      method: 'POST',
      body: JSON.stringify({ planId }),
    });

    const { url } = await response.json();
    window.location.href = url;
  };

  return (
    <button onClick={handleCheckout} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
      Subscribe
    </button>
  );
}
