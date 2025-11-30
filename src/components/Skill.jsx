import React, { useRef } from 'react';
import gsap from 'gsap';
import skillsimg from '../assets/skillsimg.png';

const skills = [
  'Php',
  'JavaScript',
  'Python',
  'Node',
  'MongoDB',
  'HTML5',
  'CSS3',
  'React',
  'MySQL',
  'Git,GitHub',
];


export default function SkillCircle() {
  const skillRefs = useRef([]);

  
  const handleHover = () => {
    skillRefs.current.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.3, rotateX: -50, rotateY: 30 },
        {
          opacity: 1,
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          duration: 0.6,
          ease: 'back.out(1.8)',
          delay: i * 0.1,
        }
      );
    });
  };

  const handleLeave = () => {
    skillRefs.current.forEach((el, i) => {
      gsap.to(el, {
        opacity: 0,
        scale: 0,
        rotateX: 40,
        rotateY: -20,
        duration: 0.4,
        ease: 'power2.in',
        delay: i * 0.05,
      });
    });
  };

  return (
    <div>
  
      <h2
        style={{
          textAlign: 'center',
          fontSize: '2.5rem',
          marginBottom: '30px',
          color: 'cyan',
          textShadow: '0 0 12px rgba(0,255,255,0.4)',
        }}
      >
        My Tech Stack
      </h2>

      <div style={styles.wrapper}>
      
        <div style={styles.circle}>
          {skills.map((skill, i) => (
            <div
              key={i}
              className="skill-item"
              ref={(el) => (skillRefs.current[i] = el)}
              style={{
                ...styles.skillItem,
                ...getCirclePosition(i, skills.length, 180),
              }}
            >
              {skill}
            </div>
          ))}
        </div>

     
        <img
          src={skillsimg}
          alt="center"
          style={styles.image}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        />
      </div>
    </div>
  );
}


function getCirclePosition(index, total, radius) {
  const angle = (index / total) * 2 * Math.PI;
  return {
    position: 'absolute',
    left: `${radius * Math.cos(angle)}px`,
    top: `${radius * Math.sin(angle)}px`,
  };
}


const styles = {
  wrapper: {
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  image: {
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0 10px 25px rgba(0,0,0,0.5)',
    cursor: 'pointer',
    zIndex: 10,
  },
  circle: {
    position: 'absolute',
    width: '0px',
    height: '0px',
  },
  skillItem: {
    padding: '15px 16px',
    background: 'rgba(42, 100, 155, 0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: '10px',
    color: '#fff',
    opacity: 0,
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%) scale(0)',
    fontSize: '16px',
    boxShadow: '0 5px 10px rgba(255,255,255,0.2)',
  },
};
