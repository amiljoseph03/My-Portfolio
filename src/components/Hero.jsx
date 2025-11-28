import React, { useRef } from 'react';
import gsap from 'gsap';
import photo2  from '../assets/photo2.jpg'; 

export default function Hero({ onEnter, visible = true }) {
  const rootRef = useRef();

  const handleEnter = async () => {
    // play hero exit animation then call onEnter
    const tl = gsap.timeline({
      defaults: { duration: 0.7, ease: 'power2.inOut' },
    });

    tl.to(rootRef.current, { y: -60, opacity: 0, scale: 0.98 }).to(
      rootRef.current,
      { display: 'none' },
      '>'
    );

    tl.call(() => onEnter && onEnter());
  };

  return (
    <section className="hero" ref={rootRef} aria-hidden={!visible}>
      <div className="hero-left">
        <h1>AMIL JOSEPH</h1>
        <p>Full Stack Developer | MCA Graduate</p>
        <button className="cta-btn" onClick={handleEnter}>
          Know more
        </button>
      </div>

      <div className="hero-right">
        <div className="avatar" role="img" aria-label="Amal Joseph">
          <img
            src={photo2}
            alt="Amal"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}
