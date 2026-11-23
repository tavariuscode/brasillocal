"use client";

import { useState, useMemo } from "react";
import { ServicoParceiro } from "@/types/brasillocal";

interface ReservaHotelFormProps {
  nomeHotel: string;
  whatsapp: string;
  acomodacoes: ServicoParceiro[];
  corBotao: string;
  corDestaque: string;
}

export default function ReservaHotelForm({
  nomeHotel,
  whatsapp,
  acomodacoes,
  corBotao,
  corDestaque,
}: ReservaHotelFormProps) {
  const [nomeHospede, setNomeHospede] = useState("");
  const [telefoneHospede, setTelefoneHospede] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adultos, setAdultos] = useState("2");
  const [criancas, setCriancas] = useState("0");
  const [indiceQuarto, setIndiceQuarto] = useState(0);
  const [protocoloGerado, setProtocoloGerado] = useState<string | null>(null);

  const quartoAtual = acomodacoes[indiceQuarto] || acomodacoes[0];

  const valorDiaria = useMemo(() => {
    if (!quartoAtual?.preco) return 0;
    const limpo = quartoAtual.preco.replace(/[^\d,]/g, "").replace(",", ".");
    return parseFloat(limpo) || 0;
  }, [quartoAtual]);

  const totalNoites = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const inicio = new Date(checkIn + "T00:00:00");
    const fim = new Date(checkOut + "T00:00:00");
    const diffTempo = fim.getTime() - inicio.getTime();
    const dias = Math.ceil(diffTempo / (1000 * 60 * 60 * 24));
    return dias > 0 ? dias : 0;
  }, [checkIn, checkOut]);

  const valorTotal = totalNoites * valorDiaria;

  const formatarData = (dataIso: string) => {
    if (!dataIso) return "";
    return dataIso.split("-").reverse().join("/");
  };

  const handleConfirmarNaTela = (e: React.FormEvent) => {
    e.preventDefault();
    if (totalNoites <= 0) {
      alert("A data de Check-out deve ser posterior ao Check-in.");
      return;
    }
    const codigo = "BL-" + Math.floor(1000 + Math.random() * 9000);
    setProtocoloGerado(codigo);
  };

  const gerarLinkWhatsAppComProtocolo = () => {
    const texto = [
      `Olá, *${nomeHotel}*! Acabei de gerar uma pré-reserva pelo *Portal Brasil Local*.`,
      ``,
      `🔖 *Protocolo:* ${protocoloGerado}`,
      `👤 *Hóspede:* ${nomeHospede} (${telefoneHospede})`,
      `🛏️ *Acomodação:* ${quartoAtual?.titulo}`,
      `📅 *Período:* ${formatarData(checkIn)} até ${formatarData(checkOut)} (${totalNoites} diária(s))`,
      `👥 *Pessoas:* ${adultos} adulto(s), ${criancas} criança(s)`,
      valorTotal > 0 ? `💰 *Total estimado:* R$ ${valorTotal.toFixed(2).replace(".", ",")}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const numeroLimpo = whatsapp.replace(/\D/g, "");
    const urlWhats = new URL("https://wa.me");
    urlWhats.pathname = numeroLimpo;
    urlWhats.searchParams.set("text", texto);
    return urlWhats.toString();
  };

  if (protocoloGerado) {
    return (
      <section className="bg-white border-2 border-emerald-500 rounded-2xl p-6 sm:p-8 shadow-md text-slate-900">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
          <div>
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-extrabold uppercase px-3 py-1 rounded-full mb-1">
              ✓ Solicitação Registrada
            </span>
            <h3 className="text-xl font-extrabold text-slate-900">
              Resumo da Pré-Reserva
            </h3>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-400 block">Protocolo</span>
            <strong className="text-lg font-black text-emerald-700">
              #{protocoloGerado}
            </strong>
          </div>
        </div>

        <div className="bg-slate-50 rounded-xl p-4 space-y-2 text-sm mb-6 border border-slate-200/70">
          <p>
            <strong>Hóspede:</strong> {nomeHospede} ({telefoneHospede})
          </p>
          <p>
            <strong>Acomodação:</strong> {quartoAtual?.titulo}
          </p>
          <p>
            <strong>Check-in:</strong> {formatarData(checkIn)} •{" "}
            <strong>Check-out:</strong> {formatarData(checkOut)} ({totalNoites}{" "}
            {totalNoites === 1 ? "noite" : "noites"})
          </p>
          <p>
            <strong>Hóspedes:</strong> {adultos} adulto(s) e {criancas} criança(s)
          </p>
          {valorTotal > 0 && (
            <p className="text-base pt-2 border-t border-slate-200 font-extrabold text-slate-900">
              Valor Total Estimado: R$ {valorTotal.toFixed(2).replace(".", ",")}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href={gerarLinkWhatsAppComProtocolo()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3.5 px-5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm rounded-xl text-center transition-colors"
          >
            💬 Enviar Protocolo para Recepção
          </a>
          <button
            type="button"
            onClick={() => setProtocoloGerado(null)}
            className="py-3.5 px-5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-xl transition-colors cursor-pointer"
          >
            Alterar Datas
          </button>
        </div>
      </section>
    );
  }
  return (
    <section className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-sm text-slate-900">
      <div className="mb-5">
        <span
          className={`inline-block bg-slate-100 text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full mb-2 ${corDestaque}`}
        >
          Simulador & Reserva Online
        </span>
        <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
          Faça sua Reserva em {nomeHotel}
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Selecione as datas e a suíte para calcular o valor total da estadia na hora.
        </p>
      </div>

      <form onSubmit={handleConfirmarNaTela} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Seu nome completo *
            </label>
            <input
              type="text"
              required
              value={nomeHospede}
              onChange={(e) => setNomeHospede(e.target.value)}
              placeholder="Ex: Maria Oliveira"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-teal-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Seu WhatsApp para contato *
            </label>
            <input
              type="tel"
              required
              value={telefoneHospede}
              onChange={(e) => setTelefoneHospede(e.target.value)}
              placeholder="Ex: (85) 99999-9999"
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-teal-600"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Escolha a Suíte / Acomodação
          </label>
          <select
            value={indiceQuarto}
            onChange={(e) => setIndiceQuarto(Number(e.target.value))}
            className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-teal-600"
          >
            {acomodacoes.map((item, idx) => (
              <option key={idx} value={idx}>
                {item.titulo} — {item.preco}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Check-in (Entrada) *
            </label>
            <input
              type="date"
              required
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-teal-600"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Check-out (Saída) *
            </label>
            <input
              type="date"
              required
              min={checkIn}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-teal-600"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Adultos
            </label>
            <select
              value={adultos}
              onChange={(e) => setAdultos(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-teal-600"
            >
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={String(num)}>
                  {num} {num === 1 ? "adulto" : "adultos"}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Crianças
            </label>
            <select
              value={criancas}
              onChange={(e) => setCriancas(e.target.value)}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm text-slate-900 focus:outline-none focus:bg-white focus:border-teal-600"
            >
              {[0, 1, 2, 3, 4].map((num) => (
                <option key={num} value={String(num)}>
                  {num === 0
                    ? "Nenhuma criança"
                    : `${num} ${num === 1 ? "criança" : "crianças"}`}
                </option>
              ))}
            </select>
          </div>
        </div>

        {totalNoites > 0 && valorTotal > 0 && (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-500 block">
                {totalNoites} {totalNoites === 1 ? "diária" : "diárias"} × R${" "}
                {valorDiaria.toFixed(2).replace(".", ",")}
              </span>
              <span className="text-xs font-semibold text-emerald-700">
                ✓ Café da manhã e taxas inclusos
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-500 block">Total estimado</span>
              <strong className={`text-xl font-black ${corDestaque}`}>
                R$ {valorTotal.toFixed(2).replace(".", ",")}
              </strong>
            </div>
          </div>
        )}

        <button
          type="submit"
          className={`w-full py-3.5 px-6 rounded-xl font-extrabold text-sm sm:text-base transition-transform active:scale-95 cursor-pointer shadow-sm ${corBotao}`}
        >
          Confirmar Pré-Reserva na Tela
        </button>
      </form>
    </section>
  );
}
