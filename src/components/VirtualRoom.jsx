import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import HoloButton from './Thebutton';
import DetailPanel from './Detail';
import { FaFileDownload } from 'react-icons/fa';

export default function VirtualRoom({
  visible,
  onExit,
  activePanel,
  setActivePanel,
}) {
  const roomRef = useRef();
  const stackRef = useRef();

  useEffect(() => {
    if (!visible) return;
    // entrance animation
    const tl = gsap.timeline();
    // fade in room container
    tl.fromTo(
      roomRef.current,
      { autoAlpha: 0, scale: 0.98 },
      { autoAlpha: 1, scale: 1, duration: 0.8 }
    );
    // animate the floor slightly
    tl.fromTo(
      '.floor',
      { y: 80, scale: 0.98 },
      { y: 0, scale: 1, duration: 0.8 },
      '<'
    );
    // stagger float-in for holo buttons (they float up, tilt, and bounce)
    tl.fromTo(
      stackRef.current.children,
      { y: 140, rotationX: 14, opacity: 0, scale: 0.9 },
      {
        y: 0,
        rotationX: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.12,
        ease: 'elastic.out(1, 0.6)',
      },
      '-=0.2'
    );

    // subtle continuous floating for each button
    gsap.to(stackRef.current.children, {
      y: '+=6',
      repeat: -1,
      yoyo: true,
      duration: 2.8,
      stagger: 0.12,
      ease: 'sine.inOut',
      delay: 0.2,
    });

    return () => {
      gsap.killTweensOf(stackRef.current?.children);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="virtual-room" ref={roomRef}>
      <div style={{ position: 'absolute', left: 24, top: 18 }}>
        <button className="cta-btn" onClick={onExit}>
          Exit Room
        </button>
      </div>

      <div className="room-stage">
        <div className="floor">
          <div className="grid" />
        </div>

        <div className="holo-stack" ref={stackRef} aria-hidden={false}>
          <HoloButton label="About" onClick={() => setActivePanel('about')} />
          <HoloButton label="Skills" onClick={() => setActivePanel('skills')} />
          <HoloButton
            label="Education"
            onClick={() => setActivePanel('education')}
          />
          <HoloButton
            label="Projects"
            onClick={() => setActivePanel('projects')}
          />
        </div>

        {/* detail panel */}
        <DetailPanel
          active={activePanel}
          onClose={() => setActivePanel(null)}
        />
      </div>

      <div style={{ position: 'absolute', right: 28, bottom: 28 }}>
        <a
          href="/src/assets/resume.pdf"
          download
          className="cta-btn"
          style={{ display: 'flex', alignItems: 'center', gap: 8 }}
        >
          <FaFileDownload /> Resume
        </a>
      </div>
    </div>
  );
}
