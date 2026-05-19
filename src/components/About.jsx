import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Terminal } from 'lucide-react';
import profileImg from '../assets/arockia_profile.jpg';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  return (
    <section 
      id="about" 
      className="relative py-28 px-6 overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-spot-blue opacity-15 rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] glow-spot-purple opacity-10 rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex justify-center"
          >
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-white/5 text-xs text-blue-400 font-semibold uppercase tracking-wider">
              <User size={12} />
              About Me
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white"
          >
            Who I Am
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
          />
        </div>

        {/* Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-center items-center gap-6"
          >
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative group w-full max-w-sm"
            >
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-xl group-hover:opacity-40 transition duration-500 animate-pulse"></div>
              
              {/* Glass Profile Card */}
              <div className="relative glass-card rounded-2xl overflow-hidden text-left shadow-2xl">
                {/* Photo container */}
                <div className="relative h-80 overflow-hidden bg-zinc-950">
                  <img
                    src={profileImg}
                    alt="AROCKIA BENISTON V"
                    className="w-full h-full object-cover object-[center_top] group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
                  
                  {/* Floating category badge */}
                  <div className="absolute bottom-4 left-4 glass px-3 py-1 rounded-md border border-white/10 text-[10px] font-mono text-zinc-300">
                    BENISTON.V // PROFILE
                  </div>
                </div>

                {/* Info and statistics */}
                <div className="p-6 space-y-4 bg-zinc-950/40">
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">AROCKIA BENISTON V</h3>
                    <p className="text-xs text-zinc-500 font-mono mt-1">Web Developer</p>
                  </div>

                  <div className="h-[1px] bg-white/5" />

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="flex flex-col p-2.5 bg-white/3 rounded border border-white/5 font-mono">
                      <span className="text-[10px] text-zinc-500">Status</span>
                      <span className="text-zinc-300 font-semibold mt-0.5">College Student</span>
                    </div>
                    <div className="flex flex-col p-2.5 bg-white/3 rounded border border-white/5 font-mono">
                      <span className="text-[10px] text-zinc-500">Academics</span>
                      <span className="text-zinc-300 font-semibold mt-0.5">Hindustan Inst.</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Optional Enhancement: Animated Tag Below Image */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 shadow-[0_0_15px_rgba(59,130,246,0.15)] text-sm font-semibold text-zinc-200 tracking-wide"
            >
              <Terminal size={16} className="text-blue-400" />
              Full Stack Developer
            </motion.div>
          </motion.div>

          {/* Right Column - Narrative Biography */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 text-left space-y-6"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl md:text-3xl font-bold text-white flex items-center gap-2 mb-2"
            >
              <Award className="text-blue-400" size={28} />
              Professional Overview
            </motion.h3>

            <div className="space-y-6">
              <motion.p 
                variants={itemVariants}
                className="text-zinc-300 leading-relaxed text-[15px] md:text-base tracking-wide"
              >
                Hi, I’m Arockia Beniston V, a passionate <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">Web Developer</span> and aspiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold drop-shadow-[0_0_8px_rgba(192,132,252,0.5)]">Full Stack Developer</span> currently pursuing my Bachelor of Engineering in Computer Science and Engineering at Hindustan Institute of Technology.
              </motion.p>

              <motion.p 
                variants={itemVariants}
                className="text-zinc-300 leading-relaxed text-[15px] md:text-base tracking-wide"
              >
                I enjoy building modern, responsive, and user-friendly web applications using technologies like HTML, CSS, JavaScript, <span className="text-blue-400 font-semibold drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]">React</span>, <span className="text-yellow-400 font-semibold drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]">Python</span>, SQL, and Bootstrap. I’m always eager to learn new technologies and improve my development skills through real-world projects and hands-on experience.
              </motion.p>

              <motion.p 
                variants={itemVariants}
                className="text-zinc-300 leading-relaxed text-[15px] md:text-base tracking-wide"
              >
                I have worked on projects like a <span className="text-emerald-400 font-semibold drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]">Smart Crop Recommendation System</span> and completed a Full Stack Development Internship at Gateway Software Solutions, where I gained practical experience in frontend and backend development.
              </motion.p>

              <motion.p 
                variants={itemVariants}
                className="text-zinc-300 leading-relaxed text-[15px] md:text-base tracking-wide"
              >
                My goal is to become a skilled software developer and contribute to impactful projects that solve real-world problems.
              </motion.p>
            </div>

            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4"
            >
              <div className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0 animate-pulse"></span>
                <div>
                  <h4 className="font-semibold text-white text-sm">Interactive Interfaces</h4>
                  <p className="text-xs text-zinc-500 mt-1">Implementing rich layouts and micro-interactions.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0 animate-pulse"></span>
                <div>
                  <h4 className="font-semibold text-white text-sm">Creative Web Apps</h4>
                  <p className="text-xs text-zinc-500 mt-1">Connecting clean architectures with premium designs.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
