"use client";

import { useState } from "react";

interface OrcamentoShowFormProps {
  nomeArtista: string;
  whatsapp: string;
  corBotao: string;
}

export default function OrcamentoShowForm({
  nomeArtista,
  whatsapp,
  corBotao,
}: OrcamentoShowFormProps) {
  const [nomeContratante, setNomeContratante] = useState("");
  const [dataEvento, setDataEvento] = useState("");
  const [cidadeEvento, setCidadeEvento] = useState("");
  const [tipoEvento, setTipoEvento] = useState("Festa / Evento Privado");

  const handleEnviarWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const dataFormatada = dataEvento
      ? dataEvento.split("-").reverse().join("/")
      : "A definir";

    const textoMensagem = [
      `Olá! Gostaria de solicitar um orçamento de show para *${nomeArtista}* (via Portal Brasil Local).`,
      ``,
      `👤 *Contratante:* ${nomeContratante || "Não informado"}`,
      `📅 *Data prevista:* ${dataFormatada}`,
      `📍 *Cidade/Local:* ${cidadeEvento || "A definir"}`,
      `🎉 *Tipo de evento:* ${tipoEvento}`,
    ].join("\n");

    const numeroLimpo = whatsapp.replace(/\D/g, "");
    const urlWhats = new URL("https://wa.me");
    urlWhats.pathname = numeroLimpo;
    urlWhats.searchParams.set("text", textoMensagem);

    window.open(urlWhats.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-7 shadow-lg text-white">
      <div className="mb-5">
        <span className="inline-block bg-amber-500/20 text-amber-400 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
          Contratação Direta
        </span>
        <h2 className="text-lg sm:text-xl font-extrabold">
          Consultar Data e Orçamento de Show
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Preencha os detalhes abaixo para enviar sua proposta direto no WhatsApp da produção.
        </p>
      </div>

      <form onSubmit={handleEnviarWhatsApp} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              Seu nome ou empresa *
            </label>
            <input
              type="text"
              required
              value={nomeContratante}
              onChange={(e) => setNomeContratante(e.target.value)}
              placeholder="Ex: João Silva / Casa de Shows..."
              className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              Data prevista do evento *
            </label>
            <input
              type="date"
              required
              value={dataEvento}
              onChange={(e) => setDataEvento(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              Cidade e Estado *
            </label>
            <input
              type="text"
              required
              value={cidadeEvento}
              onChange={(e) => setCidadeEvento(e.target.value)}
              placeholder="Ex: Fortaleza - CE"
              className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1.5">
              Tipo de evento
            </label>
            <select
              value={tipoEvento}
              onChange={(e) => setTipoEvento(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-amber-500"
            >
              <option value="Festa / Evento Privado">Festa / Evento Privado</option>
              <option value="Casa de Shows / Bar">Casa de Shows / Bar</option>
              <option value="Vaquejada / Cavalgada">Vaquejada / Cavalgada</option>
              <option value="Evento Público / Prefeitura">Evento Público / Prefeitura</option>
              <option value="Casamento / Formatura">Casamento / Formatura</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className={`w-full py-3.5 px-6 rounded-xl font-extrabold text-sm sm:text-base transition-transform active:scale-95 cursor-pointer shadow-md ${corBotao}`}
        >
          💬 Enviar Consulta de Data no WhatsApp
        </button>
      </form>
    </section>
  );
}
