import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactMap from '@/components/contact/ContactMap';
import { Navbar } from '@/components';
import Footer from '@/components/Footer';
import FadeInOnLoad from '@/components/animations/FadeInOnLoad';

export const metadata: Metadata = {
  title: 'Contact Us | Grant Consortium Africa',
  description: 'Get in touch with Grant Consortium Africa. Apply for grants, request consultations, or learn more about our development programs across Africa.',
  keywords: ['contact Grant Consortium Africa', 'apply for grants', 'development consultation', 'African development contact'],
  openGraph: {
    title: 'Contact Us | Grant Consortium Africa',
    description: 'Get in touch for grants and development support',
    type: 'website',
  },
};

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

      <FadeInOnLoad delay={400}>
        <Footer />
      </FadeInOnLoad>
    </FadeInOnLoad>
  );
}
