'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignUpForm() {
  const searchParams = useSearchParams();
  const course = searchParams.get('course');
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('User signed up:', formData, 'for course:', course);
    router.push(`/payment?course=${encodeURIComponent(course || '')}`);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '30px', border: '1px solid #eee', borderRadius: '10px', backgroundColor: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
      <h2 style={{ marginBottom: '20px', fontSize: '24px', fontWeight: 600, textAlign: 'center' }}>
        Sign Up {course && <>for <span style={{ color: '#0070f3' }}>{course}</span></>}
      </h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }} />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required style={{ padding: '12px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '16px' }} />
        <button type="submit" style={{ padding: '12px', backgroundColor: '#0070f3', color: 'white', fontSize: '16px', fontWeight: 600, border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          Sign Up
        </button>
      </form>
    </div>
  );
}
