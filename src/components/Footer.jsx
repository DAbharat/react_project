// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-sm ">
      {/* Back to Top */}
      <div
        className="bg-primary text-center py-3 cursor-pointer hover:underline"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        Back to top
      </div>

      {/* Middle Section */}
      <div className="py-8  grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left px-6 md:px-16">
        <div>
          <h3 className="text-lg font-semibold mb-2">Get to Know Us</h3>
          <ul className="space-y-1 text-gray-300">
            <li className="hover:underline cursor-pointer">About MiniShop</li>
            <li className="hover:underline cursor-pointer">Careers</li>
            <li className="hover:underline cursor-pointer">Press Releases</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Let Us Help You</h3>
          <ul className="space-y-1 text-gray-300">
            <li className="hover:underline cursor-pointer">Your Account</li>
            <li className="hover:underline cursor-pointer">Returns Centre</li>
            <li className="hover:underline cursor-pointer">100% Purchase Protection</li>
            <li className="hover:underline cursor-pointer">Help</li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <p className="text-xl font-bold">EasyShop</p>
          <p className="text-sm text-gray-400 mt-2">Your one-stop online store</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-primary py-4 text-center text-xs">
        <div className="space-x-4 text-gray-300">
          <span className="hover:underline cursor-pointer">Conditions of Use & Sale</span>
          <span className="hover:underline cursor-pointer">Privacy Notice</span>
          <span className="hover:underline cursor-pointer">Interest-Based Ads</span>
        </div>
        <p className="text-gray-400 mt-2">
          © 1996–2025, EasyShop.com, Inc. or its affiliates
        </p>
      </div>
    </footer>
  );
};

export default Footer;
