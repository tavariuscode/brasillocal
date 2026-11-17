import { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TODOS_ESTADOS, PARCEIROS } from "@/data/mockBrasilLocal";
import PartnerCard from "@/components/molecules/PartnerCard";
import Footer from "@/components/organisms/Footer";

interface EstadoPageProps {
  params: Promise<{ sigla: string }>;
}

export async function generateStaticParams() {
  return TODOS_ESTADOS.map((estado) => ({
    sigla: estado.sigla.toLowerCase(),
  }));
}

// Componente interno que lê o `params` dentro do Suspense
async function ConteudoEstado({ params }: EstadoPageProps) {
  const { sigla } = await params;
  const estado = TODOS_ESTADOS.find(
    (e) => e.sigla.toLowerCase() === sigla.toLowerCase()
  );

  if (!estado) {
    notFound();
  }

  const parceirosDoEstado = PARCEIROS.filter(
    (p) => p.siglaEstado.toLowerCase() === sigla.toLowerCase()
  );

  return (
    <>
      <header
        style={{
          backgroundColor: estado.tema.corSuave,
          borderBottom: `2px solid ${estado.tema.corPrincipal}`,
        }}
        className="px-4 py-8 sm:py-12"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7">
            <span
              style={{ backgroundColor: estado.tema.corPrincipal }}
              className="inline-block text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3"
            >
              Região {estado.regiao} • {estado.quantidadeServicos} serviços ativos
            </span>
            <h1
              style={{ color: estado.tema.corTexto }}
              className="text-3xl sm:text-5xl font-extrabold"
            >
              {estado.nome} ({estado.sigla})
            </h1>

            <div className="mt-5 flex flex-wrap gap-2">
              {estado.destaques.map((destaque, index) => (
                <span
                  key={index}
                  style={{
                    borderColor: estado.tema.corPrincipal,
                    color: estado.tema.corTexto,
                  }}
                  className="bg-white border text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full"
                >
                  ✨ {destaque}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-5">
            <img
              src={estado.imagemCapa}
              alt={`Paisagem de ${estado.nome}`}
              className="w-full h-52 sm:h-64 object-cover rounded-2xl shadow-md border-2 border-white"
            />
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-10">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6">
          Parceiros, Passeios e Serviços em {estado.nome}
        </h2>

        {parceirosDoEstado.length === 0 ? (
          <div className="bg-white border border-dashed border-slate-300 rounded-xl p-10 text-center text-slate-500">
            Ainda não há parceiros publicados para {estado.nome}. Em breve teremos novidades!
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {parceirosDoEstado.map((parceiro) => (
              <PartnerCard key={parceiro.id} parceiro={parceiro} />
            ))}
          </div>
        )}
      </main>
    </>
  );
}

// Shell principal instantâneo
export default function EstadoPage({ params }: EstadoPageProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#f7fafc] text-slate-800">
      <nav className="bg-white border-b border-slate-200 px-4 py-3.5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-blue-600"
          >
            ← Voltar para todo o Brasil
          </Link>
          <span className="font-bold text-blue-600">📍 BrasilLocal</span>
        </div>
      </nav>

      <Suspense
        fallback={
          <div className="flex-1 max-w-6xl w-full mx-auto px-4 py-12 animate-pulse">
            <div className="h-48 bg-slate-200 rounded-2xl mb-8" />
            <div className="h-8 w-64 bg-slate-200 rounded-lg mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="h-72 bg-slate-200 rounded-xl" />
              <div className="h-72 bg-slate-200 rounded-xl" />
              <div className="h-72 bg-slate-200 rounded-xl" />
            </div>
          </div>
        }
      >
        <ConteudoEstado params={params} />
      </Suspense>

      <Footer />
    </div>
  );
}
