"use client";
import React, { useState } from "react";

const NAVY = "#0f172a";
const ORANGE = "#fd9783";
const PINK = "#FFB7E1";
const OFFWHITE = "#F8F9FB";

// Top underline SVG
function CurvedUnderline({ color, width = "70%" }) {
  return (
    <svg
      viewBox="0 0 320 32"
      width={width}
      height="32"
      className="mx-auto mt-2 mb-6"
      style={{ display: "block" }}
    >
      <path
        d="M20 20 Q160 38 300 12"
        stroke={color}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        style={{ transition: 'stroke 220ms ease' }}
      />
    </svg>
  );
}
// Main CTA underline SVG (longer)
function CurvedUnderlineLong({ color }) {
  return (
    <svg
      viewBox="0 0 420 36"
      width="92%"
      height="36"
      className="mx-auto mt-2 mb-8"
      style={{ display: "block" }}
    >
      <path
        d="M30 28 Q210 48 390 16"
        stroke={color}
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
        style={{ transition: 'stroke 220ms ease' }}
      />
    </svg>
  );
}
// Doodle SVGs
function FilmReelDoodle() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <circle cx="28" cy="28" r="20" stroke="#111" strokeWidth="3.5" fill="#F8F9FB" />
      <rect x="18" y="18" width="20" height="20" rx="5" stroke="#111" strokeWidth="3" fill="#E6F0FA" />
      <circle cx="28" cy="28" r="3" fill="#111" />
      <circle cx="23" cy="23" r="2" fill="#B8E3D8" />
      <circle cx="33" cy="33" r="2" fill="#fd9783" />
    </svg>
  );
}
function PencilDoodle() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
      <rect x="14" y="36" width="28" height="6" rx="2" fill="#B8E3D8" stroke="#111" strokeWidth="2.5" />
      <rect x="24" y="12" width="8" height="24" rx="3" fill="#E6F0FA" stroke="#111" strokeWidth="2.5" />
      <polygon points="28,8 32,12 24,12" fill="#fd9783" stroke="#111" strokeWidth="2" />
    </svg>
  );
}
// Sparkle doodle
function Sparkle({ className = "" }) {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className={className}>
      <path d="M16 4 L18 14 L28 16 L18 18 L16 28 L14 18 L4 16 L14 14 Z" stroke="#fd9783" strokeWidth="2.2" fill="#fff" />
    </svg>
  );
}
// Illustration SVG (typewriter + paper)
function TypewriterIllustration({ className = "" }) {
  return (
    <svg width="220" height="180" viewBox="0 0 220 180" fill="none" className={className}>
      <rect x="30" y="80" width="160" height="60" rx="16" fill="#fff" stroke="#111" strokeWidth="4" />
      <rect x="60" y="40" width="100" height="40" rx="8" fill="#E6F0FA" stroke="#111" strokeWidth="4" />
      <rect x="90" y="120" width="40" height="12" rx="4" fill="#B8E3D8" stroke="#111" strokeWidth="2.5" />
      <rect x="100" y="52" width="20" height="8" rx="2" fill="#fff" stroke="#111" strokeWidth="2" />
      <circle cx="60" cy="140" r="6" fill="#fd9783" stroke="#111" strokeWidth="2" />
      <circle cx="160" cy="140" r="6" fill="#fd9783" stroke="#111" strokeWidth="2" />
      <rect x="110" y="32" width="20" height="12" rx="2" fill="#fff" stroke="#111" strokeWidth="2" />
      <rect x="90" y="32" width="20" height="12" rx="2" fill="#fff" stroke="#111" strokeWidth="2" />
      <rect x="70" y="32" width="20" height="12" rx="2" fill="#fff" stroke="#111" strokeWidth="2" />
      <rect x="130" y="32" width="20" height="12" rx="2" fill="#fff" stroke="#111" strokeWidth="2" />
    </svg>
  );
}

export default function GhostwritingFinalCTASection() {
  // Top headline/underline hover
  const [topHover, setTopHover] = useState(false);
  return (
    <section className="w-full bg-[#F8F9FB] py-24 md:py-32 relative overflow-hidden">
      {/* Floating doodles */}
      <div className="hidden md:block absolute left-0 top-16 z-0">
        <FilmReelDoodle />
      </div>
      <div className="hidden md:block absolute right-0 top-24 z-0">
        <PencilDoodle />
      </div>
      <div className="max-w-6xl mx-auto px-4 flex flex-col gap-20 relative z-10">
        {/* BLOCK 1: Top CTA */}
        <div className="flex flex-col items-center text-center">
          <div
            className="w-full flex flex-col items-center"
            onMouseEnter={() => setTopHover(true)}
            onMouseLeave={() => setTopHover(false)}
          >
            <h2
              className="text-3xl md:text-5xl font-black leading-tight mb-0"
              style={{ color: topHover ? ORANGE : NAVY, transition: 'color 220ms ease', fontWeight: 900 }}
            >
              For Authors Ready to<br />Finish Their Manuscript
            </h2>
            <CurvedUnderline color={topHover ? ORANGE : NAVY} />
          </div>
          <p className="text-lg md:text-xl text-[#232B38] font-medium max-w-2xl mx-auto mb-7 mt-1">
            Whether you have notes, voice memos, or a rough draft, we help you turn it into a finished manuscript—clear structure, clean chapters, and your voice intact.
          </p>
          <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
            <button
              className="w-full py-3 px-6 rounded-2xl font-bold text-lg border-[3px] border-black bg-[#fd9783] text-white shadow-[3px_3px_0_#000] transition-all duration-200 ease-in-out hover:bg-[#0f172a] hover:text-white hover:-translate-y-1 hover:shadow-[6px_6px_0_#000]"
              type="button"
            >
              Submit Your Idea
            </button>
            <button
              className="w-full py-3 px-6 rounded-2xl font-bold text-lg border-[3px] border-black bg-[#0f172a] text-white shadow-[3px_3px_0_#000] transition-all duration-200 ease-in-out hover:bg-[#fd9783] hover:text-[#0f172a] hover:-translate-y-1 hover:shadow-[6px_6px_0_#000]"
              type="button"
            >
              Connect with a Ghostwriting Lead
            </button>
          </div>
        </div>
        {/* BLOCK 2: Main CTA */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-black leading-tight mb-0" style={{ color: NAVY, fontWeight: 900 }}>
            Every Great Book Begins With A<br />Story. Let’s Shape Yours<br />Into A Finished Manuscript.
          </h2>
          <CurvedUnderlineLong color={NAVY} />
          {/* Featured Card */}
          <div
            className="relative w-full flex flex-col md:flex-row items-stretch justify-center mt-2 animate-breathe group"
            style={{ animation: 'breathe 6s ease-in-out infinite' }}
          >
            {/* Sparkles */}
            <Sparkle className="absolute left-4 top-4 animate-bob1" />
            <Sparkle className="absolute right-8 top-2 animate-bob2" />
            <Sparkle className="absolute left-10 bottom-6 animate-bob3" />
            {/* Card */}
            <div
              className="flex-1 min-w-[260px] bg-[#fd9783] border-[3px] border-black rounded-3xl shadow-[3px_3px_0_#000] flex flex-col justify-between p-8 md:p-12 items-start text-left transition-all duration-200 ease-in-out group-hover:-translate-y-1 group-hover:shadow-[6px_6px_0_#000]"
              style={{ zIndex: 1 }}
            >
              <div>
                <div className="text-2xl md:text-3xl font-black mb-2" style={{ color: NAVY }}>
                  Take the leap.
                </div>
                <div className="text-lg md:text-xl font-bold mb-3" style={{ color: NAVY }}>
                  Your story deserves to be<br />Written & Finished!
                </div>
                <div className="text-base md:text-lg text-[#232B38] font-medium mb-6">
                  Take the first step toward a complete draft.<br />We’ll guide the process from outline to final pages.
                </div>
              </div>
              <button
                className="mt-2 py-3 px-6 rounded-2xl font-bold text-lg border-[3px] border-black bg-white text-[#111] shadow-[3px_3px_0_#000] transition-all duration-200 ease-in-out hover:bg-[#fd9783] hover:text-[#0f172a] hover:-translate-y-1 hover:shadow-[6px_6px_0_#000]"
                type="button"
              >
                Connect with a Ghostwriting Lead
              </button>
            </div>
            {/* Illustration */}
            <div
              className="flex-1 min-w-[220px] flex items-center justify-center p-6 md:p-10 transition-transform duration-200 ease-in-out group-hover:-translate-y-1"
              style={{ zIndex: 1 }}
            >
              <TypewriterIllustration className="w-full h-auto max-w-[220px]" />
            </div>
          </div>
        </div>
      </div>
      {/* Animations */}
      <style jsx global>{`
        @keyframes breathe {
          0% { transform: scale(1); }
          50% { transform: scale(1.01); }
          100% { transform: scale(1); }
        }
        @keyframes bob1 {
          0% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(0); }
        }
        @keyframes bob2 {
          0% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(0); }
        }
        @keyframes bob3 {
          0% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
          100% { transform: translateY(0); }
        }
        .animate-breathe { animation: breathe 6s ease-in-out infinite; }
        .animate-bob1 { animation: bob1 3.2s ease-in-out infinite; }
        .animate-bob2 { animation: bob2 3.8s ease-in-out infinite; }
        .animate-bob3 { animation: bob3 4.2s ease-in-out infinite; }
      `}</style>
    </section>
  );
}
