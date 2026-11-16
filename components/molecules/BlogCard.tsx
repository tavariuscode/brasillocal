import Link from "next/link";
import { ArtigoBlog } from "@/types/brasillocal";

interface BlogCardProps {
  artigo: ArtigoBlog;
}

export default function BlogCard({ artigo }: BlogCardProps) {
  return (
    <article className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex flex-col sm:flex-row">
      <img
        src={artigo.imagem}
        alt={artigo.titulo}
        className="w-full sm:w-44 h-48 sm:h-auto object-cover"
      />
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-xs font-semibold text-emerald-700">
            {artigo.categoria}
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1 mb-2">
            {artigo.titulo}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            {artigo.resumo}
          </p>
        </div>

        <Link
          href={artigo.parceiroSlug}
          className="inline-flex items-center text-xs sm:text-sm font-bold text-emerald-700 hover:text-emerald-800"
        >
          {artigo.parceiroNome} →
        </Link>
      </div>
    </article>
  );
}
