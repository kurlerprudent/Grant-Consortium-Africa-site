'use client';

import React, { useState } from 'react';
import FAQItem from './FAQItem';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface FAQCategoryProps {
  name: string;
  description?: string;
  icon: string;
  faqs: FAQ[];
  defaultOpen?: number[];
}

const FAQCategory: React.FC<FAQCategoryProps> = ({ 
  name, 
  description, 
  icon, 
  faqs, 
  defaultOpen = [] 
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(defaultOpen.map(String)));

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="mb-12">
      {/* Category Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl mb-4">
          <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
          </svg>
        </div>
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          {name}
        </h2>
        {description && (
          <p className="font-body text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={faq.id}
            question={faq.question}
            answer={faq.answer}
            isOpen={openItems.has(faq.id)}
            onToggle={() => toggleItem(faq.id)}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQCategory;
