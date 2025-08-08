import React from 'react';
import Image from 'next/image';

const ContactHero: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
          alt="Contact Background"
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
            <span className='text-white'>
                Contact
            </span>
            
            <span className="block text-yellow-400">
              Grant Consortium Africa
            </span>
          </h1>

          <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto font-body leading-relaxed">
            Ready to transform your vision into impact? Connect with Grant Consortium Africa 
            and let&apos;s explore how we can support your grant funding journey.
          </p>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2 font-display">Call Us</h3>
              <p className="text-blue-200 font-body">+233 123 456 789</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2 font-display">Email Us</h3>
              <p className="text-blue-200 font-body">info@gca.org</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-purple-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2 font-display">Visit Us</h3>
              <p className="text-blue-200 font-body">Accra, Ghana</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
