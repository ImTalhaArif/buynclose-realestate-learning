'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white sticky-top border-bottom shadow-sm px-3 px-md-5">
      <div className="container-fluid">
        {/* Logo */}
        <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
          <Image
            src="/components/logo.png"
            alt="BuyNclose Logo"
            width={40}
            height={40}
            style={{ objectFit: 'contain' }}
          />
          <span className="fw-bold text-primary fs-5">BuyNclose</span>
        </Link>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/course-programs" className="nav-link">
                Course Programs
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/sign-in" className="nav-link">
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}