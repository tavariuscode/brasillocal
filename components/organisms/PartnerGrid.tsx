import { Parceiro, TemaCategoria } from "@/types/brasillocal";
import PartnerCard from "../molecules/PartnerCard";

interface PartnerGridProps {
  estadoSelecionado: string;
  temaAtivo: TemaCategoria;
  parceiros: Parceiro[];
}

export default function PartnerGrid({
  estadoSelecionado,
  temaAtivo,
  parceiros,
}: PartnerGridProps) {
  return (
    <section className="my-10">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-1">
        {estadoSelecionado !== "TODOS"
          ? `📍 Destaques em ${estadoSelecionado}`
          : "🔥 Ofertas e Parceiros em Destaque"}
        {temaAtivo !== "Todos" && ` • ${temaAtivo}`}
      </h2>
      <p className="text-sm text-slate-500 mb-6">
        Entre em contato direto com os guias, artistas e estabelecimentos locais sem taxas extras.
      </p>

      {parceiros.length === 0 ? (
        <div className="text-center p-10 text-slate-500 border border-dashed border-slate-300 rounded-xl bg-white">
          Nenhum parceiro ou oferta cadastrada para este filtro hoje.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {parceiros.map((item) => (
            <PartnerCard key={item.id} parceiro={item} />
          ))}
        </div>
      )}
    </section>
  );
}
