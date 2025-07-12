"use client"
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const slogan = `Keep smiling always 😊—your smile makes you even more beautiful 💖. I hope this little surprise 🎁 makes you feel truly special, because in my eyes, you're not like anyone else… you're one of a kind 🌟 and truly precious to me 💫.`;

const Intro = () => {
  const [showScroll, setShowScroll] = useState(true);
  const frameRef = useRef(null);
  const textRef = useRef(null);
  const topTextRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    // GSAP entrance animations
    gsap.fromTo(
      topTextRef.current,
      { y: -30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    );
    gsap.fromTo(
      frameRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.5 }
    );
    gsap.fromTo(
      textRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', delay: 0.9 }
    );
    gsap.fromTo(
      iconRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 1.5, repeat: -1, yoyo: true }
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setShowScroll(false);
      else setShowScroll(true);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="relative min-h-screen w-full flex flex-col justify-between items-center overflow-hidden bg-black"
      style={{
        backgroundImage: `url('/cat.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-80 z-0" />
      {/* Top Text */}
      <div
        ref={topTextRef}
        className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 text-xs sm:text-sm tracking-widest text-gray-300 z-10 font-light px-4 text-center"
        style={{ letterSpacing: '0.15em' }}
      >
        Every smile of yours is a reason I made this, Dipti 😊
      </div>
      {/* Center Frame with Slogan */}
      <div className="flex flex-1 items-center justify-center w-full z-10 px-3 sm:px-4 md:px-6">
        <div
          ref={frameRef}
          className="relative px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:px-12 lg:py-14 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl w-full mx-auto"
        >
          {/* Frame effect */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-yellow-400 z-10 pointer-events-none" style={{ top: 4, left: 4, right: -4, bottom: -4, borderColor: '#FFD600', opacity: 0.7 }} />
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-white z-20 pointer-events-none shadow-2xl" />
          <div
            ref={textRef}
            className="relative z-30 text-center text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-white leading-relaxed select-none px-2"
            style={{ textShadow: '0 2px 16px #000' }}
          >
            {slogan}
          </div>
        </div>
      </div>
      {/* Scroll Down Icon */}
      {showScroll && (
        <div
          ref={iconRef}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center cursor-pointer"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#FFD600" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce sm:w-8 sm:h-8">
            <polyline points="6 9 12 15 18 9" />
          </svg>
          <span className="text-xs text-yellow-300 mt-1">Scroll down</span>
        </div>
      )}
    </div>
  );
};

export default Intro;