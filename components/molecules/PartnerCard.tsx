import Link from "next/link";
import { Parceiro } from "@/types/brasillocal";

interface PartnerCardProps {
  parceiro: Parceiro;
}

export default function PartnerCard({ parceiro }: PartnerCardProps) {
  const mensagemWhats = encodeURIComponent(
    `Olá, ${parceiro.nome}! Vi sua oferta no BrasilLocal e gostaria de saber mais.`
  );

  return (
    <article className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        {/* Imagem do Card */}
        <Link href={`/${parceiro.slug}`} className="block relative">
          <img
            src={parceiro.imagem}
            alt={parceiro.nome}
            className="w-full h-44 object-cover"
          />
        </Link>

        {/* Informações Principais */}
        <div className="p-4 pb-0">
          <div className="flex items-center justify-between gap-2">
            <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs font-bold">
              {parceiro.siglaEstado} • {parceiro.tema}
            </span>
            <span className="text-xs text-slate-400">{parceiro.cidade}</span>
          </div>

          <Link href={`/${parceiro.slug}`}>
            <h3 className="text-base sm:text-lg font-bold text-slate-800 mt-3 mb-1 hover:text-blue-600 transition-colors">
              {parceiro.destaqueOferta || parceiro.nome}
            </h3>
          </Link>
          <p className="text-xs text-slate-500 mb-3">{parceiro.nome}</p>

          {/* Preço Original e Promocional (quando cadastrado) */}
          {parceiro.precoPromocional && (
            <div className="flex items-baseline gap-2 mb-4">
              {parceiro.precoOriginal && (
                <span className="line-through text-slate-400 text-xs sm:text-sm">
                  R$ {parceiro.precoOriginal.toFixed(2).replace(".", ",")}
                </span>
              )}
              <span className="text-red-600 text-xl sm:text-2xl font-bold">
                R$ {parceiro.precoPromocional.toFixed(2).replace(".", ",")}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Painel de Conexão Direta com o Parceiro */}
      <div className="p-4 pt-3 border-t border-slate-100 mt-2">
        <span className="text-[11px] text-slate-500 font-bold uppercase block mb-2">
          Falar com o parceiro:
        </span>

        {/* Links Sociais em Linha (Instagram e Site) */}
        {(parceiro.instagramUrl || parceiro.siteUrl) && (
          <div className="flex gap-2 mb-2">
            {parceiro.instagramUrl && (
              <a
                href={parceiro.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 px-2 bg-pink-50 hover:bg-pink-100 text-pink-700 border border-pink-200 rounded-md text-xs font-semibold text-center transition-colors"
              >
                📸 Instagram
              </a>
            )}
            {parceiro.siteUrl && (
              <a
                href={parceiro.siteUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 px-2 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 rounded-md text-xs font-semibold text-center transition-colors"
              >
                🌐 Site
              </a>
            )}
          </div>
        )}

        {/* Botão WhatsApp + Página Exclusiva */}
        <div className="flex gap-2">
          <a
            href={`https://wa.me{parceiro.whatsapp}?text=${mensagemWhats}`}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md text-xs font-bold text-center transition-colors"
          >
            💬 WhatsApp
          </a>
          <Link
            href={`/${parceiro.slug}`}
            className="py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-xs font-bold text-center transition-colors"
          >
            Ver Página
          </Link>
        </div>
      </div>
    </article>
  );
}
