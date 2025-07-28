import React from 'react';
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

interface Props {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<Props> = ({ children }) => {
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (hasReducedMotion) {
      return;
    }

    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: isMobile ? 0.8 : 1.5,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: true,
      smoothTouch: isMobile ? 0.2 : 0.1,
    });

    smootherRef.current = smoother;

    smoother.effects('.smooth-effect', { lag: 0.15, speed: 0.8 });

    ScrollTrigger.refresh();

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (smootherRef.current) {
        smootherRef.current.kill();
        smootherRef.current = null;
      }
      
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ScrollTrigger.clearScrollMemory();
    };
  }, []);

  return (
    <div id="smooth-wrapper" className='overflow-hidden h-screen'>
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;