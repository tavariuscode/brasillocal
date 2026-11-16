import LocationPill from "../molecules/LocationPill";
import SearchBar from "../molecules/SearchBar";

interface HeroSearchProps {
  localizacao: string;
  busca: string;
  onChangeBusca: (valor: string) => void;
}

export default function HeroSearch({
  localizacao,
  busca,
  onChangeBusca,
}: HeroSearchProps) {
  return (
    <header className="bg-gradient-to-b from-slate-900 to-slate-800 text-white px-4 pt-6 pb-10 md:py-14">
      <div className="max-w-3xl mx-auto">
        <LocationPill localizacao={localizacao} />

        <h1 className="text-2xl sm:text-4xl font-extrabold leading-tight">
          Para onde você quer ir?
        </h1>
        <p className="text-slate-300 text-sm sm:text-base mt-2 mb-6">
          Explore os melhores passeios e serviços turísticos do Brasil.
        </p>

        <SearchBar busca={busca} onChangeBusca={onChangeBusca} />
      </div>
    </header>
  );
}
