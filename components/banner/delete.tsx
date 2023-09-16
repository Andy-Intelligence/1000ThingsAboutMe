"use client"
// components/ScrollTriggerImage.tsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerImage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.to(containerRef.current,{
      scrollTrigger:{
        trigger: containerRef.current,
        toggleActions:"restart pause reverse pause",
        scrub:true
    },
        x: 400, // Start the animation when the element enters the center of the viewport
        rotation: 360, // End the animation when the element reaches the center of the viewport
        duration: 3, // Smoothly scrub (animate) the backgroundPosition property
      
    });

    // Animate the background position
    // tl.to(containerRef.current, {
    //   backgroundPosition: '50% 100%', // Adjust as needed
    // });

    // Ensure the ScrollTrigger updates when the component is unmounted
    return () => {
      tl.kill(); // Kill the ScrollTrigger animation to prevent memory leaks
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="solarEducationTeacherImage"
      style={{
        backgroundImage: 'url("/assets/realSun3.png")',
        backgroundPosition: '50% 0%', // Initial background position
      }}
    >
      <div className='solarEducationTeacherImage h-[20rem] text-black'>Mad Man thhs jsnfknsk fksm fs,mfsk nvsknknf sk</div>
    </div>
  );
};

export default ScrollTriggerImage;
