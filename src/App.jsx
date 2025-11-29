// import React, { useState } from 'react';
// import Hero from './components/Hero';
// import VirtualRoom from './components/VirtualRoom';

// export default function App() {
//   const [inRoom, setInRoom] = useState(false);
//   const [activePanel, setActivePanel] = useState(null); // "about" | "skills" | "education" | "projects" | null

//   return (
//     <div className="app-root">
//       <Hero onEnter={() => setInRoom(true)} visible={!inRoom} />
//       <VirtualRoom
//         visible={inRoom}
//         onExit={() => {
//           setInRoom(false);
//           setActivePanel(null);
//         }}
//         activePanel={activePanel}
//         setActivePanel={setActivePanel}
//       />
//     </div>
//   );
// }

import Hero from './components/Hero';
import About from './components/About';
import Skill from './components/Skill'
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';



export default function App() {
  return (
    <>
      <Hero />
      <About />
      <Experience/>
      <Education/>
      <Projects />
    </>
  );
}
