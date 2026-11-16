import Button from "../atoms/Button";

export default function Navbar() {
  return (
    <nav className="bg-slate-950 text-white px-4 py-3 border-b border-slate-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <span className="text-xl font-extrabold tracking-tight">
          Brasil<span className="text-emerald-400">Local</span>
        </span>
        <Button
          href="#seja-parceiro"
          variant="cta"
          className="text-xs sm:text-sm px-3 py-1.5 rounded-full"
        >
          Divulgar minha marca
        </Button>
      </div>
    </nav>
  );
}
