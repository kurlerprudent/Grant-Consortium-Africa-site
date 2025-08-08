/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors for Grant Consortium Africa
        primary: {
          DEFAULT: '#004785', // Deep blue for primary elements
          dark: '#003461',    // Darker shade for hover states
          light: '#0055a3',   // Lighter shade for subtle elements
        },
        secondary: {
          DEFAULT: '#F4B400', // Rich gold for accents
          dark: '#d49c00',    // Darker gold for hover states
          light: '#f7c63e',   // Lighter gold for subtle elements
        },
        text: {
          primary: '#0F172A',   // Headers - very dark slate
          secondary: '#1F2937', // Body text - dark slate gray
          muted: '#6B7280',     // Muted text - gray
        },
        background: {
          DEFAULT: '#F9FAFB',   // Soft white/light gray
          card: '#FFFFFF',      // Pure white for cards
          section: '#F3F4F6',   // Light gray for sections
        },
        border: {
          DEFAULT: '#E5E7EB',   // Subtle slate for borders
          light: '#F3F4F6',     // Lighter border
          dark: '#D1D5DB',      // Darker border
        },
        shadow: {
          DEFAULT: '#1F29371A', // Soft shadow with 10% opacity
          gold: '#F4B40020',    // Gold shadow for hover states
        }
      },
      fontFamily: {
        // Custom font families
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        body: ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        sans: ['Roboto', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      fontSize: {
        // Custom font sizes for better hierarchy
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'display': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
        'heading-xl': ['2rem', { lineHeight: '1.25', fontWeight: '600' }],
        'heading-lg': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-md': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        // Custom spacing values
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
      },
      borderRadius: {
        // Custom border radius
        'card': '0.75rem',
        'button': '2rem',
      },
      boxShadow: {
        // Custom shadows
        'card': '0 1px 3px 0 rgba(31, 41, 55, 0.1), 0 1px 2px 0 rgba(31, 41, 55, 0.06)',
        'card-hover': '0 4px 6px -1px rgba(244, 180, 0, 0.1), 0 2px 4px -1px rgba(244, 180, 0, 0.06)',
        'button': '0 1px 2px 0 rgba(31, 41, 55, 0.05)',
        'button-hover': '0 2px 4px 0 rgba(31, 41, 55, 0.1)',
      },
      animation: {
        // Custom animations
        'spin-slow': 'spin 2s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': {
            transform: 'translateY(-2%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
    },
  },
  plugins: [],
}
