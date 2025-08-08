'use client';

import React from 'react';
import Link from 'next/link';

const EligibilitySection: React.FC = () => {
  const eligiblePartners = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'African Governments',
      description: 'National and regional government agencies seeking international development funding for public sector projects.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Public Institutions',
      description: 'Universities, research centers, and public agencies working on development initiatives across Africa.',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'NGOs & Civil Society',
      description: 'Non-governmental organizations and civil society groups implementing community-based development programs.',
    },
  ];

  const focusAreas = [
    'Health Systems Strengthening',
    'Education & Skills Development', 
    'Agriculture & Food Security',
    'Renewable Energy & Climate Action',
    'Infrastructure & Transport',
    'Digital Transformation & Innovation',
    'Gender Equality & Youth Empowerment'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            <span className="text-blue-600 font-medium text-sm">Partnership Opportunities</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who We Partner With
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Grant Consortium Africa works with diverse partners across West, East, Central, and Southern Africa to unlock international funding opportunities.
          </p>
        </div>

        {/* Partner Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {eligiblePartners.map((partner, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg mb-4">
                {partner.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {partner.title}
              </h3>
              <p className="text-gray-600">
                {partner.description}
              </p>
            </div>
          ))}
        </div>

        {/* Focus Areas */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Strategic Focus Areas</h3>
            <p className="text-gray-600">
              We facilitate funding across key sectors that drive inclusive and sustainable development
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {focusAreas.map((area, index) => (
              <div key={index} className="bg-white p-4 rounded-lg text-center shadow-sm">
                <p className="text-sm font-medium text-gray-800">{area}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-block">
            Become a Partner →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;