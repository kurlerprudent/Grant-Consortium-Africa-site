'use client';

import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInOnLoad from '@/components/animations/FadeInOnLoad';

export default function Leadership() {
  const leaders = [
    {
      name: 'Attah Williams',
      role: 'Executive Director',
      bio: 'Expert in donor engagement, public policy, and international cooperation. Attah leads Grant Consortium Africa&apos;s strategic direction and oversees all operations to ensure maximum impact across Africa.',
      education: 'Expert in donor engagement, public policy, and international cooperation',
      image: null, // No image available
      hasImage: false
    },
    {
      name: 'Ernest Owusu Ansah',
      role: 'Director of Strategy & Innovation',
      bio: 'Experienced in program design, results-based financing, and institutional partnerships. Ernest drives innovative approaches to grant acquisition and strategic partnerships across the continent.',
      education: 'Specialist in program design, results-based financing, and institutional partnerships',
      image: null,
      hasImage: false
    },
    {
      name: 'Eric Kojo Srem',
      role: 'Director of Grant Management & Monitoring',
      bio: 'Specialist in grants administration, project monitoring, and financial compliance under bilateral and multilateral funding mechanisms. Eric ensures all funded projects meet the highest standards of accountability.',
      education: 'Specialist in grants administration, project monitoring, and financial compliance',
      image: null,
      hasImage: false
    }
  ];

  return (
    <FadeInOnLoad className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <FadeInOnLoad delay={100}>
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl text-yellow-400 font-bold mb-6">
                <span className='text-yellow-400'>
                    Our Leadership Team
                </span>
                
                </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Meet the seasoned professionals driving Grant Consortium Africa&apos;s operations and strategic direction, with expertise in project management, international development, and public sector governance.
              </p>
            </div>
          </div>
        </section>
      </FadeInOnLoad>

      {/* Leadership Grid */}
      <FadeInOnLoad delay={200}>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leaders.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Photo or placeholder */}
                <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                  {leader.hasImage && leader.image ? (
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      width={300}
                      height={256}
                      className="w-full h-full object-cover"
                      priority={index < 3}
                    />
                  ) : (
                    <div className="w-32 h-32 bg-gray-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-3xl font-bold">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{leader.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{leader.bio}</p>
                  <div className="border-t border-gray-100 pt-4">
                    <p className="text-xs text-gray-500 font-medium">{leader.education}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>
      </FadeInOnLoad>

      {/* Mission Statement */}
      <FadeInOnLoad delay={300}>
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Leadership Philosophy</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our leadership team brings together diverse expertise in donor engagement, public policy, international development, 
              and grants administration. We are committed to upholding the highest standards of transparency, accountability, 
              and results-based management while fostering regional partnerships and locally led development initiatives 
              that create sustainable impact across Africa.
            </p>
          </div>
        </section>
      </FadeInOnLoad>

      <FadeInOnLoad delay={400}>
        <Footer />
      </FadeInOnLoad>
    </FadeInOnLoad>
  );
}