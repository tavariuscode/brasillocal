import { Parceiro } from "@/types/brasillocal";
import Badge from "../atoms/Badge";
import Button from "../atoms/Button";

interface PartnerCardProps {
  parceiro: Parceiro;
}

export default function PartnerCard({ parceiro }: PartnerCardProps) {
  return (
    <article className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <img
        src={parceiro.imagem}
        alt={parceiro.nome}
        className="w-full h-44 object-cover"
      />
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <Badge className={parceiro.corBadge}>{parceiro.tema}</Badge>
          <span className="text-xs text-slate-500">
            {parceiro.cidade}, {parceiro.estado}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 mb-1">
          {parceiro.nome}
        </h3>
        <p className="text-sm text-slate-600 flex-1 mb-4">
          {parceiro.descricao}
        </p>

        <Button
          href={`/${parceiro.slug}`}
          variant="secondary"
          className="w-full py-2.5 px-4 rounded-lg text-sm block"
        >
          Acessar Espaço Oficial
        </Button>
      </div>
    </article>
  );
}
