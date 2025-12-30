"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ShieldCheck, Layers } from "lucide-react";

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

const defaultPackages = [
  {
    title: "Essential Polish",
    bestFor: "Manuscripts that are mostly solid and need clean finishing.",
    includes: ["Copyedit OR Proofread", "Consistency checks", "Final language polish"],
    accent: "bg-[#FFF3CC]",
    icon: ShieldCheck,
    tag: "Fast + clean",
  },
  {
    title: "Complete Edit",
    bestFor: "Great drafts that need stronger flow and professional refinement.",
    includes: ["Line editing", "Copyediting", "Style consistency pass"],
    accent: "bg-[#DFF7E6]",
    icon: Sparkles,
    tag: "Most popular",
    featured: true,
  },
  {
    title: "Full Manuscript Support",
    bestFor: "Books that need structure help plus a complete editorial finish.",
    includes: ["Developmental editing", "Line editing", "Copyediting roadmap"],
    accent: "bg-[#E3E9FF]",
    icon: Layers,
    tag: "Deep support",
  },
];

function PackageCard({ pkg, index }) {
  const { ref, inView } = useInView();
  const Icon = pkg.icon;

  return (
    <div
      ref={ref}
      className={[
        "relative group h-full",
        "rounded-2xl overflow-hidden bg-white",
        "border border-black/10",
        "shadow-[0_16px_40px_rgba(0,0,0,0.08)]",
        "transition-all duration-300 ease-out transform-gpu",
        "hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)]",
        pkg.featured ? "ring-1 ring-[#EB6358]/35" : "",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
      ].join(" ")}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Accent header */}
      <div className={[pkg.accent, "px-6 pt-6 pb-5 border-b border-black/10"].join(" ")}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 font-sans text-[12px] font-bold text-[#0B1B3B]">
                {pkg.tag}
              </span>

              {pkg.featured && (
                <span className="inline-flex items-center rounded-full border border-[#EB6358]/35 bg-white/70 px-3 py-1 font-sans text-[12px] font-bold text-[#EB6358]">
                  Recommended
                </span>
              )}
            </div>

            <h3 className="font-vidaloka text-[20px] leading-snug text-[#0B1B3B]">
              {pkg.title}
            </h3>
          </div>

          <div className="shrink-0">
            <div className="w-11 h-11 rounded-xl bg-white border border-black/10 shadow-sm flex items-center justify-center">
              <Icon size={22} className="text-[#0B1B3B]" />
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 py-6 flex flex-col h-full">
        <p className="font-sans text-[14.5px] leading-7 text-black/75">
          <span className="font-semibold text-[#EB6358]">Best for: </span>
          {pkg.bestFor}
        </p>

        <ul className="mt-4 space-y-2">
          {pkg.includes.map((inc, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-[#EB6358]" />
              <span className="font-sans text-[13.5px] leading-6 text-[#0B1B3B]/90">
                {inc}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="mt-6 pt-2">
          <Link
            href="/contact"
            className={[
              "w-full inline-flex items-center justify-center gap-2",
              "rounded-full px-5 py-3",
              "font-sans font-semibold",
              "border border-black/10",
              pkg.featured
                ? "bg-[#EB6358] text-white hover:bg-[#0B1B3B]"
                : "bg-[#0B1B3B] text-white hover:bg-[#EB6358]",
              "transition-colors",
            ].join(" ")}
          >
            Request Quote <ArrowRight size={16} />
          </Link>

          <p className="mt-3 text-center font-sans text-[12.5px] text-black/55">
            Pricing varies by word count + complexity.
          </p>
        </div>
      </div>

      {/* subtle inner outline */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-black/5" />
    </div>
  );
}

export default function EditingPackages({
  title = "Popular Editing Packages",
  subtitle = "Flexible options for every stage—from a clean polish to full manuscript support. Quotes depend on word count and complexity.",
  packages = defaultPackages,
}) {
  const { ref, inView } = useInView(0.15);

  return (
    <section className="w-full bg-white py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Heading (separate, clean) */}
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
              Packages
            </span>
            <span className="w-1 h-1 rounded-full bg-[#EB6358]" />
            <span className="font-sans text-xs font-semibold text-black/65">
              Clear options • Custom quotes
            </span>
          </div>

          <h2 className="mt-5 font-vidaloka text-3xl md:text-4xl text-[#0B1B3B]">
            {title}
          </h2>

          <p className="mt-3 font-sans text-base md:text-lg text-black/70 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-7">
          {packages.map((pkg, idx) => (
            <PackageCard key={pkg.title} pkg={pkg} index={idx} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center">
          <p className="font-sans text-[15px] text-[#0B1B3B]">
            Not sure which package fits?{" "}
            <Link href="/submit-manuscript" className="text-[#EB6358] font-semibold underline">
              Submit your manuscript
            </Link>{" "}
            and we’ll recommend the best option.
          </p>
        </div>
      </div>
    </section>
  );
}
