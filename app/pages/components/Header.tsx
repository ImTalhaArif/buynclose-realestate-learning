'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white border-bottom shadow-sm sticky-top px-3">
      <div className="container-fluid">
        {/* Logo */}
        <Link href="/" legacyBehavior>
          <a className="navbar-brand d-flex align-items-center gap-2">
            <Image src="/components/logo.png" alt="Logo" width={40} height={40} />
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

        {/* Collapsible menu */}
        <div className="collapse navbar-collapse bg-white" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item">
              <Link href="/" legacyBehavior>
                <a className="nav-link text-dark">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/course-programs" legacyBehavior>
                <a className="nav-link text-dark">Course Programs</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" legacyBehavior>
                <a className="nav-link text-dark">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" legacyBehavior>
                <a className="nav-link text-dark">Contact</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/sign-in" legacyBehavior>
                <a className="nav-link text-dark">Sign In</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}