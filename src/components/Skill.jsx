import React, { useRef } from 'react';
import gsap from 'gsap';
import skill from '../assets/skill.jpg';

import php from '../assets/skills/php.jpg';
import js from '../assets/skills/js.jpg';
import python from '../assets/skills/python.jpg';
import node from '../assets/skills/node.jpg';
import mongo from '../assets/skills/mongo.jpg';
import html from '../assets/skills/html.jpg';
import css from '../assets/skills/css.jpg';
import react from '../assets/skills/react.jpg';
import mysql from '../assets/skills/mysql.jpg';
import git from '../assets/skills/git.jpg';


const skills = [
  { name: 'PHP', icon: php },

  { name: 'Python', icon: python },
  { name: 'MySQL', icon: mysql },

  { name: 'MongoDB', icon: mongo },
  { name: 'HTML5', icon: html },
  { name: 'CSS3', icon: css },
  { name: 'Node', icon: node },
  { name: 'React', icon: react },
  
  { name: 'JavaScript', icon: js },
  { name: 'GitHub', icon: git },
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
              ref={(el) => (skillRefs.current[i] = el)}
              style={{
                ...styles.skillItem,
                ...getCirclePosition(i, skills.length, 180),
              }}
            >
              <img src={skill.icon} alt={skill.name} style={styles.logo} />
              <span style={styles.skillName}>{skill.name}</span>
            </div>
          ))}
        </div>

        <img
          src={skill}
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
    minWidth: '95px',
    padding: '12px 10px',
    background: 'rgba(42, 100, 155, 0.15)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    display: 'flex',
    flexDirection: 'column', // 👈 vertical layout
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    opacity: 0,
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%) scale(0)',
    boxShadow: '0 5px 10px rgba(255,255,255,0.2)',
  },

  logo: {
    width: '42px',
    height: '42px',
    objectFit: 'contain',
    filter: 'drop-shadow(0 0 8px rgba(0,255,255,0.6))',
  },
  skillName: {
    color: '#fff',
    fontSize: '13px',
    fontWeight: '500',
    textAlign: 'center',
    whiteSpace: 'nowrap',
  },
};
