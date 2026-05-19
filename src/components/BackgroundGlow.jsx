import React, { useEffect, useState } from 'react';

export default function BackgroundGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frameId;
    const handleMouseMove = (e) => {
      frameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 hidden md:block"
      style={{
        background: `radial-gradient(700px circle at ${mousePos.x}px ${mousePos.y}px, rgba(59, 130, 246, 0.06), rgba(168, 85, 247, 0.04) 50%, transparent 100%)`,
      }}
    />
  );
}
