import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import BackgroundGlow from './components/BackgroundGlow';
import Particles from './components/Particles';

function App() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden font-sans selection:bg-blue-500/30 selection:text-white">
      {/* Background visual components */}
      <BackgroundGlow />
      <Particles />
      {/* Technology grid blueprint line pattern */}
      <div className="fixed inset-0 tech-grid opacity-30 pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Resume />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
