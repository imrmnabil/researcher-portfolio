'use client'
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const MyAnimationComponent: React.FC = () => {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    // Initialize the timeline
    const timeline = gsap.timeline({ paused: true });
    timeline.to(".box", { x: 300, duration: 2 })
            .to(".box", { y: 200, duration: 2 });

    timelineRef.current = timeline;

    // Start the timeline on mount
    timeline.play();
  }, []);

  const togglePlayPause = () => {
    if (!timelineRef.current) return;

    if (isPlaying) {
      timelineRef.current.pause();
    } else {
      timelineRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <div className="box" style={{ width: 100, height: 100, backgroundColor: 'blue' }}></div>
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default MyAnimationComponent;
