import { ArtigoBlog } from "@/types/brasillocal";
import BlogCard from "../molecules/BlogCard";

interface BlogSectionProps {
  artigos: ArtigoBlog[];
}

export default function BlogSection({ artigos }: BlogSectionProps) {
  return (
    <section className="bg-slate-100 border-t border-slate-200 px-4 py-10 mt-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Revista BrasilLocal
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
            Histórias, Entrevistas e Bastidores
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Conheça os artistas, atletas e empreendedores que movimentam a
            cultura local.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {artigos.map((artigo) => (
            <BlogCard key={artigo.id} artigo={artigo} />
          ))}
        </div>
      </div>
    </section>
  );
}
