"use client";

import { useEffect, useRef, useState } from "react";
import { Send, MessagesSquare, ClipboardCheck, BookOpen, LifeBuoy } from "lucide-react";

/* Intersection Observer (clean, no warnings) */
function useInView(threshold = 0.25, rootMargin = "0px 0px -12% 0px") {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, inView };
}

const steps = [
  {
    icon: Send,
    title: "The Beginning — Submission",
    body:
      "Every great journey begins with trust. When you submit your manuscript, it’s reviewed by our editorial team and assigned to a Franklin literary agent who will be your guide throughout the process. You’ll always know where your manuscript stands, what stage you’re in, and what comes next.",
  },
  {
    icon: MessagesSquare,
    title: "The Conversation — Review & Guidance",
    body:
      "After the review, your agent will reach out to discuss your results. You’ll receive straightforward, professional guidance about your manuscript’s potential and how best to move forward. Our goal is to create understanding, not pressure — together, we decide when to take the next step.",
  },
  {
    icon: ClipboardCheck,
    title: "The Path Forward — Publishing Readiness",
    body:
      "Once you’re ready, we outline your publishing roadmap — editing, design, and production steps — so the process feels clear and manageable. You’ll know what’s happening, what’s needed from you, and how we’re moving your book toward publication.",
  },
  {
    icon: BookOpen,
    title: "The Process — Publication",
    body:
      "Your manuscript enters the publishing phase, guided by Franklin’s editorial, design, and production teams. You remain in touch with your literary agent, who keeps you informed about progress, milestones, and release scheduling.",
  },
  {
    icon: LifeBuoy,
    title: "The Continuation — Author Support",
    body:
      "Publication isn’t the end of the journey; it’s a new beginning. Franklin continues to support its authors with guidance, communication, and opportunities for continued growth. Whether it’s expanding reach or connecting with new audiences, your agent remains your ongoing partner.",
  },
];

/* Desktop layout */
const desktopPositions = [
  "md:absolute md:left-[6%]   md:top-[90px]   md:w-[440px]",
  "md:absolute md:right-[6%]  md:top-[330px]  md:w-[440px]",
  "md:absolute md:left-[10%]  md:top-[590px]  md:w-[440px]",
  "md:absolute md:right-[10%] md:top-[860px]  md:w-[440px]",
  "md:absolute md:left-[12%]  md:top-[1120px] md:w-[440px]",
];

function ProcessCard({ step, index, className }) {
  const { ref, inView } = useInView();
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className={[
        "relative",
        "w-full max-w-[560px] mx-auto md:mx-0 mb-10 md:mb-0",
        className,
        "transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      ].join(" ")}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="relative bg-white border-2 border-black rounded-2xl shadow-[10px_10px_0_#000] px-7 py-7">
        {/* Icon badge */}
        <div className="absolute -top-8 right-8">
          <div className="w-[74px] h-[74px] rounded-full bg-white border-2 border-black shadow-[8px_8px_0_#000] flex items-center justify-center">
            <Icon size={32} className="text-[#0B1B3B]" />
          </div>
        </div>

        {/* Heading */}
        <h3 className="text-[22px] leading-tight font-extrabold text-[#0B1B3B] pr-16">
          {step.title}
        </h3>

        {/* Body text – sans serif */}
        <p className="mt-4 font-sans text-[15px] leading-relaxed text-black/100">
          {step.body}
        </p>
      </div>
    </div>
  );
}


export default function PublishingProcess() {
  return (
    <section className="relative w-full bg-white py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0B1B3B]">
            The Publishing Process
          </h2>
          <p className="mt-3 font-sans text-black/70 max-w-2xl mx-auto">
            A guided route from submission to publication — with clear communication at every step.
          </p>
        </div>

        {/* Canvas */}
        <div className="relative md:min-h-[1400px] overflow-visible">
          {/* CONNECTING THREAD ONLY */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 1400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="
                  M 260 220
                  C 520 120, 760 160, 980 340
                  C 820 430, 540 470, 300 650
                  C 520 760, 760 790, 930 920
                  C 760 1040, 540 1120, 330 1210
                "
                stroke="#000"
                strokeWidth="4"
                strokeDasharray="14 12"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Cards */}
          <div className="relative z-10">
            {steps.map((step, i) => (
              <ProcessCard
                key={step.title}
                step={step}
                index={i}
                className={desktopPositions[i]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
