'use client';

import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-gray-900 font-bold text-2xl">G</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Grant Consortium Africa
                </h3>
                <p className="text-sm text-gray-400">Empowering Africa&apos;s Future</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Transforming African communities through strategic partnerships, innovative funding solutions, 
              and sustainable development initiatives that create lasting impact across the continent.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-yellow-400 w-5 h-5" />
                <span className="text-gray-300">info@grantconsortiumafrica.org</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-yellow-400 w-5 h-5" />
                <div className="flex flex-col space-y-1">
                  <span className="text-gray-300">+233 247 710 113</span>
                  <span className="text-gray-300">+233 246 617 273</span>
                  <span className="text-gray-300">+233 264 530 270</span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-yellow-400 w-5 h-5" />
                <span className="text-gray-300">Accra, Ghana</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">
              <span className='text-white'>
                Our Quick Links
                </span>
              </h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-yellow-400 transition-colors">Home</Link></li>
              <li><Link href="/leadership" className="text-gray-300 hover:text-yellow-400 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition-colors">Contact</Link></li>
              <li><Link href="/faqs" className="text-gray-300 hover:text-yellow-400 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-white">Our Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">Grant Writing</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">Project Management</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">Capacity Building</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-yellow-400 transition-colors">Partnership Development</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            
            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-300 mr-4">Follow Us:</span>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <FaTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>

            {/* Newsletter */}
            <div className="flex items-center space-x-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700 focus:border-yellow-400 focus:outline-none"
              />
              <button className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Grant Consortium Africa. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-yellow-400 text-sm transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
