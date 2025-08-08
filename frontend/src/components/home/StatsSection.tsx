'use client';

import React, { useState, useEffect, useRef } from 'react';

interface CounterProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const Counter: React.FC<CounterProps> = ({ value, suffix = '+', label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let currentCount = 0;

      const counterTimer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= value) {
          setCount(value);
          clearInterval(counterTimer);
        } else {
          setCount(Math.floor(currentCount));
        }
      }, duration / steps);

      return () => clearInterval(counterTimer);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  return (
    <div ref={counterRef} className="text-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
      <div className="text-5xl md:text-6xl font-bold text-secondary mb-3">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-lg font-medium text-white mb-2">{label}</div>
    </div>
  );
};

const StatsSection: React.FC = () => {
  const stats = [
    { value: 568, suffix: 'M+', label: 'Donation Reach' },
    { value: 168, suffix: '+', label: 'Company Donors' },
    { value: 895, suffix: '+', label: 'Personal Donors' },
    { value: 487, suffix: '+', label: 'Organizations Applied' },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-primary via-blue-800 to-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Counter
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
