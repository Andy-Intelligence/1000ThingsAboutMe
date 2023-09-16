// components/ZoomingBackgroundImage.tsx
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import RealSun3 from '@/public/assets/realSun3.png'
import RealMoon4 from '@/public/assets/bg/realMoon4bg.png'

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const ZoomingBackgroundImage2: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create a timeline for the background animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center', // Start the animation when the element enters the center of the viewport
        end: 'bottom center', // End the animation when the element reaches the center of the viewport
        scrub: true, // Smoothly scrub (animate) the backgroundPosition property
      },
    });

    // Define the animation
    tl.to(containerRef.current, {
      backgroundPosition: '200% 0%', // Adjust the final position to your needs
      scale: 1.5, // Zoom in by 1.5 times
      ease: 'none', // Linear ease
    });

    // Ensure the ScrollTrigger updates when the component is unmounted
    return () => {
      tl.kill(); // Kill the ScrollTrigger animation to prevent memory leaks
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className=""
      id="bg1"
      style={{
        // backgroundImage: 'url("/assets/bg/realMoon4bg.png")',
        backgroundImage: 'url("/assets/bg/realMoon4bg.png")',
        backgroundPosition: '-100% 100%', // Initial background position
        backgroundAttachment: 'fixed', // Keep the background image fixed
        backgroundRepeat:"no-repeat",
      }}
    >
      {/* <div className='solarEducationTeacherImage h-[20rem]'>Hello madam ama amdadk</div> */}
      {/* <img className='w-full h-auto' src={RealSun3.src} alt="..."/> */}
      {/* <img className='w-full h-auto' src={RealSun3.src} alt="..."/> */}
    </div>
  );
};

export default ZoomingBackgroundImage2;
