import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-20 text-center">
      <h2 className="font-serif text-3xl mb-8">
        Let's create something timeless.
      </h2>
      <a
        href="mailto:contact@BASTHATAN.com"
        className="text-gray-400 hover:text-black transition-colors border-b border-gray-200 pb-1"
      >
        contact@BASTHATAN.com
      </a>
      <div className="mt-20 text-[10px] uppercase tracking-widest text-gray-400">
        &copy; 2025 BASTHATAN CONSULTING. JAKARTA.
      </div>
    </footer>
  );
};

export default Footer;
