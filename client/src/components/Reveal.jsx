import React, {useEffect, useRef, useState} from 'react';

const Reveal = ({children, delay = 0}) => {
  const [isVisible, setIsVisible] = useState (false);
  const ref = useRef (null);

  useEffect (() => {
    const observer = new IntersectionObserver (
      ([entry]) => {
        // Kalo elemen muncul di layar, set Visible
        if (entry.isIntersecting) {
          setIsVisible (true);
          observer.unobserve (entry.target); // Cukup sekali animasi aja
        }
      },
      {threshold: 0.1} // Muncul pas 10% elemen keliatan
    );

    if (ref.current) {
      observer.observe (ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve (ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{transitionDelay: `${delay}ms`}}
      className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      {children}
    </div>
  );
};

export default Reveal;
