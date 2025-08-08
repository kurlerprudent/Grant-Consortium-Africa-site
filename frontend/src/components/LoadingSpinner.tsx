'use client';

import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  showText = true,
  text = 'Grant Consortium Africa',
  className = '',
}) => {
  // Size configurations
  const sizeClasses = {
    sm: {
      container: 'w-16 h-16',
      ring: 'w-14 h-14',
      text: 'text-sm mt-2',
    },
    md: {
      container: 'w-20 h-20',
      ring: 'w-18 h-18',
      text: 'text-base mt-3',
    },
    lg: {
      container: 'w-24 h-24',
      ring: 'w-22 h-22',
      text: 'text-lg mt-4',
    },
    xl: {
      container: 'w-32 h-32',
      ring: 'w-30 h-30',
      text: 'text-xl mt-6',
    },
  };

  const currentSize = sizeClasses[size];

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Spinner Container */}
      <div className="relative flex items-center justify-center">
        {/* Outer rotating ring */}
        <div
          className={`
            ${currentSize.container}
            rounded-full
            border-4
            border-border
            border-t-primary
            animate-spin
            absolute
          `}
        />
        
        {/* Inner pulsing ring */}
        <div
          className={`
            ${currentSize.ring}
            rounded-full
            border-2
            border-secondary/30
            border-t-secondary
            animate-spin-slow
            absolute
          `}
        />
        
        {/* Center dot */}
        <div className="w-3 h-3 bg-primary rounded-full animate-bounce-gentle" />
        
        {/* Animated rings for extra visual appeal */}
        <div
          className={`
            ${currentSize.container}
            rounded-full
            border-2
            border-secondary/20
            absolute
            animate-pulse
          `}
          style={{
            animation: 'pulse-ring 1.25s cubic-bezier(0.215, 0.61, 0.355, 1) infinite',
          }}
        />
      </div>

      {/* Loading text */}
      {showText && (
        <div className={`${currentSize.text} font-heading font-semibold text-center animate-fade-in`}>
          <div className="text-primary animate-pulse">
            {text}
          </div>
          <div 
            className="text-secondary text-sm font-body mt-1 animate-fade-in" 
            style={{ animationDelay: '0.3s' }}
          >
            Loading...
          </div>
        </div>
      )}
      
      {/* Add the keyframe animation style */}
      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(0.33);
            opacity: 1;
          }
          80%, 100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

// Full-screen loading overlay component
export const LoadingOverlay: React.FC<{
  isVisible: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  text?: string;
}> = ({ isVisible, size = 'lg', text }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-background-card p-8 rounded-card shadow-card-hover">
        <LoadingSpinner size={size} text={text} />
      </div>
    </div>
  );
};

// Inline loading component (for use within components)
export const InlineLoader: React.FC<{
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}> = ({ text = 'Loading...', className }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <div className="w-5 h-5 border-2 border-border border-t-primary rounded-full animate-spin" />
      </div>
      <span className="text-text-secondary font-body text-sm animate-pulse">
        {text}
      </span>
    </div>
  );
};

// Button loading state
export const ButtonLoader: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
      <span>Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
