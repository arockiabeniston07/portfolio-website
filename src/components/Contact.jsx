import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, ArrowUpRight, MessageCircle } from 'lucide-react';

export default function Contact() {
  const emailAddress = 'arockiabeniston26@gmail.com';
  const whatsappNumber = '7812888729';
  const whatsappUrl = `https://wa.me/91${whatsappNumber}`;
  const mailtoUrl = `mailto:${emailAddress}`;

  return (
    <section 
      id="contact" 
      className="relative py-28 px-6 overflow-hidden bg-zinc-950/20"
    >
      {/* Background glow spots */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] glow-spot-blue opacity-5 rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/3 right-1/10 w-[500px] h-[500px] glow-spot-purple opacity-5 rounded-full pointer-events-none z-0" />

      {/* Floating communication icons in background */}
      <div className="absolute top-1/4 right-1/12 animate-float pointer-events-none opacity-5 text-purple-400 hidden lg:block">
        <MessageSquare size={50} />
      </div>
      <div className="absolute bottom-1/4 left-1/12 animate-float-slow pointer-events-none opacity-5 text-blue-400 hidden lg:block">
        <Mail size={45} />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <span className="flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-white/5 text-xs text-blue-400 font-semibold uppercase tracking-wider">
              <MessageCircle size={12} />
              Connect With Me
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white font-sans"
          >
            Let's Start A Conversation
          </motion.h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto leading-relaxed pt-2"
          >
            Have a project idea, collaboration, or opportunity? Let’s connect and build something amazing together.
          </motion.p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative"
          >
            {/* Pulsing neon green border glow */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-20 blur-lg group-hover:opacity-40 transition duration-500 animate-pulse"></div>
            
            <div className="relative glass-card rounded-2xl p-8 border border-white/5 group-hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between h-[280px]">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10">
                    <MessageSquare size={24} />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400/80 tracking-widest uppercase bg-emerald-500/10 px-2 py-0.5 rounded">
                    Instant Chat
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white tracking-wide">WhatsApp Message</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  Fastest way to get in touch for quick queries, project updates, or a friendly developer chat.
                </p>
                <div className="text-base font-semibold text-zinc-200 font-mono">
                  +91 {whatsappNumber}
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-xs font-bold text-white tracking-widest uppercase transition-all duration-300 shadow-md shadow-emerald-500/20 hover:scale-[1.02] flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Message Me on WhatsApp</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          {/* Gmail Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative"
          >
            {/* Pulsing neon blue/purple border glow */}
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-20 blur-lg group-hover:opacity-40 transition duration-500 animate-pulse"></div>
            
            <div className="relative glass-card rounded-2xl p-8 border border-white/5 group-hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between h-[280px]">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-lg shadow-blue-500/10">
                    <Mail size={24} />
                  </div>
                  <span className="text-[10px] font-mono text-blue-400/80 tracking-widest uppercase bg-blue-500/10 px-2 py-0.5 rounded">
                    Official Mail
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white tracking-wide">Direct Email</h3>
                <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                  Best for formal proposals, internships, collaboration offers, and detailed project discussions.
                </p>
                <div className="text-xs sm:text-sm font-semibold text-zinc-200 font-mono overflow-hidden text-ellipsis">
                  {emailAddress}
                </div>
              </div>

              <a
                href={mailtoUrl}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-xs font-bold text-white tracking-widest uppercase transition-all duration-300 shadow-md shadow-blue-500/20 hover:scale-[1.02] flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Send Mail</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Small Terminal Meta Info */}
        <div className="mt-16 text-center text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          SYSTEM_TRANSMISSION // ACTIVE_CONNECTIVITY_PORTS_ENGAGED // PORTFOLIO_V4.0
        </div>
      </div>
    </section>
  );
}
