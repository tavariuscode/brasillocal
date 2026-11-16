import { ArtigoBlog, Parceiro, TemaCategoria } from "@/types/brasillocal";
import Navbar from "../organisms/NavBar";
import HeroSearch from "../organisms/HeroSearch";
import CategoryBar from "../organisms/CategoryBar";
import PartnerGrid from "../organisms/PartnerGrid";
import BlogSection from "../organisms/BlogSection";
import Footer from "../organisms/Footer";

interface HomeTemplateProps {
  localizacao: string;
  busca: string;
  onChangeBusca: (valor: string) => void;
  temas: TemaCategoria[];
  temaAtivo: TemaCategoria;
  onSelectTema: (tema: TemaCategoria) => void;
  parceiros: Parceiro[];
  artigos: ArtigoBlog[];
}

export default function HomeTemplate({
  localizacao,
  busca,
  onChangeBusca,
  temas,
  temaAtivo,
  onSelectTema,
  parceiros,
  artigos,
}: HomeTemplateProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <HeroSearch
        localizacao={localizacao}
        busca={busca}
        onChangeBusca={onChangeBusca}
      />
      <CategoryBar
        temas={temas}
        temaAtivo={temaAtivo}
        onSelectTema={onSelectTema}
      />
      <PartnerGrid temaAtivo={temaAtivo} parceiros={parceiros} />
      <BlogSection artigos={artigos} />
      <Footer />
    </div>
  );
}
