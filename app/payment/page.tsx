'use client';

import { Suspense } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PaymentForm from './PaymentForm';

export default function PaymentPage() {
  return (
    <div>
      <Header />
      <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading payment form...</p>}>
        <PaymentForm />
      </Suspense>
      <Footer />
    </div>
  );
}
