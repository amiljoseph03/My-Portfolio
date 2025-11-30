import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../Styles.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,
      {
        opacity: 0,
        rotateX: 60,
        rotateY: -30,
        scale: 0.8,
        y: 80,
      },
      {
        opacity: 1,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        y: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section className="about-section" ref={aboutRef}>
      <div className="about-content">
        <h2 className="about-title">About Me</h2>

        <p className="about-para">
          {/* Hello! I'm <span className="highlight">Amil Joseph</span>,  */}
          I am a
          passionate
          <strong> MERN Stack Developer</strong> who builds clean and
          interactive web apps. I love creating responsive interfaces and
          meaningful user experiences. 
          I enjoy exploring UI design, animations,
          and turning ideas into reality.
        </p>

        {/* <p className="about-para">
          I love creating responsive interfaces and meaningful user experiences.
        </p>

        <p className="about-para">
          I enjoy exploring UI design, animations, and turning ideas into
          reality.
        </p> */}
      </div>
    </section>
  );
}
