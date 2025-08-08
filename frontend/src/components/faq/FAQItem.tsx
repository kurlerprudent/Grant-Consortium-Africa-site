'use client';

import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ 
  question, 
  answer, 
  isOpen = false, 
  onToggle,
  index 
}) => {
  const [internalOpen, setInternalOpen] = useState(isOpen);
  
  const handleToggle = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalOpen(!internalOpen);
    }
  };

  const isActive = onToggle ? isOpen : internalOpen;

  return (
    <div 
      className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <button
        onClick={handleToggle}
        className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-2xl"
      >
        <div className="flex items-center justify-between">
          <h3 className="font-heading text-lg font-semibold text-gray-900 pr-4">
            {question}
          </h3>
          <div className={`flex-shrink-0 transition-transform duration-300 ${
            isActive ? 'rotate-180' : ''
          }`}>
            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${
        isActive ? 'max-h-96 pb-6' : 'max-h-0'
      }`}>
        <div className="px-6">
          <div className="border-t border-gray-100 pt-4">
            <p className="font-body text-gray-600 leading-relaxed">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
