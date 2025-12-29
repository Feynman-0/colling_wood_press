import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#e8f6f6] border-t border-black/10 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-black/80">
        <div className="font-bold text-lg mb-2 md:mb-0">COLLINGWOOD PRESS</div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="flex flex-col gap-1">
            <span className="font-semibold">Quick Links</span>
            <Link href="/ghostwriting">Ghostwriting</Link>
            <Link href="/editing">Editing</Link>
            <Link href="/publishing">Publishing</Link>
            <Link href="/marketing">Marketing</Link>
            <Link href="/audiobook">Audiobook</Link>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-semibold">Contact</span>
            <span>info@collingwoodpress.com</span>
            <span>+1 (844) 915-2665</span>
          </div>
        </div>
        <div className="text-xs text-black/50 mt-4 md:mt-0">&copy; {new Date().getFullYear()} Collingwood Press. All rights reserved.</div>
      </div>
    </footer>
  );
}
