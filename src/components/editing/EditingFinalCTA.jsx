import React from "react";

export default function EditingFinalCTA({
  title = "Ready to Make Your Manuscript Publication-Ready?",
  subtitle = "Submit your manuscript for a quick review and we’ll recommend the best editing level for your goals.",
  primaryCta = { text: "Submit Your Manuscript", href: "/submit-manuscript" }
}) {
  return (
    <section className="w-full py-12 px-4 bg-[#0B1B3B]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">{title}</h2>
        <p className="text-lg font-sans text-white mb-6">{subtitle}</p>
        <a href={primaryCta.href} className="bg-[#EB6358] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-white hover:text-[#0B1B3B] transition">{primaryCta.text}</a>
      </div>
    </section>
  );
}
