import Link from "next/link";
import { Parceiro, LinkPlataforma } from "@/types/brasillocal";
import OrcamentoShowForm from "../molecules/OrcamentoShowForm";
import ReservaHotelForm from "../molecules/ReservaHotelForm";
import Footer from "../organisms/Footer";

interface PartnerTemplateProps {
  parceiro: Parceiro;
}

export default function PartnerTemplate({ parceiro }: PartnerTemplateProps) {
  const { estilo } = parceiro;
  const isTemaEscuro =
    estilo.fundo.includes("950") || estilo.fundo.includes("900");

  const isArtista = parceiro.subcategoria === "Gẽneros Musicais";
  const isArtistaOuShow =
    parceiro.subcategoria === "Shows" ||
    parceiro.subcategoria === "Gêneros Musicais";  

  const numeroLimpo = parceiro.whatsapp.replace(/\D/g, "");
  const urlWhats = new URL("https://wa.me");
  urlWhats.pathname = numeroLimpo;
  urlWhats.searchParams.set(
    "text",
    parceiro.mensagemWhatsCustom ||
      "Olá, " +
        parceiro.nome +
        "! Vi o espaço de vocês no Portal Brasil Local e gostaria de mais informações."
  );
  const linkWhatsApp = urlWhats.toString();

  const obterEstiloPlataforma = (plataforma: LinkPlataforma["plataforma"]) => {
    switch (plataforma) {
      case "spotify":
        return {
          icone: "🎧",
          classe:
            "bg-[#1DB954] hover:bg-[#1ed760] text-slate-950 border-transparent",
        };
      case "youtube":
        return {
          icone: "▶️",
          classe:
            "bg-[#FF0000] hover:bg-[#e60000] text-white border-transparent",
        };
      case "suamusica":
        return {
          icone: "💿",
          classe:
            "bg-gradient-to-r from-orange-500 to-amber-500 hover:opacity-95 text-white border-transparent",
        };
      default:
        return {
          icone: "🔗",
          classe:
            "bg-white hover:bg-slate-50 text-slate-900 border-slate-200",
        };
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${estilo.fundo} ${
        isTemaEscuro ? "text-white" : "text-slate-900"
      }`}

     
    >
      <nav className="bg-slate-950/90 backdrop-blur-md text-white px-4 py-3 border-b border-white/10 sticky top-0 z-30">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-xs sm:text-sm text-slate-300 hover:text-white flex items-center gap-1 font-medium"
          >
            ← Portal Brasil Local
          </Link>
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Espaço Oficial
          </span>
        </div>
      </nav>

      <header className={`${estilo.banner} px-4 pt-8 pb-10 sm:py-12`}>
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
          <img
            src={parceiro.imagem}
            alt={parceiro.nome}
            className={`w-28 h-28 sm:w-36 sm:h-36 object-cover border-4 border-white/25 shadow-2xl mb-4 ${
              isArtistaOuShow ? "rounded-full" : "rounded-2xl"
            } ${parceiro.posicaoImagem || "object-center"}`}
          />

          <span className="inline-block bg-black/30 backdrop-blur-sm text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
            {parceiro.tema} • {parceiro.cidade}, {parceiro.estado}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            {parceiro.nome}
          </h1>
          <p className="text-xs sm:text-base text-white/90 mt-2 max-w-lg leading-relaxed">
            {parceiro.descricao}
          </p>

          <a
            href={linkWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-6 inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full font-extrabold text-sm sm:text-base shadow-lg transition-transform active:scale-95 ${estilo.botao}`}
          >
            <span>💬</span>
            <span>{parceiro.textoBotao || "Entrar em contato no WhatsApp"}</span>
          </a>
        </div>
      </header>

      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-8 space-y-8">
        {parceiro.linksMusicais && parceiro.linksMusicais.length > 0 && (
          <section>
            <h2
              className={`text-xs font-extrabold uppercase tracking-wider mb-3 text-center ${
                isTemaEscuro ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Ouça nas Plataformas Digitais
            </h2>
            <div className="flex flex-col gap-3">
              {parceiro.linksMusicais.map((link, index) => {
                const visual = obterEstiloPlataforma(link.plataforma);
                return (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-between p-4 rounded-2xl border shadow-md transition-all duration-200 hover:-translate-y-0.5 ${visual.classe}`}
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="text-2xl sm:text-3xl">
                        {visual.icone}
                      </span>
                      <div className="text-left">
                        <span className="block font-extrabold text-sm sm:text-base">
                          {link.titulo}
                        </span>
                        {link.subtitulo && (
                          <span className="block text-xs opacity-85 mt-0.5">
                            {link.subtitulo}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-black/15 group-hover:translate-x-1 transition-transform">
                      Abrir →
                    </span>
                  </a>
                );
              })}
            </div>
          </section>
        )}
        {parceiro.agendaShows && parceiro.agendaShows.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg sm:text-xl font-extrabold flex items-center gap-2">
                <span>📅</span>
                <span>Agenda de Shows</span>
              </h2>
              <span className={`text-xs font-bold ${estilo.destaque}`}>
                Próximas datas
              </span>
            </div>

            <div className="space-y-3">
              {parceiro.agendaShows.map((show, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-3.5 sm:p-4 rounded-2xl border ${
                    isTemaEscuro
                      ? "bg-slate-900/90 border-slate-800"
                      : "bg-white border-slate-200 shadow-2xs"
                  }`}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4">
                    <div className="w-14 h-14 rounded-xl bg-amber-500/15 border border-amber-500/30 flex flex-col items-center justify-center shrink-0">
                      <span className="text-lg sm:text-xl font-black text-amber-500 leading-none">
                        {show.dia}
                      </span>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 mt-1">
                        {show.mes}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-bold text-sm sm:text-base">
                        {show.cidade}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm ${
                          isTemaEscuro ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        {show.local} {show.horario && `• ${show.horario}`}
                      </p>
                    </div>
                  </div>

                  <a
                    href={linkWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 transition-colors shrink-0"
                  >
                    Info
                  </a>
                </div>
              ))}
            </div>
          </section>
        )}

        {parceiro.tema === "Shows" && (
          <OrcamentoShowForm
            nomeArtista={parceiro.nome}
            whatsapp={parceiro.whatsapp}
            corBotao={estilo.botao}
          />
        )}

        {parceiro.tema === "Hotelaria" && (
          <ReservaHotelForm
            nomeHotel={parceiro.nome}
            whatsapp={parceiro.whatsapp}
            acomodacoes={parceiro.servicos}
            corBotao={estilo.botao}
            corDestaque={estilo.destaque}
          />
        )}

        {parceiro.comodidades && parceiro.comodidades.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Comodidades e Estrutura
            </h2>
            <div className="flex flex-wrap gap-2">
              {parceiro.comodidades.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-white border border-slate-200 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-2xs"
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </section>
        )}

       
        
                {/* 6. SERVIÇOS, ESTOQUE DE VEÍCULOS E CATÁLOGO DE IMÓVEIS */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold mb-3">
            {parceiro.tema === "Hotelaria"
              ? "Acomodações e Diárias"
              : parceiro.tema === "Shows"
              ? "Formatos de Show & Contratação"
              : parceiro.subcategoria === "Automóveis"
              ? "Veículos Disponíveis em Estoque"
              : parceiro.subcategoria === "Imóveis"
              ? "Imóveis em Destaque"
              : "Serviços e Destaques"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {parceiro.servicos.map((servico, index) => {
              const urlServico = new URL("https://wa.me");
              urlServico.pathname = numeroLimpo;
              urlServico.searchParams.set(
                "text",
                "Olá! Vi o perfil de " +
                  parceiro.nome +
                  " no Portal Brasil Local e tenho interesse em: " +
                  servico.titulo +
                  "."
              );

              return (
                <div
                  key={index}
                  className={`rounded-2xl border overflow-hidden flex flex-col justify-between ${
                    isTemaEscuro
                      ? "bg-slate-900 border-slate-800"
                      : "bg-white border-slate-200 shadow-2xs"
                  }`}
                >
                  <div>
                    {/* Foto do Veículo, Imóvel ou Produto (Aparece se cadastrada) */}
                    {servico.imagem && (
                      <img
                        src={servico.imagem}
                        alt={servico.titulo}
                        className="w-full h-48 object-cover"
                      />
                    )}

                    <div className="p-5 pb-3">
                      <h3 className="font-bold text-base sm:text-lg">
                        {servico.titulo}
                      </h3>
                      <p
                        className={`text-xs sm:text-sm mt-1.5 ${
                          isTemaEscuro ? "text-slate-400" : "text-slate-600"
                        }`}
                      >
                        {servico.detalhe}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-3 border-t border-slate-200/20 flex items-center justify-between gap-3">
                    <span className={`font-extrabold text-sm ${estilo.destaque}`}>
                      {servico.preco}
                    </span>

                    <a
                      href={urlServico.toString()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 rounded-xl font-extrabold text-xs transition-transform active:scale-95 ${estilo.botao}`}
                    >
                      💬 Tenho Interesse
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      

        
      </main>

      <Footer />
    </div>
  );
}
