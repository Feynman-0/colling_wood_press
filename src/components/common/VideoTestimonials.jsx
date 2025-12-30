"use client";
import { useState, useRef, useEffect } from "react";

const videos = [
  {
    name: "Jane Doe",
    role: "Author of 'Bright Horizons'",
    thumbnail: "/assets/images/testimonials/thumb-1.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "John Smith",
    role: "Memoir Client",
    thumbnail: "/assets/images/testimonials/thumb-2.jpg",
    videoUrl: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
  },
  {
    name: "Emily Carter",
    role: "Fiction Author",
    thumbnail: "/assets/images/testimonials/thumb-3.jpg",
    videoUrl: "https://www.youtube.com/embed/l9PxOanFjxQ",
  },
  {
    name: "Michael Lee",
    role: "Nonfiction Author",
    thumbnail: "/assets/images/testimonials/thumb-4.jpg",
    videoUrl: "https://www.youtube.com/embed/2vjPBrBU-TM",
  },
  {
    name: "Sophia Turner",
    role: "Children's Book Author",
    thumbnail: "/assets/images/testimonials/thumb-5.jpg",
    videoUrl: "https://www.youtube.com/embed/ZZ5LpwO-An4",
  },
  {
    name: "Carlos Rivera",
    role: "Poetry Client",
    thumbnail: "/assets/images/testimonials/thumb-6.jpg",
    videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0",
  },

  // ✅ Added more cards (placeholders — replace thumb/videoUrl anytime)
  {
    name: "Ava Robinson",
    role: "Marketing Client",
    thumbnail: "/assets/images/testimonials/thumb-7.jpg",
    videoUrl: "https://www.youtube.com/embed/tAGnKpE4NCI",
  },
  {
    name: "Noah Bennett",
    role: "Self-Publishing Author",
    thumbnail: "/assets/images/testimonials/thumb-8.jpg",
    videoUrl: "https://www.youtube.com/embed/fLexgOxsZu0",
  },
  {
    name: "Mia Patel",
    role: "Branding + Marketing",
    thumbnail: "/assets/images/testimonials/thumb-9.jpg",
    videoUrl: "https://www.youtube.com/embed/60ItHLz5WEA",
  },
  {
    name: "Ethan Walker",
    role: "Book Launch Client",
    thumbnail: "/assets/images/testimonials/thumb-10.jpg",
    videoUrl: "https://www.youtube.com/embed/kJQP7kiw5Fk",
  },
];

function getCardsPerView(width) {
  if (width >= 1024) return 4;
  if (width >= 640) return 2;
  return 1;
}

export default function VideoTestimonials() {
  const [current, setCurrent] = useState(0);
  const [modal, setModal] = useState(null);
  const [cardsPerView, setCardsPerView] = useState(4);

  // ✅ auto slide controls
  const [isHovered, setIsHovered] = useState(false);
  const directionRef = useRef(1); // 1 = right, -1 = left
  const currentRef = useRef(0);

  // keep ref in sync so interval always sees latest value
  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  useEffect(() => {
    function handleResize() {
      setCardsPerView(getCardsPerView(window.innerWidth));
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, videos.length - cardsPerView);

  function goLeft() {
    setCurrent((prev) => Math.max(prev - 1, 0));
  }
  function goRight() {
    setCurrent((prev) => Math.min(prev + 1, maxIndex));
  }

  function openModal(idx) {
    setModal(idx);
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    setModal(null);
    document.body.style.overflow = "";
  }

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") closeModal();
    }
    if (modal !== null) {
      window.addEventListener("keydown", onKey);
      return () => window.removeEventListener("keydown", onKey);
    }
  }, [modal]);

  // ✅ Auto-move slow left↔right (pauses on hover + modal open)
  useEffect(() => {
    if (modal !== null) return; // pause when modal is open
    if (isHovered) return; // pause on hover
    if (maxIndex === 0) return; // no need to auto slide

    const interval = setInterval(() => {
      const next = currentRef.current + directionRef.current;

      // bounce logic
      if (next >= maxIndex) {
        directionRef.current = -1;
        setCurrent(maxIndex);
        return;
      }
      if (next <= 0) {
        directionRef.current = 1;
        setCurrent(0);
        return;
      }

      setCurrent(next);
    }, 2200); // ✅ slower speed (increase for even slower)

    return () => clearInterval(interval);
  }, [isHovered, modal, maxIndex]);

  return (
    <section className="w-full bg-[#e8f6f6] py-16 px-2 md:px-0 flex flex-col items-center">
      <div className="max-w-5xl w-full mx-auto text-center mb-8">
        <h2 className="font-serif font-extrabold text-3xl md:text-5xl text-[#0B1B3B] mb-1">
          Video Testimonials
        </h2>
        <p className="text-base md:text-lg text-[#232323] font-sans mb-2">
          See what authors say.
        </p>
      </div>

      <div
        className="relative w-full max-w-6xl mx-auto"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#0B1B3B] rounded-full shadow-md p-2 disabled:opacity-30"
          onClick={goLeft}
          aria-label="Previous testimonials"
          disabled={current === 0}
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="#0B1B3B"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${(100 / cardsPerView) * current}%)` }}
          >
            {videos.map((video, idx) => (
              <div
                key={idx}
                className="group flex-shrink-0 px-2"
                style={{ width: `${100 / cardsPerView}%`, minWidth: 0 }}
              >
                <div
                  className="relative rounded-2xl border border-[#0B1B3B] bg-white shadow-md overflow-hidden cursor-pointer h-64 flex flex-col justify-end"
                  onClick={() => openModal(idx)}
                  tabIndex={0}
                  aria-label={`Play video testimonial from ${video.name}`}
                  onKeyDown={(e) => (e.key === "Enter" ? openModal(idx) : undefined)}
                >
                  <img
                    src={video.thumbnail}
                    alt={`${video.name} testimonial thumbnail`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/80 rounded-full p-3 shadow-md group-hover:scale-110 transition-transform">
                      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
                        <circle cx="19" cy="19" r="19" fill="#0B1B3B" />
                        <polygon points="15,12 28,19 15,26" fill="#fff" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative z-10 p-4 flex flex-col items-start">
                    <span className="font-bold text-[#0B1B3B] text-lg font-sans mb-1 drop-shadow">
                      {video.name}
                    </span>
                    <span className="text-xs text-[#232323] font-sans mb-1">
                      Click to play
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#0B1B3B] rounded-full shadow-md p-2 disabled:opacity-30"
          onClick={goRight}
          aria-label="Next testimonials"
          disabled={current >= maxIndex}
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="#0B1B3B"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {modal !== null && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-2xl text-[#0B1B3B] font-bold bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md"
              onClick={closeModal}
              aria-label="Close video modal"
            >
              ×
            </button>

            <div className="w-full aspect-video rounded-lg overflow-hidden">
              <iframe
                src={videos[modal].videoUrl}
                title={`${videos[modal].name} video testimonial`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0 rounded-lg"
              />
            </div>

            <div className="mt-4 text-center">
              <span className="font-bold text-[#0B1B3B] text-lg font-sans">
                {videos[modal].name}
              </span>
              <span className="block text-xs text-[#232323] font-sans mt-1">
                {videos[modal].role}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
