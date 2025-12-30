"use client";

const introParagraph =
  "Frankly is more than just a marketing tool—it's your gateway to unlocking your book's full potential. Created for authors who aim to make a meaningful impact, Frankly gives you the power to expand your readership and build lasting connections with fans, all while maintaining control over your brand. With this all-in-one platform, you'll achieve new levels of visibility and engagement, freeing up more time for creativity and storytelling. Whether you're a debut author or an established writer, Frankly ensures your message reaches the right audience, making your journey as an author both smoother and more successful.";

const features = [
  {
    title: "ALL-IN-ONE MARKETING PLATFORM FOR AUTHORS",
    body:
      "Say goodbye to multiple subscriptions and complex tools. Frankly brings all you need to market your book in one intuitive platform, simplifying your promotion process.",
    tone: "bg-[#FFF3CC]",
  },
  {
    title: "TIME-SAVING AUTOMATION TOOLS",
    body:
      "Let Frankly handle the time-consuming tasks. With automated social posts, email campaigns, and marketing workflows, you’ll have more time to focus on writing while Frankly manages your book’s online presence.",
    tone: "bg-[#FFE1E1]",
  },
  {
    title: "REAL-TIME AUDIENCE INSIGHTS",
    body:
      "Discover what your readers love through real-time analytics, allowing you to adjust strategies based on reader behavior, interests, and feedback.",
    tone: "bg-[#DFF7E6]",
  },
  {
    title: "AFFORDABLE PUBLICIST ALTERNATIVE",
    body:
      "Get the impact of a marketing team for a fraction of the cost. Frankly equips indie authors with professional tools to promote their books affordably and effectively.",
    tone: "bg-[#F4DFFF]",
  },
  {
    title: "STREAMLINED COMMUNITY ENGAGEMENT",
    body:
      "Build and sustain meaningful reader relationships effortlessly with SMS and email automation. Keep your audience engaged and updated with minimal manual effort.",
    tone: "bg-[#DFF0FF]",
  },
  {
    title: "READY-TO-USE MARKETING TEMPLATES",
    body:
      "Access professional, easy-to-use templates for landing pages, email sequences, and social media posts, ensuring consistent branding and quality with every communication.",
    tone: "bg-[#E8E8E8]",
  },
  {
    title: "PERSONALIZED READER ENGAGEMENT",
    body:
      "Segment your audience to deliver tailored messages to the right readers, fostering stronger connections and boosting engagement.",
    tone: "bg-[#E3DEFF]",
  },
  {
    title: "HOST VIRTUAL EVENTS AND BOOK READINGS",
    body:
      "From virtual book launches to live readings, host immersive events through Frankly, connecting with readers directly and creating memorable experiences.",
    tone: "bg-[#FFD7EB]",
  },
  {
    title: "CROSS-PROMOTION MADE SIMPLE",
    body:
      "Collaborate with other authors using built-in cross-promotion tools, expanding your reach and audience through shared campaigns and partnerships.",
    tone: "bg-[#DFFCF5]",
  },
  {
    title: "REVENUE AND REVIEW BOOSTING TOOLS",
    body:
      "Increase sales and gather reviews with automated follow-ups, abandoned cart reminders, and referral programs—all designed to drive growth and positive feedback.",
    tone: "bg-[#E3E9FF]",
  },
];

function FeatureCard({ title, body, tone }) {
  return (
    <div
      className={[
        "h-full rounded-2xl overflow-hidden",
        // ✅ Thin outline around the entire card (super subtle)
        "border border-[#0B1B3B]/10",
        "bg-white",
        "shadow-[0_16px_40px_rgba(0,0,0,0.08)]",
        "transition-all duration-200 ease-out",
        "hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(0,0,0,0.12)]",
        "font-sans",
      ].join(" ")}
    >
      {/* ✅ Header band with its own thin outline */}
      <div
        className={[
          tone,
          "px-5 py-4",
          // thin line to separate header from body
          "border-b border-[#0B1B3B]/10",
          // ✅ thin outline around header area itself
          "outline outline-1 outline-[#0B1B3B]/10 -outline-offset-1",
        ].join(" ")}
      >
        <h3 className="font-sans font-extrabold uppercase tracking-wide text-[13px] leading-snug text-[#0B1B3B]">
          {title}
        </h3>
      </div>

      <div className="px-5 py-5">
        <p className="font-sans text-[14.5px] leading-7 text-black/80">
          {body}
        </p>
      </div>
    </div>
  );
}

export default function MarketingKeyFeaturesIntro() {
  return (
    <section className="w-full bg-[#e8f6f6] py-16 px-2 md:px-0">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-serif font-extrabold text-3xl md:text-5xl text-[#0B1B3B] mb-2 leading-tight">
          Frankly, It&apos;s Time to Market Your Book Like a Pro!
        </h2>

        <div className="flex justify-center mb-6">
          <svg
            viewBox="0 0 400 12"
            width="38%"
            height="12"
            xmlns="http://www.w3.org/2000/svg"
            style={{ display: "block" }}
          >
            <path
              d="M8 8 Q 100 14 200 10 Q 300 6 392 10"
              stroke="#0B1B3B"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        <p className="max-w-3xl mx-auto text-base md:text-lg text-[#232323] leading-7 mb-12 font-sans">
          {introParagraph}
        </p>
      </div>

      {/* Key Features pill (shape stays same) */}
      <div className="w-full flex justify-center">
        <div
          className="max-w-3xl w-full bg-[#f6fafb] border border-[#0B1B3B] rounded-full px-6 md:px-16 py-4 md:py-6 flex items-center justify-center mb-2 transition-colors duration-300 cursor-pointer shadow-sm hover:bg-[#EB6358] hover:border-[#EB6358] group"
          style={{ boxShadow: "0 2px 12px 0 rgba(11,27,59,0.08)" }}
        >
          <span className="text-2xl md:text-4xl font-bold font-sans text-[#0B1B3B] text-center w-full select-none transition-colors duration-300 group-hover:text-white">
            Key Features
          </span>
        </div>
      </div>

      {/* Features grid */}
      <div className="w-full mt-10">
        <div className="max-w-6xl mx-auto px-2 md:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {features.slice(0, 8).map((f) => (
              <FeatureCard
                key={f.title}
                title={f.title}
                body={f.body}
                tone={f.tone}
              />
            ))}
          </div>

          {/* last row centered (2 cards) */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 xl:max-w-3xl xl:mx-auto">
            {features.slice(8).map((f) => (
              <FeatureCard
                key={f.title}
                title={f.title}
                body={f.body}
                tone={f.tone}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
