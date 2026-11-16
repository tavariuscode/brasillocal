import { Parceiro, TemaCategoria } from "@/types/brasillocal";
import PartnerCard from "../molecules/PartnerCard";

interface PartnerGridProps {
  temaAtivo: TemaCategoria;
  parceiros: Parceiro[];
}

export default function PartnerGrid({ temaAtivo, parceiros }: PartnerGridProps) {
  return (
    <main className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-5">
        <h2 className="text-lg sm:text-2xl font-bold text-slate-900">
          Destaques em{" "}
          {temaAtivo === "Todos" ? "todas as categorias" : temaAtivo}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          Toque em um card para acessar a página exclusiva do parceiro
        </p>
      </div>

      {parceiros.length === 0 ? (
        <p className="text-sm text-slate-500 py-8 text-center">
          Nenhum parceiro encontrado para essa busca.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {parceiros.map((item) => (
            <PartnerCard key={item.id} parceiro={item} />
          ))}
        </div>
      )}
    </main>
  );
}
