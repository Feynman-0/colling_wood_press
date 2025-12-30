"use client";

import Image from "next/image";
import Link from "next/link";
import LogoSliderBlock from "../LogoSlider/LogoSliderBlock";

export default function EditingHero({
  title = "Professional Editing That Brings Your Book to Life",
  subtitleLines = [
    "Great writing deserves great refinement. Our editors help you strengthen structure, polish language, and ensure your message lands with clarity and confidence.",
    "From developmental editing to final proofreading and formatting, we guide your manuscript through every stage—so it’s ready for readers and publication.",
  ],
  primaryCta = { text: "Submit Your Manuscript", href: "/submit-manuscript" },
  secondaryCta = { text: "Get Editing Quote", href: "/contact" },
}) {
  return (
    <section className="bg-[#e8f6f6] px-2 md:px-0 pt-10 pb-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading — SAME WEIGHT AS PUBLISHING HERO */}
        <h1
          className="text-4xl md:text-5xl font-extrabold text-[#1F2A44] mb-3 font-vidaloka"
          style={{ letterSpacing: "-1px" }}
        >
          {title}
        </h1>

        {/* Divider curve (same language as publishing) */}
        <div className="w-full flex justify-center mb-4">
          <svg
            viewBox="0 0 600 18"
            width="60%"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 10 Q 150 18 300 14 Q 450 10 590 14"
              stroke="#232B38"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        {/* Sub text — SAME STYLE AS PUBLISHING */}
        <div className="max-w-3xl mx-auto mb-10">
          {subtitleLines.map((line, i) => (
            <p
              key={i}
              className="text-[#1F2A44] text-base md:text-lg font-medium mb-2"
              style={{ lineHeight: "1.55" }}
            >
              {line}
            </p>
          ))}
        </div>

        {/* ICON + CTA ROW (MATCH SCALE) */}
        <div className="flex flex-row items-center justify-center gap-12 mt-12">
          {/* LEFT ICON */}
          <span className="ghostwriting-hero-img-wrapper ghostwriting-hero-img-pen">
            <Image
              src="/assets/images/pen-ghostwriting-hero.png"
              alt="Editing pen illustration"
              width={190}
              height={190}
              className="ghostwriting-hero-img"
              priority
            />
          </span>

          {/* CTA STACK */}
          <div className="flex flex-col gap-4 items-center justify-center">
            <Link href={primaryCta.href} legacyBehavior>
              <a className="bg-[#0B1B3B] border-2 border-black shadow-[4px_4px_0_#1F2A44] text-white font-bold text-base px-6 py-2 rounded-xl transition-all duration-200 hover:bg-[#F97316] hover:text-white w-[270px] whitespace-nowrap text-center">
                {primaryCta.text}
              </a>
            </Link>

            <Link href={secondaryCta.href} legacyBehavior>
              <a className="bg-[#F97316] border-2 border-black shadow-[4px_4px_0_#1F2A44] text-black font-bold text-base px-6 py-2 rounded-xl transition-all duration-200 hover:bg-[#0B1B3B] hover:text-white w-[270px] whitespace-nowrap text-center">
                {secondaryCta.text}
              </a>
            </Link>
          </div>

          {/* RIGHT ICON */}
          <span className="ghostwriting-hero-img-wrapper ghostwriting-hero-img-book">
            <Image
              src="/assets/images/TYPEWRITER.png"
              alt="Typewriter illustration"
              width={270}
              height={270}
              className="ghostwriting-hero-img"
              priority
            />
          </span>
        </div>

        {/* ✅ ADD THIS SECTION (LOGO SLIDER) */}
        <div className="mt-12">
          <LogoSliderBlock />
        </div>

        {/* Shared styles (same behavior as publishing hero) */}
        <style jsx>{`
          .ghostwriting-hero-img-wrapper {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 1.5rem;
            padding: 0.5rem;
            transition: box-shadow 0.2s, border-color 0.2s;
          }

          .ghostwriting-hero-img {
            border: 4px solid #111;
            border-radius: 1.5rem;
            background: #f6f7f9;
            transition: border-color 0.2s,
              transform 0.3s cubic-bezier(0.4, 2, 0.6, 1),
              box-shadow 0.3s;
            will-change: transform, border-color, box-shadow;
          }

          .ghostwriting-hero-img-pen:hover .ghostwriting-hero-img {
            border-color: #eb6358;
            transform: translateY(-12px) scale(1.07) rotate(-7deg);
            box-shadow: 0 8px 32px 0 rgba(235, 99, 88, 0.1);
          }

          .ghostwriting-hero-img-book:hover .ghostwriting-hero-img {
            border-color: #eb6358;
            transform: translateY(-12px) scale(1.07) rotate(7deg);
            box-shadow: 0 8px 32px 0 rgba(235, 99, 88, 0.1);
          }

          /* Extra snippet you provided */
          .hero-heading {
            transition: color 0.2s;
            cursor: pointer;
          }
          .hero-heading:hover {
            color: #eb6358;
          }

          .marketing-hero-img-wrapper {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.2s;
          }

          .marketing-hero-img {
            filter: brightness(0) saturate(100%);
            transition: transform 0.2s;
          }

          @media (max-width: 768px) {
            .marketing-hero-img-wrapper {
              display: none !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
