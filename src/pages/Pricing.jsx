// src/pages/Pricing.jsx
import { useEffect, useState } from 'react'
import { supabase } from '../supabaseClient'

export default function Pricing() {
  const [plans, setPlans] = useState([])

  useEffect(() => {
    async function fetchPlans() {
      const { data, error } = await supabase.from('plans').select('*')
      if (error) {
        console.error('Error fetching plans:', error)
        return
      }
      setPlans(data ?? [])
    }
    fetchPlans()
  }, [])

  const handleBuy = async (price_id) => {
    const res = await fetch('/.netlify/functions/createCheckoutSession', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ price_id }),
    })
    const { url } = await res.json()
    window.location.href = url
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Choose Your Plan</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className="border p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-gray-500 mb-2">{plan.description}</p>
            <p className="text-lg font-bold">${plan.price}</p>
            <button
              onClick={() => handleBuy(plan.stripe_price_id)}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
