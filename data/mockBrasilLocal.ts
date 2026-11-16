import { Parceiro, ArtigoBlog } from "@/types/brasillocal";

export const PARCEIROS: Parceiro[] = [
  {
    id: 1,
    slug: "jeriaventura",
    nome: "Jeri & Litoral Sol",
    tema: "Turismo",
    cidade: "Fortaleza",
    estado: "Ceará",
    descricao:
      "Passeios de buggy, lagoas cristalinas e roteiros exclusivos pelo litoral cearense.",
    imagem:
      "https://unsplash.com",
    corBadge: "bg-amber-100 text-amber-800",
    whatsapp: "5585999990001",
    estilo: {
      fundo: "bg-amber-50",
      banner: "bg-gradient-to-r from-amber-500 to-cyan-600 text-white",
      botao: "bg-cyan-600 hover:bg-cyan-700 text-white",
      destaque: "text-cyan-700",
    },
    servicos: [
      {
        titulo: "Passeio de Buggy Litoral Leste",
        preco: "R$ 350,00 / buggy",
        detalhe:
          "Duração de 6 horas passando por lagoas e dunas com guia credenciado.",
      },
      {
        titulo: "Transfer Fortaleza → Jericoacoara",
        preco: "R$ 180,00 / pessoa",
        detalhe: "Veículo 4x4 climatizado com saída diária dos hotéis.",
      },
    ],
  },
  {
    id: 2,
    slug: "escoladesurfmar",
    nome: "Escola de Surf Ondas do Futuro",
    tema: "Esporte",
    cidade: "Fortaleza",
    estado: "Ceará",
    descricao:
      "Aulas de surf para todas as idades, aluguel de pranchas e treino funcional na areia.",
    imagem:
      "https://unsplash.com",
    corBadge: "bg-cyan-100 text-cyan-800",
    whatsapp: "5585999990002",
    estilo: {
      fundo: "bg-cyan-50",
      banner: "bg-gradient-to-r from-cyan-700 to-blue-600 text-white",
      botao: "bg-blue-600 hover:bg-blue-700 text-white",
      destaque: "text-blue-700",
    },
    servicos: [
      {
        titulo: "Aula Experimental de Surf",
        preco: "R$ 90,00 / aula",
        detalhe:
          "Inclui prancha softboard, lycra de proteção e instrutor na água.",
      },
      {
        titulo: "Pacote Mensal (8 Aulas)",
        preco: "R$ 480,00 / mês",
        detalhe: "Aulas duas vezes por semana com acompanhamento de evolução.",
      },
    ],
  },
  {
    id: 3,
    slug: "forrodosertao",
    nome: "Banda Forró do Sertão",
    tema: "Shows",
    cidade: "Fortaleza",
    estado: "Ceará",
    descricao:
      "O melhor do forró pé-de-serra e estilizado para festas, casamentos e grandes eventos.",
    imagem:
      "https://unsplash.com",
    corBadge: "bg-purple-100 text-purple-800",
    whatsapp: "5585999990003",
    estilo: {
      fundo: "bg-orange-50",
      banner: "bg-gradient-to-r from-orange-700 to-amber-600 text-white",
      botao: "bg-orange-700 hover:bg-orange-800 text-white",
      destaque: "text-orange-700",
    },
    servicos: [
      {
        titulo: "Show Completo (Banda + Estrutura)",
        preco: "Sob consulta",
        detalhe:
          "Repertório de 3 horas com sanfona, zabumba, triângulo e vocal.",
      },
      {
        titulo: "Agenda Pública — Sábado no Kukukaya",
        preco: "Ingressos no local",
        detalhe: "Abertura dos portões às 21h em Fortaleza.",
      },
    ],
  },
  {
    id: 4,
    slug: "brutusburger",
    nome: "Brutus Burger Artesanal",
    tema: "Gastronomia",
    cidade: "Natal",
    estado: "Rio Grande do Norte",
    descricao:
      "Hambúrgueres feitos na brasa com blend especial, queijo coalho maçaricado e molhos da casa.",
    imagem:
      "https://unsplash.com",
    corBadge: "bg-red-100 text-red-800",
    whatsapp: "5584999990004",
    estilo: {
      fundo: "bg-stone-100",
      banner: "bg-gradient-to-r from-red-800 to-stone-900 text-white",
      botao: "bg-red-700 hover:bg-red-800 text-white",
      destaque: "text-red-700",
    },
    servicos: [
      {
        titulo: "Combo Brutus Sertanejo",
        preco: "R$ 42,90",
        detalhe:
          "Burger 180g na brasa, queijo coalho, melaço picante, fritas e refrigerante.",
      },
      {
        titulo: "Duplo Cheddar Bacon",
        preco: "R$ 36,00",
        detalhe:
          "Dois blends de 120g, cheddar cremoso e bacon crocante no pão brioche.",
      },
    ],
  },
  {
    id: 5,
    slug: "museudacultura",
    nome: "Centro Cultural Dragão do Mar",
    tema: "Cultura",
    cidade: "Fortaleza",
    estado: "Ceará",
    descricao:
      "Espaço dedicado à arte, cultura cearense, exposições, planetário e apresentações teatrais.",
    imagem:
      "https://unsplash.com",
    corBadge: "bg-emerald-100 text-emerald-800",
    whatsapp: "5585999990005",
    estilo: {
      fundo: "bg-emerald-50",
      banner: "bg-gradient-to-r from-emerald-800 to-teal-700 text-white",
      botao: "bg-emerald-700 hover:bg-emerald-800 text-white",
      destaque: "text-emerald-700",
    },
    servicos: [
      {
        titulo: "Visita Guiada aos Museus",
        preco: "Entrada Gratuita",
        detalhe: "Terça a domingo, das 9h às 18h. Agendamento para grupos.",
      },
      {
        titulo: "Sessão no Planetário Rubens de Azevedo",
        preco: "R$ 20,00 (inteira)",
        detalhe: "Sessões educativas sobre astronomia nos fins de semana.",
      },
    ],
  },
    {
    id: 6,
    slug: "pousadabrisa",
    nome: "Pousada Brisa do Mar",
    tema: "Hotelaria",
    cidade: "Aquiraz",
    estado: "Ceará",
    descricao:
      "Pousada pé na areia com café da manhã regional incluso, piscina e suítes familiares.",
    imagem:
      "https://unsplash.com",
    corBadge: "bg-teal-100 text-teal-800",
    whatsapp: "5585999990006",
    comodidades: ["Café da manhã incluso", "Piscina", "Wi-Fi Grátis", "Frente-mar"],
    estilo: {
      fundo: "bg-teal-50",
      banner: "bg-gradient-to-r from-teal-700 to-cyan-700 text-white",
      botao: "bg-teal-700 hover:bg-teal-800 text-white",
      destaque: "text-teal-700",
    },
    servicos: [
      {
        titulo: "Suíte Casal Vista Mar (Diária)",
        preco: "R$ 320,00 / noite",
        detalhe:
          "Cama queen-size, ar-condicionado, varanda com rede e café da manhã completo.",
      },
      {
        titulo: "Suíte Família até 4 Pessoas (Diária)",
        preco: "R$ 490,00 / noite",
        detalhe:
          "Dois ambientes climatizados, frigobar e acesso direto à área da piscina.",
      },
    ],
  },
  {
    id: 7,
    slug: "hotelserraverde",
    nome: "Hotel Serra Verde",
    tema: "Hotelaria",
    cidade: "Guaramiranga",
    estado: "Ceará",
    descricao:
      "Refúgio na serra com clima ameno, trilhas ecológicas e chalés aconchegantes.",
    imagem:
      "https://unsplash.com",
    corBadge: "bg-teal-100 text-teal-800",
    whatsapp: "5585999990007",
    comodidades: ["Estacionamento", "Trilhas", "Café colonial", "Pet Friendly"],
    estilo: {
      fundo: "bg-emerald-50",
      banner: "bg-gradient-to-r from-emerald-900 to-teal-800 text-white",
      botao: "bg-emerald-800 hover:bg-emerald-900 text-white",
      destaque: "text-emerald-800",
    },
    servicos: [
      {
        titulo: "Chalé Romântico com Lareira",
        preco: "R$ 410,00 / noite",
        detalhe:
          "Ideal para casais, inclui cesta de boas-vindas e café da manhã na serra.",
      },
      {
        titulo: "Pacote Fim de Semana (Sexta a Domingo)",
        preco: "R$ 780,00 / pacote",
        detalhe:
          "Duas diárias para casal com trilha guiada na mata atlântica inclusa.",
      },
    ],
  },

];

export const ARTIGOS_BLOG: ArtigoBlog[] = [
  {
    id: 1,
    titulo: "Entrevista exclusiva: Os bastidores da turnê do Forró do Sertão",
    resumo:
      "Conversamos com o vocalista sobre a nova fase da banda e as datas confirmadas no Nordeste.",
    categoria: "Entrevista • Shows",
    parceiroNome: "Ver página oficial da Banda",
    parceiroSlug: "/forrodosertao",
    imagem:
      "https://unsplash.com",
  },
  {
    id: 2,
    titulo: "Como o surf está transformando o turismo esportivo no litoral",
    resumo:
      "Conheça a história do fundador da Escola de Surf Ondas do Futuro e dicas para sua primeira aula.",
    categoria: "História de Parceiro • Esporte",
    parceiroNome: "Conhecer a Escola de Surf",
    parceiroSlug: "/escoladesurfmar",
    imagem:
      "https://unsplash.com",
  },
];
