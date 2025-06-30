'use client';
import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 40px',
      borderBottom: '1px solid #eaeaea',
      backgroundColor: '#fff',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <svg width="40" height="40" style={{ marginRight: '10px' }}>
          <circle cx="20" cy="20" r="18" fill="#0070f3" />
          <text x="20" y="26" fontSize="16" fill="white" textAnchor="middle" fontWeight="bold">B</text>
        </svg>
        <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#0070f3' }}>BuyNclose</h2>
      </div>

      {/* Nav Links */}
      <nav style={{ display: 'flex', gap: '30px' }}>
        {['Home', 'Course Programs', 'About', 'Contact, Sign In'].map((item, i) => (
          <Link key={i} href={`/${item.toLowerCase().replace(' ', '-')}`} style={{
            textDecoration: 'none',
            color: '#333',
            fontWeight: 500
          }}>
            {item}
          </Link>
        ))}
      </nav>
    </header>
  );
}
