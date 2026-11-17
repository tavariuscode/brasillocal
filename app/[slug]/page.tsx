import { Suspense } from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PartnerTemplate from "@/components/templates/PartnerTemplate";
import { PARCEIROS } from "@/data/mockBrasilLocal";

interface ParceiroPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PARCEIROS.map((parceiro) => ({
    slug: parceiro.slug,
  }));
}

export async function generateMetadata({
  params,
}: ParceiroPageProps): Promise<Metadata> {
  const { slug } = await params;
  const parceiro = PARCEIROS.find((p) => p.slug === slug);

  if (!parceiro) {
    return { title: "Parceiro não encontrado | BrasilLocal" };
  }

  return {
    title: `${parceiro.nome} — ${parceiro.cidade}, ${parceiro.estado} | BrasilLocal`,
    description: parceiro.descricao,
  };
}

async function ConteudoParceiro({ params }: ParceiroPageProps) {
  const { slug } = await params;
  const parceiro = PARCEIROS.find((p) => p.slug === slug);

  if (!parceiro) {
    notFound();
  }

  return <PartnerTemplate parceiro={parceiro} />;
}

export default function ParceiroPage({ params }: ParceiroPageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-slate-50 p-6 animate-pulse">
          <div className="max-w-4xl mx-auto h-44 bg-slate-200 rounded-2xl mb-6" />
          <div className="max-w-4xl mx-auto h-64 bg-slate-200 rounded-2xl" />
        </div>
      }
    >
      <ConteudoParceiro params={params} />
    </Suspense>
  );
}
