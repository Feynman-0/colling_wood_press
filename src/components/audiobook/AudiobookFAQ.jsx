"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function AudiobookFAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const faqs = [
    {
      question: "IS GETTING AN AUDIOBOOK QUOTE A COMMITMENT TO MOVE FORWARD?",
      answer:
        "No. The quote is a free, non-binding estimate based on your word count, genre, and production needs. It’s designed to clarify scope, timeline, and deliverables—so you can decide with confidence.",
    },
    {
      question: "WHAT DO YOU NEED FROM ME TO START?",
      answer:
        "Usually: your manuscript (final or near-final), your narration preference (author narration or voice talent), and any pronunciation notes or style references. We’ll handle the production plan, milestones, and delivery checklist.",
    },
    {
      question: "CAN I NARRATE THE AUDIOBOOK MYSELF?",
      answer:
        "Yes. Many authors narrate their own books. We can guide you on setup, pacing, and performance, and then handle full post-production—editing, noise cleanup, mastering, and platform-ready exports.",
    },
    {
      question: "DO YOU PROVIDE PROFESSIONAL VOICE TALENT?",
      answer:
        "Yes. If you prefer a professional narrator, we can help you select voice talent based on tone, genre fit, and audience expectations. You’ll review samples before anything is finalized.",
    },
    {
      question: "HOW LONG DOES AUDIOBOOK PRODUCTION TAKE?",
      answer:
        "Timelines depend on finished hours, schedule availability, and complexity. In general, production runs in stages—recording, editing, mastering, and quality control—so we’ll share a clear timeline once we review your manuscript details.",
    },
    {
      question: "WHAT DOES “FINISHED HOURS” MEAN, AND WHY DOES IT MATTER?",
      answer:
        "Finished hours refers to the final runtime of the completed audiobook after editing and mastering. It’s the standard way audiobook production is scoped and priced, because it reflects the total recording and post-production workload.",
    },
    {
      question: "WILL MY AUDIOBOOK MEET AUDIBLE / ACX TECHNICAL REQUIREMENTS?",
      answer:
        "Yes. We master audio to meet common platform standards and deliver organized chapter files with consistent levels. If you’re publishing through ACX/Audible, we can also guide you through the upload structure and checks.",
    },
    {
      question: "DO YOU INCLUDE PROOF LISTENING AND QUALITY CONTROL?",
      answer:
        "Yes. Depending on the package, we include proof listening and a QC pass to check pacing, consistency, and technical issues. If anything needs correction, we handle revisions so the final delivery is clean and compliant.",
    },
    {
      question: "HOW DO I SUBMIT MY MANUSCRIPT FOR AUDIOBOOK PRODUCTION?",
      answer:
        "Click the “Submit Your Manuscript” button on this page and complete the form. Once we review your details, we’ll reply with the next steps, timeline, and a production plan tailored to your book.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className={`py-24 bg-gradient-to-br from-white via-[#F6F7F9] to-[#E8EDF2] relative overflow-hidden transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#415a77]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tl from-[#1F2A44]/10 to-transparent rounded-full blur-3xl"></div>

        {/* Question Mark Icons */}
        <div className="absolute top-32 left-12 opacity-5">
          <svg className="w-20 h-20 text-[#415a77]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
          </svg>
        </div>
        <div className="absolute bottom-40 right-16 opacity-5">
          <svg className="w-16 h-16 text-[#1F2A44]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" />
          </svg>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#415a77]"></div>
            <svg className="w-8 h-8 text-[#415a77]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
            </svg>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#415a77]"></div>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-[#1F2A44] mb-6">FAQ's</h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Common questions about audiobook production, narration, timelines, and delivery.
          </p>
        </div>

        {/* FAQ Container */}
        <div className="bg-gradient-to-br from-white via-[#FAFBFC] to-[#F6F7F9] rounded-3xl shadow-2xl border-2 border-gray-100 overflow-hidden">
          <div className="divide-y divide-gray-100">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`group transition-all duration-500 ${
                  openIndex === index
                    ? "bg-gradient-to-r from-[#415a77]/5 to-transparent"
                    : "hover:bg-gray-50"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-start gap-5 text-left transition-all duration-300 relative"
                >
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all duration-500 ${
                      openIndex === index
                        ? "bg-gradient-to-br from-[#1F2A44] to-[#415a77] text-white scale-110 shadow-lg"
                        : "bg-[#1F2A44] text-white group-hover:bg-[#EB6358]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <span
                    className={`flex-1 text-base md:text-lg font-bold uppercase leading-tight transition-all duration-300 ${
                      openIndex === index
                        ? "text-[#1F2A44]"
                        : "text-gray-700 group-hover:text-[#1F2A44]"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <div className="flex-shrink-0 relative w-8 h-8">
                    <svg
                      className={`absolute inset-0 w-8 h-8 text-[#1F2A44] transition-all duration-500 ${
                        openIndex === index
                          ? "opacity-100 rotate-0 scale-100"
                          : "opacity-0 rotate-180 scale-50"
                      }`}
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                    </svg>

                    <svg
                      className={`absolute inset-0 w-8 h-8 text-[#415a77] transition-all duration-500 ${
                        openIndex === index
                          ? "opacity-0 rotate-90 scale-50"
                          : "opacity-100 rotate-0 scale-100 group-hover:rotate-90 group-hover:scale-110"
                      } group-hover:text-[#EB6358]`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v12m6-6H6" />
                    </svg>
                  </div>

                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1F2A44] to-[#415a77] transition-all duration-500 ${
                      openIndex === index ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
                    }`}
                  ></div>
                </button>

                <div
                  className={`transition-all duration-700 ease-in-out ${
                    openIndex === index ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                  style={{ overflow: "hidden" }}
                >
                  <div className="px-8 pb-8 pt-2 ml-[60px]">
                    <div className="bg-gradient-to-br from-[#F8F9FB] to-[#F0F3F7] rounded-2xl p-8 border border-[#E5E9F0] shadow-inner">
                      <p className="text-gray-600 text-base leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Still have questions?</p>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-[#1F2A44] to-[#415a77] hover:from-[#EB6358] hover:to-[#D95341] text-white font-bold px-10 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center gap-3"
          >
            <span>Contact Our Team</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
