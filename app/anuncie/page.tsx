"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/organisms/Footer";

export default function SejaParceiroPage() {
  // Troque pelo SEU WhatsApp comercial do Portal Brasil Local (DDI 55 + DDD + Número)
  const WHATSAPP_PORTAL = "5585981864728";

  const [nomeNegocio, setNomeNegocio] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [segmento, setSegmento] = useState("Cultura • Shows, Pubs e Artistas");
  const [cidadeEstado, setCidadeEstado] = useState("Fortaleza - CE");
  const [instagram, setInstagram] = useState("");
  const [planoInteresse, setPlanoInteresse] = useState(
    "Vitrine Padrão (Página Exclusiva + Card)"
  );

  const handleEnviarCadastro = (e: React.FormEvent) => {
    e.preventDefault();

    const mensagem = [
      `Olá, equipe do *Portal Brasil Local*! Quero cadastrar meu negócio na plataforma. 🚀`,
      ``,
      `🏢 *Empresa / Artista:* ${nomeNegocio}`,
      `👤 *Responsável:* ${responsavel}`,
      `📂 *Segmento:* ${segmento}`,
      `📍 *Cidade/UF:* ${cidadeEstado}`,
      instagram ? `📸 *Instagram:* ${instagram}` : "",
      `⭐ *Modalidade:* ${planoInteresse}`,
    ]
      .filter(Boolean)
      .join("\n");

    const urlWhats = new URL("https://wa.me");
    urlWhats.pathname = WHATSAPP_PORTAL;
    urlWhats.searchParams.set("text", mensagem);

    window.open(urlWhats.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7fafc] text-slate-800">
      <nav className="bg-slate-950 text-white px-4 py-3.5 sticky top-0 z-30">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-xs sm:text-sm text-slate-300 hover:text-white font-medium"
          >
            ← Voltar para o Portal
          </Link>
          <span className="font-extrabold text-base">
            Portal Brasil<span className="text-emerald-400">Local</span>
          </span>
        </div>
      </nav>

      <header className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white px-4 py-12 sm:py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full mb-4">
            Para Negócios, Artistas e Profissionais
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Sua marca com página exclusiva e vendas direto no WhatsApp
          </h1>
          <p className="text-sm sm:text-lg text-slate-300 mt-4 max-w-2xl mx-auto">
            Tenha um link profissional para a bio do seu Instagram (ex:{" "}
            <strong className="text-white">brasillocal.com.br/suamarca</strong>) e seja encontrado na sua cidade sem pagar taxas por venda.
          </p>
        </div>
      </header>

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-10 space-y-12">
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
            <span className="text-3xl block mb-3">🔗</span>
            <h3 className="font-bold text-lg text-slate-900">
              Link Exclusivo para Bio
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              Uma vitrine completa com fotos, preços, comodidades, links musicais e botões diretos para o seu contato.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
            <span className="text-3xl block mb-3">⚡</span>
            <h3 className="font-bold text-lg text-slate-900">
              Ferramentas por Ramo
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              Simulador de diárias para pousadas, agenda para shows, agendamento de consultas/serviços e pedidos para comércio.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs">
            <span className="text-3xl block mb-3">💬</span>
            <h3 className="font-bold text-lg text-slate-900">
              Zero Taxas e Comissões
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
              O cliente preenche os dados na tela e cai direto no seu WhatsApp oficial para você fechar o atendimento.
            </p>
          </div>
        </section>
        <section className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Solicitar Cadastro de Parceiro
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Preencha os dados abaixo para nossa equipe montar a sua página personalizada.
            </p>
          </div>

          <form onSubmit={handleEnviarCadastro} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Nome da Empresa, Artista ou Profissional *
                </label>
                <input
                  type="text"
                  required
                  value={nomeNegocio}
                  onChange={(e) => setNomeNegocio(e.target.value)}
                  placeholder="Ex: Pousada Sol Nascente"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Seu Nome (Responsável) *
                </label>
                <input
                  type="text"
                  required
                  value={responsavel}
                  onChange={(e) => setResponsavel(e.target.value)}
                  placeholder="Ex: Roberto Alves"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Segmento de Atuação
                </label>
                <select
                  value={segmento}
                  onChange={(e) => setSegmento(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600"
                >
                  <option value="Cultura • Shows, Pubs e Artistas">
                    Cultura • Shows, Pubs e Artistas
                  </option>
                  <option value="Cultura • Teatro, Museus e Eventos">
                    Cultura • Teatro, Museus e Eventos
                  </option>
                  <option value="Turismo e Passeios">Turismo e Passeios</option>
                  <option value="Hotelaria e Pousadas">Hotelaria e Pousadas</option>
                  <option value="Gastronomia e Restaurantes">
                    Gastronomia e Restaurantes
                  </option>
                  <option value="Comércio • Mercadinhos e Lojas">
                    Comércio • Mercadinhos e Lojas
                  </option>
                  <option value="Comércio • Imóveis (Venda e Aluguel)">
                    Comércio • Imóveis (Venda e Aluguel)
                  </option>
                  <option value="Comércio • Automóveis (Carros e Motos)">
                    Comércio • Automóveis (Carros e Motos)
                  </option>
                  <option value="Saúde • Nutrição, Fisio e Personal">
                    Saúde • Nutrição, Fisio e Personal
                  </option>
                  {/* 👇 COLE AQUI LOGO ABAIXO 👇 */}
                  <option value="Saúde • Clínica Odontológica">
                    Saúde • Clínica Odontológica
                  </option>
                  <option value="Serviços • Salão, Estética e Auto">
                    Serviços • Salão, Estética e Auto
                  </option>
                  <option value="Esporte e Lazer">Esporte e Lazer</option>
                </select>
              </div>


              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Cidade e Estado *
                </label>
                <input
                  type="text"
                  required
                  value={cidadeEstado}
                  onChange={(e) => setCidadeEstado(e.target.value)}
                  placeholder="Ex: Fortaleza - CE"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Instagram (@usuario)
                </label>
                <input
                  type="text"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  placeholder="Ex: @suamarca"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Modalidade desejada
                </label>
                <select
                  value={planoInteresse}
                  onChange={(e) => setPlanoInteresse(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-blue-600"
                >
                  <option value="Vitrine Padrão (Página Exclusiva + Card)">
                    Vitrine Padrão (Página Exclusiva + Card)
                  </option>
                  <option value="Destaque Patrocinado (Topo da Vitrine + Selo)">
                    ⭐ Destaque Patrocinado (Topo da Vitrine + Selo)
                  </option>
                  <option value="Divulgação + Entrevista no Portal">
                    🎥 Divulgação + Entrevista no Portal
                  </option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-md transition-colors cursor-pointer"
            >
              🚀 Enviar Solicitação pelo WhatsApp
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}
