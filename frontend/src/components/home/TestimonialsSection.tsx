'use client';

import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Dr. Amara Okafor',
      position: 'Executive Director, Health for All Ghana',
      content: 'Grant Consortium Africa helped us secure $75,000 in funding, enabling us to provide healthcare to over 10,000 rural residents.',
      project: 'Rural Healthcare Initiative'
    },
    {
      name: 'Joseph Mwangi',
      position: 'Founder, Education Bridge Kenya',
      content: 'Beyond funding, they provided training that strengthened our organization. We have now impacted over 500 children\'s education.',
      project: 'Digital Learning Centers'
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-4">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            <span className="text-blue-600 font-medium text-sm">Success Stories</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Partners Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className="w-4 h-4 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500 mb-2">{testimonial.position}</p>
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full">
                  {testimonial.project}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
