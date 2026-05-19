import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, ExternalLink, Sparkles, X, CheckCircle, Database } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import smartCropImg from '../assets/smart_crop_mockup.png';

export default function Projects() {
  const [showDemo, setShowDemo] = useState(false);
  
  // Interactive Simulation State
  const [nitrogen, setNitrogen] = useState(50);
  const [phosphorus, setPhosphorus] = useState(50);
  const [potassium, setPotassium] = useState(50);
  const [ph, setPh] = useState(6.5);
  const [recommendation, setRecommendation] = useState('');
  const [calculating, setCalculating] = useState(false);

  const handleSimulate = (e) => {
    e.preventDefault();
    setCalculating(true);
    setRecommendation('');

    setTimeout(() => {
      // Simple mockup heuristic recommendation
      let crop = 'Maize';
      if (nitrogen > 70 && potassium > 60) {
        crop = 'Rice';
      } else if (ph < 5.5) {
        crop = 'Tea or Potatoes';
      } else if (ph > 7.5) {
        crop = 'Barley or Mustard';
      } else if (potassium > 80) {
        crop = 'Grapes or Banana';
      } else if (nitrogen < 30) {
        crop = 'Groundnuts or Peas';
      } else if (phosphorus > 70) {
        crop = 'Cotton';
      }
      
      setRecommendation(crop);
      setCalculating(false);
    }, 1200);
  };

  return (
    <section 
      id="projects" 
      className="relative py-28 px-6 overflow-hidden"
    >
      <div className="absolute top-1/3 left-1/10 w-[500px] h-[500px] glow-spot-blue opacity-5 rounded-full pointer-events-none z-0" />

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
              <FolderGit2 size={12} />
              Portfolio
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-white"
          >
            Featured Project
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: '60px' }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
          />
        </div>

        {/* Featured Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Project Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="relative group rounded-xl overflow-hidden glass border border-white/10 shadow-2xl">
              {/* Image with overlay and zoom effect */}
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={smartCropImg} 
                  alt="Smart Crop Recommendation System mockup" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Dashboard Indicators */}
              <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-lg border border-white/10 flex items-center gap-1.5 text-[10px] font-mono text-zinc-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                AI Core Online
              </div>
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 order-1 lg:order-2 text-left space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 uppercase">
                Featured Case Study
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                Smart Crop Recommendation System
              </h3>
            </div>

            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              An intelligent machine-learning framework designed to analyze soil parameters (Nitrogen, Phosphorus, Potassium, pH) along with seasonal weather conditions to recommend the highest yielding crop for farmers.
            </p>

            {/* Feature checklist */}
            <ul className="space-y-2.5 font-sans text-xs md:text-sm text-zinc-300">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-blue-500 shrink-0" />
                <span>Multi-parameter classification (N-P-K, pH, Humidity)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-blue-500 shrink-0" />
                <span>High accuracy predictive algorithm for regional crops</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-blue-500 shrink-0" />
                <span>Modern interactive dashboard for telemetry metrics</span>
              </li>
            </ul>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['React.js', 'Python', 'Machine Learning', 'SQL', 'Tailwind CSS'].map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 rounded bg-zinc-900 border border-white/5 text-[10px] font-mono font-medium text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-4 pt-3">
              <a
                href="https://github.com/arockiabeniston07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-white/20 text-xs font-semibold text-white tracking-wide transition-all"
              >
                <GithubIcon size={16} />
                GitHub Project
              </a>
              <button
                onClick={() => setShowDemo(true)}
                className="flex items-center gap-2 px-5 py-2.5 rounded bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-xs font-semibold text-white tracking-wide shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 hover:scale-102 transition-all cursor-pointer"
              >
                <ExternalLink size={14} />
                Live Demo Simulator
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Live Demo Simulation Overlay Modal */}
      <AnimatePresence>
        {showDemo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative glass rounded-xl w-full max-w-lg overflow-hidden border border-white/15 p-6 md:p-8"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setShowDemo(false);
                  setRecommendation('');
                }}
                className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X size={18} />
              </button>

              <div className="flex items-center gap-2 mb-6">
                <Sparkles size={20} className="text-yellow-400" />
                <h4 className="text-lg font-bold text-white">Smart Crop Simulator</h4>
              </div>

              <form onSubmit={handleSimulate} className="space-y-5 text-left">
                {/* Nitrogen */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono text-zinc-300">
                    <span>Nitrogen (N)</span>
                    <span>{nitrogen} mg/kg</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="120"
                    value={nitrogen}
                    onChange={(e) => setNitrogen(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer h-1 bg-white/10 rounded-full appearance-none"
                  />
                </div>

                {/* Phosphorus */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono text-zinc-300">
                    <span>Phosphorus (P)</span>
                    <span>{phosphorus} mg/kg</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={phosphorus}
                    onChange={(e) => setPhosphorus(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer h-1 bg-white/10 rounded-full appearance-none"
                  />
                </div>

                {/* Potassium */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono text-zinc-300">
                    <span>Potassium (K)</span>
                    <span>{potassium} mg/kg</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={potassium}
                    onChange={(e) => setPotassium(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer h-1 bg-white/10 rounded-full appearance-none"
                  />
                </div>

                {/* pH */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs font-mono text-zinc-300">
                    <span>Soil pH</span>
                    <span>{ph}</span>
                  </div>
                  <input
                    type="range"
                    min="4"
                    max="9"
                    step="0.1"
                    value={ph}
                    onChange={(e) => setPh(Number(e.target.value))}
                    className="w-full accent-blue-500 cursor-pointer h-1 bg-white/10 rounded-full appearance-none"
                  />
                </div>

                {/* Submit Simulator */}
                <button
                  type="submit"
                  disabled={calculating}
                  className="w-full py-3 rounded bg-blue-600 hover:bg-blue-500 font-semibold text-sm text-white tracking-wide transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  {calculating ? 'Analyzing Soil Signature...' : 'Run Prediction Model'}
                </button>
              </form>

              {/* Recommendation Output Box */}
              {recommendation && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 rounded bg-emerald-500/10 border border-emerald-500/20 text-center"
                >
                  <div className="text-[10px] uppercase font-mono tracking-widest text-emerald-400 mb-1">
                    Recommended Crop
                  </div>
                  <div className="text-xl font-bold text-emerald-300 flex items-center justify-center gap-1.5 uppercase font-sans">
                    <Database size={18} />
                    {recommendation}
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
