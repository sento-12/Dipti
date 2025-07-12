import React, { useEffect, useState } from 'react';

const photos = [
  '/photo/dipti1.jpeg',
  '/photo/dipti2.jpeg',
  '/photo/dipti3.jpeg',
  '/photo/dipti4.jpeg',
  // '/photo/dipti5.png',
];

const Animation = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-black via-gray-900 to-black py-8 sm:py-12 md:py-16 lg:py-24 relative overflow-hidden">
      {/* Soft glowing particles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {[...Array(18)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full opacity-60 blur-lg"
            style={{
              width: `${16 + Math.random() * 32}px`,
              height: `${16 + Math.random() * 32}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, #fff 0%, #a5b4fc 80%, transparent 100%)`,
              animation: `particle-float ${3 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
      <div className="relative flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[520px] px-4">
        {/* Animated photo carousel */}
        <div className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[380px] md:w-[340px] md:h-[420px] lg:w-[380px] lg:h-[460px] xl:w-[420px] xl:h-[500px] max-w-[90vw] max-h-[60vh] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl z-10">
          {photos.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt={`Dipti ${idx + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl sm:rounded-3xl transition-all duration-1200 ease-in-out
                ${current === idx ? 'opacity-100 scale-105 z-10' : 'opacity-0 scale-95 z-0'}`}
              style={{
                boxShadow: current === idx ? '0 0 60px 20px rgba(255,255,255,0.18)' : undefined,
                filter: current === idx ? 'drop-shadow(0 0 40px #fff)' : undefined,
                transitionProperty: 'opacity, transform',
              }}
              loading="lazy"
            />
          ))}
          {/* Dripping paint effect overlay */}
          <div className="absolute top-0 left-0 w-full h-16 sm:h-20 z-20 pointer-events-none">
            <svg width="100%" height="100%" viewBox="0 0 340 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,0 Q40,40 80,20 Q120,0 170,30 Q220,60 260,20 Q300,0 340,40 V80 H0 Z" fill="#fff" fillOpacity="0.18">
                <animate attributeName="d" dur="2.5s" repeatCount="indefinite"
                  values="M0,0 Q40,40 80,20 Q120,0 170,30 Q220,60 260,20 Q300,0 340,40 V80 H0 Z;
                          M0,0 Q40,20 80,40 Q120,60 170,30 Q220,0 260,40 Q300,60 340,20 V80 H0 Z;
                          M0,0 Q40,40 80,20 Q120,0 170,30 Q220,60 260,20 Q300,0 340,40 V80 H0 Z" />
              </path>
            </svg>
          </div>
        </div>
        {/* Panda at the bottom center, painting upward */}
        <div className="relative flex flex-col items-center z-20 mt-[-20px] sm:mt-[-30px] md:mt-[-35px] lg:mt-[-40px]">
          <div className="relative">
            <img
              src="/panda.png"
              alt="Panda painting"
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40 object-contain animate-panda-bounce"
              style={{ filter: 'drop-shadow(0 0 24px #fff)' }}
              loading="lazy"
            />
            {/* Paint roller in panda's hand */}
            <div className="absolute left-1/2 top-8 sm:top-10 -translate-x-1/2 -rotate-12">
              {/* <div className="w-16 h-4 bg-blue-400 rounded-full shadow-md animate-roller-swing" /> */}
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes particle-float {
          0%, 100% { transform: translateY(0) scale(0.8); opacity: 0.6; }
          50% { transform: translateY(-18px) scale(1.1); opacity: 0.9; }
        }
        @keyframes panda-bounce {
          0% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0); }
        }
        .animate-panda-bounce {
          animation: panda-bounce 2.2s cubic-bezier(0.4,0,0.2,1) infinite;
        }
        @keyframes roller-swing {
          0% { transform: rotate(-12deg); }
          50% { transform: rotate(18deg); }
          100% { transform: rotate(-12deg); }
        }
        .animate-roller-swing {
          animation: roller-swing 1.1s cubic-bezier(0.4,0,0.2,1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Animation;
