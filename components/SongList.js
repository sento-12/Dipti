"use client"
import React, { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';

const songs = [
  {
    name: 'Haseen',
    title: 'Haseen',
    cover: '/cover/Haseen.jpeg',
    file: '/song/Haseen.mp3',
  },
  {
    name: 'Afsos',
    title: 'Afsos',
    cover: '/cover/Afsos.jpeg',
    file: '/song/Afsos.mp3',
  },
  {
    name: 'FindingHer',
    title: 'Finding Her',
    cover: '/cover/FindingHer.jpeg',
    file: '/song/FindingHer.mp3',
  },
  {
    name: 'Jhol',
    title: 'Jhol',
    cover: '/cover/Jhol.jpeg',
    file: '/song/Jhol.mp3',
  },
  {
    name: 'Paro',
    title: 'Paro',
    cover: '/cover/Paro.jpeg',
    file: '/song/Paro.mp3',
  },
  {
    name: 'BornToShine',
    title: 'Born To Shine',
    cover: '/cover/BornToShine.jpeg',
    file: '/song/BornToShine.mp3',
  }, 
  {
    name: 'Lorlor',
    title: 'Lorlor',
    cover: '/cover/Lorlor.jpeg',
    file: '/song/Lorlor.mp3',
  },
  {
    name: 'Ranjheya',
    title: 'Ranjheya',
    cover: '/cover/Ranjheya.jpeg',
    file: '/song/Ranjheya.mp3',
  },
  {
    name: 'Roots',
    title: 'Roots',
    cover: '/cover/Roots.jpeg',
    file: '/song/Roots.mp3',
  },
  {
    name: 'Russian',
    title: 'Russian',
    cover: '/cover/Russian.jpeg',
    file: '/song/Russian.mp3',
  },
  {
    name: 'Water',
    title: 'Water',
    cover: '/cover/Water.jpeg',
    file: '/song/Water.mp3',
  },
  {
    name: 'Wavy',
    title: 'Wavy',
    cover: '/cover/Wavy.jpeg',
    file: '/song/Wavy.mp3',
  },
];

const lightingColors = [
  '#FFD600', '#FF6F61', '#6EC6FF', '#B388FF', '#69F0AE', '#FF8A65', '#F06292', '#FFF176', '#A7FFEB', '#FFB74D', '#BA68C8', '#81C784'
];

const SongList = ({ pauseSong, resumeSong }) => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);
  const coverRef = useRef(null);
  const lightRef = useRef(null);
  const titleRef = useRef(null);

  // External pause/resume control
  useEffect(() => {
    if (pauseSong && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [pauseSong]);

  useEffect(() => {
    if (resumeSong && audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [resumeSong]);

  // Play/pause logic (internal controls)
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) audioRef.current.play();
      else audioRef.current.pause();
    }
  }, [isPlaying, current]);

  // GSAP animations on song change
  useEffect(() => {
    gsap.fromTo(
      coverRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.7, ease: 'power3.out' }
    );
    gsap.fromTo(
      titleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.1 }
    );
    gsap.fromTo(
      lightRef.current,
      { boxShadow: '0 0 0px 0px ' + lightingColors[current % lightingColors.length] },
      { boxShadow: `0 0 40px 10px ${lightingColors[current % lightingColors.length]}`, duration: 1, repeat: -1, yoyo: true, ease: 'power1.inOut' }
    );
  }, [current]);

  // When song ends, go to next
  const handleEnded = () => {
    setCurrent((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };

  // Controls
  const prevSong = () => {
    setCurrent((prev) => (prev - 1 + songs.length) % songs.length);
    setIsPlaying(true);
  };
  const nextSong = () => {
    setCurrent((prev) => (prev + 1) % songs.length);
    setIsPlaying(true);
  };
  const togglePlay = () => setIsPlaying((p) => !p);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-zinc-900 to-black py-6 sm:py-8 md:py-10 lg:py-12 px-4 relative overflow-hidden">
      {/* Title */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-yellow-300 mb-6 sm:mb-8 tracking-wide text-center select-none drop-shadow-lg">
        song for Dipti 💛
      </h2>
      {/* Song slider */}
      <div className="flex flex-col items-center justify-center w-full max-w-sm sm:max-w-md mx-auto">
        {/* Cover with lighting effect */}
        <div className="relative flex items-center justify-center mb-4 sm:mb-6">
          {/* Lighting effect */}
          <div
            ref={lightRef}
            className="absolute inset-0 rounded-xl sm:rounded-2xl pointer-events-none"
            style={{
              boxShadow: `0 0 40px 10px ${lightingColors[current % lightingColors.length]}`,
              transition: 'box-shadow 0.5s',
              zIndex: 1,
            }}
          />
          {/* Cover image */}
          <img
            ref={coverRef}
            src={songs[current].cover}
            alt={songs[current].title}
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-xl sm:rounded-2xl border-2 sm:border-4 border-white shadow-2xl z-10 select-none"
            draggable={false}
          />
          {/* Prev/Next arrows */}
          <button
            onClick={prevSong}
            className="absolute left-[-36px] sm:left-[-40px] md:left-[-48px] top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-1.5 sm:p-2 text-yellow-300 text-lg sm:text-xl md:text-2xl shadow-lg transition-all"
            aria-label="Previous song"
          >
            &#8592;
          </button>
          <button
            onClick={nextSong}
            className="absolute right-[-36px] sm:right-[-40px] md:right-[-48px] top-1/2 -translate-y-1/2 bg-black bg-opacity-40 hover:bg-opacity-70 rounded-full p-1.5 sm:p-2 text-yellow-300 text-lg sm:text-xl md:text-2xl shadow-lg transition-all"
            aria-label="Next song"
          >
            &#8594;
          </button>
        </div>
        {/* Song title */}
        <div
          ref={titleRef}
          className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 text-center select-none drop-shadow-md px-2"
        >
          {songs[current].title}
        </div>
        {/* Audio controls */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-2 mb-4 sm:mb-6">
          <button
            onClick={prevSong}
            className="bg-zinc-800 hover:bg-yellow-400 hover:text-black text-yellow-300 rounded-full p-2 sm:p-3 text-base sm:text-lg shadow-md transition-all"
            aria-label="Previous"
          >
            &#9198;
          </button>
          <button
            onClick={togglePlay}
            className="bg-yellow-400 hover:bg-yellow-300 text-black rounded-full p-3 sm:p-4 text-xl sm:text-2xl shadow-lg transition-all"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? '❚❚' : '►'}
          </button>
          <button
            onClick={nextSong}
            className="bg-zinc-800 hover:bg-yellow-400 hover:text-black text-yellow-300 rounded-full p-2 sm:p-3 text-base sm:text-lg shadow-md transition-all"
            aria-label="Next"
          >
            &#9197;
          </button>
        </div>
        {/* Audio element */}
        <audio
          ref={audioRef}
          src={songs[current].file}
          autoPlay
          onEnded={handleEnded}
          className="hidden"
        />
      </div>
      {/* Song slider dots */}
      <div className="flex gap-1.5 sm:gap-2 justify-center mt-2 flex-wrap max-w-full px-4">
        {songs.map((song, idx) => (
          <button
            key={song.name}
            onClick={() => { setCurrent(idx); setIsPlaying(true); }}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all border-2 ${idx === current ? 'bg-yellow-300 border-yellow-400 scale-125' : 'bg-zinc-700 border-zinc-500'}`}
            aria-label={`Go to ${song.title}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SongList;