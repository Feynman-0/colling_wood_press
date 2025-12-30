"use client";

import Image from "next/image";
import Link from "next/link";
import LogoSliderBlock from "../LogoSlider/LogoSliderBlock";

export default function MarketingHero() {
  return (
    <section className="bg-[#e8f6f6] px-2 md:px-0 pt-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="hero-heading text-4xl md:text-5xl font-extrabold text-[#1F2A44] mb-2" style={{ letterSpacing: "-1px" }}>
          frankly. by Franklin Publishers®
        </h1>
        <div className="w-full flex justify-center mb-1">
          <svg viewBox="0 0 600 18" width="60%" height="18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block" }}>
            <path d="M10 10 Q 150 18 300 14 Q 450 10 590 14 Q 595 14 595 14 Q 598 16 600 17" stroke="#232B38" strokeWidth="4" strokeLinecap="round" fill="none" />
          </svg>
        </div>
        <p className="text-[#1F2A44] text-base md:text-lg font-medium max-w-3xl mx-auto mb-8" style={{ lineHeight: "1.5" }}>
          Launch smarter with Franklin’s marketing built for authors.<br />
          We plan, design, and promote your book with clear strategy, clean creative, and consistent execution —<br />
          so you can focus on writing while we help readers find you.
        </p>
        <div className="flex flex-row items-center justify-center gap-12 mt-12 relative">
          <div className="marketing-hero-img-wrapper marketing-hero-img-left hidden md:inline-flex absolute left-0 bottom-0 transition hover:scale-[1.03] hover:-translate-y-1">
            <Image
              src="/assets/images/marketing-svgs/digital-campaign_2816103.png"
              alt="Digital Campaign Icon"
              width={120}
              height={120}
              className="marketing-hero-img"
              style={{ filter: 'brightness(0) saturate(100%)', objectFit: 'contain' }}
              priority
            />
          </div>
          <div className="flex flex-col gap-4 items-center justify-center mx-auto">
            <Link href="/submit-manuscript" legacyBehavior>
              <a className="bg-[#0B1B3B] border-2 border-black shadow-[4px_4px_0_#1F2A44] text-white font-bold text-base px-6 py-2 rounded-xl transition-all duration-200 hover:bg-[#EB6358] hover:text-[#0B1B3B] w-[270px] whitespace-nowrap text-center">
                Submit Your <span className="font-extrabold">Manuscript</span>
              </a>
            </Link>
            <Link href="/contact" legacyBehavior>
              <a className="bg-[#EB6358] border-2 border-black shadow-[4px_4px_0_#1F2A44] text-[#0B1B3B] font-bold text-base px-6 py-2 rounded-xl transition-all duration-200 hover:bg-[#0B1B3B] hover:text-white w-[270px] whitespace-nowrap text-center">
                Connect with a <span className="font-extrabold">Literary Agent</span>
              </a>
            </Link>
          </div>
          <div className="marketing-hero-img-wrapper marketing-hero-img-right hidden md:inline-flex absolute right-0 bottom-0 transition hover:scale-[1.03] hover:-translate-y-1">
            <Image
              src="/assets/images/marketing-svgs/growth_5597379.png"
              alt="Growth Icon"
              width={170}
              height={170}
              className="marketing-hero-img"
              style={{ filter: 'brightness(0) saturate(100%)', objectFit: 'contain' }}
              priority
            />
          </div>
        </div>
        <div className="mt-12">
          <LogoSliderBlock />
        </div>
        <style jsx>{`
          .hero-heading {
            transition: color 0.2s;
            cursor: pointer;
          }
          .hero-heading:hover {
            color: #EB6358;
          }
          .marketing-hero-img-wrapper {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            /* No border, no background, no shadow */
            transition: transform 0.2s;
          }
          .marketing-hero-img {
            /* Remove border, background, shadow */
            filter: brightness(0) saturate(100%);
            /* Ensures solid black rendering */
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
