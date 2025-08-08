import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import FocusAreaCard from '@/components/services/FocusAreaCard';
import FadeInOnLoad from '@/components/animations/FadeInOnLoad';
import { Navbar } from '@/components';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Focus Areas | Grant Consortium Africa',
  description: 'Discover our key focus areas: Education, Healthcare, Agriculture, Environmental Conservation, Community Development, and Technology & Innovation across Africa.',
  keywords: ['African development focus areas', 'education grants', 'healthcare development', 'agriculture innovation', 'environmental conservation', 'community development'],
  openGraph: {
    title: 'Focus Areas | Grant Consortium Africa',
    description: 'Key development focus areas across Africa',
    type: 'website',
  },
};

const focusAreas = [
  {
    title: 'Education',
    description: 'Empowering communities through quality education initiatives, from early childhood development to higher education programs.',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    stats: '150+ Schools Supported',
    features: [
      'Scholarship Programs',
      'Teacher Training',
      'Educational Infrastructure',
      'Digital Learning Platforms'
    ]
  },
  {
    title: 'Healthcare',
    description: 'Improving health outcomes through innovative healthcare programs, medical equipment provision, and capacity building.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    stats: '75+ Health Centers',
    features: [
      'Medical Equipment',
      'Healthcare Training',
      'Community Health Programs',
      'Telemedicine Initiatives'
    ]
  },
  {
    title: 'Agriculture',
    description: 'Enhancing food security and rural livelihoods through sustainable agricultural practices and technology adoption.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80',
    stats: '500+ Farmers Trained',
    features: [
      'Modern Farming Techniques',
      'Irrigation Systems',
      'Seed Distribution',
      'Market Linkage Programs'
    ]
  },
  {
    title: 'Environmental Conservation',
    description: 'Protecting natural resources and promoting sustainable environmental practices for future generations.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    stats: '100+ Conservation Projects',
    features: [
      'Reforestation Programs',
      'Wildlife Protection',
      'Clean Energy Initiatives',
      'Water Conservation'
    ]
  },
  {
    title: 'Community Development',
    description: 'Strengthening communities through infrastructure development, capacity building, and social programs.',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    stats: '200+ Communities Reached',
    features: [
      'Infrastructure Development',
      'Skills Training Programs',
      'Microfinance Initiatives',
      'Social Enterprise Support'
    ]
  },
  {
    title: 'Technology & Innovation',
    description: 'Driving digital transformation and innovation to create sustainable solutions for African challenges.',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2025&q=80',
    stats: '50+ Tech Solutions',
    features: [
      'Digital Platforms',
      'Innovation Hubs',
      'Tech Training Programs',
      'Startup Incubation'
    ]
  }
];

export default function FocusAreas() {
  return (
    <main className="min-h-screen pt-20">
      <Navbar/>
      {/* Hero Section */}
      <FadeInOnLoad delay={100}>
        <section className="relative min-h-[60vh] bg-gradient-to-br from-blue-900 via-purple-900 to-green-900 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Focus Areas Background"
            fill
            className="object-cover opacity-20"
          />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-blue-400 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-32 right-32 w-24 h-24 bg-green-400 rounded-full opacity-10 animate-bounce delay-75"></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-purple-400 rounded-full opacity-5 animate-pulse delay-150"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 rounded-2xl backdrop-blur-sm">
                <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-display">
              Our Focus
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                Areas
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto font-body leading-relaxed">
              Discover the key sectors where Grant Consortium Africa creates lasting impact 
              through strategic partnerships and innovative solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center text-blue-200 font-body">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Targeted Impact
              </div>
              <div className="flex items-center text-blue-200 font-body">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Sustainable Solutions
              </div>
              <div className="flex items-center text-blue-200 font-body">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Community-Driven
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeInOnLoad>

      {/* Focus Areas Grid */}
      <FadeInOnLoad delay={200}>
        <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {focusAreas.map((area) => (
              <FocusAreaCard
                key={area.title}
                title={area.title}
                description={area.description}
                image={area.image}
                stats={area.stats}
                features={area.features}
              />
            ))}
          </div>
        </div>
      </section>
      </FadeInOnLoad>

      {/* Call to Action */}
      <FadeInOnLoad delay={300}>
        <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h2 className="text-4xl font-bold mb-6 font-display">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto font-body">
              Partner with us to create lasting change in the areas that matter most to your community and Africa&apos;s development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors font-body">
                Start Your Project
              </button>
              <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors font-body">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      </FadeInOnLoad>
      <Footer/>
    </main>
  );
}
