const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async function (event) {
  const { priceId } = JSON.parse(event.body);

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `https://www.selfix.pro/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://www.selfix.pro/cancel`,
      metadata: {
        product: 'SELFIX Download', // optional: for your webhook tracking
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ id: session.id }),
    };
  } catch (error) {
    console.error('Checkout session creation failed:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to create session' }),
    };
  }
};
