'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white border-bottom sticky-top shadow-sm px-3">
      <div className="container-fluid">
        {/* Logo */}
        <Link href="/" legacyBehavior>
          <a className="navbar-brand d-flex align-items-center gap-2">
            <Image
              src="/components/logo.png"
              alt="BuyNclose Logo"
              width={40}
              height={40}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/fallback-logo.png';
              }}
            />
            <span className="fw-bold text-primary fs-5">BuyNclose</span>
          </a>
        </Link>

        {/* Hamburger toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            {[
              { name: 'Home', href: '/' },
              { name: 'Course Programs', href: '/course-programs' },
              { name: 'About', href: '/about' },
              { name: 'Contact', href: '/contact' },
              { name: 'Sign In', href: '/sign-in' },
            ].map((item, i) => (
              <li className="nav-item" key={i}>
                <Link href={item.href} legacyBehavior>
                  <a className="nav-link text-dark px-3 py-2 fw-medium">
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}