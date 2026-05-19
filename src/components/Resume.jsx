import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';

export default function Resume() {
  return (
    <section 
      id="resume" 
      className="relative py-20 px-6 overflow-hidden border-t border-white/5 bg-zinc-950/20"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] glow-spot-blue opacity-5 rounded-full pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
        
        {/* Header */}
        <div className="space-y-3">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-white/5 text-xs text-blue-400 font-semibold uppercase tracking-wider">
              <FileText size={12} />
              Credentials
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold tracking-tight text-white"
          >
            Download My Resume
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto"
          >
            Get a comprehensive overview of my experience, coursework, technical capabilities, and project parameters.
          </motion.p>
        </div>

        {/* Action Button Area */}
        <div className="flex flex-col items-center justify-center">
          <div className="relative group">
            {/* Glowing Ring */}
            <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-25 blur group-hover:opacity-40 transition duration-300"></div>
            
            <a
              href="/Arockia_Beniston_V_Resume.pdf"
              download="Arockia_Beniston_V_Resume.pdf"
              className="relative px-8 py-4 bg-zinc-900 border border-white/10 hover:border-indigo-500/40 text-white rounded-lg font-semibold tracking-wider text-xs md:text-sm flex items-center gap-3 select-none transition-all duration-300 cursor-pointer min-w-[240px] justify-center overflow-hidden hover:scale-105 active:scale-98 hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]"
            >
              <Download size={16} />
              DOWNLOAD RESUME
            </a>
          </div>
          
          <span className="text-[10px] font-mono text-zinc-500 mt-4 uppercase tracking-widest">
            AROCKIA_BENISTON_V_RESUME.PDF // 177 KB
          </span>
        </div>
      </div>
    </section>
  );
}

