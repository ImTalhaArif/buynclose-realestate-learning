'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

declare const bootstrap: any;

export default function Header() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const navbarCollapse = document.getElementById('mainNavbar');

      const handleNavLinkClick = () => {
        // Only collapse if on small screen
        if (window.innerWidth < 768 && navbarCollapse?.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse)
            || new bootstrap.Collapse(navbarCollapse, { toggle: false });
          bsCollapse.hide();
        }
      };

      // Attach click event only to nav links
      const navLinks = document.querySelectorAll('.nav-link');
      navLinks.forEach((link) => {
        link.addEventListener('click', handleNavLinkClick);
      });

      // Cleanup
      return () => {
        navLinks.forEach((link) => {
          link.removeEventListener('click', handleNavLinkClick);
        });
      };
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white border-bottom shadow-sm sticky-top px-3 z-3">
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
        <div className="collapse navbar-collapse bg-white text-dark py-3 px-3 rounded shadow z-3" id="mainNavbar">
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
                  <a className="nav-link text-dark fw-medium py-2">{item.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}