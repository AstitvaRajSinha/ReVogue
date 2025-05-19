import React from 'react';
// import { assets } from '../assets/assets';
import { FaPhoneAlt, FaEnvelope, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="px-4 py-12 bg-zinc-50 dark:bg-transparent text-sm text-zinc-700 dark:text-zinc-300">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-3 md:grid-cols-[3fr_1fr_1fr]">

        {/* Brand Info */}
        <div>
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">Revogue</h2>
          <p className="max-w-md text-zinc-600 dark:text-zinc-400">
            Elevate your style with Revogue. We bring you premium fashion, fast delivery, and unmatched comfort — all in one place.
          </p>
          <div className="flex gap-4 mt-4 text-xl text-zinc-600 dark:text-zinc-300">
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
            <FaLinkedin className="hover:text-blue-500 cursor-pointer transition" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer transition" />
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Company</h3>
          <ul className="space-y-2">
            <li className="hover:text-black dark:hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-black dark:hover:text-white transition cursor-pointer">About Us</li>
            <li className="hover:text-black dark:hover:text-white transition cursor-pointer">Delivery</li>
            <li className="hover:text-black dark:hover:text-white transition cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-black dark:text-white mb-4">Get in Touch</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> <span>+91 9042679168</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> <span>revogue@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12">
        <hr className="border-zinc-300 dark:border-zinc-700" />
        <p className="py-6 text-center text-zinc-500 dark:text-zinc-500">
          © 2024 Revogue. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
