"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, FileText, BookOpen, CheckCircle2 } from "lucide-react";

/** Intersection Observer (fade/slide in on scroll) */
function useInView(threshold = 0.18, rootMargin = "0px 0px -12% 0px") {
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

/** Default content (editable) */
const defaultServices = [
  {
    title: "Editorial Assessment (Manuscript Critique)",
    desc: "A high-level review of strengths, weak spots, and the clearest next steps.",
    includes: ["Big-picture feedback", "Genre + market alignment notes", "Actionable revision roadmap"],
    accent: "bg-[#FFF3CC]",
    icon: FileText,
  },
  {
    title: "Developmental Editing",
    desc: "Deep structural editing to improve plot, pacing, clarity, and overall flow.",
    includes: ["Structure + organization", "Voice and consistency", "Chapter-by-chapter guidance"],
    accent: "bg-[#DFF7E6]",
    icon: BookOpen,
  },
  {
    title: "Line Editing",
    desc: "Sentence-level refinement for readability, rhythm, tone, and engagement.",
    includes: ["Stronger sentence flow", "Reduce repetition", "Improve clarity and style"],
    accent: "bg-[#F4DFFF]",
    icon: Sparkles,
  },
  {
    title: "Copyediting",
    desc: "Grammar, punctuation, consistency, and style rules—clean and professional.",
    includes: ["Grammar + punctuation", "Consistency (names, terms, timeline)", "Style guide alignment"],
    accent: "bg-[#DFF0FF]",
    icon: CheckCircle2,
  },
  {
    title: "Proofreading",
    desc: "Final polish before publishing—catching typos, spacing, and small formatting issues.",
    includes: ["Typos + spacing", "Consistency check", "Final pass for publishing"],
    accent: "bg-[#E8E8E8]",
    icon: CheckCircle2,
  },
  {
    title: "Book Formatting (Print + eBook)",
    desc: "Clean interior layout for paperback/hardcover and Kindle-ready eBook formatting.",
    includes: ["Professional interior layout", "Trim size + margins", "eBook reflow + clean structure"],
    accent: "bg-[#E3E9FF]",
    icon: BookOpen,
  },
];

function ServiceCard({ svc, index }) {
  const { ref, inView } = useInView();
  const Icon = svc.icon;

  return (
    <div
      ref={ref}
      className={[
        "relative group",
        "h-full rounded-2xl overflow-hidden",
        "bg-white",
        "border border-black/10",
        "shadow-[0_16px_40px_rgba(0,0,0,0.08)]",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)]",
        "focus-within:-translate-y-1 focus-within:shadow-[0_24px_60px_rgba(0,0,0,0.12)]",
        // reveal on scroll
        "transform-gpu",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      ].join(" ")}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      {/* Accent top band (separate heading area) */}
      <div className={[svc.accent, "px-6 pt-6 pb-5 border-b border-black/10"].join(" ")}>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-vidaloka text-[18px] md:text-[19px] leading-snug text-[#0B1B3B]">
            {svc.title}
          </h3>

          <div className="shrink-0">
            <div className="w-11 h-11 rounded-xl bg-white border border-black/10 shadow-sm flex items-center justify-center">
              <Icon size={22} className="text-[#0B1B3B]" />
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-6">
        <p className="font-sans text-[14.5px] leading-7 text-black/75">
          {svc.desc}
        </p>

        <ul className="mt-4 space-y-2">
          {svc.includes.map((inc, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#EB6358]" />
              <span className="font-sans text-[13.5px] leading-6 text-[#0B1B3B]/90">
                {inc}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-6">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#EB6358] hover:underline"
          >
            Ask about this <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* subtle corner outline detail (premium but clean) */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
    </div>
  );
}

export default function EditingServicesGrid({
  title = "Editing & Formatting Services",
  subtitle = "Choose the level of support you need—or let us recommend the right fit after a quick review.",
  services = defaultServices,
}) {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="w-full bg-white py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading block (separate, outlined, clean) */}
        <div
          ref={ref}
          className={[
            "mx-auto max-w-4xl text-center",
            "transition-all duration-700 ease-out transform-gpu",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
          ].join(" ")}
        >
          <div className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-full border border-black/10 bg-[#f6fafb] shadow-sm">
            <span className="font-sans text-xs font-bold tracking-wider text-[#0B1B3B] uppercase">
              Services
            </span>
            <span className="w-1 h-1 rounded-full bg-[#EB6358]" />
            <span className="font-sans text-xs font-semibold text-black/65">
              Editing • Proofreading • Formatting
            </span>
          </div>

          <h2 className="mt-5 font-vidaloka text-3xl md:text-4xl text-[#0B1B3B]">
            {title}
          </h2>

          <p className="mt-3 font-sans text-base md:text-lg text-black/70 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((svc, idx) => (
            <ServiceCard key={svc.title} svc={svc} index={idx} />
          ))}
        </div>

        {/* Bottom helper CTA */}
        <div className="mt-10 text-center">
          <p className="font-sans text-[15px] text-[#0B1B3B]">
            Not sure what you need?{" "}
            <Link href="/submit-manuscript" className="text-[#EB6358] font-semibold underline">
              Submit your manuscript
            </Link>{" "}
            and we’ll recommend the right level.
          </p>
        </div>
      </div>
    </section>
  );
}
