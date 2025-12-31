"use client";
import { useRef, useEffect, useState } from "react";

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

const initialState = {
  name: "",
  email: "",
  phone: "",
  service: "Audiobook",
  message: "",
};

export default function ContactForm() {
  const ref = useRef(null);
  useScrollReveal(ref);
  const [form, setForm] = useState(initialState);
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  };

  const validate = () => {
    return {
      name: !form.name,
      email: !form.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email),
      message: !form.message,
    };
  };
  const errors = validate();
  const isValid = !errors.name && !errors.email && !errors.message;

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });
    if (isValid) {
      setSubmitted(true);
      setForm(initialState);
    }
  };

  return (
    <section ref={ref} id="form" className="opacity-0 translate-y-8 transition-all duration-700 ease-out py-20 md:py-32 w-full bg-[#f6f7f9]">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1F2A44] mb-8 text-center">Contact Form</h2>
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-lg border border-[#e8edf2] p-8 flex flex-col gap-6">
          <div>
            <label className="block font-bold text-[#1F2A44] mb-2">Full Name *</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 rounded-lg border ${errors.name && touched.name ? "border-[#eb6358]" : "border-[#e8edf2]"} focus:outline-none focus:ring-2 focus:ring-[#eb6358]/30`}
              required
            />
            {errors.name && touched.name && <span className="text-[#eb6358] text-sm">Name is required.</span>}
          </div>
          <div>
            <label className="block font-bold text-[#1F2A44] mb-2">Email *</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full px-4 py-3 rounded-lg border ${errors.email && touched.email ? "border-[#eb6358]" : "border-[#e8edf2]"} focus:outline-none focus:ring-2 focus:ring-[#eb6358]/30`}
              required
            />
            {errors.email && touched.email && <span className="text-[#eb6358] text-sm">Valid email required.</span>}
          </div>
          <div>
            <label className="block font-bold text-[#1F2A44] mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-[#e8edf2] focus:outline-none focus:ring-2 focus:ring-[#eb6358]/30"
            />
          </div>
          <div>
            <label className="block font-bold text-[#1F2A44] mb-2">Service</label>
            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-[#e8edf2] focus:outline-none focus:ring-2 focus:ring-[#eb6358]/30"
            >
              <option>Audiobook</option>
              <option>Publishing</option>
              <option>Marketing</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block font-bold text-[#1F2A44] mb-2">Message *</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={5}
              className={`w-full px-4 py-3 rounded-lg border ${errors.message && touched.message ? "border-[#eb6358]" : "border-[#e8edf2]"} focus:outline-none focus:ring-2 focus:ring-[#eb6358]/30`}
              required
            />
            {errors.message && touched.message && <span className="text-[#eb6358] text-sm">Message is required.</span>}
          </div>
          <button
            type="submit"
            className="mt-4 px-8 py-3 rounded-full bg-[#eb6358] text-white font-bold text-lg shadow hover:bg-[#1F2A44] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#eb6358]/30"
          >
            Send Message
          </button>
          {submitted && (
            <div className="text-center text-[#1F2A44] font-semibold mt-4">Thank you! We’ll be in touch soon.</div>
          )}
        </form>
      </div>
    </section>
  );
}
