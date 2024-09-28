import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h1 className="text-4xl font-bold text-orange-500">Lurnigu</h1>
            <p className="text-gray-600 mt-2">
              Let's grow up your education level up, We are here to help you
              keep focus when studying
            </p>
            <div className="flex justify-center md:justify-start mt-4 space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-12">
            <div className="text-center md:text-left">
              <h2 className="font-bold text-gray-800">IMPORTANT LINKS</h2>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Career
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-bold text-gray-800">KNOWLEDGE</h2>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Site Map
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-left">
              <h2 className="font-bold text-gray-800">POLICIES</h2>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-800">
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-4 text-center">
          <p className="text-gray-600">
            &copy; 2024 All rights reserved Lurnigu PVT Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
