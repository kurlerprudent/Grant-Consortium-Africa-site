import React from 'react';
import { Metadata } from 'next';
import ServicesHero from '@/components/services/ServicesHero';
import ServiceCard from '@/components/services/ServiceCard';
import CallToActionSection from '@/components/services/CallToActionSection';
import ImpactShowcase from '@/components/services/ImpactShowcase';
import FadeInOnLoad from '@/components/animations/FadeInOnLoad';
import { Navbar } from '@/components';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Our Services | Grant Consortium Africa',
  description: 'Comprehensive grant application support, capacity building, project management, and partnership development services across Africa. Expert assistance from application to project completion.',
  keywords: ['grant services', 'African development services', 'project management', 'capacity building', 'grant applications', 'monitoring evaluation'],
  openGraph: {
    title: 'Our Services | Grant Consortium Africa',
    description: 'Expert grant and development services across Africa',
    type: 'website',
  },
};

const services = [
  {
    title: 'Grant Application Support',
    description: 'Expert assistance in identifying, applying for, and securing grants from local and international funders. We guide you through every step of the application process.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Grant Opportunity Identification',
      'Proposal Writing & Review',
      'Application Strategy Development',
      'Funder Relationship Management'
    ],
    link: '/services/grant-application'
  },
  {
    title: 'Capacity Building',
    description: 'Comprehensive training programs designed to strengthen organizational capabilities and build sustainable systems for long-term success.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Organizational Development',
      'Leadership Training',
      'Skills Development Workshops',
      'Mentorship Programs'
    ],
    link: '/services/capacity-building'
  },
  {
    title: 'Project Management',
    description: 'Professional project management services to ensure successful implementation of funded projects from inception to completion.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2039&q=80',
    features: [
      'Project Planning & Design',
      'Implementation Support',
      'Risk Management',
      'Quality Assurance'
    ],
    link: '/services/project-management'
  },
  {
    title: 'Monitoring & Evaluation',
    description: 'Comprehensive M&E services to track progress, measure impact, and ensure accountability throughout your project lifecycle.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    features: [
      'M&E Framework Development',
      'Data Collection & Analysis',
      'Impact Assessment',
      'Reporting & Documentation'
    ],
    link: '/services/monitoring-evaluation'
  },
  {
    title: 'Financial Management',
    description: 'Expert financial management and compliance services to ensure proper stewardship of grant funds and donor requirements.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2026&q=80',
    features: [
      'Financial Systems Setup',
      'Budget Management',
      'Compliance Monitoring',
      'Financial Reporting'
    ],
    link: '/services/financial-management'
  },
  {
    title: 'Partnership Development',
    description: 'Strategic partnership facilitation to build strong networks and collaborative relationships for enhanced project impact.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    features: [
      'Partnership Strategy',
      'Stakeholder Mapping',
      'Collaboration Frameworks',
      'Network Building'
    ],
    link: '/services/partnership-development'
  }
];

export default function Services() {
  return (
    <FadeInOnLoad className="min-h-screen pt-20">
      <Navbar/>
      <FadeInOnLoad delay={100}>
        <ServicesHero />
      </FadeInOnLoad>
      
      {/* Services Grid */}
      <FadeInOnLoad delay={200}>
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display">
                Our Comprehensive Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
                From grant applications to project completion, we provide end-to-end support 
                to ensure your initiatives achieve maximum impact and sustainability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  features={service.features}
                  link={service.link}
                />
              ))}
            </div>
          </div>
        </section>
      </FadeInOnLoad>

      <FadeInOnLoad delay={300}>
        <ImpactShowcase />
      </FadeInOnLoad>
      <FadeInOnLoad delay={400}>
        <CallToActionSection />
      </FadeInOnLoad>
      <Footer/>
    </FadeInOnLoad>
  );
}
