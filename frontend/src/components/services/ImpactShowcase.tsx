import React from 'react';
import Image from 'next/image';

const ImpactShowcase: React.FC = () => {
  const impactStories = [
    {
      title: 'Education for All Initiative',
      description: 'Secured funding to build schools in rural Ghana, providing quality education to children.',
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      category: 'Education'
    },
    {
      title: 'Healthcare Access Program',
      description: 'Enabled a network of community health centers to receive funding for medical equipment and training.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
      category: 'Healthcare'
    },
    {
      title: 'Sustainable Agriculture Project',
      description: 'Helped farming cooperatives secure funding for modern irrigation systems and training programs.',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80',
      category: 'Agriculture'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
            Real impact, real change. See how our clients have transformed their 
            communities through successful grant funding and expert support.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {impactStories.map((story, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold font-body">
                    {story.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors font-display">
                  {story.title}
                </h3>
                
                <p className="text-gray-600 font-body leading-relaxed">
                  {story.description}
                </p>

                {/* Read More Button */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center font-body">
                    Read Full Story
                    <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Stories Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl font-body">
            View All Success Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImpactShowcase;
