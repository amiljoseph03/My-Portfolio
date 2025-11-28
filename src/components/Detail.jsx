import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const content = {
  about: {
    title: 'About Me',
    body: 'I am Amil — I build web apps, focus on clean code and great UX. Passionate about React, Node, and ML.',
  },
  skills: {
    title: 'Skills',
    body: 'Frontend (React, HTML, CSS), Backend (Node, Express), Databases (MySQL, MongoDB), DevOps basics.',
  },
  education: {
    title: 'Education',
    body: 'MCA — XYZ University. Relevant coursework: Data Structures, Web Systems.',
  },
  projects: {
    title: 'Projects',
    body: 'Project A: E-commerce. Project B: Heart disease predictor. (Links & case studies inside project modal).',
  },
};

export default function DetailPanel({ active, onClose }) {
  const panelRef = useRef();

  useEffect(() => {
    if (active) {
      gsap.fromTo(
        panelRef.current,
        { autoAlpha: 0, x: 40, scale: 0.98 },
        { autoAlpha: 1, x: 0, scale: 1, duration: 0.45, ease: 'power2.out' }
      );
    } else {
      gsap.to(panelRef.current, {
        autoAlpha: 0,
        x: 20,
        duration: 0.35,
        ease: 'power1.in',
      });
    }
  }, [active]);

  if (!active) return null;

  const item = content[active];

  return (
    <aside className="detail-panel" ref={panelRef} aria-live="polite">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 12,
        }}
      >
        <h3 style={{ margin: 0 }}>{item.title}</h3>
        <button
          className="cta-btn"
          onClick={onClose}
          style={{ padding: '6px 10px', fontSize: 14 }}
        >
          Close
        </button>
      </div>
      <p style={{ opacity: 0.9, lineHeight: 1.45 }}>{item.body}</p>
      {/* Optional: detailed lists, links, sample cards */}
    </aside>
  );
}
