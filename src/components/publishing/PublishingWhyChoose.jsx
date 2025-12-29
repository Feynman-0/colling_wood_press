"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function PublishingWhyChoose() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white">
      <div
        className={[
          "max-w-6xl mx-auto px-4 py-20 transition-all duration-700 ease-out",
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        ].join(" ")}
      >
        {/* SECTION HEADING */}
        <div className="text-center">
          <h2 className="text-[#0B1B3B] text-3xl md:text-4xl font-extrabold">
            Why Choose Franklin&apos;s Publishing Route
          </h2>

          {/* curved underline */}
          <div className="flex justify-center mt-4">
            <svg
              width="160"
              height="16"
              viewBox="0 0 160 16"
              aria-hidden="true"
            >
              <path
                d="M8 8 C45 14, 115 14, 152 8"
                stroke="#0B1B3B"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        {/* TOP 3 CARDS */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <InfoCard
            topBg="#E6F4EE"
            title="Clarity in Every Step"
            body="We keep the process transparent so you always know what is happening."
          />
          <InfoCard
            topBg="#EAF1FB"
            title="Personal Guidance"
            body="Every author works one-on-one with a Franklin literary agent."
          />
          <InfoCard
            topBg="#F5ECDD"
            title="Enduring Support"
            body="Our commitment continues beyond publication."
          />
        </div>

        

        {/* CTA PANEL */}
        <div className="mt-16">
          <div className="ctaWrap relative rounded-3xl bg-[#0B1B3B] px-6 md:px-14 py-14 overflow-hidden shadow-[0_30px_60px_rgba(11,27,59,0.35)]">
            {/* Base border (subtle, not gold) */}
            <div className="absolute inset-0 rounded-3xl border border-white/15 pointer-events-none" />

            {/* Revolving gold segment */}
            <div className="ringSpin pointer-events-none absolute -inset-[2px] rounded-3xl" />

            {/* Content */}
            <div className="relative text-center">
              <h3 className="text-white text-2xl md:text-4xl font-extrabold">
                Ready to Land Your
                <br />
                Traditional Publishing Deal?
              </h3>

              <div className="flex justify-center mt-4">
                <svg
                  width="200"
                  height="16"
                  viewBox="0 0 200 16"
                  aria-hidden="true"
                >
                  <path
                    d="M10 8 C60 14, 140 14, 190 8"
                    stroke="#FFFFFF"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <p className="mt-6 font-sans text-white/90 max-w-3xl mx-auto text-base leading-relaxed">
                Don&apos;t navigate the complex world of traditional publishing
                alone. Franklin Publishers provides expert support and industry
                connections to help you secure your dream publishing deal.
              </p>

              <p className="mt-4 font-sans text-white/90 max-w-3xl mx-auto text-base leading-relaxed">
                Schedule a free consultation today and take the first step toward
                your success.
              </p>

              <div className="mt-8 flex justify-center">
                <Link href="/contact" className="ctaBtn font-sans font-bold px-8 py-4 rounded-xl">
                  Connect with a Literary Agent
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Plain CSS (no styled-jsx) */}
        <style>{`
          /* Button: coral -> navy on hover */
          .ctaBtn {
            background: #EB6358;
            color: #fff;
            border: 1px solid rgba(255,255,255,0.18);
            box-shadow: 0 12px 30px rgba(235,99,88,0.35);
            transition: transform 180ms ease, background 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
          .ctaBtn:hover {
            background: #0B1B3B;
            border-color: rgba(201,162,77,0.65);
            transform: translateY(-2px);
            box-shadow: 0 18px 42px rgba(0,0,0,0.35), 0 0 0 2px rgba(201,162,77,0.18);
          }
          .ctaBtn:active {
            transform: translateY(-1px);
          }

          /*
            Revolving gold segment around border:
            - Not a full gold outline
            - A short gold "sweep" rotates
          */
          .ringSpin {
            border-radius: 24px;
            padding: 2px; 
            background: conic-gradient(
              from 0deg,
              rgba(201,162,77,0) 0deg,
              rgba(201,162,77,0) 300deg,
              rgba(201,162,77,0.95) 330deg,
              rgba(201,162,77,0) 360deg
            );
            -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            animation: spinGold 2.8s linear infinite;
            opacity: 0.95;
          }

          @keyframes spinGold {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          @media (prefers-reduced-motion: reduce) {
            .ringSpin { animation: none; }
            .ctaBtn { transition: none; }
          }
        `}</style>
      </div>
    </section>
  );
}

function InfoCard({ topBg, title, body }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-black/10 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.10)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_28px_55px_rgba(0,0,0,0.16)]">
      {/* header strip (3 formal colors) */}
      <div className="px-6 py-5 text-center" style={{ background: topBg }}>
        <h4 className="text-[#0B1B3B] font-extrabold text-lg">{title}</h4>
      </div>

      {/* body (sans-serif + darker text) */}
      <div className="px-6 py-6 text-center">
        <p className="font-sans text-black/80 text-sm leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
