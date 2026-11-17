interface SearchBarProps {
  busca: string;
  onChangeBusca: (valor: string) => void;
}

export default function SearchBar({ busca, onChangeBusca }: SearchBarProps) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="flex items-center bg-white rounded-2xl sm:rounded-full p-2 shadow-2xl border border-slate-200/80 focus-within:ring-4 focus-within:ring-emerald-500/30 transition-all">
        {/* Ícone de Lupa */}
        <div className="pl-3 sm:pl-4 pr-2 text-slate-400">
          <svg
            xmlns="http://w3.org"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
            />
          </svg>
        </div>

        {/* Campo de Texto */}
        <input
          type="text"
          value={busca}
          onChange={(e) => onChangeBusca(e.target.value)}
          placeholder="Praias, shows, hotéis, passeios..."
          className="flex-1 bg-transparent py-2.5 sm:py-3 px-2 text-slate-800 placeholder-slate-400 text-sm sm:text-base focus:outline-none min-w-0"
        />

        {/* Botão Limpar (aparece só quando tem texto digitado) */}
        {busca && (
          <button
            type="button"
            onClick={() => onChangeBusca("")}
            className="text-slate-400 hover:text-slate-600 px-2 text-xs font-bold"
            aria-label="Limpar busca"
          >
            ✕
          </button>
        )}

        {/* Botão Buscar */}
        <button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl sm:rounded-full transition-all text-sm sm:text-base shrink-0 shadow-md"
        >
          Buscar
        </button>
      </div>
    </form>
  );
}
