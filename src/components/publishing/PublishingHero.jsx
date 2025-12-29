"use client";

import Image from 'next/image';
import Link from 'next/link';
import LogoSliderBlock from '../LogoSlider/LogoSliderBlock';

export default function PublishingHero() {
  return (
    <section className="bg-[#e8f6f6] px-2 md:px-0 pt-8">
      <div className="max-w-5xl mx-auto text-center">
        {/* Removed global body background override. Section uses Tailwind bg-[#e8f6f6] */}
        <h1 className="hero-heading text-4xl md:text-5xl font-extrabold text-[#1F2A44] mb-2" style={{letterSpacing: '-1px'}}>
          The Franklin<br />Publishing Route
        </h1>
        <h2 className="hero-heading text-3xl md:text-4xl font-extrabold text-[#1F2A44] mb-4" style={{letterSpacing: '-1px'}}>
          Guiding Authors Every Step of the Way
        </h2>
        <style jsx>{`
          .hero-heading {
            transition: color 0.2s;
            cursor: pointer;
          }
          .hero-heading:hover {
            color: #EB6358;
          }
        `}</style>
        <div className="w-full flex justify-center mb-1">
          <svg viewBox="0 0 600 18" width="60%" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'block'}}>
            <path d="M10 10 Q 150 18 300 14 Q 450 10 590 14 Q 595 14 595 14 Q 598 16 600 17" stroke="#232B38" strokeWidth="4" strokeLinecap="round" fill="none"/>
          </svg>
        </div>
        <p className="text-[#1F2A44] text-base md:text-lg font-medium max-w-3xl mx-auto mb-8" style={{lineHeight: '1.5'}}>
          At Franklin Publishers, we believe publishing is a shared journey.<br />
          Our role is to guide authors through each stage with clarity, communication, and care.From<br />
          the first submission to the final release, every step is designed to help your story find its<br />
          audience, confidently and professionally.
        </p>
        <div className="flex flex-row items-center justify-center gap-12 mt-12">
          <span className="ghostwriting-hero-img-wrapper ghostwriting-hero-img-pen">
            <Image src="/assets/images/publishing-hero-images/handshake.svg" alt="Handshake illustration" width={180} height={180} className="ghostwriting-hero-img" priority />
          </span>
          <div className="flex flex-col gap-4 items-center justify-center">
            <Link href="/submit-manuscript" legacyBehavior>
              <a className="bg-[#0B1B3B] border-2 border-black shadow-[4px_4px_0_#1F2A44] text-white font-bold text-base px-6 py-2 rounded-xl transition-all duration-200 hover:bg-[#F97316] hover:text-white w-[270px] whitespace-nowrap text-center">
                Submit Your <span className="font-extrabold">Manuscript</span>
              </a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="bg-[#F97316] border-2 border-black shadow-[4px_4px_0_#1F2A44] text-black font-bold text-base px-6 py-2 rounded-xl transition-all duration-200 hover:bg-[#0B1B3B] hover:text-white w-[270px] whitespace-nowrap text-center">
                Connect with a <span className="font-extrabold">Literary Agent</span>
              </a>
            </Link>
          </div>
          <span className="ghostwriting-hero-img-wrapper ghostwriting-hero-img-book">
            <Image src="/assets/images/publishing-hero-images/pen-book.svg" alt="Pen and book illustration" width={270} height={270} className="ghostwriting-hero-img" priority />
          </span>
        </div>
        <div className="mt-12">
          <LogoSliderBlock />
        </div>
        <style jsx>{`
          .ghostwriting-hero-img-wrapper {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: 1.5rem;
            padding: 0.5rem;
            transition: box-shadow 0.2s, border-color 0.2s;
          }
          .ghostwriting-hero-img-book {
            background: transparent !important;
          }
          .ghostwriting-hero-img {
            border: 4px solid #111;
            border-radius: 1.5rem;
            background: #f6f7f9;
            transition: border-color 0.2s, transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s;
            will-change: transform, border-color, box-shadow;
          }
          .ghostwriting-hero-img-pen:hover .ghostwriting-hero-img {
            border-color: #EB6358;
            transform: translateY(-12px) scale(1.07) rotate(-7deg);
            box-shadow: 0 8px 32px 0 rgba(235,99,88,0.10);
          }
          .ghostwriting-hero-img-book:hover .ghostwriting-hero-img {
            border-color: #EB6358;
            transform: translateY(-12px) scale(1.07) rotate(7deg);
            box-shadow: 0 8px 32px 0 rgba(235,99,88,0.10);
          }
          .ghostwriting-hero-img {
            /* ...existing code... */
            transition: border-color 0.2s, transform 0.3s cubic-bezier(.4,2,.6,1), box-shadow 0.3s;
          }
        `}</style>
      </div>
    </section>
  );
}
