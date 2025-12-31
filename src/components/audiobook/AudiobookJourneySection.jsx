"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

function useInViewDisappear(options = { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

export default function AudiobookJourneySection({
  title = "Your Audiobook Journey",
  subtitle = "A clear, guided pipeline — with checkpoints, deliverables, and platform-ready output.",
  cta = { text: "Get Audiobook Quote", href: "/contact" }
}) {
  const steps = useMemo(
    () => [
      {
        k: "01",
        label: "Plan",
        title: "Scope + Finished Hours",
        desc: "We confirm word count, genre tone, narration approach, and target platforms. You get a clear timeline and deliverables.",
        bullets: ["Estimate finished hours", "Voice approach: author or talent", "Production timeline"]
      },
      {
        k: "02",
        label: "Record",
        title: "Narration Session",
        desc: "Record with your setup or ours. If you narrate, we guide pacing, mic technique, and consistency.",
        bullets: ["Author narration coaching (optional)", "Studio or remote workflow", "Retakes planned upfront"]
      },
      {
        k: "03",
        label: "Edit",
        title: "Clean + Correct",
        desc: "We remove mistakes, long pauses, mouth clicks, and tighten flow while keeping it natural (not robotic).",
        bullets: ["Breath + click cleanup", "Pacing and consistency", "Chapter structure"]
      },
      {
        k: "04",
        label: "Master",
        title: "Platform-Ready Audio",
        desc: "We master to meet platform standards and deliver clean, consistent loudness across chapters.",
        bullets: ["Leveling + EQ + dynamics", "Uniform tone across chapters", "Quality checks"]
      },
      {
        k: "05",
        label: "Deliver",
        title: "Upload-Ready Package",
        desc: "You receive chapter files, naming, metadata notes, and support for ACX / Audible workflows.",
        bullets: ["Correct file splits", "Naming conventions", "Submission checklist"]
      }
    ],
    []
  );

  const { ref, inView } = useInViewDisappear();
  const [active, setActive] = useState(0);

  // When it disappears from view, reset the selection (keeps it feeling “alive”)
  useEffect(() => {
    if (!inView) setActive(0);
  }, [inView]);

  return (
    <section ref={ref} className="bg-white px-2 md:px-0 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={[
            "text-center transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          ].join(" ")}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1F2A44] mb-4 font-vidaloka">
            {title}
          </h2>
          <p className="text-[#1F2A44] text-base md:text-lg font-medium max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Interactive row */}
        <div
          className={[
            "mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-700 ease-out",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          ].join(" ")}
          style={{ transitionDelay: "110ms" }}
        >
          {/* LEFT: Step selector */}
          <div className="rounded-3xl border border-[#1F2A44]/10 bg-[#F6F7F9] p-4 md:p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-extrabold text-[#1F2A44] uppercase tracking-wide">
                Steps (tap to explore)
              </p>

              {/* mini audio-wave (pure CSS) */}
              <div className="wave" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            {/* Desktop list */}
            <div className="hidden md:grid gap-3">
              {steps.map((s, idx) => {
                const on = idx === active;
                return (
                  <button
                    key={s.k}
                    type="button"
                    onClick={() => setActive(idx)}
                    className={[
                      "w-full text-left rounded-2xl px-4 py-4 border transition-all duration-200",
                      on
                        ? "bg-white border-[#EB6358]/40 shadow-md"
                        : "bg-white/70 border-[#1F2A44]/10 hover:border-[#1F2A44]/20 hover:bg-white"
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span
                          className={[
                            "w-10 h-10 rounded-xl grid place-items-center font-black",
                            on ? "bg-[#EB6358] text-white" : "bg-[#1F2A44]/10 text-[#1F2A44]"
                          ].join(" ")}
                        >
                          {s.k}
                        </span>
                        <div>
                          <p className="text-xs font-bold text-[#EB6358] uppercase tracking-wide">
                            {s.label}
                          </p>
                          <p className="text-base font-extrabold text-[#1F2A44]">{s.title}</p>
                        </div>
                      </div>

                      <span
                        className={[
                          "text-xs font-bold px-3 py-1 rounded-full",
                          on ? "bg-[#EB6358] text-white" : "bg-[#1F2A44]/10 text-[#1F2A44]"
                        ].join(" ")}
                      >
                        {on ? "Active" : "View"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Mobile tabs */}
            <div className="md:hidden flex gap-2 overflow-x-auto pb-2 -mx-1 px-1">
              {steps.map((s, idx) => {
                const on = idx === active;
                return (
                  <button
                    key={s.k}
                    type="button"
                    onClick={() => setActive(idx)}
                    className={[
                      "flex-shrink-0 rounded-full px-4 py-2 text-sm font-extrabold border transition-all",
                      on
                        ? "bg-[#1F2A44] text-white border-[#1F2A44]"
                        : "bg-white text-[#1F2A44] border-[#1F2A44]/15"
                    ].join(" ")}
                  >
                    {s.k} {s.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Active step details (feels like an audio “panel”) */}
          <div className="rounded-3xl border border-[#1F2A44]/10 bg-white p-6 shadow-sm relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none soft-grid" aria-hidden="true" />

            <div className="relative">
              <p className="text-xs font-bold text-[#EB6358] uppercase tracking-wide">
                Step {steps[active].k} • {steps[active].label}
              </p>

              <h3 className="mt-2 text-2xl md:text-3xl font-extrabold text-[#1F2A44] font-vidaloka">
                {steps[active].title}
              </h3>

              <p className="mt-3 text-[#1F2A44]/80 text-base md:text-lg font-medium leading-relaxed">
                {steps[active].desc}
              </p>

              <div className="mt-6 rounded-2xl bg-[#F6F7F9] border border-[#1F2A44]/10 p-4">
                <p className="text-xs font-extrabold text-[#1F2A44] uppercase tracking-wide mb-3">
                  What you get
                </p>
                <ul className="space-y-2">
                  {steps[active].bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 items-start text-sm md:text-base text-[#1F2A44]">
                      <span className="mt-[6px] w-2 h-2 rounded-full bg-[#EB6358] flex-shrink-0" />
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA (same button logic style as your hero) */}
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link href={cta.href} legacyBehavior>
                  <a className="bg-[#EB6358] border-2 border-black shadow-[4px_4px_0_#1F2A44] text-black font-bold text-base px-6 py-2 rounded-xl transition-all duration-200 hover:bg-[#0B1B3B] hover:text-white w-full sm:w-auto whitespace-nowrap text-center">
                    {cta.text}
                  </a>
                </Link>

                <button
                  type="button"
                  onClick={() => setActive((p) => (p + 1) % steps.length)}
                  className="bg-[#0B1B3B] border-2 border-black shadow-[4px_4px_0_#1F2A44] text-white font-bold text-base px-6 py-2 rounded-xl transition-all duration-200 hover:bg-[#EB6358] hover:text-white w-full sm:w-auto whitespace-nowrap text-center"
                >
                  Next Step →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Local CSS */}
        <style jsx>{`
          .soft-grid {
            background-image:
              radial-gradient(rgba(31, 42, 68, 0.08) 1px, transparent 1px);
            background-size: 18px 18px;
            opacity: 0.35;
          }

          .wave {
            display: inline-flex;
            gap: 4px;
            align-items: flex-end;
            height: 18px;
          }
          .wave span {
            width: 4px;
            border-radius: 99px;
            background: #eb6358;
            animation: wave 900ms ease-in-out infinite;
            opacity: ${inView ? 1 : 0};
            transition: opacity 250ms ease;
          }
          .wave span:nth-child(1) { height: 8px;  animation-delay: 0ms; }
          .wave span:nth-child(2) { height: 14px; animation-delay: 120ms; }
          .wave span:nth-child(3) { height: 10px; animation-delay: 240ms; }
          .wave span:nth-child(4) { height: 16px; animation-delay: 360ms; }
          .wave span:nth-child(5) { height: 9px;  animation-delay: 480ms; }

          @keyframes wave {
            0%, 100% { transform: scaleY(0.75); opacity: 0.55; }
            50% { transform: scaleY(1.15); opacity: 1; }
          }
        `}</style>
      </div>
    </section>
  );
}
