"use client";

import { useEffect, useRef, useState } from "react";
import { Send, ClipboardList, UserCheck, FileEdit, Sparkles } from "lucide-react";

/* Intersection Observer (smooth reveal) */
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

    const obs = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, rootMargin }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  return { ref, inView };
}

const defaultSteps = [
  {
    icon: Send,
    title: "Submit Your Manuscript",
    desc: "Upload your draft and tell us your goals.",
  },
  {
    icon: ClipboardList,
    title: "We Review + Recommend",
    desc: "We confirm the right editing level and timeline.",
  },
  {
    icon: UserCheck,
    title: "Editor Match",
    desc: "You’re paired with an editor suited to your genre.",
  },
  {
    icon: FileEdit,
    title: "Editing + Clean Delivery",
    desc: "You receive tracked edits + clear notes.",
  },
  {
    icon: Sparkles,
    title: "Final Polish",
    desc: "Optional proofreading + formatting for publishing.",
  },
];

/* Stagger positions (desktop only) */
const desktopPositions = [
  "md:absolute md:left-[6%]  md:top-[80px]   md:w-[420px]",
  "md:absolute md:right-[6%] md:top-[260px]  md:w-[420px]",
  "md:absolute md:left-[10%] md:top-[470px]  md:w-[420px]",
  "md:absolute md:right-[10%] md:top-[690px] md:w-[420px]",
  "md:absolute md:left-[12%] md:top-[920px]  md:w-[420px]",
];

function StepCard({ step, index, className }) {
  const { ref, inView } = useInView();
  const Icon = step.icon;

  return (
    <div
      ref={ref}
      className={[
        "relative w-full max-w-[560px] mx-auto md:mx-0 mb-10 md:mb-0",
        className,
        "transition-all duration-700 ease-out",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
      ].join(" ")}
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="relative bg-white border-2 border-[#0B1B3B] rounded-2xl shadow-[8px_8px_0_#0B1B3B] px-7 py-7">
        {/* icon badge */}
        <div className="absolute -top-7 right-7">
          <div className="w-[64px] h-[64px] rounded-full bg-white border-2 border-[#0B1B3B] shadow-[6px_6px_0_#0B1B3B] flex items-center justify-center">
            <Icon size={28} className="text-[#0B1B3B]" />
          </div>
        </div>

        {/* step number */}
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="text-sm font-bold text-[#EB6358] font-sans">
            STEP {index + 1}
          </span>
          <span className="h-[1px] w-10 bg-[#0B1B3B]/20" />
        </div>

        {/* title */}
        <h3 className="text-[22px] leading-tight font-serif font-extrabold text-[#0B1B3B] pr-14">
          {step.title}
        </h3>

        {/* body */}
        <p className="mt-4 font-sans text-[15px] leading-relaxed text-black/70">
          {step.desc}
        </p>
      </div>
    </div>
  );
}

export default function EditingProcess({
  title = "How Our Editing Process Works",
  subtitle = "A clear, structured flow — so you always know what happens next.",
  steps = defaultSteps,
}) {
  return (
    <section className="relative w-full bg-white py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* heading */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-serif font-extrabold text-[#0B1B3B]">
            {title}
          </h2>
          <p className="mt-3 font-sans text-black/70 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* canvas */}
        <div className="relative md:min-h-[1050px] overflow-visible">
          {/* connector path (desktop only) */}
          <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 1200 1050"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="
                  M 290 160
                  C 540 40, 760 120, 930 250
                  C 770 360, 520 370, 330 520
                  C 530 650, 770 650, 920 780
                  C 760 930, 520 930, 350 980
                "
                stroke="#0B1B3B"
                strokeWidth="3"
                strokeDasharray="12 12"
                strokeLinecap="round"
                opacity="0.35"
              />
            </svg>
          </div>

          {/* cards */}
          <div className="relative z-10">
            {steps.map((step, i) => (
              <StepCard
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
