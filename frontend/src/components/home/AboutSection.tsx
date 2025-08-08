'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
              <span className="text-blue-600 font-medium text-sm">Who We Are</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Who We Are
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              Grant Consortium Africa is a Ghana-based development consortium dedicated to facilitating access to international grants across sectors such as health, education, climate action, and infrastructure.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              We work with African governments, public institutions, and NGOs to unlock funding from major global donors like the African Development Bank, Saudi Fund for Development, and UN agencies.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-gray-600">Projects Funded</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">25</div>
                <div className="text-sm text-gray-600">Countries Reached</div>
              </div>
            </div>

            <Link href="/leadership" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 inline-block">
              Read More →
            </Link>
          </div>

          {/* Right Column - Logo Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl overflow-hidden p-8">
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full max-w-sm max-h-sm">
                  <Image
                    src="/logo.jpg"
                    alt="Grant Consortium Africa Logo"
                    fill
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
