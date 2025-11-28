import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef();

  useEffect(() => {
    const el = aboutRef.current;

    // Ensure the content is visible BEFORE animation
    gsap.set(el, { opacity: 1 });

    gsap.fromTo(
      el,
      { opacity: 0, y: 80, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.4,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%', // triggers early so animation always happens
          toggleActions: 'play none none none', // no reverse
          once: true, // play one time only
        },
      }
    );
  }, []);

  return (
    <section className="about" ref={aboutRef}>
      <h2>About Me</h2>
      <p>
        I'm a Full Stack Developer passionate about building clean, modern, and
        interactive web applications using the MERN stack.
      </p>
    </section>
  );
}
