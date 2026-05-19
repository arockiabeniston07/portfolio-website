import React, { useEffect, useState } from 'react';

const CODE_LINES = [
  'const developer = {',
  '  name: "AROCKIA BENISTON V",',
  '  role: "Web Developer",',
  '  status: "College Student",',
  '  focus: "Full Stack & Premium UI",',
  '  skills: ["HTML", "CSS", "JS", "React", "Python", "SQL"],',
  '  coffeeIn: true,',
  '  codeOut: "Stunning Web Apps"',
  '};'
];

export default function TerminalMock() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    // Initial system logs before typing code
    const bootLogs = [
      'system_init --status=active',
      'loading UI engine: react, tailwind, framer-motion...',
      'connecting database... SUCCESS',
      'port 5173 initialized. starting dev server...',
      '> dev server running at: http://localhost:5173/',
      '> loading developer_profile...'
    ];

    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < bootLogs.length) {
        setLines(prev => [...prev, { text: bootLogs[logIndex], type: 'log' }]);
        logIndex++;
      } else {
        clearInterval(logInterval);
        // Add prompt
        setLines(prev => [...prev, { text: 'beniston@portfolio:~$ cat profile.js', type: 'prompt' }]);
        
        // Start typing code block after boot
        setTimeout(() => {
          setLines(prev => [...prev, { text: '', type: 'code' }]);
          startTypingCode();
        }, 600);
      }
    }, 400);

    return () => clearInterval(logInterval);
  }, []);

  const startTypingCode = () => {
    let lineIdx = 0;
    let charIdx = 0;
    let typedLines = [];

    const typeChar = () => {
      if (lineIdx < CODE_LINES.length) {
        const fullLine = CODE_LINES[lineIdx];
        if (charIdx < fullLine.length) {
          const char = fullLine[charIdx];
          setLines(prev => {
            const updated = [...prev];
            const codeIndex = updated.findIndex(l => l.type === 'code');
            if (codeIndex !== -1) {
              const textArray = [...typedLines];
              textArray[lineIdx] = (textArray[lineIdx] || '') + char;
              updated[codeIndex] = {
                text: textArray.join('\n'),
                type: 'code'
              };
            }
            return updated;
          });
          charIdx++;
          setTimeout(typeChar, 25);
        } else {
          // Finished line, advance to next
          typedLines.push(fullLine);
          lineIdx++;
          charIdx = 0;
          setTimeout(typeChar, 80);
        }
      }
    };

    typeChar();
  };

  return (
    <div className="glass rounded-xl overflow-hidden shadow-2xl border border-white/10 w-full font-mono text-xs md:text-sm text-zinc-300">
      {/* Terminal Title Bar */}
      <div className="bg-zinc-900/80 px-4 py-3 flex items-center justify-between border-b border-white/5">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-zinc-500 text-[10px] md:text-xs">profile.js — bash</div>
        <div className="w-12"></div> {/* Spacer for symmetry */}
      </div>

      {/* Terminal Content Screen */}
      <div className="p-4 md:p-6 bg-zinc-950/70 h-72 md:h-80 overflow-y-auto text-left leading-relaxed">
        {lines.map((line, index) => {
          if (line.type === 'log') {
            return (
              <div key={index} className="text-zinc-500 mb-1">
                {line.text}
              </div>
            );
          }
          if (line.type === 'prompt') {
            return (
              <div key={index} className="text-emerald-400 font-semibold mt-2 mb-1">
                {line.text}
              </div>
            );
          }
          if (line.type === 'code') {
            return (
              <pre key={index} className="text-blue-400 overflow-x-auto selection:bg-blue-500/30">
                <code>{line.text}</code>
                <span className="typing-cursor font-bold text-blue-500 ml-[1px]"></span>
              </pre>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
