import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-slate-200 px-4 sm:px-5 py-3.5 sticky top-0 z-20">
      <div className="max-w-6xl mx-auto flex justify-between items-center gap-3">
        <Link
          href="/"
          className="text-lg sm:text-xl font-extrabold text-blue-600 flex items-center gap-1.5"
        >
          <span>📍</span>
          <span>BrasilLocal</span>
        </Link>

        <Link
          href="/anuncie"
          className="px-3.5 sm:px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs sm:text-sm font-bold transition-colors whitespace-nowrap shadow-2xs"
        >
          + Seja Parceiro
        </Link>
      </div>
    </header>
  );
}
