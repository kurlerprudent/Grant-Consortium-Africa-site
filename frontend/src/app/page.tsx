'use client';

import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/home/ServicesSection';
import AboutSection from '@/components/home/AboutSection';
import EligibilitySection from '@/components/home/EligibilitySection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import NewsletterSection from '@/components/home/NewsletterSection';
import Footer from '@/components/Footer';
import FadeInOnLoad from '@/components/animations/FadeInOnLoad';

export default function Home() {
  return (
    <FadeInOnLoad className="min-h-screen">
      <Navbar />
      <FadeInOnLoad delay={100}>
        <HeroSection />
      </FadeInOnLoad>
      <FadeInOnLoad delay={200}>
        <AboutSection />
      </FadeInOnLoad>
      <FadeInOnLoad delay={300}>
        <ServicesSection />
      </FadeInOnLoad>
      <FadeInOnLoad delay={400}>
        <EligibilitySection />
      </FadeInOnLoad>
      {/* <GrantProgramsSection /> */}
      <FadeInOnLoad delay={500}>
        <TestimonialsSection />
      </FadeInOnLoad>
      <FadeInOnLoad delay={600}>
        <NewsletterSection />
      </FadeInOnLoad>
      <FadeInOnLoad delay={700}>
        <Footer />
      </FadeInOnLoad>
    </FadeInOnLoad>
  );
}
