import { ArtigoBlog, Parceiro, TemaCategoria } from "@/types/brasillocal";
import Navbar from "../organisms/NavBar";
import HeroSearch from "../organisms/HeroSearch";
import PainelEstados from "../organisms/PainelEstados";
import PartnerGrid from "../organisms/PartnerGrid";
import BlogSection from "../organisms/BlogSection";
import Footer from "../organisms/Footer";
import {
  SUBCATEGORIAS_POR_TEMA,
  GENEROS_MUSICAIS,
} from "@/data/mockBrasilLocal";

interface HomeTemplateProps {
  busca: string;
  onChangeBusca: (valor: string) => void;
  estadoSelecionado: string;
  onSelecionarEstado: (sigla: string) => void;
  temas: TemaCategoria[];
  temaAtivo: TemaCategoria;
  onSelectTema: (tema: TemaCategoria) => void;
  subcategoriaAtiva?: string;
  onSelectSubcategoria?: (sub: string) => void;
  generoAtivo?: string;
  onSelectGenero?: (genero: string) => void;
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
  subcategoriaAtiva = "",
  onSelectSubcategoria = () => {},
  generoAtivo = "Todos",
  onSelectGenero = () => {},
  parceiros,
  artigos,
}: HomeTemplateProps) {
  const subcategoriasDisponiveis = SUBCATEGORIAS_POR_TEMA[temaAtivo] || [];

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

        {/* Barra de Categorias (Turismo, Hotelaria, Cultura, Comércio, Saúde, etc.) */}
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
                  type="button"
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

          {/* Nível 2: Subcategorias (Aparece ao clicar em Cultura, Comércio ou Saúde) */}
          {subcategoriasDisponiveis.length > 0 && (
            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-slate-200 overflow-x-auto pb-1">
              <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider mr-1 shrink-0">
                Subcategoria:
              </span>
              {subcategoriasDisponiveis.map((sub) => (
                <button
                  key={sub}
                  type="button"
                  onClick={() => onSelectSubcategoria(sub)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                    subcategoriaAtiva === sub
                      ? "bg-slate-900 text-white shadow-2xs"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}

          {/* Nível 3: Gêneros Musicais (Aparece ao clicar em Cultura -> Gêneros Musicais) */}
          {temaAtivo === "Cultura" &&
            subcategoriaAtiva === "Gêneros Musicais" && (
              <div className="flex items-center gap-2 mt-2.5 pt-2.5 border-t border-dashed border-slate-200 overflow-x-auto pb-1">
                <span className="text-[11px] font-extrabold text-amber-600 uppercase tracking-wider mr-1 shrink-0">
                  🎵 Estilo:
                </span>
                {GENEROS_MUSICAIS.map((genero) => (
                  <button
                    key={genero}
                    type="button"
                    onClick={() => onSelectGenero(genero)}
                    className={`px-3 py-1 rounded-full text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                      generoAtivo === genero
                        ? "bg-amber-500 text-slate-950 shadow-2xs"
                        : "bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100"
                    }`}
                  >
                    {genero}
                  </button>
                ))}
              </div>
            )}
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
