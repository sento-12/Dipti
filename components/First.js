'use client'
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';
import LocomotiveScroll from 'locomotive-scroll';
import Card from './Card';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const titleRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        // You can add more locomotive-scroll options here if needed
      });
    }
  }, []);

  useEffect(() => {
    const leftTitle = titleRef.current.querySelector('.left');
    const rightTitle = titleRef.current.querySelector('.right');

    gsap.fromTo(
      leftTitle,
      { x: 0 },
      {
        x: '-100%',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 30%',
          end: '90%',
          scrub: true,
        },
        opacity : 0,
      }
    );

    gsap.fromTo(
      rightTitle,
      { x: 0  },
      {
        x: '100%',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 30%',
          end: '90%',
          scrub: true,
          
        },
        opacity : 0,
      }
    );

    // Balloon animations
    gsap.utils.toArray('.balloon').forEach((balloon, i) => {
      gsap.to(balloon, {
        y: `-${window.innerHeight * 1.5}px`,
        x: gsap.utils.random(-50, 50, true),
        repeat: -1,
        duration: gsap.utils.random(6, 12),
        ease: 'sine.inOut',
        delay: gsap.utils.random(0, 5),
      });
    });
  }, []);

  return (
    <>
      <div ref={scrollRef} data-scroll data-scroll-section data-scroll-speed=".1" className="relative flex items-center justify-center h-screen bg-black overflow-hidden px-4 sm:px-6 md:px-8">
        
        {/* Stars */}
        <div className="absolute inset-0 bg-no-repeat bg-cover bg-[url('/stars.png')] z-0"></div>
        
        {/* Title */}
        <div className="relative z-10 flex justify-center items-center w-full h-full">
          <h1 ref={titleRef} className="flex justify-center text-center items-center w-full text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            <span className="left text-right w-1/2 pr-1 sm:pr-2">WELCOME</span>
            <span className="right text-left w-1/2 pl-1 sm:pl-2"> TANU !</span>
          </h1>
        </div>

        {/* Balloons */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className={`absolute bottom-0 w-8 h-10 sm:w-10 sm:h-12 md:w-12 md:h-16 bg-pink-300 rounded-full balloon z-10`}
            style={{
              left: `${gsap.utils.random(5, 95)}%`,
              backgroundColor: gsap.utils.random(['#FFC0CB', '#ADD8E6', '#FFD700', '#FF6347', '#90EE90']),
            }}
          ></div>
        ))}    
      </div>
    </>
  );
}
