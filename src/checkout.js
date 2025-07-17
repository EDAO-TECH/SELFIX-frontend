import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

export async function startCheckout(plan) {
  const stripe = await stripePromise;
  const resp = await fetch('https://www.selfix.pro/api', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ plan }),
  });

  const { url, error } = await resp.json();
  if (error) {
    console.error('Checkout error:', error);
    alert(error);
    return;
  }

  window.location = url;
}
