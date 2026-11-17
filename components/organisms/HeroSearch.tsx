"use client";

import { useState, useEffect } from "react";

interface HeroSearchProps {
  busca: string;
  onChangeBusca: (valor: string) => void;
}

export default function HeroSearch({ busca, onChangeBusca }: HeroSearchProps) {
  const [localidade, setLocalidade] = useState<string>("Carregando localização...");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLocalidade("Fortaleza, Ceará");
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-[#f0f4f8] rounded-xl p-6 sm:p-10 text-center border border-slate-200/60">
      <div className="inline-flex items-center gap-2 mb-3 text-xs sm:text-sm">
        <span>📍</span>
        <strong className="text-[#1a365d]">Você está em: {localidade}</strong>
      </div>

      <h1 className="text-2xl sm:text-4xl font-bold text-slate-800 my-2">
        Para onde você quer ir?
      </h1>
      <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto">
        Explore os melhores passeios, hospedagens, shows, esportes e serviços locais do Brasil.
      </p>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-2.5 max-w-xl mx-auto"
      >
        <input
          type="text"
          value={busca}
          onChange={(e) => onChangeBusca(e.target.value)}
          placeholder="Busque por praias, hotéis, shows, guias..."
          className="w-full sm:w-[380px] px-4 py-3 bg-white rounded-lg border border-slate-300 text-sm text-slate-800 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
        />
        <button
          type="submit"
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-lg cursor-pointer transition-colors"
        >
          Buscar
        </button>
      </form>
    </section>
  );
}
