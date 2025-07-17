import React from 'react';
import { startCheckout } from './checkout';

const PLANS = [
  { key: 'home', label: 'Home Plan – Free or $5/mo' },
  { key: 'pro', label: 'Pro Plan – $12/mo' },
  { key: 'team', label: 'Team Plan – $39/mo/admin' },
  { key: 'enterprise', label: 'Enterprise Plan – Custom Pricing' },
];

export default function CheckoutButton() {
  return (
    <div>
      {PLANS.map(p => (
        <button
          key={p.key}
          onClick={() => startCheckout(p.key)}
          style={{ margin: '10px', padding: '12px 20px' }}
        >
          Subscribe: {p.label}
        </button>
      ))}
    </div>
  );
}
