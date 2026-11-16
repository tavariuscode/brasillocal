import Button from "../atoms/Button";

interface SearchBarProps {
  busca: string;
  onChangeBusca: (valor: string) => void;
}

export default function SearchBar({ busca, onChangeBusca }: SearchBarProps) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col sm:flex-row gap-2 bg-white p-1.5 rounded-xl shadow-lg"
    >
      <input
        type="text"
        value={busca}
        onChange={(e) => onChangeBusca(e.target.value)}
        placeholder="Busque por praias, museus, guias turísticos..."
        className="flex-1 px-4 py-3 text-slate-800 text-sm sm:text-base rounded-lg focus:outline-none"
      />
      <Button
        type="submit"
        variant="primary"
        className="px-6 py-3 rounded-lg text-sm sm:text-base"
      >
        Buscar
      </Button>
    </form>
  );
}
