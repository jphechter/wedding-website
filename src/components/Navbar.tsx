'use client';

import Link from 'next/link';
import { ReactElement, useState } from 'react';

const NavLinks = () => (
  <>
    <li>
      <Link
        href="/"
        className="block py-2 text-base font-medium transition-colors duration-200 hover:text-gray-600 sm:text-lg"
      >
        Home
      </Link>
    </li>
    <li>
      <Link
        href="/details"
        className="block py-2 text-base font-medium transition-colors duration-200 hover:text-gray-600 sm:text-lg"
      >
        Details
      </Link>
    </li>
    <li>
      <Link
        href="/our-story"
        className="block py-2 text-base font-medium transition-colors duration-200 hover:text-gray-600 sm:text-lg"
      >
        Our Story
      </Link>
    </li>
    {/* <li>
      <Link
        href="/wedding-party"
        className="block py-2 text-base font-medium transition-colors duration-200 hover:text-gray-600 sm:text-lg"
      >
        Wedding Party
      </Link>
    </li> */}
    <li>
      <Link
        href="/travel"
        className="block py-2 text-base font-medium transition-colors duration-200 hover:text-gray-600 sm:text-lg"
      >
        Travel
      </Link>
    </li>
    {/* <li>
      <Link
        href="/things-to-do"
        className="block py-2 text-base font-medium transition-colors duration-200 hover:text-gray-600 sm:text-lg"
      >
        Things To Do
      </Link>
    </li> */}
    <li>
      <Link
        href="/faq"
        className="block py-2 text-base font-medium transition-colors duration-200 hover:text-gray-600 sm:text-lg"
      >
        FAQ
      </Link>
    </li>
  </>
);

export const Navbar = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-20 w-full bg-white shadow-sm">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <ul className="hidden items-center justify-between gap-3 py-4 md:flex">
          <NavLinks />
        </ul>

        {/* Mobile Navigation Button */}
        <div className="flex justify-end py-4 md:hidden">
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-inset"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {/* Hamburger icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Side Panel */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-40 bg-white/40 backdrop-blur-sm transition-opacity"
              onClick={closeMenu}
            />

            {/* Side Panel */}
            <div className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white shadow-xl transition-transform duration-300 ease-in-out">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between p-4">
                  <h2 className="text-lg font-medium">Menu</h2>
                  <button
                    onClick={closeMenu}
                    className="rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-inset"
                  >
                    <span className="sr-only">Close menu</span>
                    {/* X icon */}
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-4 py-4">
                  <ul className="space-y-1">
                    <NavLinks />
                  </ul>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};
