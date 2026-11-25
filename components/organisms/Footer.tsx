import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 px-4 mt-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <div>
          <span className="text-white font-extrabold text-base">
            Brasil<span className="text-emerald-400">Local</span>
          </span>
          <p className="text-xs mt-1">
            Conectando pessoas às melhores experiências, artistas e negócios locais.
          </p>
        </div>

        <Link
          href="/anuncie"
          className="text-xs font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-4"
        >
          Quer divulgar sua marca ou serviço? Seja Parceiro →
        </Link>
      </div>
    </footer>
  );
}
