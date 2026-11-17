import { ArtigoBlog, Parceiro, TemaCategoria } from "@/types/brasillocal";
import Navbar from "../organisms/NavBar";
import HeroSearch from "../organisms/HeroSearch";
import PainelEstados from "../organisms/PainelEstados";
import PartnerGrid from "../organisms/PartnerGrid";
import BlogSection from "../organisms/BlogSection";
import Footer from "../organisms/Footer";

interface HomeTemplateProps {
  busca: string;
  onChangeBusca: (valor: string) => void;
  estadoSelecionado: string;
  onSelecionarEstado: (sigla: string) => void;
  temas: TemaCategoria[];
  temaAtivo: TemaCategoria;
  onSelectTema: (tema: TemaCategoria) => void;
  parceiros: Parceiro[];
  artigos: ArtigoBlog[];
}

export default function HomeTemplate({
  busca,
  onChangeBusca,
  estadoSelecionado,
  onSelecionarEstado,
  temas,
  temaAtivo,
  onSelectTema,
  parceiros,
  artigos,
}: HomeTemplateProps) {
  return (
    <div className="min-h-screen bg-[#f7fafc] text-slate-800">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-5 py-6 sm:py-10">
        {/* Localização e Barra de Busca */}
        <HeroSearch busca={busca} onChangeBusca={onChangeBusca} />

        {/* Filtro com Todas as Regiões do Brasil e Estados Coloridos */}
        <PainelEstados
          estadoSelecionado={estadoSelecionado}
          onSelecionarEstado={onSelecionarEstado}
        />

        {/* Barra de Categorias (Turismo, Hotelaria, Shows, etc.) */}
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
            Filtrar por categoria:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {temas.map((tema) => {
              const ativo = temaAtivo === tema;
              return (
                <button
                  key={tema}
                  onClick={() => onSelectTema(tema)}
                  className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                    ativo
                      ? "bg-slate-800 text-white"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {tema}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grade de Cards Filtrados */}
        <PartnerGrid
          estadoSelecionado={estadoSelecionado}
          temaAtivo={temaAtivo}
          parceiros={parceiros}
        />
      </main>

      <BlogSection artigos={artigos} />
      <Footer />
    </div>
  );
}
