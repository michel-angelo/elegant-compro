import React, {useState, useEffect} from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState (false);

  useEffect (() => {
    const handleScroll = () => setScrolled (window.scrollY > 50);
    window.addEventListener ('scroll', handleScroll);
    return () => window.removeEventListener ('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="font-serif text-xl tracking-widest font-bold">
          BASTHATAN.
        </div>
        <div className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-gray-500">
          <a href="#" className="hover:text-black transition">About</a>
          <a href="#" className="hover:text-black transition">Services</a>
          <a href="#" className="hover:text-black transition">Journal</a>
        </div>
        <button className="text-xs uppercase tracking-widest border border-black px-6 py-2 hover:bg-black hover:text-white transition">
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
