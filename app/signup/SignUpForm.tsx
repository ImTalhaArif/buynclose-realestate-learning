'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function SignUpForm() {
  const searchParams = useSearchParams();
  const course = searchParams.get('course');
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const user_id = uuidv4();

    const payload = {
      user_id,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      course: course || "N/A"
    };

    try {
      const res = await fetch("https://4xjr2vrsquy7rfhm4cuaioshf40mynai.lambda-url.eu-north-1.on.aws/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        router.push(`https://buy.stripe.com/7sY6oHdef2Fz8AJ9pPeAg02`);
      } else {
        alert("❌ Failed to sign up. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("⚠️ An error occurred during sign-up.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '30px', border: '1px solid #eee', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
      <h2 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 600, textAlign: 'center' }}>
        Sign Up {course && <>for <span style={{ color: '#0070f3' }}>{course}</span></>}
      </h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }} />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }} />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }} />
        <button
          type="submit"
          style={{ padding: '12px', backgroundColor: '#0070f3', color: 'white', fontSize: '16px', fontWeight: 600, border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          disabled={loading}
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
}
