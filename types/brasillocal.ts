export type RegiaoBrasil =
  | "Todos"
  | "Norte"
  | "Nordeste"
  | "Centro-Oeste"
  | "Sudeste"
  | "Sul";


export type TemaCategoria =
  | "Todos"
  | "Turismo"
  | "Hotelaria"
  | "Shows"
  | "Esporte"
  | "Cultura"
  | "Gastronomia"
  | "Comércio"
  | "Serviços"

  export interface LinkPlataforma {
  plataforma: "suamusica" | "youtube" | "spotify" | "instagram" | "outro";
  titulo: string;
  subtitulo?: string;
  url: string;
}

export interface EventoAgenda {
  dia: string;
  mes: string;
  cidade: string;
  local: string;
  horario?: string;
  linkIngresso?: string;
}

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
  siglaEstado: string;
  descricao: string;
  imagem: string;
  posicaoImagem?: string;
  corBadge: string;
  whatsapp: string;
  instagramUrl?: string;
  siteUrl?: string;
  destaqueOferta?: string;
  precoOriginal?: number;
  precoPromocional?: number;
  comodidades?: string[];
  linksMusicais?: LinkPlataforma[];
  agendaShows?: EventoAgenda[];
  estilo: EstiloParceiro;
  servicos: ServicoParceiro[];
  textoBotao?: string;
  mensagemWhatsCustom?: string;
  
}

export interface EstadoItem {
  sigla: string;
  nome: string;
  regiao: Exclude<RegiaoBrasil, "Todos">;
  quantidadeServicos: number;
  imagemCapa?: string; // <-- Novo campo para a foto do estado
  destaques: string[];
  tema: {
    corPrincipal: string;
    corSuave: string;
    corTexto: string;
  };
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
