import Link from "next/link";
import { Parceiro } from "@/types/brasillocal";
import Footer from "../organisms/Footer";

interface PartnerTemplateProps {
  parceiro: Parceiro;
}

export default function PartnerTemplate({ parceiro }: PartnerTemplateProps) {
  const { estilo } = parceiro;
   const numeroLimpo = parceiro.whatsapp.replace(/\D/g, "");
  const mensagemWhats = encodeURIComponent(
    "Olá, " +
      parceiro.nome +
      "! Vi sua oferta no BrasilLocal e gostaria de saber mais."
  );
  const urlWhats = new URL("https://wa.me");
  urlWhats.pathname = numeroLimpo;
  urlWhats.searchParams.set("text", "Olá, " + parceiro.nome + "! Vi sua oferta no BrasilLocal e gostaria de saber mais.");
  const linkWhatsApp = urlWhats.toString();


  return (
    <div className={`min-h-screen flex flex-col ${estilo.fundo} text-slate-900`}>
      {/* Barra de Navegação de Retorno */}
      <nav className="bg-slate-950 text-white px-4 py-3">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-xs sm:text-sm text-slate-300 hover:text-white flex items-center gap-1 font-medium"
          >
            ← Voltar para BrasilLocal
          </Link>
          <span className="text-sm font-extrabold">
            Brasil<span className="text-emerald-400">Local</span>
          </span>
        </div>
      </nav>

      {/* Cabeçalho Personalizado do Parceiro */}
      <header className={`${estilo.banner} px-4 py-8 sm:py-12`}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <img
            src={parceiro.imagem}
            alt={parceiro.nome}
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl object-cover border-4 border-white/20 shadow-lg"
          />
          <div className="text-center sm:text-left">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
              {parceiro.tema} • {parceiro.cidade}, {parceiro.estado}
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold">
              {parceiro.nome}
            </h1>
            <p className="text-sm sm:text-base text-white/90 mt-2 max-w-xl">
              {parceiro.descricao}
            </p>
          </div>
        </div>
      </header>

      {/* Lista de Serviços / Acomodações / Cardápio */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 py-8">
        {/* Bloco de Comodidades */}
        {parceiro.comodidades && parceiro.comodidades.length > 0 && (
          <div className="mb-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Comodidades e Estrutura
            </h2>
            <div className="flex flex-wrap gap-2">
              {parceiro.comodidades.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-white border border-slate-200 text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full shadow-xs"
                >
                  ✓ {item}
                </span>
              ))}
            </div>
          </div>
        )}

        <h2 className="text-lg sm:text-2xl font-bold text-slate-900 mb-4">
          {parceiro.tema === "Hotelaria"
            ? "Acomodações e Diárias"
            : "Serviços e Destaques"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {parceiro.servicos.map((servico, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900">
                  {servico.titulo}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-3">
                  {servico.detalhe}
                </p>
              </div>
              <span className={`font-extrabold text-sm ${estilo.destaque}`}>
                {servico.preco}
              </span>
            </div>
          ))}
        </div>

        {/* Botão de Ação Principal (WhatsApp) */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
          <h3 className="font-bold text-lg text-slate-900">
            Fale diretamente com {parceiro.nome}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-4">
            Atendimento rápido sem intermediários pelo WhatsApp oficial.
          </p>
          <a
            href={linkWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-colors ${estilo.botao}`}
          >
            {parceiro.tema === "Hotelaria"
              ? "Consultar disponibilidade no WhatsApp"
              : "Entrar em contato no WhatsApp"}
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
