// src/components/Audiobook/AudiobookHero.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import LogoSliderBlock from "../LogoSlider/LogoSliderBlock";

export default function AudiobookHero({
  title = "Audiobook Production That Sounds Like You",
  subtitleLines = [
    "Turn your manuscript into a studio-quality audiobook—recorded, edited, mastered, and ready for Audible, Apple Books, and more.",
    "Choose author narration or professional voice talent. We handle the full production pipeline with clear deliverables and timelines.",
  ],
  primaryCta = { text: "Get Audiobook Quote", href: "/contact" },
  secondaryCta = { text: "Submit Your Manuscript", href: "/submit-manuscript" },

  // ✅ YOUR icons
  leftIconSrc = "/assets/images/audiobook hero/audiobook_4797506.png",
  rightIconSrc = "/assets/images/audiobook hero/audiobook-svgrepo-com.svg",

  headingColor = "#1F2A44",
  textColor = "#1F2A44",
}) {
  return (
    <section className="px-2 md:px-0 pt-10 pb-16" style={{ backgroundColor: '#e8f6f6' }}>
      <div className="max-w-6xl mx-auto text-center">
        <h1
          className="text-4xl md:text-5xl font-extrabold mb-3 font-vidaloka"
          style={{ letterSpacing: "-1px", color: headingColor }}
        >
          {title}
        </h1>

        <div className="w-full flex justify-center mb-4">
          <svg viewBox="0 0 600 18" width="60%" height="18" fill="none">
            <path
              d="M10 10 Q 150 18 300 14 Q 450 10 590 14"
              stroke="#232B38"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="max-w-3xl mx-auto mb-10">
          {subtitleLines.map((line, i) => (
            <p
              key={i}
              className="text-base md:text-lg font-medium mb-2 font-sans"
              style={{ lineHeight: "1.55", color: textColor }}
            >
              {line}
            </p>
          ))}
        </div>

        <div className="flex flex-row items-center justify-center gap-12 mt-10">
          {/* LEFT ICON (NO border / bg / wrapper) */}
          <div className="hidden md:flex items-center justify-center">
            <Image
              src={leftIconSrc}
              alt="Audiobook illustration"
              width={230}
              height={230}
              priority
              className="object-contain hover:scale-[1.04] transition-transform duration-200"
              style={{ backgroundColor: "transparent" }}
            />
          </div>

          {/* CTA STACK (SAME BUTTON LOGIC AS BEFORE) */}
          <div className="flex flex-col gap-4 items-center justify-center">
            <Link href={secondaryCta.href} legacyBehavior>
              <a className="bg-[#0B1B3B] border-2 border-black shadow-[4px_4px_0_#1F2A44] text-white font-bold text-base px-6 py-2 rounded-xl transition-all duration-200 hover:bg-[#EB6358] hover:text-white w-[270px] whitespace-nowrap text-center">
                {secondaryCta.text}
              </a>
            </Link>

            <Link href={primaryCta.href} legacyBehavior>
              <a className="bg-[#EB6358] border-2 border-black shadow-[4px_4px_0_#1F2A44] text-black font-bold text-base px-6 py-2 rounded-xl transition-all duration-200 hover:bg-[#0B1B3B] hover:text-white w-[270px] whitespace-nowrap text-center">
                {primaryCta.text}
              </a>
            </Link>
          </div>

          {/* RIGHT ICON (NO border / bg / wrapper) */}
          <div className="hidden md:flex items-center justify-center">
            <Image
              src={rightIconSrc}
              alt="Audiobook icon"
              width={230}
              height={230}
              priority
              className="object-contain hover:scale-[1.04] transition-transform duration-200"
              style={{ backgroundColor: "transparent" }}
            />
          </div>
        </div>

        {/* Mobile icons */}
        <div className="md:hidden flex justify-center gap-8 mt-10">
          <Image
            src={leftIconSrc}
            alt=""
            width={140}
            height={140}
            className="object-contain"
            style={{ backgroundColor: "transparent" }}
          />
          <Image
            src={rightIconSrc}
            alt=""
            width={140}
            height={140}
            className="object-contain"
            style={{ backgroundColor: "transparent" }}
          />
        </div>

        {/* ✅ LOGO SLIDER (same as Editing Hero) */}
        <div className="mt-12">
          <LogoSliderBlock />
        </div>
      </div>
    </section>
  );
}
