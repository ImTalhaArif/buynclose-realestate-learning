'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

export default function PaymentForm() {
  const searchParams = useSearchParams();
  const course = searchParams.get('course');

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentInfo({ ...paymentInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Processing payment for', course, paymentInfo);
    alert(`Payment successful for ${course}`);
    // You could also redirect to a thank-you page here
  };

  return (
    <div style={{
      maxWidth: '600px',
      margin: '40px auto',
      padding: '30px',
      border: '1px solid #eee',
      borderRadius: '10px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
    }}>
      <h2 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 600, textAlign: 'center' }}>
        Complete Payment {course && <>for <span style={{ color: '#0070f3' }}>{course}</span></>}
      </h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <input
          type="text"
          name="cardNumber"
          placeholder="Card Number"
          value={paymentInfo.cardNumber}
          onChange={handleChange}
          required
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
        />
        <input
          type="text"
          name="expiry"
          placeholder="MM/YY"
          value={paymentInfo.expiry}
          onChange={handleChange}
          required
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
        />
        <input
          type="text"
          name="cvc"
          placeholder="CVC"
          value={paymentInfo.cvc}
          onChange={handleChange}
          required
          style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }}
        />
        <button
          type="submit"
          style={{
            padding: '12px',
            backgroundColor: '#0070f3',
            color: 'white',
            fontSize: '16px',
            fontWeight: 600,
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}
        >
          Pay Now
        </button>
      </form>
    </div>
  );
}
