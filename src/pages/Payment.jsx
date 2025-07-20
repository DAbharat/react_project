// src/pages/Payment.jsx
import React from 'react';

const Payment = () => {
  return (
    <div className='bg-home'>
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Payment</h2>
      

      <div className="bg-white shadow-md rounded p-6">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Cardholder Name"
            className="w-full border p-3 rounded"
          />
          <input
            type="text"
            placeholder="Card Number"
            className="w-full border p-3 rounded"
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="MM/YY"
              className="w-1/2 border p-3 rounded"
            />
            <input
              type="text"
              placeholder="CVV"
              className="w-1/2 border p-3 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-amber-950 text-white py-3 rounded hover:bg-primary"
          >
            Pay Now
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Payment;
