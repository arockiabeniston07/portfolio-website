import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, FileCode, Terminal, Cpu, Grid, Database, Award } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

const SKILLS = [
  {
    name: 'HTML5',
    category: 'Frontend',
    icon: Code,
    color: 'from-orange-500 to-red-600',
    glowColor: 'rgba(249, 115, 22, 0.4)',
    borderColor: 'group-hover:border-orange-500/50',
    level: '95%',
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    icon: Layers,
    color: 'from-blue-500 to-indigo-600',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    borderColor: 'group-hover:border-blue-500/50',
    level: '90%',
  },
  {
    name: 'JavaScript',
    category: 'Frontend/Logic',
    icon: FileCode,
    color: 'from-amber-400 to-yellow-500',
    glowColor: 'rgba(245, 158, 11, 0.4)',
    borderColor: 'group-hover:border-amber-400/50',
    level: '85%',
  },
  {
    name: 'React.js',
    category: 'Framework',
    icon: Cpu,
    color: 'from-cyan-400 to-blue-500',
    glowColor: 'rgba(34, 211, 238, 0.4)',
    borderColor: 'group-hover:border-cyan-400/50',
    level: '85%',
  },
  {
    name: 'Bootstrap',
    category: 'Styling Framework',
    icon: Grid,
    color: 'from-purple-500 to-indigo-600',
    glowColor: 'rgba(168, 85, 247, 0.4)',
    borderColor: 'group-hover:border-purple-500/50',
    level: '90%',
  },
  {
    name: 'Python',
    category: 'Backend/AI',
    icon: Terminal,
    color: 'from-sky-500 to-yellow-500',
    glowColor: 'rgba(14, 165, 233, 0.4)',
    borderColor: 'group-hover:border-sky-500/50',
    level: '75%',
  },
  {
    name: 'SQL',
    category: 'Database',
    icon: Database,
    color: 'from-emerald-400 to-teal-600',
    glowColor: 'rgba(16, 185, 129, 0.4)',
    borderColor: 'group-hover:border-emerald-500/50',
    level: '80%',
  },
  {
    name: 'GitHub',
    category: 'Version Control',
    icon: GithubIcon,
    color: 'from-zinc-300 to-zinc-500',
    glowColor: 'rgba(161, 161, 170, 0.4)',
    borderColor: 'group-hover:border-zinc-400/50',
    level: '85%',
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <section 
      id="skills" 
      className="relative py-28 px-6 overflow-hidden"
    >
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] glow-spot-purple opacity-10 rounded-full pointer-events-none z-0" />
      <div className="absolute top-10 left-10 w-[300px] h-[300px] glow-spot-blue opacity-5 rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20 space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex justify-center"
          >
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-white/5 text-xs text-purple-400 font-semibold uppercase tracking-wider">
              <Award size={12} />
              My Abilities
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white font-sans"
          >
            Technical Skillset
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
          />
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {SKILLS.map((skill, index) => {
            const Icon = skill.icon;
            
            // Random floating transition parameters to make them float independently
            const floatingDelay = index * 0.15;
            const floatingDuration = 3 + (index % 3);

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  y: {
                    duration: floatingDuration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: floatingDelay
                  }
                }}
                whileHover={{ 
                  scale: 1.04,
                  rotateX: 3,
                  rotateY: -3,
                  boxShadow: `0 0 25px ${skill.glowColor}`,
                  borderColor: 'rgba(255, 255, 255, 0.2)'
                }}
                className={`group relative glass-card rounded-2xl p-6 text-left flex flex-col justify-between h-48 cursor-pointer border border-white/5 transition-all duration-300 ${skill.borderColor}`}
                style={{ perspective: 1000 }}
              >
                {/* Background glow hover effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${skill.glowColor} 0%, transparent 70%)`
                  }}
                />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    {/* Icon container with spinning rotation & pulse on hover */}
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center text-white shadow-lg shadow-zinc-950/80 group-hover:rotate-[360deg] transition-transform duration-700 ease-out`}>
                      <Icon size={24} className="group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest bg-white/3 px-2 py-0.5 rounded border border-white/5">
                      {skill.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 tracking-wide font-sans">
                    {skill.name}
                  </h3>
                </div>

                {/* Level indicators to represent premium feel */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[10px] font-mono text-zinc-400">
                    <span>Proficiency</span>
                    <span className="text-zinc-200">{skill.level}</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                      className={`h-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
