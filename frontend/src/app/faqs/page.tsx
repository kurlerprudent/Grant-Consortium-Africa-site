'use client';

import React, { useState, useMemo } from 'react';
import FAQHero from '@/components/faq/FAQHero';
import FAQSearch from '@/components/faq/FAQSearch';
import FAQCategory from '@/components/faq/FAQCategory';
import FAQContactSupport from '@/components/faq/FAQContactSupport';
import Footer from '@/components/Footer';
import { Navbar } from '@/components';
import FadeInOnLoad from '@/components/animations/FadeInOnLoad';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQ[] = [
  // Grant Application Process
  {
    id: '1',
    question: 'How do I apply for grants through Grant Consortium Africa?',
    answer: 'To apply for grants through GCA, start by browsing our available opportunities on the website. Create an account, complete your profile, and submit your application with all required documents. Our team will guide you through each step and provide feedback on your proposal.',
    category: 'Grant Application Process'
  },
  {
    id: '2',
    question: 'What documents do I need to prepare for a grant application?',
    answer: 'Typical documents include: project proposal, budget breakdown, organizational registration documents, tax clearance certificates, audited financial statements, letters of support, and CV of key personnel. Specific requirements vary by grant type.',
    category: 'Grant Application Process'
  },
  {
    id: '3',
    question: 'How long does the grant application review process take?',
    answer: 'The review process typically takes 4-8 weeks, depending on the complexity of the project and funder requirements. We keep applicants informed throughout the process and provide updates on application status.',
    category: 'Grant Application Process'
  },
  {
    id: '4',
    question: 'Can I apply for multiple grants simultaneously?',
    answer: 'Yes, you can apply for multiple grants. However, ensure that each application is tailored to the specific funder\'s requirements and that there\'s no overlap in funding requests for the same activities.',
    category: 'Grant Application Process'
  },

  // Eligibility and Requirements
  {
    id: '5',
    question: 'Who is eligible to apply for grants through GCA?',
    answer: 'Eligibility varies by grant type, but generally includes NGOs, community-based organizations, research institutions, educational institutions, and social enterprises operating in Africa. Each grant has specific eligibility criteria that must be met.',
    category: 'Eligibility and Requirements'
  },
  {
    id: '6',
    question: 'Do I need to be registered as an organization to apply?',
    answer: 'Most grants require formal organizational registration with relevant authorities. However, some opportunities may be available for informal groups or individuals. Check specific grant requirements for details.',
    category: 'Eligibility and Requirements'
  },
  {
    id: '7',
    question: 'What types of projects are typically funded?',
    answer: 'We fund projects in education, healthcare, agriculture, environmental conservation, community development, technology innovation, and capacity building. Projects should demonstrate clear social impact and sustainability.',
    category: 'Eligibility and Requirements'
  },

  // Services and Support
  {
    id: '8',
    question: 'What support services does GCA provide beyond grant applications?',
    answer: 'GCA offers comprehensive support including capacity building workshops, project management training, financial management guidance, monitoring and evaluation support, partnership facilitation, and post-grant implementation assistance.',
    category: 'Services and Support'
  },
  {
    id: '9',
    question: 'Do you provide training for grant writing?',
    answer: 'Yes, we offer regular grant writing workshops, online courses, and one-on-one mentoring sessions. These cover proposal development, budget planning, monitoring frameworks, and compliance requirements.',
    category: 'Services and Support'
  },
  {
    id: '10',
    question: 'How much do your services cost?',
    answer: 'Our consultation fees vary based on service type and project scope. Initial consultations are often free, and we offer sliding scale pricing for small organizations. Contact us for a customized quote.',
    category: 'Services and Support'
  },

  // Grant Management
  {
    id: '11',
    question: 'What happens after my grant is approved?',
    answer: 'After approval, we help you sign grant agreements, set up proper financial management systems, establish reporting schedules, and provide ongoing support throughout project implementation to ensure compliance and success.',
    category: 'Grant Management'
  },
  {
    id: '12',
    question: 'How do I report on grant progress and finances?',
    answer: 'Reporting requirements vary by funder but typically include quarterly progress reports, financial statements, and impact assessments. We provide templates and guidance to ensure accurate and timely reporting.',
    category: 'Grant Management'
  },
  {
    id: '13',
    question: 'Can grants be extended or modified after approval?',
    answer: 'Grant modifications are possible but require approval from funders. Common modifications include budget reallocations, timeline extensions, and activity adjustments. We help negotiate these changes when necessary.',
    category: 'Grant Management'
  },

  // Partnership and Collaboration
  {
    id: '14',
    question: 'How can my organization partner with GCA?',
    answer: 'We welcome partnerships with organizations that share our vision. Partnership opportunities include joint grant applications, capacity building collaborations, resource sharing, and knowledge exchange programs.',
    category: 'Partnership and Collaboration'
  },
  {
    id: '15',
    question: 'Do you work with international funders?',
    answer: 'Yes, we have established relationships with international foundations, development agencies, corporate funders, and multilateral organizations. This gives our clients access to a diverse range of funding opportunities.',
    category: 'Partnership and Collaboration'
  },
  {
    id: '16',
    question: 'Can you help connect us with other organizations for partnerships?',
    answer: 'Absolutely. We facilitate partnerships between organizations through our network, organize networking events, and help identify potential collaborators for joint projects and grant applications.',
    category: 'Partnership and Collaboration'
  }
];

const categories = [
  {
    name: 'Grant Application Process',
    icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    description: 'Learn about our application process, requirements, and timelines'
  },
  {
    name: 'Eligibility and Requirements',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    description: 'Understand who can apply and what projects we fund'
  },
  {
    name: 'Services and Support',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
    description: 'Discover our comprehensive support services and training programs'
  },
  {
    name: 'Grant Management',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    description: 'Learn about managing approved grants, reporting, and compliance'
  },
  {
    name: 'Partnership and Collaboration',
    icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z',
    description: 'Explore partnership opportunities and collaboration possibilities'
  }
];

export default function FAQs() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFAQs = useMemo(() => {
    if (!searchQuery) return faqData;

    return faqData.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const categorizedFAQs = useMemo(() => {
    const grouped = filteredFAQs.reduce((acc, faq) => {
      if (!acc[faq.category]) {
        acc[faq.category] = [];
      }
      acc[faq.category].push(faq);
      return acc;
    }, {} as Record<string, FAQ[]>);

    return grouped;
  }, [filteredFAQs]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <FadeInOnLoad className="min-h-screen pt-20">
      <Navbar />
      
      {/* Hero Section */}
      <FadeInOnLoad delay={100}>
        <FAQHero />
      </FadeInOnLoad>
      
      <FadeInOnLoad delay={200}>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FAQSearch onSearch={handleSearch} />
            
            {Object.keys(categorizedFAQs).length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 font-display">No Results Found</h3>
              <p className="text-gray-600 font-body max-w-md mx-auto">
                We couldn&apos;t find any FAQs matching your search. Try different keywords or browse all categories.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-semibold font-body"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {categories
                .filter(category => categorizedFAQs[category.name])
                .map((category) => (
                  <FAQCategory
                    key={category.name}
                    name={category.name}
                    icon={category.icon}
                    description={category.description}
                    faqs={categorizedFAQs[category.name]}
                  />
                ))}
            </div>
          )}
        </div>
      </section>
      </FadeInOnLoad>

      <FadeInOnLoad delay={300}>
        <FAQContactSupport />
      </FadeInOnLoad>
      <FadeInOnLoad delay={400}>
        <Footer/>
      </FadeInOnLoad>
    </FadeInOnLoad>
  );
}
