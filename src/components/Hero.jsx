import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowDown, Code, Sparkles, Layers, Cpu, Download, FolderOpen } from 'lucide-react';
import profileImg from '../assets/arockia_profile.jpg';

const ROLES = ["Web Developer", "Full Stack Enthusiast", "React Developer", "College Student"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef(null);

  // Mouse-follow glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    const el = sectionRef.current;
    if (el) el.addEventListener('mousemove', handleMouseMove);
    return () => { if (el) el.removeEventListener('mousemove', handleMouseMove); };
  }, [mouseX, mouseY]);

  // Typewriter
  useEffect(() => {
    let timer;
    const activeRole = ROLES[roleIndex];
    if (isDeleting) {
      timer = setTimeout(() => setCurrentText(prev => prev.slice(0, -1)), 35);
    } else {
      timer = setTimeout(() => setCurrentText(activeRole.slice(0, currentText.length + 1)), 85);
    }
    if (!isDeleting && currentText === activeRole) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex(prev => (prev + 1) % ROLES.length);
    }
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const offsetPosition = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] glow-spot-blue rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] glow-spot-purple rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-indigo-950/10 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Mouse-follow cursor glow */}
      <motion.div
        className="absolute pointer-events-none z-0 rounded-full"
        style={{
          left: springX,
          top: springY,
          x: '-50%',
          y: '-50%',
          width: 350,
          height: 350,
          background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Floating Tech Icons */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-1/12 pointer-events-none opacity-15 text-blue-400 hidden lg:block"
      >
        <Code size={42} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-1/5 right-1/8 pointer-events-none opacity-15 text-purple-400 hidden lg:block"
      >
        <Sparkles size={38} />
      </motion.div>
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-1/3 left-1/6 pointer-events-none opacity-10 text-indigo-400 hidden lg:block"
      >
        <Layers size={46} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 16, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/4 right-1/6 pointer-events-none opacity-10 text-cyan-400 hidden lg:block"
      >
        <Cpu size={40} />
      </motion.div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">

        {/* LEFT — Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-left space-y-7 flex flex-col items-start justify-center"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm font-mono text-blue-400 tracking-[0.25em] uppercase"
          >
            👋 Hello, World! I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans"
          >
            AROCKIA{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              BENISTON V
            </span>
          </motion.h1>

          {/* Typing Role */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-xl sm:text-2xl font-bold font-mono text-zinc-300 min-h-[38px] flex items-center gap-0"
          >
            <span className="text-blue-400 mr-2">&gt;</span>
            <span>{currentText}</span>
            <span className="typing-cursor text-blue-500 font-bold ml-0.5"></span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-sm md:text-base text-zinc-400 max-w-lg leading-relaxed"
          >
            Crafting premium interactive web experiences with Apple-level smoothness. 
            Passionate about building high-performance, beautiful interfaces that users love.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:shadow-[0_0_40px_rgba(59,130,246,0.55)] border border-blue-500/40 transition-all duration-300 hover:scale-105 active:scale-98 flex items-center gap-2 cursor-pointer overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <FolderOpen size={15} />
              View Projects
            </button>
            <a
              href="/Arockia_Beniston_V_Resume_Updated.pdf"
              download="Arockia_Beniston_V_Resume_Updated.pdf"
              className="group px-7 py-3.5 rounded-xl font-semibold text-sm tracking-wide text-zinc-300 hover:text-white glass hover:bg-white/5 border border-white/10 hover:border-indigo-500/40 hover:shadow-[0_0_25px_rgba(99,102,241,0.2)] transition-all duration-300 hover:scale-105 active:scale-98 flex items-center gap-2 cursor-pointer"
            >
              <Download size={15} />
              Download Resume
            </a>
          </motion.div>

          {/* Quick stat pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-3 pt-1"
          >
            {[
              { label: 'React', color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5' },
              { label: 'Python', color: 'text-yellow-400 border-yellow-500/20 bg-yellow-500/5' },
              { label: 'SQL', color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5' },
              { label: 'JavaScript', color: 'text-amber-400 border-amber-500/20 bg-amber-500/5' },
            ].map(t => (
              <span key={t.label} className={`text-[10px] font-mono px-2.5 py-1 rounded-md border ${t.color} tracking-widest uppercase`}>
                {t.label}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT — Premium Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[440px] lg:w-[380px] lg:h-[460px]">

            {/* Outer animated ring glow */}
            <motion.div
              animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.03, 1] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-600 blur-xl"
            />

            {/* Secondary spinning ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute -inset-1 rounded-3xl"
              style={{
                background: 'conic-gradient(from 0deg, transparent 60%, rgba(99,102,241,0.7) 80%, transparent 100%)',
              }}
            />

            {/* Main image container */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={profileImg}
                alt="AROCKIA BENISTON V"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />

              {/* Hover glow overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Name badge on image bottom */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="glass rounded-xl px-4 py-3 border border-white/10 backdrop-blur-md">
                  <p className="text-xs font-mono text-zinc-400 tracking-wider">Web Developer</p>
                  <p className="text-sm font-bold text-white mt-0.5">AROCKIA BENISTON V</p>
                </div>
              </div>
            </motion.div>

            {/* Corner accent dots */}
            <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
            <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
            <div className="absolute top-1/2 -right-5 w-2.5 h-2.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-zinc-300 cursor-pointer flex flex-col items-center gap-1 z-10 hidden sm:flex"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}
