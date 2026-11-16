export type TemaCategoria =
  | "Todos"
  | "Turismo"
  | "Hotelaria"
  | "Shows"
  | "Esporte"
  | "Cultura"
  | "Gastronomia";

export interface ServicoParceiro {
  titulo: string;
  preco: string;
  detalhe: string;
}

export interface EstiloParceiro {
  fundo: string;
  banner: string;
  botao: string;
  destaque: string;
}

export interface Parceiro {
  id: number;
  slug: string;
  nome: string;
  tema: Exclude<TemaCategoria, "Todos">;
  cidade: string;
  estado: string;
  descricao: string;
  imagem: string;
  corBadge: string;
  whatsapp: string;
  comodidades?: string[];
  estilo: EstiloParceiro;
  servicos: ServicoParceiro[];
}

export interface ArtigoBlog {
  id: number;
  titulo: string;
  resumo: string;
  categoria: string;
  parceiroNome: string;
  parceiroSlug: string;
  imagem: string;
}
