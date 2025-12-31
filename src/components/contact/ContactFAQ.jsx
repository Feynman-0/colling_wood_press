"use client";
import { useRef, useEffect, useState } from "react";

const faqs = [
  {
    q: "How quickly will I get a response?",
    a: "We reply to all inquiries within 1 business day, often much faster.",
  },
  {
    q: "What should I include in my message?",
    a: "Please share your goals, book details, and any specific questions so we can help you best.",
  },
  {
    q: "What file formats do you accept?",
    a: "We accept DOCX, PDF, and Google Docs links for manuscripts.",
  },
  {
    q: "How do I get a quote?",
    a: "Use the form or the 'Get a Quote' button below. We'll review your info and send a detailed quote.",
  },
  {
    q: "What happens after I contact you?",
    a: "We'll reach out to discuss your project, answer questions, and outline next steps. No obligation!",
  },
];

function useScrollReveal(ref) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const onScroll = ([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add("opacity-100", "translate-y-0");
      }
    };
    const observer = new window.IntersectionObserver(onScroll, { threshold: 0.2 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);
}

export default function ContactFAQ() {
  const ref = useRef(null);
  useScrollReveal(ref);
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section ref={ref} className="opacity-0 translate-y-8 transition-all duration-700 ease-out py-20 md:py-32 w-full">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44] mb-8 text-center">Contact FAQ</h2>
        <div className="divide-y divide-[#e8edf2] rounded-2xl bg-white shadow border border-[#e8edf2]">
          {faqs.map((faq, i) => (
            <div key={faq.q}>
              <button
                className="w-full text-left px-6 py-5 focus:outline-none flex justify-between items-center group"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-[#1F2A44] text-lg">{faq.q}</span>
                <span className={`ml-4 transform transition-transform duration-300 ${openIndex === i ? "rotate-45 text-[#eb6358]" : "rotate-0 text-[#415a77]"}`}>+</span>
              </button>
              <div
                className={`px-6 pb-5 text-[#415a77] text-base transition-all duration-300 ease-in-out overflow-hidden ${openIndex === i ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                style={{}}
              >
                {openIndex === i && <div>{faq.a}</div>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
