'use client';

import React from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Simple Background Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        {/* Simple Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
          <span className="text-sm font-medium">Empowering African Development</span>
        </div>

        {/* Title from GCA.md */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Unlocking Global Opportunities
          <span className="block text-yellow-400">for African Development</span>
        </h1>

        {/* Subtitle from GCA.md */}
        <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          Grant Consortium Africa (GCA) is a strategic bridge connecting African governments, institutions, and civil society with international grant funding for sustainable growth.
        </p>

        {/* CTA Buttons from GCA.md */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services" className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block text-center">
            Learn More
          </Link>
          <Link href="/contact" className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 inline-block text-center">
            Contact Us
          </Link>
        </div>

        {/* Simple Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
            <div className="text-sm text-gray-300">Projects Funded</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">25</div>
            <div className="text-sm text-gray-300">Countries Served</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">1M+</div>
            <div className="text-sm text-gray-300">Lives Impacted</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
