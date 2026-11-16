import { Metadata } from "next";
import { notFound } from "next/navigation";
import PartnerTemplate from "@/components/templates/PartnerTemplate";
import { PARCEIROS } from "@/data/mockBrasilLocal";

interface ParceiroPageProps {
  params: Promise<{ slug: string }>;
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

export default async function ParceiroPage({ params }: ParceiroPageProps) {
  const { slug } = await params;
  const parceiro = PARCEIROS.find((p) => p.slug === slug);

  if (!parceiro) {
    notFound();
  }

  return <PartnerTemplate parceiro={parceiro} />;
}
