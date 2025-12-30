import React from "react";

const defaultDeliverables = [
  "Tracked Changes document (Word / Google Docs style edits)",
  "Editor notes with clear recommendations",
  "Consistency check (names, timeline, terms)",
  "Style alignment (tone, voice, readability)",
  "Optional formatting-ready manuscript for production"
];

export default function EditingDeliverables({
  title = "What You’ll Receive",
  deliverables = defaultDeliverables
}) {
  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0B1B3B] mb-6 text-center">{title}</h2>
        <ul className="space-y-4">
          {deliverables.map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 text-base font-sans text-[#0B1B3B]">
              {/* Optional check icon */}
              <span className="inline-block w-6 h-6 rounded-full bg-[#EB6358]/10 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4 9l4 4 6-6" stroke="#EB6358" strokeWidth="2" fill="none"/></svg>
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
