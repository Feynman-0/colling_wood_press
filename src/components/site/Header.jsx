"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Ghostwriting", href: "/ghostwriting" },
  { name: "Editing", href: "/editing" },
  { name: "Publishing", href: "/publishing" },
  { name: "Marketing", href: "/marketing" },
  { name: "Audiobook", href: "/audiobook" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-black/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-2 gap-2">
        {/* Top bar */}
        <div className="w-full flex flex-row items-center justify-between text-xs text-black/80 mb-1">
          <span className="hidden sm:inline">info@collingwoodpress.com</span>
          <span className="font-bold text-center w-full md:w-auto">COLLINGWOOD PRESS</span>
          <span className="hidden sm:inline">+1 (844) 915-2665</span>
        </div>
        {/* Nav + CTA */}
        <nav className="flex flex-row items-center gap-2 md:gap-4 w-full justify-center md:justify-start">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1 rounded-full font-semibold text-sm transition-colors duration-150 hover:bg-black hover:text-white ${pathname === link.href ? "bg-black text-white" : "bg-white text-black border border-black/10"}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="w-full md:w-auto flex justify-end mt-2 md:mt-0">
          <Link
            href="/submit-manuscript"
            className="bg-[#0B1B3B] text-white font-semibold px-4 py-2 rounded-md border-2 border-black shadow-[4px_4px_0_#000] hover:bg-[#F97316] transition-colors duration-200"
          >
            Submit Your Manuscript
          </Link>
        </div>
      </div>
    </header>
  );
}
