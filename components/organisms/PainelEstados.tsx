"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { EstadoItem, RegiaoBrasil } from "@/types/brasillocal";
import { TODOS_ESTADOS, REGIOES_BRASIL } from "@/data/mockBrasilLocal";

interface PainelEstadosProps {
  estadoSelecionado: string;
  onSelecionarEstado: (sigla: string) => void;
}

export default function PainelEstados({
  estadoSelecionado,
  onSelecionarEstado,
}: PainelEstadosProps) {
  const router = useRouter();
  const [regiaoAtiva, setRegiaoAtiva] = useState<RegiaoBrasil>("Todos");
  const [estadoComFoco, setEstadoComFoco] = useState<EstadoItem | null>(null);

  const estadosFiltrados =
    regiaoAtiva === "Todos"
      ? TODOS_ESTADOS
      : TODOS_ESTADOS.filter((e) => e.regiao === regiaoAtiva);

  const handleTrocaRegiao = (regiao: RegiaoBrasil) => {
    setRegiaoAtiva(regiao);
    setEstadoComFoco(null);
    onSelecionarEstado("TODOS");
  };

  const handleClicarEstado = (estado: EstadoItem) => {
    if (estadoComFoco?.sigla === estado.sigla) {
      setEstadoComFoco(null);
      onSelecionarEstado("TODOS");
    } else {
      setEstadoComFoco(estado);
      onSelecionarEstado(estado.sigla);
    }
  };

  const irParaPaginaDoEstado = (sigla: string) => {
    router.push(`/estados/${sigla.toLowerCase()}`);
  };

  return (
    <section className="my-8 sm:my-10 relative">
      {/* Cabeçalho e Botões com Todas as Regiões do Brasil */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-5">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-800">
            Explore por Região
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Escolha entre Norte, Nordeste, Centro-Oeste, Sudeste ou Sul e toque no estado
          </p>
        </div>

        {/* Filtro das 5 Regiões */}
        <div className="flex items-center gap-1.5 bg-slate-200/80 p-1.5 rounded-xl overflow-x-auto max-w-full">
          {REGIOES_BRASIL.map((regiao) => {
            const ativo = regiaoAtiva === regiao;
            return (
              <button
                key={regiao}
                onClick={() => handleTrocaRegiao(regiao)}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  ativo
                    ? "bg-white text-slate-800 shadow-xs"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {regiao}
              </button>
            );
          })}
        </div>
      </div>

      {/* Carrossel Horizontal de Estados da Região */}
      <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-3">
        {estadosFiltrados.map((estado) => {
          const isSelected =
            estadoComFoco?.sigla === estado.sigla ||
            estadoSelecionado === estado.sigla;

          return (
            <div
              key={estado.sigla}
              onClick={() => handleClicarEstado(estado)}
              style={{
                backgroundColor: isSelected ? estado.tema.corSuave : "#ffffff",
                borderColor: isSelected ? estado.tema.corPrincipal : "#e2e8f0",
                boxShadow: isSelected
                  ? `0 8px 16px ${estado.tema.corSuave}`
                  : undefined,
              }}
              className={`flex-none w-36 sm:w-40 p-4 sm:p-5 rounded-xl cursor-pointer text-center transition-all duration-200 border ${
                isSelected
                  ? "border-2 -translate-y-0.5"
                  : "hover:border-slate-300 shadow-2xs"
              }`}
            >
              <div
                style={{ color: estado.tema.corPrincipal }}
                className="text-2xl font-extrabold"
              >
                {estado.sigla}
              </div>
              <div className="font-bold text-sm sm:text-base my-1 text-slate-800 truncate">
                {estado.nome}
              </div>
              <div
                style={{
                  color: isSelected ? estado.tema.corTexto : "#718096",
                }}
                className={`text-xs ${
                  isSelected ? "font-semibold" : "font-normal"
                }`}
              >
                {estado.quantidadeServicos} serviços
              </div>
            </div>
          );
        })}
      </div>

      {/* Painel Flutuante Colorido do Estado */}
      {estadoComFoco && (
        <div
          style={{
            backgroundColor: estadoComFoco.tema.corSuave,
            borderColor: estadoComFoco.tema.corPrincipal,
          }}
          className="mt-5 p-5 sm:p-7 border rounded-2xl shadow-sm transition-all duration-300"
        >
          <div className="flex justify-between items-start gap-4 mb-4">
            <div>
              <span
                style={{ backgroundColor: estadoComFoco.tema.corPrincipal }}
                className="inline-block text-white px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider"
              >
                Região {estadoComFoco.regiao}
              </span>
              <h3
                style={{ color: estadoComFoco.tema.corTexto }}
                className="mt-2 text-xl sm:text-2xl font-extrabold"
              >
                🌴 Descubra {estadoComFoco.nome}
              </h3>
            </div>

            <button
              onClick={() => {
                setEstadoComFoco(null);
                onSelecionarEstado("TODOS");
              }}
              style={{ color: estadoComFoco.tema.corTexto }}
              className="text-xl font-bold p-1 hover:opacity-70 cursor-pointer"
              aria-label="Fechar"
            >
              ✕
            </button>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm font-semibold mb-2">
            Principais rotas e atividades recomendadas:
          </p>
          <ul className="mb-6 pl-5 list-disc text-slate-800 text-sm sm:text-base space-y-1.5">
            {estadoComFoco.destaques.map((item, idx) => (
              <li key={idx}>
                <strong>{item}</strong>
              </li>
            ))}
          </ul>

          <button
            onClick={() => irParaPaginaDoEstado(estadoComFoco.sigla)}
            style={{ backgroundColor: estadoComFoco.tema.corPrincipal }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl text-white font-bold text-sm hover:opacity-95 transition-opacity cursor-pointer shadow-xs"
          >
            Ver página completa de {estadoComFoco.nome} →
          </button>
        </div>
      )}
    </section>
  );
}
