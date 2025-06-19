'use client';

import { Suspense } from 'react';
import Header from '../pages/components/Header';
import Footer from '../pages/components/Footer';
import SignUpForm from './SignUpForm'; // we’ll create this next

export default function SignUpPage() {
  return (
    <div>
      <Header />
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
        <SignUpForm />
      </Suspense>
      <Footer />
    </div>
  );
}
