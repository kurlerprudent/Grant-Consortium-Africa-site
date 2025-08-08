import React from 'react';

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4 font-display">
          Contact Information
        </h2>
        <p className="text-gray-600 font-body">
          Get in touch with us through any of these channels. We&apos;re here to help you succeed.
        </p>
      </div>

      <div className="space-y-8">
        {/* Office Address */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-display">Office Address</h3>
            <p className="text-gray-600 font-body">
              Grant Consortium Africa<br />
              123 Liberation Road<br />
              Accra, Ghana<br />
              P.O. Box 12345
            </p>
          </div>
        </div>

        {/* Phone Numbers */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-display">Phone Numbers</h3>
            <div className="space-y-1 font-body text-gray-600">
              <p>Main Office: <a href="tel:+233123456789" className="hover:text-blue-600 transition-colors">+233 123 456 789</a></p>
              <p>WhatsApp: <a href="https://wa.me/233123456789" className="hover:text-green-600 transition-colors">+233 123 456 789</a></p>
              <p>Emergency: <a href="tel:+233987654321" className="hover:text-red-600 transition-colors">+233 987 654 321</a></p>
            </div>
          </div>
        </div>

        {/* Email Addresses */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-display">Email Addresses</h3>
            <div className="space-y-1 font-body text-gray-600">
              <p>General Inquiries: <a href="mailto:info@grantconsortiumafrica.org" className="hover:text-blue-600 transition-colors">info@grantconsortiumafrica.org</a></p>
              <p>Grant Applications: <a href="mailto:grants@grantconsortiumafrica.org" className="hover:text-blue-600 transition-colors">grants@grantconsortiumafrica.org</a></p>
              <p>Partnerships: <a href="mailto:partnerships@grantconsortiumafrica.org" className="hover:text-blue-600 transition-colors">partnerships@grantconsortiumafrica.org</a></p>
              <p>Training Programs: <a href="mailto:training@grantconsortiumafrica.org" className="hover:text-blue-600 transition-colors">training@grantconsortiumafrica.org</a></p>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-display">Business Hours</h3>
            <div className="space-y-1 font-body text-gray-600">
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
              <p className="text-sm text-blue-600 mt-2">Emergency support available 24/7</p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 2v12a2 2 0 002 2h6a2 2 0 002-2V6H7z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 11h4" />
              </svg>
            </div>
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 font-display">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
              <a href="#" className="text-blue-700 hover:text-blue-800 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-red-600 hover:text-red-700 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Services Notice */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white">
        <h3 className="text-lg font-semibold mb-2 font-display">Ready to Get Started?</h3>
        <p className="text-blue-100 font-body mb-4">
          Schedule a free consultation to discuss your grant funding needs and explore how we can help you achieve your goals.
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors font-body">
          Schedule Consultation
        </button>
      </div>
    </div>
  );
};

export default ContactInfo;
