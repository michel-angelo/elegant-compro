import React from 'react';
import Navbar from '../components/Navbar'; // Kita bikin simpel di bawah
import Footer from '../components/Footer'; // Kita bikin simpel di bawah
import Reveal from '../components/Reveal'; // Import Animasi tadi
import {FaArrowRight} from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="bg-white text-luxury-black font-sans selection:bg-luxury-gold selection:text-white">
      <Navbar />

      {/* 1. HERO SECTION (Clean & Center) */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-20">
        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.3em] text-gray-400 mb-6">
            Premium Consultancy Firm
          </p>
        </Reveal>
        <Reveal delay={200}>
          <h1 className="font-serif text-5xl md:text-8xl text-center leading-tight mb-8">
            Defining the Future<br />
            <span className="italic text-gray-400">of Excellence.</span>
          </h1>
        </Reveal>
        <Reveal delay={400}>
          <div className="w-[1px] h-20 bg-gray-300 mx-auto my-8" />
        </Reveal>

        {/* Gambar Hero Besar */}
        <Reveal delay={600}>
          <div className="w-full max-w-6xl mx-auto h-[50vh] md:h-[70vh] overflow-hidden relative">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000"
              alt="Office"
              className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
            />
          </div>
        </Reveal>
      </section>

      {/* 2. ABOUT (Text Heavy, Elegant) */}
      <section className="py-32 px-4 md:px-12 max-w-4xl mx-auto text-center">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-5xl mb-8">
            We craft strategies that endure.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-gray-500 text-lg leading-relaxed">
            Di dunia yang penuh kebisingan, kami menawarkan ketenangan dan kejelasan.
            {' '}
            Sejak 2025, kami membantu klien menavigasi kompleksitas bisnis dengan
            {' '}
            pendekatan yang terukur, elegan, dan berdampak jangka panjang.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <button className="mt-12 border-b border-black pb-1 uppercase text-xs tracking-widest hover:text-luxury-gold hover:border-luxury-gold transition-colors">
            Read Our Story
          </button>
        </Reveal>
      </section>

      {/* 3. SERVICES (Minimalist Grid) */}
      <section className="py-20 bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <Reveal>
            <div className="flex justify-between items-end mb-16 border-b border-gray-200 pb-8">
              <h3 className="font-serif text-4xl">Expertise</h3>
              <span className="text-xs uppercase tracking-widest text-gray-400">
                Our Services
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Strategic Planning',
                desc: 'Membangun pondasi bisnis yang kokoh untuk pertumbuhan berkelanjutan.',
              },
              {
                title: 'Legal Consultancy',
                desc: 'Navigasi hukum dengan presisi dan integritas tinggi.',
              },
              {
                title: 'Asset Management',
                desc: 'Optimalisasi portofolio untuk masa depan yang aman.',
              },
            ].map ((item, idx) => (
              <Reveal key={idx} delay={idx * 200}>
                <div className="group cursor-pointer">
                  <span className="text-xs text-luxury-gold mb-4 block">
                    0{idx + 1}
                  </span>
                  <h4 className="font-serif text-2xl mb-4 group-hover:text-luxury-gold transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <FaArrowRight className="text-gray-300 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. IMAGE SHOWCASE (Parallax Vibe) */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <Reveal>
            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
          </Reveal>
          <div>
            <Reveal delay={200}>
              <h2 className="font-serif text-4xl md:text-6xl mb-8">
                Global Perspective.
              </h2>
            </Reveal>
            <Reveal delay={400}>
              <p className="text-gray-500 mb-8">
                Kami bekerja melintasi batas, membawa wawasan global ke dalam konteks lokal.
                {' '}
                Setiap solusi dirancang dengan presisi arsitektural.
              </p>
              <button className="bg-luxury-black text-white px-8 py-4 text-xs uppercase tracking-widest hover:bg-luxury-gold transition-colors">
                View Portfolio
              </button>
            </Reveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
