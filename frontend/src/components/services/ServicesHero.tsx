import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ServicesHero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Services Background"
          fill
          className="object-cover opacity-10"
        />
      </div>

      {/* Simple Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
              <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
            
            <span className="block text-yellow-400">
             Our Services
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto font-body leading-relaxed">
            Comprehensive support services designed to maximize your grant success 
            and create lasting impact in African communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/services/focus-areas" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors font-body inline-block text-center">
              Explore Services
            </Link>
            <Link href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors font-body inline-block text-center">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
