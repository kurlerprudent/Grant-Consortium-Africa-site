'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FadeInOnLoad from '@/components/animations/FadeInOnLoad';

export default function Partners() {
  const partnerCategories = [
    {
      category: 'Development Finance Institutions',
      description: 'Leading financial institutions supporting African development through strategic funding and technical expertise',
      gradient: 'from-blue-600 to-indigo-700',
      partners: [
        { 
          name: 'World Bank Group', 
          logo: '/worldbankgroup.jpg',
          focus: 'Infrastructure & Economic Development', 
          region: 'Continental',
          description: 'Global leader in development finance and poverty reduction initiatives'
        },
        { 
          name: 'African Development Bank', 
          logo: '/africandevbank.webp',
          focus: 'Financial Services & Agriculture', 
          region: 'Continental',
          description: 'Premier multilateral development finance institution in Africa'
        },
        { 
          name: 'USAID', 
          logo: '/usaid.webp',
          focus: 'Health, Education & Governance', 
          region: 'Multi-Country',
          description: 'United States Agency for International Development programs'
        },
        { 
          name: 'EU Development Cooperation', 
          logo: '/eudevoperation.jpg',
          focus: 'Climate & Digital Transformation', 
          region: 'Continental',
          description: 'European Union development cooperation initiatives'
        },
      ]
    },
    {
      category: 'Government Partners',
      description: 'Strategic partnerships with African governments and national institutions driving policy and implementation',
      gradient: 'from-green-600 to-emerald-700',
      partners: [
        { 
          name: 'Ghana Ministry of Finance', 
          logo: '/ghministryoffinance.png',
          focus: 'Public Sector Financing', 
          region: 'Ghana',
          description: 'Lead ministry for economic policy and public financial management'
        },
        { 
          name: 'Kenya National Treasury', 
          logo: '/KENYA-NATIONAL-TREASURY-BUILDING.webp',
          focus: 'Development Projects', 
          region: 'Kenya',
          description: 'National treasury responsible for economic planning and development'
        },
        { 
          name: 'Nigerian Federal Ministry', 
          logo: '/nigeriafdministry.jpg',
          focus: 'Infrastructure Development', 
          region: 'Nigeria',
          description: 'Federal ministry overseeing national development initiatives'
        },
        { 
          name: 'South African National Treasury', 
          logo: '/South African National Treasury.jpeg',
          focus: 'Social Development Programs', 
          region: 'South Africa',
          description: 'National treasury managing economic policy and development programs'
        },
      ]
    },
    {
      category: 'Private Sector & Foundations',
      description: 'Corporate partnerships and foundations driving innovative solutions and sustainable business development',
      gradient: 'from-purple-600 to-pink-700',
      partners: [
        { 
          name: 'Safaricom Foundation', 
          logo: '/Safaricom Foundation.webp',
          focus: 'Digital Innovation & Connectivity', 
          region: 'Kenya',
          description: 'Leading telecommunications foundation focused on digital inclusion'
        },
        { 
          name: 'MTN Foundation', 
          logo: '/MTN Foundation.jpg',
          focus: 'Education & Healthcare', 
          region: 'Multi-Country',
          description: 'Pan-African telecommunications foundation supporting development'
        },
        { 
          name: 'Standard Bank Group', 
          logo: '/standard-bank-group-logo.png',
          focus: 'Financial Inclusion', 
          region: 'Southern Africa',
          description: 'Leading financial services group promoting economic growth'
        },
        { 
          name: 'Dangote Foundation', 
          logo: '/Dangote-Foundation-.jpeg',
          focus: 'Health, Education & Empowerment', 
          region: 'West Africa',
          description: 'Africa&apos;s largest private foundation focused on social impact'
        },
      ]
    }
  ];

  return (
    <FadeInOnLoad className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      
      {/* Hero Section */}
      <FadeInOnLoad delay={100}>
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/20">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3"></div>
              <span className="text-sm font-medium">Strategic Partnerships</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              <span className='text-white'>
                Our Partner
              </span>
              
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                Network
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-10">
              Building bridges with leading institutions across Africa and globally to create sustainable impact and drive transformative change in communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-block text-center">
                Become a Partner
              </Link>
              <Link href="/services" className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-all duration-300 inline-block text-center">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      </FadeInOnLoad>

      {/* Partnership Impact Stats */}
      <FadeInOnLoad delay={200}>
        <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">3+</div>
                <p className="text-gray-700 font-medium">Strategic Partners</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-700 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2">2</div>
                <p className="text-gray-700 font-medium">Countries Reached</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-700 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-2">$</div>
                <p className="text-gray-700 font-medium">Funding Mobilized</p>
              </div>
            </div>
            
            <div className="group">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-700 transition-colors">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div className="text-4xl font-bold text-orange-600 mb-2">+</div>
                <p className="text-gray-700 font-medium">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </FadeInOnLoad>

      {/* Partners by Category */}
      <FadeInOnLoad delay={300}>
        <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full mb-8 border border-gray-200/50 shadow-lg">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              <span className="text-sm font-medium text-gray-700">Partnership Ecosystem</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our Strategic
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Partnership Network
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We collaborate with diverse organizations across sectors to address complex development challenges through innovative, multi-stakeholder approaches that create lasting impact.
            </p>
          </div>

          <div className="space-y-20">
            {partnerCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="relative">
                {/* Category Header */}
                <div className={`bg-gradient-to-r ${category.gradient} rounded-3xl p-8 mb-12 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10"></div>
                  <div className="absolute top-4 right-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{category.category}</h3>
                    <p className="text-lg opacity-90 max-w-4xl">{category.description}</p>
                  </div>
                </div>
                
                {/* Partner Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {category.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200">
                      <div className="p-8">
                        {/* Logo and Header */}
                        <div className="flex items-start space-x-6 mb-6">
                          <div className="flex-shrink-0 w-20 h-20 bg-gray-50 rounded-2xl p-3 group-hover:bg-gray-100 transition-colors overflow-hidden">
                            <div className="w-full h-full relative">
                              <Image
                                src={partner.logo}
                                alt={`${partner.name} logo`}
                                fill
                                className="object-contain"
                              />
                            </div>
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between mb-3">
                              <h4 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {partner.name}
                              </h4>
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${category.gradient} text-white shadow-lg`}>
                                {partner.region}
                              </span>
                            </div>
                            
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                              {partner.description}
                            </p>
                          </div>
                        </div>
                        
                        {/* Focus Area */}
                        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 mb-6">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="text-sm font-medium text-gray-700">Focus Area</span>
                          </div>
                          <p className="text-gray-900 font-semibold mt-2">{partner.focus}</p>
                        </div>
                        
                        {/* Action Button */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            <span>Strategic Partnership</span>
                          </div>
                          
                          <button className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105">
                            Learn More
                            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </FadeInOnLoad>

      {/* Partnership Benefits & Approach */}
      <FadeInOnLoad delay={400}>
        <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl transform -translate-x-32 -translate-y-32"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl transform translate-x-32 translate-y-32"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Partnership
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Benefits & Approach
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the value of strategic partnerships and how we collaborate to maximize impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Benefits */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Accelerated Access to Funding</h3>
                  <p className="text-gray-600">Fast-track your grant applications through our established relationships with major funders and streamlined processes.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Capacity Building & Support</h3>
                  <p className="text-gray-600">Comprehensive training, mentorship, and technical assistance to strengthen your organization&apos;s grant management capabilities.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Regional Network Access</h3>
                  <p className="text-gray-600">Connect with organizations across Africa to share knowledge, resources, and collaborate on multi-country initiatives.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Compliance & Transparency</h3>
                  <p className="text-gray-600">Ensure full donor compliance and maintain highest standards of transparency and accountability in all funded projects.</p>
                </div>
              </div>
            </div>

            {/* Right Column - Approach Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Our Partnership Philosophy</h3>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-white/90">Mutual Benefit & Shared Value Creation</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-white/90">Long-term Relationship Building</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-white/90">Collaborative Innovation & Learning</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-white/90">Impact-Driven Results</span>
                    </div>
                  </div>
                  
                  <Link href="/contact" className="inline-flex items-center px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl">
                    Start Partnership
                    <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
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