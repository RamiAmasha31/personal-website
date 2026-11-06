import React from "react";
import useScrollReveal from "../hooks/useScrollReveal";

// Fades and slides its content in the first time it scrolls into view.
export const Reveal = ({ className = "", delay = 0, children }) => {
  const [ref, isVisible] = useScrollReveal({ threshold: 0.05 });

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "active" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
};

export const SectionHeader = ({ index, eyebrow, title, accent, description }) => (
  <Reveal className="mb-14 md:mb-16 max-w-3xl">
    <p className="eyebrow mb-5">
      <span className="text-slate-400">{index} /</span> {eyebrow}
    </p>
    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
      {title} <span className="accent">{accent}</span>
    </h2>
    {description && (
      <p className="mt-5 text-lg leading-relaxed text-slate-400">{description}</p>
    )}
  </Reveal>
);

// Glass card. Tracks the cursor so the glow and border follow it (see .card in index.css).
export const Card = ({ className = "", children }) => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div onMouseMove={handleMouseMove} className={`card ${className}`}>
      {children}
    </div>
  );
};
