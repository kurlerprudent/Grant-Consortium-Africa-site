'use client';

import React, { useEffect, useState } from 'react';

interface FadeInOnLoadProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const FadeInOnLoad: React.FC<FadeInOnLoadProps> = ({ 
  children, 
  delay = 0, 
  duration = 600,
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default FadeInOnLoad;
