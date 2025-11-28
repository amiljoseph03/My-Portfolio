import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

export default function HoloButton({ label, onClick }) {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    function handleEnter() {
      gsap.to(el, {
        scale: 1.04,
        rotationZ: -1.6,
        duration: 0.26,
        ease: 'power2.out',
      });
    }
    function handleLeave() {
      gsap.to(el, {
        scale: 1,
        rotationZ: 0,
        duration: 0.28,
        ease: 'power2.out',
      });
    }
    el.addEventListener('mouseenter', handleEnter);
    el.addEventListener('mouseleave', handleLeave);
    return () => {
      el.removeEventListener('mouseenter', handleEnter);
      el.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  return (
    <div
      className="holo"
      ref={ref}
      role="button"
      onClick={onClick}
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      {label}
    </div>
  );
}
