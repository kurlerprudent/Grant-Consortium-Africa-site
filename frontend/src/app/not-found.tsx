'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="flex items-center justify-center min-h-[80vh] px-6">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl font-bold text-blue-600 opacity-20">404</h1>
          </div>
          
          {/* Error Message */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              Page Not Found
            </h2>
            <p className="text-xl text-gray-600 mb-6 font-body">
              Sorry, we couldn&apos;t find the page you&apos;re looking for. 
              It might have been moved, deleted, or the URL might be incorrect.
            </p>
          </div>

          {/* Search Suggestions */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-display">
              Looking for something specific?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <Link 
                href="/" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Homepage
              </Link>
              <Link 
                href="/services" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Our Services
              </Link>
              <Link 
                href="/about/leadership" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Leadership
              </Link>
              <Link 
                href="/contact" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Contact Us
              </Link>
              <Link 
                href="/faqs" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                FAQs
              </Link>
              <Link 
                href="/about/partners" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Partners
              </Link>
              <Link 
                href="/services/focus-areas" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Focus Areas
              </Link>
              <Link 
                href="/" 
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                Grant Programs
              </Link>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold font-body"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Go Home
            </Link>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold font-body"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact Support
            </Link>
          </div>

          {/* Additional Help */}
          <div className="mt-12 p-6 bg-blue-50 rounded-xl">
            <h4 className="text-lg font-semibold text-gray-900 mb-2 font-display">
              Need Help Finding Grant Opportunities?
            </h4>
            <p className="text-gray-600 text-sm font-body">
              Grant Consortium Africa is here to help you unlock international funding. 
              Contact our team for personalized assistance with your grant needs.
            </p>
            <div className="mt-4">
              <Link 
                href="/contact"
                className="text-blue-600 hover:text-blue-700 font-semibold text-sm"
              >
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
