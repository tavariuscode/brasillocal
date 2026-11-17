"use client";

interface CityModalProps {
  aberto: boolean;
  localizacaoAtual: string;
  onSelectCidade: (cidade: string) => void;
  onClose: () => void;
}

const CIDADES_DISPONIVEIS = [
  "Todas as cidades",
  "Fortaleza, Ceará",
  "Aquiraz, Ceará",
  "Guaramiranga, Ceará",
  "Natal, Rio Grande do Norte",
  "Gramado, Rio Grande do Sul",
];

export default function CityModal({
  aberto,
  localizacaoAtual,
  onSelectCidade,
  onClose,
}: CityModalProps) {
  if (!aberto) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-xs p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Cabeçalho do Modal */}
        <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-base text-slate-900">
            Onde você quer explorar?
          </h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 font-bold text-sm p-1"
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>

        {/* Lista de Cidades */}
        <div className="p-4 flex flex-col gap-2 max-h-80 overflow-y-auto">
          {CIDADES_DISPONIVEIS.map((cidade) => {
            const selecionada = localizacaoAtual === cidade;
            return (
              <button
                key={cidade}
                onClick={() => {
                  onSelectCidade(cidade);
                  onClose();
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between transition-colors ${
                  selecionada
                    ? "bg-sky-50 text-sky-700 border border-sky-200"
                    : "hover:bg-slate-50 text-slate-700 border border-transparent"
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="text-sky-600">📍</span>
                  {cidade}
                </span>
                {selecionada && (
                  <span className="text-xs font-extrabold text-sky-600">✓</span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
