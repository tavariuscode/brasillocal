import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-white border-b border-slate-200 px-4 sm:px-8 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold text-blue-600 flex items-center gap-2"
        >
          <span>📍</span>
          <span>BrasilLocal</span>
        </Link>

        <a
          href="#seja-parceiro"
          className="text-xs sm:text-sm font-semibold text-blue-600 hover:bg-blue-50 border border-blue-200 px-4 py-2 rounded-lg transition-colors"
        >
          Divulgar meu negócio
        </a>
      </div>
    </header>
  );
}
