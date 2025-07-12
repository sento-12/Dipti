"use client"

import Card from "@/components/Card";
import Canva from "@/components/Canva"
import Intro from "@/components/Intro"
import SongList from "@/components/SongList"
import GiftVideo from "@/components/GiftVideo"
import Animation from "@/components/Animation"
import React, { useRef, useEffect, useState } from "react";
import { useThree } from '@react-three/fiber';

export default function Home() {
  const [giftActive, setGiftActive] = useState(false);
  const [pauseSong, setPauseSong] = useState(false);
  const [resumeSong, setResumeSong] = useState(false);
  const giftRef = useRef(null);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setGiftActive(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );
    if (giftRef.current) observer.observe(giftRef.current);
    return () => {
      if (giftRef.current) observer.unobserve(giftRef.current);
    };
  }, []);

  useEffect(() => {
    return () => {
      // Dispose of any Three.js resources, stop animation loops, etc.
    };
  }, []);

  // Handlers for pausing/resuming song
  const handlePauseSong = () => {
    setPauseSong(true);
    setResumeSong(false);
  };
  const handleResumeSong = () => {
    setPauseSong(false);
    setResumeSong(true);
    setTimeout(() => setResumeSong(false), 500); // reset resume trigger
  };

  return (
    <>
      <Intro />
      <SongList pauseSong={pauseSong} resumeSong={resumeSong} />
      <Animation />
      {!videoPlaying && <Canva />}
      <Card />
      <div id="gift-video-section" ref={giftRef} className="relative min-h-screen w-full">
        <GiftVideo
          active={giftActive}
          onPauseSong={handlePauseSong}
          onResumeSong={handleResumeSong}
          onVideoPlay={() => setVideoPlaying(true)}
          onVideoEnd={() => setVideoPlaying(false)}
        />
      </div>
    </>
  );
}
