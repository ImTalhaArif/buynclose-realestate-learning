'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const session = sessionStorage.getItem('loggedIn');
    setLoggedIn(session === 'true');
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('loggedIn');
    window.location.reload(); // Refresh to apply changes
  };

  const navLinks = loggedIn
    ? [
        { name: 'Home', href: '/' },
        { name: 'My Profile', href: '/profile' },
        { name: 'Get Help?', href: '/help' },
        { name: 'Log Out', href: '#logout' }, // Special case handled in onClick
      ]
    : [
        { name: 'Home', href: '/' },
        { name: 'Course Programs', href: '/course-programs' },
        { name: 'Get Help?', href: '/help' },
        { name: 'Sign In', href: '/sign-in' },
        { name: 'About Us', href: '/about' },
      ];

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/logo.png"
                alt="BuyNclose Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </Link>
            <span className="text-xl font-semibold text-blue-400">BuyNclose</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6 items-center">
            {navLinks.map((item, i) =>
              item.name === 'Log Out' ? (
                <button
                  key={i}
                  onClick={handleLogout}
                  className="text-sm font-medium hover:text-red-400"
                >
                  {item.name}
                </button>
              ) : (
                <Link key={i} href={item.href}>
                  <span className="hover:text-blue-300 cursor-pointer text-sm font-medium">
                    {item.name}
                  </span>
                </Link>
              )
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                if (menu) menu.classList.toggle('hidden');
              }}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((item, i) =>
            item.name === 'Log Out' ? (
              <button
                key={i}
                onClick={handleLogout}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 w-full text-left"
              >
                {item.name}
              </button>
            ) : (
              <Link key={i} href={item.href}>
                <span className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 cursor-pointer">
                  {item.name}
                </span>
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}