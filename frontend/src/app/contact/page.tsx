import React from 'react';
import Link from 'next/link';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactMap from '@/components/contact/ContactMap';
import { Navbar } from '@/components';
import Footer from '@/components/Footer';
import FadeInOnLoad from '@/components/animations/FadeInOnLoad';

export default function Contact() {
  return (
    <FadeInOnLoad className="min-h-screen pt-20">
      <Navbar />
      <FadeInOnLoad delay={100}>
        <ContactHero />
      </FadeInOnLoad>
      
      {/* Contact Form and Info Section */}
      <FadeInOnLoad delay={200}>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <ContactForm />
              <ContactInfo />
            </div>
          </div>
        </section>
      </FadeInOnLoad>

      <FadeInOnLoad delay={300}>
        <ContactMap />
      </FadeInOnLoad>

      {/* Additional Support Section */}
      <FadeInOnLoad delay={400}>
        <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 font-display">
              How We Can Help You
            </h2>
            <p className="text-xl text-gray-600 font-body max-w-3xl mx-auto">
              Discover the comprehensive support services available to help you succeed in your grant funding journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Grant Application Support */}
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-display">
                Grant Applications
              </h3>
              <p className="text-gray-600 font-body text-sm">
                Expert assistance in preparing and submitting winning grant proposals
              </p>
            </div>

            {/* Capacity Building */}
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-display">
                Training Programs
              </h3>
              <p className="text-gray-600 font-body text-sm">
                Comprehensive training in grant writing, project management, and compliance
              </p>
            </div>

            {/* Project Management */}
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-display">
                Project Management
              </h3>
              <p className="text-gray-600 font-body text-sm">
                Professional support in managing funded projects from start to finish
              </p>
            </div>

            {/* Partnership Development */}
            <div className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 font-display">
                Partnerships
              </h3>
              <p className="text-gray-600 font-body text-sm">
                Facilitating strategic partnerships for stronger grant applications
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-bold mb-4 font-display">
                Ready to Start Your Grant Journey?
              </h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-body">
                Join hundreds of successful organizations that have secured funding with our expert guidance and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/faqs" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors font-body inline-block text-center">
                  Schedule Free Consultation
                </Link>
                <Link href="/services" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors font-body inline-block text-center">
                  Download Grant Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeInOnLoad>
      <FadeInOnLoad delay={500}>
        <Footer />
      </FadeInOnLoad>
    </FadeInOnLoad>
  );
}
