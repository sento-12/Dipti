"use client"
import React, { useEffect, useRef, useState } from 'react';

const GiftVideo = ({ active, onPauseSong, onResumeSong, onVideoPlay, onVideoEnd }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  // Preload video for instant playback
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = '/video/Dipti.mp4';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  // Play video and pause song
  const handlePlay = () => {
    setShowVideo(true);
    setVideoEnded(false);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
        if (onVideoPlay) onVideoPlay();
      }
      if (onPauseSong) onPauseSong();
    }, 200);
  };

  // On video end, fade out, resume song
  const handleVideoEnd = () => {
    setTimeout(() => {
      setVideoEnded(true);
      if (onResumeSong) onResumeSong();
      if (onVideoEnd) onVideoEnd();
    }, 400);
  };

  // Replay video
  const handleReplay = () => {
    setShowVideo(true);
    setVideoEnded(false);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }
      if (onPauseSong) onPauseSong();
      if (onVideoPlay) onVideoPlay();
    }, 200);
  };

  if (!active) return <div style={{ minHeight: '100vh', width: '100%' }} />;

  return (
    <div className="fixed inset-0 w-full h-full z-[9999] bg-black flex items-center justify-center overflow-hidden">
      {/* Play button overlay */}
      {!showVideo && !videoEnded && (
        <div className="absolute inset-0 flex items-center justify-center z-20 transition-all duration-500 px-4">
          <button
            onClick={handlePlay}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full flex items-center justify-center bg-gradient-to-br from-pink-400 via-yellow-200 to-yellow-400 shadow-2xl border-2 sm:border-4 border-white focus:outline-none focus:ring-4 focus:ring-pink-200 transition-all duration-300 animate-pulse relative scale-100 hover:scale-105"
            aria-label="Play Gift Video"
            style={{ transition: 'transform 0.3s, box-shadow 0.3s' }}
          >
            <svg width="40" height="40" viewBox="0 0 60 60" fill="none" className="sm:w-[50px] sm:h-[50px] md:w-[55px] md:h-[55px] lg:w-[60px] lg:h-[60px]">
              <circle cx="30" cy="30" r="28" fill="white" fillOpacity="0.15" />
              <polygon points="25,20 45,30 25,40" fill="#ff69b4" filter="drop-shadow(0 0 8px #ffd700)" />
            </svg>
          </button>
        </div>
      )}
      {/* Video player */}
      {showVideo && !videoEnded && (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-black z-50 transition-all duration-700 px-2 sm:px-4">
          <video
            ref={videoRef}
            src="/video/Dipti.mp4"
            className="w-full h-full object-contain bg-black transition-all duration-700 opacity-100 scale-100 rounded-lg sm:rounded-xl"
            style={{ maxHeight: '100vh', maxWidth: '100vw', transition: 'opacity 0.7s, transform 0.7s' }}
            autoPlay
            controls={false}
            onEnded={handleVideoEnd}
            onContextMenu={e => e.preventDefault()}
            tabIndex={-1}
          />
        </div>
      )}
      {/* Fade out overlay after video ends, show Replay button */}
      {videoEnded && (
        <div className="fixed inset-0 w-full h-full bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 transition-all duration-700 px-4">
          <button
            onClick={handleReplay}
            className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-br from-pink-400 via-yellow-200 to-yellow-400 text-black font-bold text-lg sm:text-xl shadow-xl border-2 border-white hover:scale-105 transition-all duration-300 animate-pulse"
          >
            Replay Video
          </button>
        </div>
      )}
    </div>
  );
};

export default GiftVideo;