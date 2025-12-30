import React from "react";

export default function EditingBeforeAfter({
  title = "A Quick Before & After",
  exampleBefore = "John walked into the room and it was very dark and he felt really scared because he didn’t know what was going to happen next.",
  exampleAfter = "John stepped into the dark room, a quiet fear tightening in his chest as the unknown pressed closer."
}) {
  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#0B1B3B] mb-6 text-center">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
          <div className="bg-[#0B1B3B]/5 rounded-xl p-6">
            <h3 className="text-lg font-serif font-bold text-[#EB6358] mb-2">Before</h3>
            <p className="text-base font-sans text-[#0B1B3B]">{exampleBefore}</p>
          </div>
          <div className="bg-[#EB6358]/5 rounded-xl p-6">
            <h3 className="text-lg font-serif font-bold text-[#0B1B3B] mb-2">After</h3>
            <p className="text-base font-sans text-[#0B1B3B]">{exampleAfter}</p>
          </div>
        </div>
        <div className="text-center text-[#0B1B3B] font-sans text-base mt-2">
          This is what line editing does—clarity, rhythm, and impact.
        </div>
      </div>
    </section>
  );
}
