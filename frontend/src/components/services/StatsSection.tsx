import React from 'react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      number: '500+',
      label: 'Successful Grants',
      description: 'Grants secured for our clients'
    },
    {
      number: '$50M+',
      label: 'Total Funding',
      description: 'In grant funding secured'
    },
    {
      number: '200+',
      label: 'Organizations',
      description: 'Supported across Africa'
    },
    {
      number: '95%',
      label: 'Success Rate',
      description: 'Client satisfaction score'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 font-display">
            Impact by the Numbers
          </h2>
          <p className="text-xl text-blue-100 font-body max-w-3xl mx-auto">
            Our track record speaks for itself. Here&apos;s how we&apos;ve helped organizations 
            across Africa achieve their goals through successful grant acquisition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 hover:bg-white/20 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2 font-display">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-blue-100 mb-1 font-display">
                  {stat.label}
                </div>
                <div className="text-sm text-blue-200 font-body">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
            <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white font-semibold font-body">
              Trusted by organizations across 30+ African countries
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
