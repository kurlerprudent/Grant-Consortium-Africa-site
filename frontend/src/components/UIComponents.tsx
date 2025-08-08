'use client';

import React from 'react';

// Re-export our clean components
// export { default as Button } from './Button';
// export { default as Card } from './Card';

// Typography Components with inline Tailwind classes
interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

export const Heading: React.FC<HeadingProps> = ({
  level = 1,
  children,
  className = '',
  gradient = false,
}) => {
  const baseClasses = 'font-heading font-semibold text-text-primary';
  
  // Gradient text effect using inline Tailwind
  const gradientClasses = gradient 
    ? 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'
    : '';
  
  const levelClasses = {
    1: 'text-hero',
    2: 'text-display',
    3: 'text-heading-xl',
    4: 'text-heading-lg',
    5: 'text-heading-md',
    6: 'text-heading-md',
  };

  const combinedClasses = `${baseClasses} ${levelClasses[level]} ${gradientClasses} ${className}`;
  
  switch (level) {
    case 1:
      return <h1 className={combinedClasses}>{children}</h1>;
    case 2:
      return <h2 className={combinedClasses}>{children}</h2>;
    case 3:
      return <h3 className={combinedClasses}>{children}</h3>;
    case 4:
      return <h4 className={combinedClasses}>{children}</h4>;
    case 5:
      return <h5 className={combinedClasses}>{children}</h5>;
    case 6:
      return <h6 className={combinedClasses}>{children}</h6>;
    default:
      return <h1 className={combinedClasses}>{children}</h1>;
  }
};

interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  muted?: boolean;
}

export const Text: React.FC<TextProps> = ({
  size = 'md',
  children,
  className = '',
  muted = false,
}) => {
  const sizeClasses = {
    sm: 'text-body-sm',
    md: 'text-body',
    lg: 'text-body-lg',
  };

  const colorClass = muted ? 'text-text-muted' : 'text-text-secondary';
  const baseClasses = 'font-body';

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${colorClass} ${className}`;

  return (
    <p className={combinedClasses}>
      {children}
    </p>
  );
};

// Container Component with inline Tailwind classes
interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  className = '',
}) => {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  const combinedClasses = `container mx-auto px-4 sm:px-6 lg:px-8 ${sizeClasses[size]} ${className}`;

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
};

// Section Component with inline Tailwind classes
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'default' | 'section' | 'card';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  background = 'default',
  padding = 'lg',
}) => {
  const backgroundClasses = {
    default: 'bg-background',
    section: 'bg-background-section',
    card: 'bg-background-card',
  };

  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  };

  const combinedClasses = `${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`;

  return (
    <section className={combinedClasses}>
      {children}
    </section>
  );
};

// Badge Component with inline Tailwind classes
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full';

  const variantClasses = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-primary',
    success: 'bg-green-500 text-white',
    warning: 'bg-yellow-500 text-white',
    error: 'bg-red-500 text-white',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <span className={combinedClasses}>
      {children}
    </span>
  );
};

// Input Component with inline Tailwind classes
interface InputProps {
  type?: 'text' | 'email' | 'password' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  disabled = false,
  required = false,
  className = '',
  label,
  error,
}) => {
  const inputClasses = `
    w-full px-4 py-3 border border-border rounded-lg font-body
    focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
    disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-background-section
    transition-colors duration-200
    ${error ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' : ''}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-text-primary font-medium font-body">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        className={inputClasses}
      />
      {error && (
        <p className="text-red-500 text-sm font-body">{error}</p>
      )}
    </div>
  );
};

// Textarea Component with inline Tailwind classes
interface TextareaProps {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
  className?: string;
  label?: string;
  error?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  value,
  onChange,
  disabled = false,
  required = false,
  rows = 4,
  className = '',
  label,
  error,
}) => {
  const textareaClasses = `
    w-full px-4 py-3 border border-border rounded-lg font-body
    focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
    disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-background-section
    transition-colors duration-200 resize-vertical
    ${error ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' : ''}
    ${className}
  `.replace(/\s+/g, ' ').trim();

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-text-primary font-medium font-body">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required={required}
        rows={rows}
        className={textareaClasses}
      />
      {error && (
        <p className="text-red-500 text-sm font-body">{error}</p>
      )}
    </div>
  );
};
