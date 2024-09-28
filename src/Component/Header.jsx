import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-orange-500 text-2xl font-bold">
              Lurnigo
            </a>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-gray-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  className={!isOpen ? "block" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
                <path
                  className={isOpen ? "block" : "hidden"}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <a
                href="https://ifasonline.com/"
                className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Courses
              </a>
              <a
                href="https://ifasonline.com/about-us"
                className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                About us
              </a>
              <a
                href="https://ifasonline.com/mpsc-forensic-science/forensic-science-online-test-series/64476e17c697dca36e925498"
                className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Testimonials
              </a>
              <a
                href="https://ifasonline.com/"
                className="text-gray-900 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                Achievements
              </a>
              <a href="https://ifasonline.com/SignIn">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Sign in
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#"
            className="text-gray-900 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Courses
          </a>
          <a
            href="#"
            className="text-gray-900 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            About us
          </a>
          <a
            href="#"
            className="text-gray-900 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Testimonials
          </a>
          <a
            href="#"
            className="text-gray-900 hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium"
          >
            Achievements
          </a>
          <button className="bg-orange-500 text-white block w-full text-left px-3 py-2 rounded-md text-base font-medium">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
